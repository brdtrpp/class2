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
        var price = event.price;
        var owner = event.owner;
        var available = event.attendeeCount - Attendee.find({eventId: eventId}).count();
        console.log(doc.attendeeFirstName);
        if (
          Attendee.find({
            eventId: eventId,
            attendeeFirstName: doc.attendeeFirstName,
            attendeeLastName: doc.attendeeLastName,
            owner: Meteor.userId()
          }).count() != 0
        ) {
          Bert.alert("That person is already registered for this class!", "danger", "fixed-bottom");
        } else {
          if (available != 0) {
            doc.eventId = event._id;
            Meteor.call('charge', price, owner, event);
            return doc;
          } else {
            Bert.alert("This class is full!", "danger", "fixed-bottom");
          }
        }
      }
    },
  }
});