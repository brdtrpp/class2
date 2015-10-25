Template.payout.events({
  'click .submit': function($) {
    Stripe.card.createToken({
    number: 4242424242424242,
    cvc: 123,
    exp_month: 12,
    exp_year: 2016
  }, function(status, response) {
    stripeToken = response.id;
    Meteor.call('createCard', stripeToken);
  },
    console.log("Form created"));
  }
});