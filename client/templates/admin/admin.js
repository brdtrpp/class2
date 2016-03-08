Template.registerHelper("Schemas", Schemas);

Template.adminPanel.helpers({
  userCount: function() {
    return Meteor.users.find().count();
  },
  
  betaCount: function() {
    return BetaList.find().count();
  }
})