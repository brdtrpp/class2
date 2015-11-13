Template.myAttend.helpers({  
  attendee: function() {
    return Attendee.find({owner: Meteor.userId()}, {fields: {eventId: 1}}).fetch();
  },
  
  event: function() {
    return CalEvent.find({_id: this.eventId});
  },
});