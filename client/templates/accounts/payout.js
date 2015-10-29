AutoForm.hooks({
  insertCard: {
    before: {
      insert: function(doc) {
        Stripe.card.createToken({
          number: doc.creditCardNumber,
          cvc: doc.cvc,
          exp_month: doc.expMo,
          exp_year: doc.expYr
        }, function(status, response) {
          stripeToken = response.id;
          if (response.error !== undefined) {
            Bert.alert(response.error.message, "danger", "fixed-bottom");
          } else {
            Meteor.call('createCard', stripeToken);
            Bert.alert("Card has been stored", "success", "fixed-bottom");
            Router.go('/user-profile');
          }
        });
      }
    },  
  }
});