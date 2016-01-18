Template.eventOwner.helpers({
  isOwner: function() {
    if ((this.owner ===Meteor.userId()) && moment(this.start).isAfter(moment())) {
      return true;
    }
  },

  totalAttendees: function () {
    var count = Attendee.find({eventId: this._id}).count();
    return count;
  }
});

Template.eventOwner.events({
  'click .refund' : function() {
    $('#cancel').modal('hide');
    var doc = CalEvent.findOne({_id: this._id});
    Bert.alert('Class has been cancelled', 'warning');
    Meteor.call("removeCal", doc);
    Router.go('/my-classes');
  },
});