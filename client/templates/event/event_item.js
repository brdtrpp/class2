Template.eventItem.helpers({
  isOwner: function() {
    return this.owner === Meteor.userId();
  },

  attendee: function() {
    var atts = [];
    var att = Attendee.find({eventId: this._id}).fetch();
    var ret = Attendee.find({reEventId: this._id}).fetch();
    if (Session.equals('attView', 'current')){
      att.forEach( function(item){
        atts.push(item);
      });
    } else if(Session.equals('attView', 'refunded')){
      ret.forEach( function(items) {
        atts.push(items);
      });
    }
    return atts;
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
    var cPrice = this.price * 1.10;
    return cPrice.toFixed(2);
  },
  
  canceled: function() {
    console.log()
    return this.canceled;
  },

  timeRes: function () {
    var start = CalEvent.findOne({_id: this._id}).start;
    return moment().isBefore(start);
  },

  attendeeList: function() {
    if (Session.equals('attView', 'current')){
      return "Attendees";
    } else if (Session.equals('attView', 'refunded')){
      return "Past/Refunded Attendees";
    }
  }

});

Template.eventItem.events({
  'submit': function () {
    $('#attend').modal('hide');
  },

  'click .refund':function() {
    var doc = CalEvent.findOne({_id: this._id});
    if(doc.price == null){
      Meteor.call('removeCal', doc);
      console.log(doc);
    } else{
      Meteor.call('refundEvent', doc);
      console.log('refund');
    }

  }
});

Template.eventItem.onRendered(function(){
  Session.set('attView', "current");
  var ownerId = CalEvent.findOne({id: this.id}).owner;
  var owner = Meteor.user({_id: ownerId});
  if (owner.profile.affiliateId) {
    Session.set('rAffiliate', owner.profile.affiliateId);
  }
});
