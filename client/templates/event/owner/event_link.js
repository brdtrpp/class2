Template.eventLink.helpers({
  events: function() {
    return this;
  },

  owner: function() {
    var owner = CalEvent.findOne({_id: this[0]._id}).ownerName;
    return owner + "'s";
  }
});