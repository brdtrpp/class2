Template.attendeesItem.helpers({
  isAttendee: function() {
    return this.owner === Meteor.userId();
  }
});

AutoForm.hooks({
  insertAttendee: {
    before: {
      insert: function(doc, template) {
        var eventId = Template.instance().data.event._id;
        var limit = Template.instance().data.event.attendeeCount;
        var ac = Attendee.find({eventId: eventId}).count();
        console.log(limit - ac);
          doc.eventId = eventId;
          return doc;
      }
    },
  }
});