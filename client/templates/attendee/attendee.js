Template.attendeesItem.helpers({
  isAttendee: function() {
    return this.owner === Meteor.userId();
  }
});

AutoForm.hooks({
  removeAttendee:{
    before: {
      remove : function(doc, template) {
        var eventId = Template.instance().data.event;
        var event = CalEvent.findOne({_id: eventId});
      }
    }
  },
  insertAttendee: {
    before: {
      insert: function(doc, template) {
        var eventId = Template.instance().data.event;
        var event = CalEvent.findOne({_id: eventId});
        var available = event.attendeeCount - Attendee.find({eventId: eventId}).count();
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
              doc.eventId = event._id;
              return doc;
            } else {
              Bert.alert("This class is full!", "danger", "fixed-bottom");
            }
          } else {
            Bert.alert("You don't have a poayment method stored!", "danger", "fixed-bottom");
          }
        }
      }
    },
    
    after: {
      insert: function(error, result) {
        console.log(result);
        var doc = result;
        var event = CalEvent.findOne({_id: Attendee.findOne({_id: result}).eventId});
        Meteor.call('charge', event, doc);
      }
    }
  }
});