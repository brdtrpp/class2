Meteor.startup(function() {
  var stripeKey = Meteor.settings.public.stripe;
  Stripe.setPublishableKey(stripeKey);
});

