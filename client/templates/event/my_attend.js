Template.myAttend.helpers({
  attendee: function() {
    var events = [];
    var refunded = [];
    var att = Attendee.find({owner: Meteor.userId()}).fetch();
    _.forEach(att, function (item) {
      if ((item.eventId !== "refunded" )){
        events.push( CalEvent.findOne({_id: item.eventId}));
      } else if ((item.eventId === "refunded" )){
        refunded.push( CalEvent.findOne({_id: item.reEventId}));
      }
    });
    if (Session.equals("status", "refunded")){
      return refunded;
    } else if (Session.equals("status", "attending")){
      return events;
    }
  },

  event: function() {
    return CalEvent.find({_id: this.eventId}, {sort: {start: 1}});
  },

  status: function() {
    return Session.get("status").toUpperCase();
  },
});

Template.myAttend.events({
  // 'click .refunded': function() {
  //   Session.set("status", "refunded");
  // },

  // 'click .attending': function() {
  //   Session.set("status", "attending");
  // },

  // 'click .attended': function() {
  //   Session.set("status", "attended");
  // },

});

Template.myAttend.onRendered( function() {
  Session.set("status", "attending");
});