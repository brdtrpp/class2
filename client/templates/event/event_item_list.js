Template.eventItemList.helpers({
  isOwner: function() {
    return this.owner === Meteor.userId();
  },
});