Meteor.methods({
  addAtt: function(doc, att) {
    console.log(doc);
    console.log(att);
  },
  removeAtt: function(doc, att) {
    Attendee.update({_id: att._id}, 
      {$set: {
        eventId: "refunded",
        reEventId: att.eventId,
        refund: refund.id,
      }}
    );
  }
});