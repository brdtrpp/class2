Meteor.publish('calevent', function() {
  return CalEvent.find();
});

Meteor.publish('attendee', function() {
  return Attendee.find();
});

Meteor.publish('allUsers', function() {
  return Meteor.users.find();
});

Meteor.publish('blog', function() {
  return Blog.find({}, {sort: {createdAt: -1}});
});
