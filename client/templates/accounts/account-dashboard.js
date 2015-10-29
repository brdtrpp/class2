Template.getPaid.events({
  'click .paid' : function () {
    Meteor.call('createAccount');
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
});

//Autoform beforeInsert Stripe Validation
AutoForm.hooks: {
  
}