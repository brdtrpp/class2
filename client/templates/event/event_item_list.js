Template.eventItemList.helpers({
  isOwner: function() {
    return this.owner === Meteor.userId();
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
});