AutoForm.hooks({
  insertAttendee: {
    before: {
      insert: function(doc, template) {
        var eventId = Template.instance().data.event;
        var event = CalEvent.findOne({_id: eventId});
        var available = event.attendeeCount - Attendee.find({eventId: eventId}).count();
        var att = doc;
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
          if (Meteor.user().profile.cardId !== undefined) {
            if (available != 0) {
              if (event.courseId) {
                console.log(event.courseId);
                doc.eventId = event.courseId;
              } else {
                doc.eventId = event._id;
              }
              Meteor.call('charge', event, att);
            } else {
              Bert.alert("This class is full!", "danger", "fixed-bottom");
            }
          } else {
            Bert.alert("You don't have a payment method stored!", "danger", "fixed-bottom");
          }
        }
      }
    },
  }
});