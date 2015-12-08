Template.attendeesItem.helpers({
  isAttendee: function() {
    return this.owner === Meteor.userId();
  },
  
  dateFormat: function() {
    return moment(this.createdAt).format("L");
  },
  
  timeRes: function () {
    // return true;
    var start = moment(CalEvent.findOne({_id: this.eventId}).start).subtract(1, "days");
    return moment().isBefore(start);
  }
});

Template.attendeesItem.events({
  'click .refund' : function () {
    var doc = CalEvent.findOne({_id: this.eventId});
    var att = Attendee.findOne({_id: this._id});
    Meteor.call('refundAttendee', doc, att);
  }
}),

AutoForm.hooks({
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
            Bert.alert("You don't have a payment method stored!", "danger", "fixed-bottom");
          }
        }
      }
    },

    after: {
      insert: function(error, result) {
        var doc = result;
        var event = CalEvent.findOne({_id: Attendee.findOne({_id: result}).eventId});
        Meteor.call('charge', event, doc);
      },
      remove: function() {
        Bert.alert("Something went wrong with your card", "danger", "fixed-bottom");
      }
    }
  }
});