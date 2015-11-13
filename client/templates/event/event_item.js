Template.eventItem.helpers({
  isOwner: function() {
    return this.owner === Meteor.userId();
  },

  attendee: function() {
    return Attendee.find({eventId: this._id});
  },

  aCount: function() {
    return Attendee.find({eventId: this._id}).count();
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
  
  customerPrice: function() {
   return this.price * 1.1;
  },

});

Template.eventItem.events({

  'submit': function () {
    $('#attend').modal('hide');
  },
});