Template.myEvent.helpers({
  instructing:function() {
    if (Session.get('tense') == "future") {
      return "Instructing";
    } else if (Session.get('tense') == "past") {
      return "Instructed";
    }
  },
  calevent: function() {
    if (Session.get('tense') == "future") {
      return CalEvent.find({owner: Meteor.userId(), canceled: false, start: {$gt: moment().toISOString()}}, {sort: {start: 1}});
    } else {
      return CalEvent.find({owner: Meteor.userId(), start: {$lt: moment().toISOString()}}, {sort: {start: 1}});
    }

  },

  edit:function() {
    if (Session.get('tense') == "future") {
      return "Edit";
    } else if (Session.get('tense') == "past") {
      return "Refund";
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
    if (Session.equals('tense', "future") ) {
      if (CalEvent.find({owner: Meteor.userId(), canceled: false, start: {$gt: moment().toISOString()}}, {sort: {start: 1}}).count() == 0) {
        return "no";
      } else {
        return CalEvent.find({owner: Meteor.userId(), canceled: false, start: {$gt: moment().toISOString()}}, {sort: {start: 1}}).count();
      }
    } else if (Session.get('tense') == "past") {
      if (CalEvent.find({owner: Meteor.userId(), canceled: false, start: {$lt: moment().toISOString()}}, {sort: {start: -1}}).count() == 0) {
        return "no";
      } else {
        return CalEvent.find({owner: Meteor.userId(), canceled: false, start: {$lt: moment().toISOString()}}, {sort: {start: -1}}).count();
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
  },

  refund:function() {
    if (Session.equals("tense", "past")){
      return "share-alt";
    } else if (Session.equals("tense", "future")) {
      return "remove";
    }
  },

  select:function() {
    if (CalEvent.findOne({_id: this._id, selected: true})) {
      return "selected";
    } else {
      return 'unselected';
    }
  },

  checkbox:function() {
    if (CalEvent.findOne({_id: this._id, selected: true})) {
      return "check_box";
    } else {
      return 'check_box_outline_blank';
    }
  }
});

Template.myEvent.events({
  'click .glyphicon-share-alt' : function() {
    if (Meteor.userId() === this.owner) {
      var doc = this;
      Meteor.call('refundEvent', doc);
    }
  },

  'click .delete': function() {
    var events = CalEvent.find({selected: true}).fetch();
    _.forEach(events, function(doc) {
      Meteor.call('removeCal', doc);
    });
  },

  'click .unselected':function() {
    CalEvent.update({_id: this._id}, {$set: {selected: true}});
  },

  'click .selected':function() {
    CalEvent.update({_id: this._id}, {$set: {selected: false}});
  },

  'click .clickable-column' : function () {
    Router.go('/class/' + this._id);
  },

  'click .glyphicon-remove' : function() {
    var doc = CalEvent.findOne({_id: this._id});
    if (moment(doc.start).isBefore(moment())){
      Bert.alert("You cannot delete past events");
    } else if (doc.courseId) {
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
    if (Session.equals("tense", "future")) {
      Session.set("tense", "past");
    } else {
      Session.set("tense", "future");
    }
    if (Session.equals("tense", "future")) {
      Bert.alert( '<h4><b>Danger:</b>  this page will not ask for confirmation before editing or deleting classes. All changes that are made are permanent.</h4>', 'danger');
    } else if (Session.equals("tense", "past")) {
      Bert.alert('<h4><b>Warning:</b> you cannot delete past classes, only refund them (wholly or partially). All refunds are permanent!</h4>', 'warning');
    }
  },
});

Template.myEvent.onRendered(function(){
  Session.set("tense", "future");
  Bert.alert( '<h4><b>Warning:</b> this page will not ask for confirmation before editing or deleting classes. All changes that are made are permenant.</h4>', 'danger');
});

