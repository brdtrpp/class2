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
    if (moment(event.start).isAfter(moment()) && event.owner != Meteor.userId()) {
      Attendee.insert({                                                // 16
        eventId: event._id,                                            // 17
        attendeeFirstName: att.attendeeFirstName,                      // 18
        attendeeLastName: att.attendeeLastName,                        // 19
        charge: charge.id                                              // 20
      });                                                              //
    }                                                                  //
  },                                                                   //
                                                                       //
  removeAtt: function (doc, att) {                                     // 25
    console.log(doc, att);                                             // 26
  },                                                                   //
                                                                       //
  refundAtt: function (doc, att) {                                     // 29
    Attendee.update({ _id: att._id }, { $set: {                        // 30
        eventId: "refunded",                                           // 32
        reEventId: att.eventId,                                        // 33
        refund: doc.id                                                 // 34
      } });                                                            //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=attendee_methods.js.map
