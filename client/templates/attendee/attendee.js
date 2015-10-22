Template.attendeesItem.helpers({
  isAttendee: function() {
    return this.owner === Meteor.userId();
  }
});

AutoForm.hooks({
  insertAttendee: {
    before: {
      insert: function(doc, template) {
        var eventId = Template.instance().data.event;
        var event = CalEvent.findOne({_id: eventId});
        var limit = event.attendeeCount;
        var price = event.price;
        var ac = Attendee.find({eventId: eventId}).count();
        var available = limit - ac;
        if (available > 0) {
          console.log(available);
            doc.eventId = event._id;
            Meteor.call('charge', price);
            return doc;
        }
      }
    },
  }
});