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
          Meteor.call('charge', event, att, function(error, result) {
            if (error) {
              Bert.alert(error.reason, 'warning');
            } else if (result) {
              var charge = result;
              var amount = result.amount / 100;
              if (doc.courseId != undefined) {
                Meteor.call("addCourseAtt", event, att, charge);
                Bert.alert("Your card has been charged $" + amount.toFixed(2));
              } else {
                Meteor.call("addAtt", event, att, charge);
                Bert.alert("Your card has been charged $" + amount.toFixed(2));
              }
  
            }
          });
        }
      }
    },
    beginSubmit: function() {},
    endSubmit: function() {}
  }
});