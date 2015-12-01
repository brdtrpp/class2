Template.myEvent.helpers({
  calevent: function() {
    return CalEvent.find({owner: Meteor.userId(), start: {$gt: moment().toISOString()}}, {sort: {start: 1}});
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
  attending:function() {
    return Attendee.find({eventId: this._id}).count();
  },
  count:function() {
    if (CalEvent.find({owner: Meteor.userId(), start: {$gt: moment().toISOString()}}, {sort: {start: 1}}).count() == 0) {
      return "no";
    } else {
      return CalEvent.find({owner: Meteor.userId(), start: {$gt: moment().toISOString()}}, {sort: {start: 1}}).count();
    }
  },
  classes:function() {
    if (CalEvent.find({owner: Meteor.userId(), start: {$gt: moment().toISOString()}}, {sort: {start: 1}}).count() == 1) {
      return "class";
    } else {
      return "classes";
    }
  }
});

Template.myEvent.events({
  'click .glyphicon-remove' : function() {
    var doc = CalEvent.findOne({_id: this._id});
    Meteor.call("removeCal", doc);
  },

  'click .glyphicon-pencil' : function() {
    var doc = CalEvent.findOne({_id: this._id});
    Meteor.call('editEvent', doc);
  }
});

Template.myEvent.onRendered(function(){
  Bert.alert( '<h4><b>Warning:</b>  this page will not ask for confirmation before editing or deleting classes. All changes that are made are permenant.</h4>', 'danger', 'growl-top-right', 'fa-frown-o' );
});

