Template.attendeesItem.helpers({

});

AutoForm.hooks({
  insertAttendee: {
    before: {
      insert: function(doc, template) {
        doc.eventId = Template.instance().data.postId;
        // console.log(doc);
        return doc;
      }
    },
  }
});