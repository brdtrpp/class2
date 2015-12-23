Meteor.startup(function() {
  var Stripe = StripeAPI(Meteor.settings.private.stripe.testSecretKey);
});