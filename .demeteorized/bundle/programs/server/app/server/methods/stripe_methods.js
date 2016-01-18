(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/methods/stripe_methods.js                                    //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.methods({                                                       // 1
  refundEvent: function (doc) {                                        // 2
    if (doc.owner === Meteor.userId()) {                               // 3
      var attendees = Attendee.find({ eventId: doc._id });             // 4
      _.forEach(attendees.fetch(), function (item) {                   // 5
        var att = item;                                                // 6
        Meteor.call('refundAttendee', att);                            // 7
      });                                                              //
    }                                                                  //
  },                                                                   //
                                                                       //
  refundAttendee: function (att) {                                     // 12
    var Stripe = StripeAPI(Meteor.settings['private'].stripe);         // 13
    var stripeRefund = Meteor.wrapAsync(Stripe.refunds.create, Stripe.refunds);
    stripeRefund({                                                     // 15
      charge: att.charge,                                              // 16
      refund_application_fee: true,                                    // 17
      reverse_transfer: true                                           // 18
    }, function (err, refund) {                                        //
      if (refund) {                                                    // 20
        var doc = refund;                                              // 21
        Meteor.call('refundAtt', doc, att);                            // 22
      } else if (err) {                                                //
        console.log(err);                                              // 24
      }                                                                //
    });                                                                //
  },                                                                   //
                                                                       //
  getAccount: function (aid) {                                         // 30
    var Stripe = StripeAPI(Meteor.settings['private'].stripe);         // 31
    var stripeAccounts = Meteor.wrapAsync(Stripe.accounts.retrieve, Stripe.accounts);
    try {                                                              // 33
      return stripeAccounts(aid);                                      // 34
    } catch (error) {                                                  //
      throw new Meteor.Error("StripeAPIFailure", error.message);       // 36
    }                                                                  //
  },                                                                   //
                                                                       //
  getCharge: function (charge) {                                       // 40
    var Stripe = StripeAPI(Meteor.settings['private'].stripe);         // 41
    var stripeCharges = Meteor.wrapAsync(Stripe.charges.retrieve, Stripe.charges);
    try {                                                              // 43
      return stripeCharges(charge);                                    // 44
    } catch (error) {                                                  //
      throw new Meteor.Error("StripeAPIFailure", error.message);       // 46
    }                                                                  //
  },                                                                   //
                                                                       //
  charge: function (event, att) {                                      // 50
    var Stripe = StripeAPI(Meteor.settings['private'].stripe);         // 51
    var user = Meteor.users.findOne({ _id: Meteor.userId() });         // 52
    var owner = Meteor.users.findOne({ _id: event.owner });            // 53
    var stripeCardCharge = Meteor.wrapAsync(Stripe.charges.create, Stripe.charges);
    //end price is in cents and marked up 10%                          //
    var endPrice = event.price * 110;                                  // 56
    var appfee = endPrice - event.price * 100;                         // 57
    var available = event.attendeeCount - Attendee.find({ eventId: event._id }).count();
    if (event.owner == Meteor.userId()) {                              // 59
      throw new Meteor.Error('SelfReg', "Cannot signup for your own class.");
    } else if (Attendee.find({                                         //
      eventId: event._id,                                              // 64
      attendeeFirstName: att.attendeeFirstName,                        // 65
      attendeeLastName: att.attendeeLastName,                          // 66
      owner: Meteor.userId()                                           // 67
    }).count() != 0) {                                                 //
      throw new Meteor.Error('already', "That person has already registered for this class.");
    } else if (Meteor.user().profile.cardId == undefined) {            //
      throw new Meteor.Error('NoCard', "You don't have a card stored.");
    } else if (available === 0) {                                      //
      throw new Meteor.Error('NoSpace', "This class is full");         // 73
    } else try {                                                       //
      return stripeCardCharge({                                        // 75
        amount: endPrice.toFixed(0),                                   // 76
        currency: "USD",                                               // 77
        customer: user.profile.customerId,                             // 78
        application_fee: appfee.toFixed(0),                            // 79
        description: event.title + " " + event.start,                  // 80
        destination: owner.profile.accountId                           // 81
      });                                                              //
    } catch (error) {                                                  //
      throw new Meteor.Error("StripeAPIFailure", error.message);       // 84
    }                                                                  //
  },                                                                   //
                                                                       //
  createCustomer: function () {                                        // 89
    var Stripe = StripeAPI(Meteor.settings['private'].stripe);         // 90
    var stripeCustomersCreate = Meteor.wrapAsync(Stripe.customers.create, Stripe.customers);
    try {                                                              // 92
      return stripeCustomersCreate({                                   // 93
        description: 'Attendee'                                        // 94
      });                                                              //
    } catch (error) {                                                  //
      throw new Meteor.Error("StripeAPIFailure", error.message);       // 97
    }                                                                  //
  },                                                                   //
                                                                       //
  createCard: function (stripeToken) {                                 // 101
    var Stripe = StripeAPI(Meteor.settings['private'].stripe);         // 102
    var user = Meteor.users.findOne({ _id: Meteor.userId() });         // 103
    var stripeCardCreate = Meteor.wrapAsync(Stripe.customers.createSource, Stripe.customers);
    var stripeCardDelete = Meteor.wrapAsync(Stripe.customers.deleteCard, Stripe.customers);
    var create = stripeCardCreate(user.profile.customerId, {           // 106
      source: stripeToken                                              // 108
    });                                                                //
    if (user.profile.cardId == undefined) {                            // 110
      try {                                                            // 111
        return create;                                                 // 112
      } catch (error) {                                                //
        throw new Meteor.Error("StripeAPIFailure", error.message);     // 114
      }                                                                //
    } else {                                                           //
      stripeCardDelete(user.profile.customerId, user.profile.cardId);  // 117
      Meteor.users.update({ _id: Meteor.userId() }, { $set: { 'profile.cardId': null } });
      try {                                                            // 119
        return create;                                                 // 120
      } catch (error) {                                                //
        throw new Meteor.Error("StripeAPIFailure", error.message);     // 122
      }                                                                //
    }                                                                  //
  },                                                                   //
                                                                       //
  createAccount: function (doc, stripeToken) {                         // 127
    var Stripe = StripeAPI(Meteor.settings['private'].stripe);         // 128
    var user = Meteor.users.findOne({ _id: Meteor.userId() });         // 129
    var stripeCreateAccount = Meteor.wrapAsync(Stripe.accounts.create, Stripe.accounts);
    try {                                                              // 131
      return stripeCreateAccount({                                     // 132
        managed: true,                                                 // 133
        country: 'US',                                                 // 134
        email: user.emails[0].address,                                 // 135
        business_name: doc.businessName,                               // 136
        external_account: stripeToken,                                 // 137
        legal_entity: {                                                // 138
          first_name: doc.legalEntity.firstName,                       // 139
          last_name: doc.legalEntity.lastName,                         // 140
          type: doc.legalEntity.type,                                  // 141
          address: {                                                   // 142
            city: doc.address.city,                                    // 143
            state: doc.address.state,                                  // 144
            line1: doc.address.street,                                 // 145
            postal_code: doc.address.zip                               // 146
          },                                                           //
          dob: {                                                       // 148
            day: moment(doc.legalEntity.dob).get('date'),              // 149
            month: moment(doc.legalEntity.dob).get('month'),           // 150
            year: moment(doc.legalEntity.dob).get('year')              // 151
          }                                                            //
        },                                                             //
        tos_acceptance: {                                              // 154
          date: moment().unix(),                                       // 155
          ip: this.connection.clientAddress                            // 156
        },                                                             //
        transfer_schedule: {                                           // 158
          delay_days: 7,                                               // 159
          interval: 'weekly',                                          // 160
          weekly_anchor: 'friday' }                                    // 161
      });                                                              //
    } catch (error) {                                                  //
      throw new Meteor.Error("StripeAPIFailure", error.message);       // 164
    }                                                                  //
  },                                                                   //
                                                                       //
  getCard: function () {                                               // 168
    var Stripe = StripeAPI(Meteor.settings['private'].stripe);         // 169
    var user = Meteor.users.findOne({ _id: Meteor.userId() });         // 170
    var stripeCardGet = Meteor.wrapAsync(Stripe.customers.retrieveCard, Stripe.customers);
    try {                                                              // 172
      return stripeCardGet(user.profile.customerId, user.profile.cardId);
    } catch (error) {                                                  //
      throw new Meteor.Error("StripeAPIFailure", error.message);       // 175
    }                                                                  //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=stripe_methods.js.map
