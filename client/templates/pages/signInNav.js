Template.signInNav.events({
  'click .logout': function() {
    Meteor.logout();
    Router.go('/');
  }
})
