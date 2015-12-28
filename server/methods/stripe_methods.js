Meteor.methods({
  refundEvent: function(doc) {
    var attendees = Attendee.find({eventId: doc._id});
    _.forEach(attendees.fetch(), function(item){
      var att = item;
      Meteor.call('refundAttendee', doc, att);
    });
  },

  refundAttendee: function (doc, att) {
    var Stripe = StripeAPI(Meteor.settings.private.stripe);
    var stripeRefund = Meteor.wrapAsync(Stripe.refunds.create,Stripe.refunds);
    stripeRefund({
      charge: att.charge,
      refund_application_fee: true,
      reverse_transfer: true,
    }, function(err, refund) {
      if (refund) {
        console.log(refund);
        var doc = refund;
        Meteor.call('refundAtt', doc, att);
      }
      if (err) {
        console.log(err);
      }
    });
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

  // balance: function()

  charge: function(event, att) {
    //doc is the _id of the attendee
    var Stripe = StripeAPI(Meteor.settings.private.stripe);
    var user = Meteor.users.findOne({_id: Meteor.userId()});
    var stripeCardCharge = Meteor.wrapAsync(Stripe.charges.create,Stripe.charges);
    //end price is in cents and marked up 10%
    var endPrice = event.price * 110;
    var appfee = endPrice - ( event.price * 100 );
    stripeCardCharge({
        amount: endPrice,
        currency: "USD",
        customer: user.profile.customerId,
        application_fee: appfee.toFixed(0),
        description: event.title + " " + event.start,
        destination: Meteor.user(event.owner).profile.accountId
    }, function(err, charge) {
        if (err && err.type === 'StripeCardError') {
          console.log(err);
        } else {
          console.log(charge);
          if (event.courseId != undefined) {
            Meteor.call("addCourseAtt", event, att, charge);
          } else {
            Meteor.call("addAtt", event, att, charge);
          }
        }
    });
  },


  createCustomer : function() {
    var Stripe = StripeAPI(Meteor.settings.private.stripe);
    var stripeCustomersCreate = Meteor.wrapAsync(Stripe.customers.create,Stripe.customers);
    return stripeCustomersCreate({
      description: 'Attendee',
    });
  },

  createCard: function (stripeToken) {
    var Stripe = StripeAPI(Meteor.settings.private.stripe);
    var user = Meteor.users.findOne({_id: Meteor.userId()});
    var stripeCardCreate = Meteor.wrapAsync(Stripe.customers.createSource,Stripe.customers);
    var stripeCardDelete = Meteor.wrapAsync(Stripe.customers.deleteCard,Stripe.customers);
    var create = stripeCardCreate(
      user.profile.customerId, {
        source: stripeToken
        },
        function (err, card) {
          console.log(err, card);
          Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.cardId': card.id}});
      });
    if (user.profile.cardId == undefined) {
      create;
    } else {
      stripeCardDelete(user.profile.customerId, user.profile.cardId);
      create;
    }
  },

  createAccount: function(doc, stripeToken) {
    var Stripe = StripeAPI(Meteor.settings.private.stripe);
    var user = Meteor.users.findOne({_id: Meteor.userId()});
    var stripeCreateAccount = Meteor.wrapAsync(Stripe.accounts.create,Stripe.accounts);
    stripeCreateAccount({
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
    }, function(err, account) {
      if (err) {
        console.log(err);
      } else {
        Meteor.users.update({_id: Meteor.userId()}, {
          $set: {
            'profile.accountId': account.id,
            'profile.businessAddress.street': doc.address.street,
            'profile.businessAddress.city': doc.address.city,
            'profile.businessAddress.state': doc.address.state,
            'profile.businessAddress.zip': doc.address.zip,
          }
        });
      }
    });
  },
});