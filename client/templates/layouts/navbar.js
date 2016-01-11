Template.navLoginButton.replaces('atNavButton');

Template.navbar.helpers({
  hasAccount: function() {
    var user = Meteor.users.findOne({_id: Meteor.userId()});
    if (user.profile.accountId) {
      return true;
    } else {
      return false;
    }
  },
});