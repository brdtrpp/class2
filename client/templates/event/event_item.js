Template.eventItem.helpers({
  isOwner: function() {
    return this.owner === Meteor.userId();
  },

  attendee: function() {
    return Attendee.find({eventId: this._id});
  },

  refunded: function() {
    var atts = [];
    var att = Attendee.find({reEventId: this._id}).fetch();
    var ret = Attendee.find({eventId: this._id}).fetch();
    att.forEach( function(item){
      console.log(item);
      atts.push(item);
    });
    ret.forEach( function(items) {
      atts.push(item);
      console.log(item);
    });
    console.log(atts);
    // return atts;
  },

  aCount: function() {
    return Attendee.find({eventId: this._id}).count();
  },

  startDate:function() {
    var start = CalEvent.findOne({_id: this._id}).start;
    var date = moment(start).format('LLL');
    return date;
  },

  endDate:function() {
    var end = CalEvent.findOne({_id: this._id}).end;
    var date = moment(end).format('LLL');
    return date;
  },

  customerPrice: function() {
    var cPrice = this.price * 1.1;
    return cPrice.toFixed(2);
  },

  timeRes: function () {
    var start = CalEvent.findOne({_id: this._id}).start;
    return moment().isBefore(start);
  },

});

Template.eventItem.events({
  'submit': function () {
    $('#attend').modal('hide');
  },
});