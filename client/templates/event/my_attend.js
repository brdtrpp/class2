Template.myAttend.helpers({
  attendee: function() {
    var events = [];
    var refunded = [];
    var att = Attendee.find({owner: Meteor.userId()}).fetch();
    _.forEach(att, function (item) {
      if ((item.eventId != "refunded" )){
        var eventsearch = CalEvent.find({_id: item.eventId, canceled: false}).fetch();
        _.forEach(eventsearch, function(each){
          if (_.findWhere(events, {_id: each._id}) === undefined) {
            var reviews = Review.find({eventId: each._id});
            each.reviews = {
              voted: !!Review.findOne({eventId: each._id, owner: Meteor.userId()}),
              list: Review.find({eventId: each._id}).fetch()
            };
            events.push(each);
          }
        });
      } else if ((item.eventId == "refunded" )){
        var refundsearch = CalEvent.find({_id: item.reEventId}).fetch();
        _.forEach(refundsearch, function(each){
          if (_.findWhere(refunded, {_id: each._id}) === undefined) {
            refunded.push(each);
          }
        });
      }
    });
    if (Session.equals("status", "refunded")){
      // console.log(refunded);
      return refunded;
    } else if (Session.equals("status", "attending")){
      return events;
    }
  },
  status: function() {
    return Session.get("status").toUpperCase();
  },
});

Template.myAttend.onRendered( function() {
  
  Session.set("status", "attending");
  Session.set("title", "Attending");
});