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
