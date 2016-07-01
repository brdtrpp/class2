AutoForm.hooks({
  insertAttendee: {
    before: {
      insert: function(doc, template) {
        var eventId = Template.instance().data.event;
        var event = CalEvent.findOne({_id: eventId});
        var att = doc;
        if (event.courseId) {
          console.log(event.courseId);
          doc.eventId = event.courseId;
        } else {
          doc.eventId = event._id;
        }
        if (event.price == null) {
          var charge = 0;
          Meteor.call("addAtt", event, att, charge);
        } else {
          if (doc.courseId != undefined) {
            Meteor.call("addCourseAtt", event, att, {id: null});
          } else {
            Meteor.call("addAtt", event, att, {id: null});
          }
        }

        Bert.alert("You have been signed up for an event");
      }
    },
    beginSubmit: function() {},
    endSubmit: function() {}
  }
});