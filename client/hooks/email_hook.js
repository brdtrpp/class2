AutoForm.hooks({
  massEmail: {
     onSubmit: function(doc, template) {
      var eventId = Template.instance().data.event;
      doc.eventId = eventId;
      Meteor.call("classEmail", doc);
      $('#mailGroup').modal('hide');
      Bert.alert("Class Email Sent Successfully");
      return false;
    },
    beginSubmit: function() {},
    endSubmit: function() {}
  },

  directEmail: {
    onSubmit: function(doc) {
      var owner = Session.get('emailAtt');
      var eventId = Session.get('eventIdEmail');
      Meteor.call('directEmail', doc, owner, eventId);
      $('#mailIndividual').modal('hide');
      Bert.alert("Email Sent Successfully");
      return false;
    },
    beginSubmit: function() {},
    endSubmit: function() {}
  }
});