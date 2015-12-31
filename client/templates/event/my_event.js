Template.myEvent.helpers({
  calevent: function() {
    if (Session.get('tense') == "future") {
      return CalEvent.find({owner: Meteor.userId(), start: {$gt: moment().toISOString()}}, {sort: {start: 1}});
    } else {
      return CalEvent.find({owner: Meteor.userId(), start: {$lt: moment().toISOString()}}, {sort: {start: 1}});
    }
    
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
    if (Session.get('tense') == "future") {
      if (CalEvent.find({owner: Meteor.userId(), start: {$gt: moment().toISOString()}}, {sort: {start: 1}}).count() == 0) {
        return "no";
      } else {
        return CalEvent.find({owner: Meteor.userId(), start: {$gt: moment().toISOString()}}, {sort: {start: 1}}).count();
      }
    } else if (Session.get('tense') == "past") {
      if (CalEvent.find({owner: Meteor.userId(), start: {$lt: moment().toISOString()}}, {sort: {start: -1}}).count() == 0) {
        return "no";
      } else {
        return CalEvent.find({owner: Meteor.userId(), start: {$lt: moment().toISOString()}}, {sort: {start: -1}}).count();
      }
    }
  },
  
  classes:function() {
    if (CalEvent.find({owner: Meteor.userId(), start: {$gt: moment().toISOString()}}, {sort: {start: 1}}).count() == 1) {
      return "class";
    } else {
      return "classes";
    }
  },
  
  tense:function() {
    return Session.get('tense');
  }
});

Template.myEvent.events({
  'click .glyphicon-remove' : function() {
    var doc = CalEvent.findOne({_id: this._id});
    if (doc.courseId) {
      Meteor.call("removeCourse", doc);
    } else {
      Meteor.call("removeCal", doc);
    }
  },

  'click .glyphicon-pencil' : function() {
    var doc = CalEvent.findOne({_id: this._id});
    Meteor.call('editEvent', doc);
  },

  'click .tense' : function() {
    if (Session.get("tense") == "future") {
      Session.set("tense", "past");
    } else {
      Session.set("tense", "future");
    }
  },
});

Template.myEvent.onRendered(function(){
  Bert.alert( '<h4><b>Warning:</b>  this page will not ask for confirmation before editing or deleting classes. All changes that are made are permenant.</h4>', 'danger');
  Session.set("tense", "future");
});

