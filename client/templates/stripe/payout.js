Template.payout.events({
  'click .submit': function() {
    ccNum = $('.ccnum').val();
    cvc = $('.cvc').val();
    expMo = $('.exp-month').val();
    expYr = $('.exp-year').val();
    
    Stripe.card.createToken({
      number: 4242424242424242,
      cvc: 123,
      exp_month: 12,
      exp_year: 2017
    }, function(status, response) {
      stripeToken = response.id;
      Meteor.call('createCard', stripeToken);
    });
  }
});