Meteor.methods({
  refundEvent: function(doc) {
    if (doc.owner === Meteor.userId()) {
      var attendees = Attendee.find({eventId: doc._id});
      _.forEach(attendees.fetch(), function(item){
        var att = item;
        Meteor.call('refundAttendee', att);
      });
    }
  },

  refundAttendee: function (att) {
    if (att.charge) {
      var Stripe = StripeAPI(Meteor.settings.private.stripe);
      var stripeRefund = Meteor.wrapAsync(Stripe.refunds.create,Stripe.refunds);
      stripeRefund({
        charge: att.charge,
        refund_application_fee: true,
        reverse_transfer: true,
      }, function(err, refund) {
        if (refund) {
          var doc = refund;
          Meteor.call('refundAtt', doc, att);
        } else if (err) {
          console.log(err);
        }
      });
    } else {
      var doc = "free";
      Meteor.call('refundAtt', doc, att);
    }

  },

  getAccount: function(aid) {
    var Stripe = StripeAPI(Meteor.settings.private.stripe);
    var stripeAccounts = Meteor.wrapAsync(Stripe.accounts.retrieve,Stripe.accounts);
    try {
      return  stripeAccounts(aid);
    }catch(error){
      throw new Meteor.Error("StripeAPIFailure", error.message);
    }
  },

  getCharge: function(charge) {
    var Stripe = StripeAPI(Meteor.settings.private.stripe);
    var stripeCharges = Meteor.wrapAsync(Stripe.charges.retrieve,Stripe.charges);
    try {
      return stripeCharges(charge);
    }catch(error){
      throw new Meteor.Error("StripeAPIFailure", error.message);
    }
  },

  charge: function(event, att) {
    var Stripe = StripeAPI(Meteor.settings.private.stripe);
    var stripeCardCharge = Meteor.wrapAsync(Stripe.charges.create,Stripe.charges);

    var user = Meteor.users.findOne({_id: att.owner});
    var owner = Meteor.users.findOne({_id: event.owner});

    //end price is in cents and marked up 5%
    var endPrice = event.price * 110;
    var appfee = endPrice - ( event.price * 100 );
    var available = event.attendeeCount - Attendee.find({eventId: event._id}).count();
    if (event.owner == att.owner) {
      throw new Meteor.Error('SelfReg', "Cannot signup for your own class.");

    } else if (user.profile.cardId == undefined) {
      throw new Meteor.Error('NoCard', "You don't have a card stored.");
    } else if (available === 0) {
      throw new Meteor.Error('NoSpace', "This class is full");
    } else try {
      return stripeCardCharge({
          amount: endPrice.toFixed(0),
          currency: "USD",
          customer: user.profile.customerId,
          application_fee: appfee.toFixed(0),
          description: event.title + " " + event.start,
          destination: owner.profile.accountId
      });
    } catch(error) {
      throw new Meteor.Error("StripeAPIFailure", error.message);
    }

  },

  createCustomer : function() {
    var Stripe = StripeAPI(Meteor.settings.private.stripe);
    var stripeCustomersCreate = Meteor.wrapAsync(Stripe.customers.create,Stripe.customers);
    try {
      return stripeCustomersCreate({
        description: 'Attendee',
      });
    }catch(error){
      throw new Meteor.Error("StripeAPIFailure", error.message);
    }
  },

  createCard: function (stripeToken) {
    var Stripe = StripeAPI(Meteor.settings.private.stripe);
    var user = Meteor.users.findOne({_id: Meteor.userId()});
    var stripeCardCreate = Meteor.wrapAsync(Stripe.customers.createSource,Stripe.customers);
    var stripeCardDelete = Meteor.wrapAsync(Stripe.customers.deleteCard,Stripe.customers);
    var create = stripeCardCreate(
      user.profile.customerId, {
        source: stripeToken
        });
    if (user.profile.cardId == undefined) {
      try {
        return create;
      }catch(error){
        throw new Meteor.Error("StripeAPIFailure", error.message);
      }
    } else {
      stripeCardDelete(user.profile.customerId, user.profile.cardId);
      Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.cardId': null}});
      try {
        return create;
      }catch(error){
        throw new Meteor.Error("StripeAPIFailure", error.message);
      }
    }
  },

  createAccount: function(doc, stripeToken) {
    var Stripe = StripeAPI(Meteor.settings.private.stripe);
    var user = Meteor.users.findOne({_id: Meteor.userId()});
    var stripeCreateAccount = Meteor.wrapAsync(Stripe.accounts.create,Stripe.accounts);
    try {
      return stripeCreateAccount({
        managed: true,
        country: 'US',
        email: user.emails[0].address,
        business_name: doc.businessName,
        external_account: stripeToken,
        legal_entity: {
          first_name: doc.legalEntity.firstName,
          last_name: doc.legalEntity.lastName,
          type: doc.legalEntity.type,
          address: {
            city: doc.address.city,
            state: doc.address.state,
            line1: doc.address.street,
            postal_code: doc.address.zip,
          },
          dob: {
            day: moment(doc.legalEntity.dob).get('date'),
            month: moment(doc.legalEntity.dob).get('month'),
            year: moment(doc.legalEntity.dob).get('year')
          },
        },
        tos_acceptance: {
          date: moment().unix(),
          ip: this.connection.clientAddress,
        },
        transfer_schedule: {
          delay_days: 7,
          interval: 'weekly',
          weekly_anchor: 'friday'},
      });
    }catch(error){
      throw new Meteor.Error("StripeAPIFailure", error.message);
    }
  },

  getCard : function() {
    var Stripe = StripeAPI(Meteor.settings.private.stripe);
    var user = Meteor.users.findOne({_id: Meteor.userId()});
    var stripeCardGet = Meteor.wrapAsync(Stripe.customers.retrieveCard,Stripe.customers);
    try {
      return stripeCardGet(user.profile.customerId, user.profile.cardId);
    }catch(error){
      throw new Meteor.Error("StripeAPIFailure", error.message);
    }
  }
});