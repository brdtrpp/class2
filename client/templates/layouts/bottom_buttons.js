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

  hasAccount: function() {
    return Meteor.user().profile.accountId;
  },

  calendar: function() {
    return Session.equals('page', "calendar");
  },

  landing: function() {
   if (Session.equals('page', 'home') && !Meteor.user) {
     return true;
   }
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
      if(Session.equals('page', 'myEvent')){
        Router.go("getPaid");
      } else {
        Router.go("myEvent");
      }
    } else {
      Router.go("myAttend");
    }

  },

  'click .cached': function() {
    if (Session.equals('page', 'myEvent')){
      if (Session.equals("tense", "future")) {
        Session.set("tense", "past");
      } else if (Session.equals("tense", "past")){
        Session.set("tense", "canceled");
      } else if (Session.equals("tense", "canceled")){
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
    } else if (Session.equals('page', 'eventItem')) {
      if(Session.equals('attView', "current")) {
        Session.set('attView', "refunded");
      } else {
        Session.set('attView', "current");
      }
    }
  },

  "click .search": function() {
    if ((Session.equals('page', 'calendar') || Session.equals('page', 'eventSearch'))) {
      if ( Session.equals('search', false)) {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
        Session.set('search', true);
      } else if (Session.equals('search', true)){
        $('html, body').animate({ scrollTop: 0 }, 'fast');
        Session.set('search', false);
      }
    } else {
      $('html, body').animate({ scrollTop: 0 }, 'fast');
      Session.set('search', true);
      Router.go('eventSearch');
    }
  }
});