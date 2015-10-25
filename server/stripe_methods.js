Meteor.methods({
  charge: function(price) {
    var user = Meteor.users.findOne({_id: Meteor.userId()});
    var Stripe = StripeAPI(Meteor.settings.private.stripe.testSecretKey);
    var endPrice = price * 110;
    Stripe.charges.create({
        amount: endPrice,
        currency: "USD",
        customer: user.profile.customerId
    }, function (err, res) {
        console.log(err, res);
    });
  },

  createCard: function (stripeToken) {
    var user = Meteor.users.findOne({_id: Meteor.userId()});
    var Stripe = StripeAPI(Meteor.settings.private.stripe.testSecretKey);
    var stripeCardCreate = Meteor.wrapAsync(Stripe.customers.createSource,Stripe.customers);
    var stripeCardDelete = Meteor.wrapAsync(Stripe.customers.deleteCard,Stripe.customers);
    if (user.profile.cardId == undefined) {
      stripeCardCreate(user.profile.customerId, {
        source: stripeToken
        }, function (err, card) {
          console.log(err, card);
          Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.cardId': card.id}});
      });
    } else {
      stripeCardDelete(user.profile.customerId, user.profile.cardId);
      stripeCardCreate(user.profile.customerId, {
        source: stripeToken
        }, function (err, card) {
          console.log(err, card);
          Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.cardId': card.id}});
      });
    }
  },

});