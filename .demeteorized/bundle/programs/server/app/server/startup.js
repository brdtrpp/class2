(function(){Meteor.startup(function() {
  Stripe = StripeAPI(Meteor.settings.private.stripe.testSecretKey);
});
}).call(this);

//# sourceMappingURL=startup.js.map
