AutoForm.hooks({
  massEmail: {
     onSubmit: function(doc, template) {
      var eventId = Template.instance().data.event;
      doc.eventId = eventId;
      Meteor.call("classEmail", doc);
      return false;
    },
    beginSubmit: function() {},
    endSubmit: function() {}
  }
});