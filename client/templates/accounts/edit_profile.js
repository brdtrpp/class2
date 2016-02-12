Template.profileEdit.helpers({
  hasAccount:function() {
    return Meteor.user().profile.accountId;
  }
})