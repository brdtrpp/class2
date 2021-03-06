Template.eventItemList.helpers({
  cList: function() {
    if (this.pid) {
      return true;
    } else {
      return false;
    }
  },
  
  noClass: function() {
    if (this._id === "NoClass") {
      return true;
    } else {
      return false;
    }
  },

  isOwner: function() {
    return this.owner === Meteor.userId();
  },

  startDate:function() {
    var start = this.start;
    var date = moment(start).format('LLL');
    return date;
  },

  endDate:function() {
    var end = this.end;

    if(!end)
      return false;

    var date = moment(end).format('LLL');
    return date;
  },

  customerPrice: function() {
    var cPrice = this.price * 1.1;
    return cPrice.toFixed(2);
  },

  aCount: function() {
    return Attendee.find({eventId: this._id}).count();
  },

  timeRes: function () {
    var start = moment(CalEvent.findOne({_id: this._id}).start).subtract(1, "days");
    return moment().isBefore(start);
  },

  isAttendee: function() {
    if (Attendee.find({eventId: this._id}).count() > 0) {
      return true;
    } else {
      return false;
    }
  },
  attendee: function() {
    if (Session.equals("status", "refunded")){
      return Attendee.find({reEventId: this._id});
    } else if (Session.equals("status", "attending")){
      return Attendee.find({eventId: this._id});
    }
  },
  isAvailableForVoting: function() {
    if((new Date(this.end)).getTime() <= (new Date().getTime()))
      if(Attendee.findOne({eventId: this._id, owner: Meteor.userId()}))
        return true;

    return false;
  }
});

Template.eventItemList.events({
  'click .body-click' : function (event) {
    event.stopImmediatePropagation();

    if (/facebook|twitter/.test(event.target.className)) {
      return false;
    }
    else if(event.currentTarget.name == "weblink") {
      window.open(event.currentTarget.href, '_system')

      return false;
    }
  },
  'click .refund' : function () {
    var att = Attendee.findOne({eventId: this._id, owner: Meteor.userId(),});
    Meteor.call('refundAttendee', att);
  },
});