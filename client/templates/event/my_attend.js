Template.myAttend.helpers({  
  calevent: function() {
    var a = Attendee.find({owner: Meteor.userId()}, {fields: {eventId: 1}});
    return CalEvent.find({_id: a});
  },
});