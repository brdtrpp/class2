Template.attendeesItem.helpers({
  user: function () {
    return this.owner;
  },
  isAttendee: function() {
    return this.owner === Meteor.userId();
  },

  isEventOwner: function () {
    var owner = CalEvent.findOne({_id: this.eventId}).owner;
    return owner === Meteor.userId();
  },

  dateFormat: function() {
    return moment(this.createdAt).format("L");
  },

  timeRes: function () {
    var start = moment(CalEvent.findOne({_id: this.eventId}).start).subtract(1, "days");
    return moment().isBefore(start);
  },

  present: function() {
    var att = Attendee.findOne({_id: this._id});
    return att.attendance.present;
  },

  status: function() {
    var att = Attendee.findOne({_id: this._id});
    if(att.reEventId) {
      return "Refunded";
    }
  }
});

Template.attendeesItem.events({
  'click .refundAtt' : function () {
    var att = Attendee.findOne({_id: this._id});
    Meteor.call('refundAttendee', att);
  },

  'click .present' : function() {
    Attendee.update({_id: this._id}, {$set: {"attendance.present": true}});
    Bert.alert(this.attendeeFirstName + " " + this.attendeeLastName + " is present.");
  },

  'click .unpresent' : function() {
    Attendee.update({_id: this._id}, {$set: {"attendance.present": false}});
    Bert.alert(this.attendeeFirstName + " " + this.attendeeLastName + " is NOT present.", 'warning');
  },


});