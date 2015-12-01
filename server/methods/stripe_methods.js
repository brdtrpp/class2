Meteor.methods({
  refund: function(doc) {
    console.log(doc);
  },
  
  getAccount: function(aid) {
    var stripeAccounts = Meteor.wrapAsync(Stripe.accounts.retrieve,Stripe.accounts);
    stripeAccounts(aid, function(err, result) {
      if (err) {
        console.log(err);
      }
       if (result) {
       console.log(result.id);
        return result;
       }

    });

  },

  charge: function(event, doc) {
    var user = Meteor.users.findOne({_id: Meteor.userId()});
    var stripeCardCharge = Meteor.wrapAsync(Stripe.charges.create,Stripe.charges);
    var endPrice = event.price * 110;
    var appfee = endPrice - ( event.price * 100 );
   stripeCardCharge({
        amount: endPrice,
        currency: "USD",
        customer: user.profile.customerId,
        application_fee: appfee.toFixed(2),
        description: event.title + " " + event.start,
        destination: Meteor.user(event.owner).profile.accountId
    }, function(err, charge) {
      console.log(charge);
        if (err && err.type === 'StripeCardError') {
          Attendee.remove({_id: doc});
        } else {
          Attendee.update({_id: doc}, {$set: {charge: charge.id}});
        }
    });
  },

  createCard: function (stripeToken) {
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
      console.log(err, account);
      Meteor.users.update({_id: Meteor.userId()}, {
        $set: {
          'profile.accountId': account.id,
        }
      });
    });
  },

});