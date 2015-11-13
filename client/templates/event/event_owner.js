Template.eventOwner.helpers({
  isOwner: function() {
    return this.owner === Meteor.userId();
  },
});

T