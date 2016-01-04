// Template.getPaid.onCreated(function() {
//   a = new ReactiveVar();
// });


Template.getPaid.helpers({
  toast: function() {
    Meteor.call("getLocationByZipcode", 45385, function(error, result){
      if (error){
          // do something with the error
          console.log(error.reason);
      }
      else{
          // do something with result
          console.log(result);
      }
    });
  },

  hasAccount: function() {
    var user = Meteor.users.findOne({_id: Meteor.userId()});
    if (user.profile.accountId != undefined) {
      return true;
    } else {
      return false;
    }
  },

  account: function() {
    var aid = Meteor.user().profile.accountId;
    Meteor.call('getAccount', aid,  function(error, result) {
      if (error) {
        console.log("error");
      } else {
        Session.set("account", result);
      }
    });
    var account = Session.get('account');
    return account;
  }
});