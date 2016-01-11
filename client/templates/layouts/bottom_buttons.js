Template.bottomButtons.helpers({
  view: function() {
    var view = Session.get('view');
    return view;
  },

  isUser: function() {
    if (Meteor.user()) {
      return true;
    }
  },

  calendar: function() {
    return Session.equals('page', "calendar");
  }

});

Template.bottomButtons.events({
  'click .prev': function() {
    var fc = $('.fc');
    fc.fullCalendar('prev');
  },
  'click .next': function() {
    var fc = $('.fc');
    fc.fullCalendar('next');
  },
  'click .today': function() {
    if (Session.equals('page', 'calendar')){
      var fc = $('.fc');
      fc.fullCalendar('today');
    } else {
      Router.go('calendar');
    }

  },

  'click .home': function() {
    if (Meteor.user().profile.accountId) {
      if(Session.equals('page', 'getPaid')){
        Router.go("myEvent");
      } else {
        Router.go("getPaid");
      }
    } else {
      Router.go("myAttend");
    }

  },

  'click .cached': function() {
    if (Session.equals('page', 'myEvent')){
      if (Session.equals("tense", "future")) {
        Session.set("tense", "past");
      } else {
        Session.set("tense", "future");
      }
    } else if (Session.equals('page', 'myAttend')){
        if (Session.equals("status", "attending")){
        Session.set('status', 'attended');
      } else if (Session.equals("status", "attended")) {
        Session.set('status', 'refunded');
      } else {
        Session.set('status', 'attending');
      }
    } else if (Session.equals('page', "calendar")){
        if (Session.equals('view', 'basicWeek')) {
          Session.set('view', 'basicDay');
        } else if (Session.equals('view', 'basicDay')){
          Session.set('view', 'month');
        } else if (Session.equals('view', 'month')) {
          Session.set('view', 'agendaWeek');
        } else if (Session.equals('view', 'agendaWeek')) {
          Session.set('view', 'agendaDay');
        } else if (Session.equals('view', 'agendaDay')) {
          Session.set('view', 'basicWeek');
        }

      var fc = $('.fc');
      fc.fullCalendar('changeView', Session.get('view'));
    }
  },

  "click .search": function() {
    if ((Session.equals('page', 'calendar') || Session.equals('page', 'eventSearch'))) {
      if ( Session.equals('search', false)) {
        Session.set('search', true);
      } else if (Session.equals('search', true)){
        Session.set('search', false);
      }
    } else {
      Session.set('search', true);
      Router.go('eventSearch');
    }
  }
});