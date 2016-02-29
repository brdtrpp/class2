Meteor.methods({
  addCourseAtt: function(event, att, charge) {
    var course = CalEvent.find({courseId: event.courseId}).fetch();
    _.forEach(course, function(item){
      if (moment(item.start).isBefore(event.start)) {
        console.log(item._id + " is before current class");
      } else {
        event = item;
        Meteor.call("addAtt", event, att, charge);
      }
    });
  },
  
  addAtt: function(event, att, charge) {
    if ((moment(event.start).isAfter(moment()) && (Attendee.find({eventId: event._id}).count() < event.attendeeCount)) && ((event.owner != Meteor.userId()) && Attendee.find({
        eventId: event._id,
        attendeeFirstName: att.attendeeFirstName,
        attendeeLastName: att.attendeeLastName,
        owner: Meteor.userId()
      }).count() == 0)) {
      Attendee.insert({
        eventId: event._id,
        attendeeFirstName: att.attendeeFirstName,
        attendeeLastName: att.attendeeLastName,
        charge: charge.id
      });
    }
  },
  
  removeAtt: function(doc, att) {
    console.log(doc, att);
  },
  
  refundAtt: function(doc, att) {
    Attendee.update({_id: att._id}, 
      {$set: {
        eventId: "refunded",
        reEventId: att.eventId,
        refund: doc.id,
      }}
    );
  }
});