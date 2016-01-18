Template.eventItemList.helpers({
  isOwner: function() {
    return this.owner === Meteor.userId();
  },
  startDate:function() {
    var start = this.start;
    var date = moment(start).format('LLL');
    return date;
  },

  endDate:function() {
    var end = this.end;
    var date = moment(end).format('LLL');
    return date;
  },

  customerPrice: function() {
    var cPrice = this.price * 1.1;
    return cPrice.toFixed(2);
  },

  timeRes: function () {
    var start = moment(CalEvent.findOne({_id: this._id}).start).subtract(1, "days");
    return moment().isBefore(start);
  },

  isAttendee: function() {
    if (Attendee.find({eventId: this._id}).count() > 0) {
      return true;
    } else {
      return false;
    }
  },
  attendee: function() {
    return Attendee.find({eventId: this._id});
  },
});

Template.eventItemList.events({
  'click .refund' : function () {
    var att = Attendee.findOne({eventId: this._id, owner: Meteor.userId(),});
    console.log(att);
    Meteor.call('refundAttendee', att);
  },
});