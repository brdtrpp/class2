Template.myAttend.helpers({
  attendee: function() {
    var events = [];
    var refunded = [];
    var att = Attendee.find({owner: Meteor.userId()}).fetch();
    _.forEach(att, function (item) {
      if ((item.eventId !== "refunded" )){
        console.log(item);
        events.push( CalEvent.findOne({_id: item.eventId}));
      } else if ((item.eventId === "refunded" )){
        // console.log(item);
        refunded.push( CalEvent.findOne({_id: item.reEventId}));
      }
    });
    if (Session.equals("status", "refunded")){
      console.log(refunded);
      return refunded;
    } else if (Session.equals("status", "attending")){
      console.log(events);
      return events;
    }
  },

  event: function() {
    return CalEvent.find({_id: this.eventId}, {sort: {start: 1}});
  },

  status: function() {
    if (Session.equals("status", "attending")){
      return "refunded";
    } else if (Session.equals("status", "refunded")) {
      return "attending";
    }
  },
});

Template.myAttend.events({
  'click .refunded': function() {
    Session.set("status", "refunded");
  },

  'click .attending': function() {
    Session.set("status", "attending");
  },

  'click .attended': function() {
    Session.set("status", "attended");
  },

});

Template.myAttend.onRendered( function() {
  Session.set("status", "attending");
});