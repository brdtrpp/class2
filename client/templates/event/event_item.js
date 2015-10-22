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
  // 'submit': function () {
  //   var eventId = Template.instance().data.event;
  //   var event = CalEvent.findOne({_id: eventId});
  //   console.log(event.price);
  //   // if(event && event.price)
  //   //   return event.price;
  //   // console.log("submit");
  //   // $('#attend').modal('hide');
  //   // Meteor.call('charge', event.price);
  // },
});