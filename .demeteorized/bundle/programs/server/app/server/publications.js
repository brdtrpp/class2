(function(){Meteor.publish('calevent', function() {
  return CalEvent.find();
});

Meteor.publish('attendee', function() {
  return Attendee.find();
});

Meteor.publish('allUsers', function() {
  return Meteor.users.find();
});
}).call(this);

//# sourceMappingURL=publications.js.map
