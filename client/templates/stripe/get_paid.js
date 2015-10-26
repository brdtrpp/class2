Template.getPaid.events({
  'click .submit' : function () {
    Meteor.call('createAccount');
  }
});