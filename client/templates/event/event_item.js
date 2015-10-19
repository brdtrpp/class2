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
    'click #chargeCard': function(stripeToken) {
    var stripe = require("stripe")(
      "sk_test_HniGfoNv0wNhzqEnIdTeQMFI"
    );
    


    stripe.charges.create({
      amount: this.price * 100,
      currency: 'usd',
      source: stripeToken,
      customer: this.userId,
      description: "Test Charge"
    }, function(err, charge) {
      console.log(err, charge);
    });
  }
});