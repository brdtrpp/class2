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
    Stripe.customers.createSource(user.profile.customerId, {
      source: stripeToken
      }, function (err, card) {
        console.log(err, card);
    });
    
    console.log("French");
  },

});