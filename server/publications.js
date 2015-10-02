Meteor.publish('calevent', function(limit) {
  return CalEvent.find();
});