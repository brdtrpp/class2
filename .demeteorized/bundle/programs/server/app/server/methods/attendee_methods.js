(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/methods/attendee_methods.js                                  //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.methods({                                                       // 1
  addCourseAtt: function (event, att, charge) {                        // 2
    var course = CalEvent.find({ courseId: event.courseId }).fetch();  // 3
    _.forEach(course, function (item) {                                // 4
      if (moment(item.start).isBefore(event.start)) {                  // 5
        console.log(item._id + " is before current class");            // 6
      } else {                                                         //
        event = item;                                                  // 8
        Meteor.call("addAtt", event, att, charge);                     // 9
      }                                                                //
    });                                                                //
  },                                                                   //
                                                                       //
  addAtt: function (event, att, charge) {                              // 14
    if (moment(event.start).isAfter(moment()) && Attendee.find({ eventId: event._id }).count() < event.attendeeCount && (event.owner != Meteor.userId() && Attendee.find({
      eventId: event._id,                                              // 16
      attendeeFirstName: att.attendeeFirstName,                        // 17
      attendeeLastName: att.attendeeLastName,                          // 18
      owner: Meteor.userId()                                           // 19
    }).count() == 0)) {                                                //
      Attendee.insert({                                                // 21
        eventId: event._id,                                            // 22
        attendeeFirstName: att.attendeeFirstName,                      // 23
        attendeeLastName: att.attendeeLastName,                        // 24
        charge: charge.id                                              // 25
      });                                                              //
    }                                                                  //
  },                                                                   //
                                                                       //
  removeAtt: function (doc, att) {                                     // 30
    console.log(doc, att);                                             // 31
  },                                                                   //
                                                                       //
  refundAtt: function (doc, att) {                                     // 34
    Attendee.update({ _id: att._id }, { $set: {                        // 35
        eventId: "refunded",                                           // 37
        reEventId: att.eventId,                                        // 38
        refund: doc.id                                                 // 39
      } });                                                            //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=attendee_methods.js.map
