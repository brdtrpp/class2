Template.eventItemList.helpers({
  isOwner: function() {
    return this.owner === Meteor.userId();
  },
});

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

  customerPrice: function() {
   return this.price * 1.1;
  },

});

Template.eventItem.events({

  'submit': function () {
    console.log("submit");
    $('#attend').modal('hide');
  },
});