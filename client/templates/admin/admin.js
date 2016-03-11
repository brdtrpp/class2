Template.registerHelper("Schemas", Schemas);

Template.adminPanel.helpers({
  userCount: function() {
    return Meteor.users.find().count();
  },

  betaCount: function() {
    return BetaList.find().count();
  },

  surveyOne: function () {
    return SurveyOne.find({}, {sort: {createdAt: -1}}).fetch();
  },
  
  surveyTwo: function () {
    return SurveyTwo.find({}, {sort: {createdAt: -1}}).fetch();
  },

});

Template.adminPanel.onRendered = function() {

};