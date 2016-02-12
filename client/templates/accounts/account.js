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

AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/login',
    // template: 'account',
    layoutTemplate: 'masterLayout',
    redirect: '/user-profile',
});

AccountsTemplates.configure({
  // homeRoutePath: '/user-profile',
  //   redirectTimeout: 4000,
    termsUrl: '/terms',
    showForgotPasswordLink: true,
    sendVerificationEmail: true,
    overrideLoginErrors: false,
});