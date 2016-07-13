Meteor.publish('calevent', function() {
  return CalEvent.find();
});

Meteor.publish('attendee', function() {
  return Attendee.find();
});

Meteor.publish('review', function() {
  return Review.find();
});

Meteor.publish('allUsers', function() {
  return Meteor.users.find();
});

Meteor.publish('betaList', function() {
  return BetaList.find();
});

Meteor.publish('surveyOne', function () {
  return SurveyOne.find();
});

Meteor.publish('surveyTwo', function () {
  return SurveyTwo.find();
});