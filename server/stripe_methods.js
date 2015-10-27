Meteor.methods({
  charge: function(price, owner, event) {
    var user = Meteor.users.findOne({_id: Meteor.userId()});
    var Stripe = StripeAPI(Meteor.settings.private.stripe.testSecretKey);
    var endPrice = price * 110;
    Stripe.charges.create({
        amount: endPrice,
        currency: "USD",
        customer: user.profile.customerId,
        application_fee: endPrice - ( price * 100 ),
        description: event.title + " " + event.start,
        destination: Meteor.user(owner).profile.accountId
    }, function (err, res) {
        console.log(err, res);
        
    });
    var message = "Charged " + endPrice + " to your card on file";
  },

  createCard: function (stripeToken) {
    var user = Meteor.users.findOne({_id: Meteor.userId()});
    var Stripe = StripeAPI(Meteor.settings.private.stripe.testSecretKey);
    var stripeCardCreate = Meteor.wrapAsync(Stripe.customers.createSource,Stripe.customers);
    var stripeCardDelete = Meteor.wrapAsync(Stripe.customers.deleteCard,Stripe.customers);
    var create = stripeCardCreate(user.profile.customerId, {
        source: stripeToken
        }, function (err, card) {
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

  createAccount: function() {
    var user = Meteor.users.findOne({_id: Meteor.userId()});
    var Stripe = StripeAPI(Meteor.settings.private.stripe.testSecretKey);
    var stripeCreateAccount = Meteor.wrapAsync(Stripe.accounts.create,Stripe.accounts);
    stripeCreateAccount({
      managed: true,
      country: 'US',
      email: user.emails[0].address
    }, function(err, account) {
      console.log(err, account);
      Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.accountId': account.id}});
    });
  },

});