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
    console.log(att);                                                  // 13
                                                                       //
    if (att.charge) {                                                  // 15
      var Stripe = StripeAPI(Meteor.settings['private'].stripe);       // 16
      var stripeRefund = Meteor.wrapAsync(Stripe.refunds.create, Stripe.refunds);
      stripeRefund({                                                   // 18
        charge: att.charge,                                            // 19
        refund_application_fee: true,                                  // 20
        reverse_transfer: true                                         // 21
      }, function (err, refund) {                                      //
        if (refund) {                                                  // 23
          var doc = refund;                                            // 24
          Meteor.call('refundAtt', doc, att);                          // 25
        } else if (err) {                                              //
          console.log(err);                                            // 27
        }                                                              //
      });                                                              //
    } else {                                                           //
      var doc = "free";                                                // 31
      Meteor.call('refundAtt', doc, att);                              // 32
    }                                                                  //
  },                                                                   //
                                                                       //
  getAccount: function (aid) {                                         // 37
    var Stripe = StripeAPI(Meteor.settings['private'].stripe);         // 38
    var stripeAccounts = Meteor.wrapAsync(Stripe.accounts.retrieve, Stripe.accounts);
    try {                                                              // 40
      return stripeAccounts(aid);                                      // 41
    } catch (error) {                                                  //
      throw new Meteor.Error("StripeAPIFailure", error.message);       // 43
    }                                                                  //
  },                                                                   //
                                                                       //
  getCharge: function (charge) {                                       // 47
    var Stripe = StripeAPI(Meteor.settings['private'].stripe);         // 48
    var stripeCharges = Meteor.wrapAsync(Stripe.charges.retrieve, Stripe.charges);
    try {                                                              // 50
      return stripeCharges(charge);                                    // 51
    } catch (error) {                                                  //
      throw new Meteor.Error("StripeAPIFailure", error.message);       // 53
    }                                                                  //
  },                                                                   //
                                                                       //
  charge: function (event, att) {                                      // 57
    var Stripe = StripeAPI(Meteor.settings['private'].stripe);         // 58
    var user = Meteor.users.findOne({ _id: Meteor.userId() });         // 59
    var owner = Meteor.users.findOne({ _id: event.owner });            // 60
    var stripeCardCharge = Meteor.wrapAsync(Stripe.charges.create, Stripe.charges);
    //end price is in cents and marked up 5%                           //
    var endPrice = event.price * 110;                                  // 63
    var appfee = endPrice - event.price * 100;                         // 64
    var available = event.attendeeCount - Attendee.find({ eventId: event._id }).count();
    if (event.owner == Meteor.userId()) {                              // 66
      throw new Meteor.Error('SelfReg', "Cannot signup for your own class.");
    } else if (Attendee.find({                                         //
      eventId: event._id,                                              // 71
      attendeeFirstName: att.attendeeFirstName,                        // 72
      attendeeLastName: att.attendeeLastName,                          // 73
      owner: Meteor.userId()                                           // 74
    }).count() != 0) {                                                 //
      throw new Meteor.Error('already', "That person has already registered for this class.");
    } else if (Meteor.user().profile.cardId == undefined) {            //
      throw new Meteor.Error('NoCard', "You don't have a card stored.");
    } else if (available === 0) {                                      //
      throw new Meteor.Error('NoSpace', "This class is full");         // 80
    } else try {                                                       //
      return stripeCardCharge({                                        // 82
        amount: endPrice.toFixed(0),                                   // 83
        currency: "USD",                                               // 84
        customer: user.profile.customerId,                             // 85
        application_fee: appfee.toFixed(0),                            // 86
        description: event.title + " " + event.start,                  // 87
        destination: owner.profile.accountId                           // 88
      });                                                              //
    } catch (error) {                                                  //
      throw new Meteor.Error("StripeAPIFailure", error.message);       // 91
    }                                                                  //
  },                                                                   //
                                                                       //
  createCustomer: function () {                                        // 96
    var Stripe = StripeAPI(Meteor.settings['private'].stripe);         // 97
    var stripeCustomersCreate = Meteor.wrapAsync(Stripe.customers.create, Stripe.customers);
    try {                                                              // 99
      return stripeCustomersCreate({                                   // 100
        description: 'Attendee'                                        // 101
      });                                                              //
    } catch (error) {                                                  //
      throw new Meteor.Error("StripeAPIFailure", error.message);       // 104
    }                                                                  //
  },                                                                   //
                                                                       //
  createCard: function (stripeToken) {                                 // 108
    var Stripe = StripeAPI(Meteor.settings['private'].stripe);         // 109
    var user = Meteor.users.findOne({ _id: Meteor.userId() });         // 110
    var stripeCardCreate = Meteor.wrapAsync(Stripe.customers.createSource, Stripe.customers);
    var stripeCardDelete = Meteor.wrapAsync(Stripe.customers.deleteCard, Stripe.customers);
    var create = stripeCardCreate(user.profile.customerId, {           // 113
      source: stripeToken                                              // 115
    });                                                                //
    if (user.profile.cardId == undefined) {                            // 117
      try {                                                            // 118
        return create;                                                 // 119
      } catch (error) {                                                //
        throw new Meteor.Error("StripeAPIFailure", error.message);     // 121
      }                                                                //
    } else {                                                           //
      stripeCardDelete(user.profile.customerId, user.profile.cardId);  // 124
      Meteor.users.update({ _id: Meteor.userId() }, { $set: { 'profile.cardId': null } });
      try {                                                            // 126
        return create;                                                 // 127
      } catch (error) {                                                //
        throw new Meteor.Error("StripeAPIFailure", error.message);     // 129
      }                                                                //
    }                                                                  //
  },                                                                   //
                                                                       //
  createAccount: function (doc, stripeToken) {                         // 134
    var Stripe = StripeAPI(Meteor.settings['private'].stripe);         // 135
    var user = Meteor.users.findOne({ _id: Meteor.userId() });         // 136
    var stripeCreateAccount = Meteor.wrapAsync(Stripe.accounts.create, Stripe.accounts);
    try {                                                              // 138
      return stripeCreateAccount({                                     // 139
        managed: true,                                                 // 140
        country: 'US',                                                 // 141
        email: user.emails[0].address,                                 // 142
        business_name: doc.businessName,                               // 143
        external_account: stripeToken,                                 // 144
        legal_entity: {                                                // 145
          first_name: doc.legalEntity.firstName,                       // 146
          last_name: doc.legalEntity.lastName,                         // 147
          type: doc.legalEntity.type,                                  // 148
          address: {                                                   // 149
            city: doc.address.city,                                    // 150
            state: doc.address.state,                                  // 151
            line1: doc.address.street,                                 // 152
            postal_code: doc.address.zip                               // 153
          },                                                           //
          dob: {                                                       // 155
            day: moment(doc.legalEntity.dob).get('date'),              // 156
            month: moment(doc.legalEntity.dob).get('month'),           // 157
            year: moment(doc.legalEntity.dob).get('year')              // 158
          }                                                            //
        },                                                             //
        tos_acceptance: {                                              // 161
          date: moment().unix(),                                       // 162
          ip: this.connection.clientAddress                            // 163
        },                                                             //
        transfer_schedule: {                                           // 165
          delay_days: 7,                                               // 166
          interval: 'weekly',                                          // 167
          weekly_anchor: 'friday' }                                    // 168
      });                                                              //
    } catch (error) {                                                  //
      throw new Meteor.Error("StripeAPIFailure", error.message);       // 171
    }                                                                  //
  },                                                                   //
                                                                       //
  getCard: function () {                                               // 175
    var Stripe = StripeAPI(Meteor.settings['private'].stripe);         // 176
    var user = Meteor.users.findOne({ _id: Meteor.userId() });         // 177
    var stripeCardGet = Meteor.wrapAsync(Stripe.customers.retrieveCard, Stripe.customers);
    try {                                                              // 179
      return stripeCardGet(user.profile.customerId, user.profile.cardId);
    } catch (error) {                                                  //
      throw new Meteor.Error("StripeAPIFailure", error.message);       // 182
    }                                                                  //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=stripe_methods.js.map
