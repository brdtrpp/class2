Template.eventItemList.helpers({
  isOwner: function() {
    return this.owner === Meteor.userId();
  },
});

Template.eventItem.helpers({
  isOwner: function() {
    return this.owner === Meteor.userId();
  },
  
  customerPrice: function() {
   return this.price * 1.1;
  },
});

Template.eventItem.events({
    'click #chargeCard': function(stripeToken) {
    var stripe = require("stripe")(
      "sk_test_HniGfoNv0wNhzqEnIdTeQMFI"
    );

    stripe.charges.create({
      amount: this.price * 100,
      currency: 'usd',
      source: stripeToken,
      customer: this.userId,
      description: "Tes tCharge"
    }, function(err, charge) {
      console.log(err, charge);
    });
  }
});