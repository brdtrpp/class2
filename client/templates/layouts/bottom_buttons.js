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
  'click .month': function() {
    Session.set('view', 'week');
    var fc = $('.fc');
    fc.fullCalendar( 'changeView', 'month' );
  },
  'click .week': function() {
    Session.set('view', 'day');
    var fc = $('.fc');
    fc.fullCalendar( 'changeView', 'basicWeek' );
  },
  'click .day': function() {
    Session.set('view', 'agendaweek');
    var fc = $('.fc');
    fc.fullCalendar( 'changeView', 'basicDay' );
  },
  'click .agendaweek': function() {
    Session.set('view', 'agendaday');
    var fc = $('.fc');
    fc.fullCalendar( 'changeView', 'agendaWeek' );
  },
  'click .agendaday': function() {
    Session.set('view', 'month');
    var fc = $('.fc');
    fc.fullCalendar( 'changeView', 'agendaDay' );
  },
  'click .prev': function() {
    var fc = $('.fc');
    fc.fullCalendar('prev');
  },
  'click .next': function() {
    var fc = $('.fc');
    fc.fullCalendar('next');
  },
  'click .today': function() {
    var fc = $('.fc');
    fc.fullCalendar('today');
  },

  'click .home': function() {
    Router.go("getPaid");
  },
  
  'click .cached': function() {
    if (Session.equals('page', 'myEvent')){
      if (Session.equals("tense", "future")) {
        Session.set("tense", "past");
      } else {
        Session.set("tense", "future");
      }
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