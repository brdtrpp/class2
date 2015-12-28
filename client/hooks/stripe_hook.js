//Autoform beforeInsert Stripe Validation
AutoForm.hooks({
  insertAccount: {
    before:{
      insert: function (doc) {
        Stripe.bankAccount.createToken({
          country: "US",
          routing_number: doc.externalAccount.routingNumber,
          account_number: doc.externalAccount.accountNumber
        }, function(status, response) {
          stripeToken = response.id;
          if(response.error !== undefined) {
            Bert.alert(response.error.message, "danger", "fixed-bottom");
          } else {
            Meteor.call('createAccount', doc, stripeToken, function(error, result){
              if (error) {
                console.log(error);
                return false;
              }
              if(result){
                console.log(result);
                return false;
              }
            });
          }
        });
      }
    }
  },
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
            return false;
          } else {
            Meteor.call('createCard', stripeToken);
            Bert.alert("Card has been stored", "success", "fixed-bottom");
            Router.go('/user-profile');
            return false;
          }
        });
      }
    },
  }
});