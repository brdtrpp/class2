Meteor.startup(function() {
  Security.permit(['insert', 'update']).collections([Attendee]).apply();
  Security.permit(['insert', 'update', 'remove']).collections([Meteor.users]).apply();
  Security.permit(['insert', 'update', 'remove']).collections([CalEvent]).apply();
});

