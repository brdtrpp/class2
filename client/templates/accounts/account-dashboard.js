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

