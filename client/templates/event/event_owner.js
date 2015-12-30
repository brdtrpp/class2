Template.eventOwner.helpers({
  isOwner: function() {
    return this.owner === Meteor.userId();
  },
});

Template.eventOwner.events({
  'click .glyphicon-remove' : function() {
    var doc = CalEvent.findOne({_id: this._id});
    Meteor.call("removeCal", doc);
  },

  'click .glyphicon-pencil' : function() {
    var doc = CalEvent.findOne({_id: this._id});
    Meteor.call('editEvent', doc);
  }
});