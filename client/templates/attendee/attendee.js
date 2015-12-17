Template.attendeesItem.helpers({
  isAttendee: function() {
    return this.owner === Meteor.userId();
  },
  
  dateFormat: function() {
    return moment(this.createdAt).format("L");
  },
  
  timeRes: function () {
    // return true;
    var start = moment(CalEvent.findOne({_id: this.eventId}).start).subtract(1, "days");
    return moment().isBefore(start);
  }
});

Template.attendeesItem.events({
  'click .refund' : function () {
    var doc = CalEvent.findOne({_id: this.eventId});
    var att = Attendee.findOne({_id: this._id});
    Meteor.call('refundAttendee', doc, att);
  }
});