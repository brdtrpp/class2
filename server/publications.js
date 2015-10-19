Meteor.publish('calevent', function() {
  return CalEvent.find();
});

Meteor.publish('attendee', function() {
  return Attendee.find();
});