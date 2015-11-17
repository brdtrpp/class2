Template.eventNear.helpers({
  calevent: function() {
    return CalEvent.find({}, {sort: { start: 1 }});
  },
});