Template.getPaid.events({
  'click .paid' : function () {
    Meteor.call('createAccount');
  }
});

Template.getPaid.helpers({
  hasAccount: function() {
    var user = Meteor.users.findOne({_id: Meteor.userId()});
    if (user.profile.accountId != undefined) {
      return true;
    } else {
      return false;
    }
  },
});

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
            Meteor.call('createAccount', doc, stripeToken);
            Bert.alert("Congratulations, you now can host classes", "success", "fixed-bottom");
          }
        });

      }
    }
  }
});