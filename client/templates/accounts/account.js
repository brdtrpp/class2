Template._loginButtonsLoggedInDropdown.events({
  'click #login-buttons-edit-profile': function(event) {
      Router.go('profileEdit');
  }
});

Template.profileEdit.helpers({
  user: function(){
    return Meteor.user();
  }
});