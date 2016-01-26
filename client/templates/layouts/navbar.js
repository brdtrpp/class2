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

Template.navbar.events({
  'click .navclose': function() {

    $('.navbar-toggle').click(); //bootstrap 3.x by Richard
  }
});