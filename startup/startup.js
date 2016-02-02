Meteor.startup(function() {
  Security.permit(['insert', 'update']).collections([Attendee]).apply();
  Security.permit(['insert', 'update']).collections([Meteor.users]).apply();
  Security.permit(['insert', 'update']).collections([CalEvent]).apply();
  Security.permit(['insert']).collections([Search]).apply()
});

