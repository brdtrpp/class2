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
          if(response.error) {
            Bert.alert(response.error.message, "danger");
          } else {
            Meteor.call('createAccount', doc, stripeToken, function(error, result){
              if (error) {
                Bert.alert(error.reason.toUpperCase(), 'danger');
                return false;
              }
              if(result){
                Meteor.users.update({_id: Meteor.userId()}, {
                  $set: {
                    'profile.accountId': result.id,
                    'profile.businessAddress.street': doc.address.street,
                    'profile.businessAddress.city': doc.address.city,
                    'profile.businessAddress.state': doc.address.state,
                    'profile.businessAddress.zip': doc.address.zip,
                  }
                });
                Bert.alert('Congratulations you can now host classes!');
                return false;
              }
            });
          }
        });
      }
    },
    beginSubmit: function() {},
    endSubmit: function() {}
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
            Bert.alert(response.error.message, "danger");
            return false;
          } else {
            Meteor.call('createCard', stripeToken, function(error, result) {
              if(error) {
                console.log(error);
                Bert.alert(error.reason, 'danger');
              }
              if(result) {
                console.log(result);
                Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.cardId': result.id}});
                Bert.alert("Card has been stored");
                Router.go('/user-profile');
              }
            });
            return false;
          }
        });
      }
    },
    beginSubmit: function() {},
    endSubmit: function() {}
  }
});