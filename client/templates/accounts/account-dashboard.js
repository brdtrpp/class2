// Template.getPaid.onCreated(function() {
//   a = new ReactiveVar();
// });


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