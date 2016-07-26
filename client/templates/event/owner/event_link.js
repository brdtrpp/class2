Template.eventLink.helpers({
  events: function() {
    return this;
  },
  summary: function() {
    var owner = CalEvent.findOne({_id: this[0]._id}).owner;
    return {summary: true, eventOwner: owner, _id: this[0]._id};
  },
  owner: function() {
    var owner = CalEvent.findOne({_id: this[0]._id}).ownerName;
    return owner + "'s";
  }
});