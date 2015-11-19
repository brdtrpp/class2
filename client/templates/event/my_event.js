Template.myEvent.helpers({
  calevent: function() {
    return CalEvent.find({owner:Meteor.userId()});
  },

  startDate:function() {
    var start = CalEvent.findOne({_id: this._id}).start;
    var date = moment(start).format('LLL');
    return date;
  },

  endDate:function() {
    var end = CalEvent.findOne({_id: this._id}).end;
    var date = moment(end).format('LLL');
    return date;
  },
  attending:function() {
    return Attendee.find({eventId: this._id}).count();
  },
});

Template.myEvent.events({
  'click .glyphicon-remove' : function() {
    var doc = CalEvent.findOne({_id: this._id});
    Meteor.call("removeCal", doc);
  }
});

