Meteor.startup(function() {
  Security.permit(['insert', 'update']).collections([Attendee]).ifLoggedIn().apply();
  Security.permit(['insert', 'update']).collections([Meteor.users]).apply();
  Security.permit(['insert', 'update']).collections([CalEvent]).ifLoggedIn().apply();
  Security.permit(['insert']).collections([Search]).apply();
});

