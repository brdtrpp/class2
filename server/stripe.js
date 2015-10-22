var Stripe = StripeAPI("sk_test_HniGfoNv0wNhzqEnIdTeQMFI");

Meteor.methods({
  charge: function(price) {
    Stripe.charges.create({
        amount: price * 100,
        currency: "USD",
        card: {
            number: "4242424242424242",
            exp_month: "03",
            exp_year: "2017"
        }
    }, function (err, res) {
        console.log(err, res);
    });
    console.log("charged");
  }
});
