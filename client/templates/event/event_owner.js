Template.eventOwner.helpers({
  isOwner: function() {
    return this.owner === Meteor.userId();
  },
  
  // totalRefund: function() {
  //   var att = Attendee.find({eventId: this._id}).fetch();
  //   var amts = [];
  //   _.forEach(att, function(item){
  //     var charge = item.charge;
  //     Meteor.call('getCharge', charge, function(error, result){
  //       if (error) {
  //         console.log(error);
  //       } else {
  //         console.log(result.amount);
  //         amts.push(result.amount);
  //       }
  //     });
  //   });
  //   console.log(amts);
  // },
  
  totalAttendees: function () {
    var count = Attendee.find({eventId: this._id}).count();
    return count;
  }
});

Template.eventOwner.events({
  'click .refund' : function() {
    var doc = CalEvent.findOne({_id: this._id});
    Bert.alert(doc._id);
    // Meteor.call("removeCal", doc);
  },

  'click .glyphicon-pencil' : function() {
    var doc = CalEvent.findOne({_id: this._id});
    Meteor.call('editEvent', doc);
  }
});