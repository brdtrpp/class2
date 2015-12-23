Meteor.startup(function() {

});

Stripe = StripeAPI(Meteor.settings.private.stripe.testSecretKey);