Meteor.startup(function() {
  Security.permit(['insert', 'update', 'remove']).collections([Meteor.users]).apply();
  Security.permit(['insert', 'update', 'remove']).collections([CalEvent]).apply();
  Security.permit(['insert', 'update', 'remove']).collections([Attendee]).apply();
  
});

