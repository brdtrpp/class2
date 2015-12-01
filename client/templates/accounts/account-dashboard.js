Template.getPaid.events({

});

Template.getPaid.onRendered(function() {
  var aid = Meteor.user().profile.accountId;
  if (aid) {
    Meteor.call('getAccount', aid, function(err, result) {
      if (err) {
        alert(err);
        Bert.alert(err, "danger", "fixed-bottom");
      } 
      if (result) {
        alert(result);
        Session.set("account", result);
        
      }
    });
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
  
  account: function() {
    return Session.get("account");
  }
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