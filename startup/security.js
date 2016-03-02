Meteor.startup(function() {
  Security.permit(['insert', 'update']).collections([Attendee, CalEvent, Meteor.users]).ifLoggedIn().apply();
  Security.permit(['insert', 'update']).collections([Meteor.users]).apply();
  Security.permit(['insert']).collections([Search, BetaList]).apply();
});

