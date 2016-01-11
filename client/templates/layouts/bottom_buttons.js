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

  isAccount: function() {
    if (Meteor.user().profile.accountId) {
      return true;
    }
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
  //
});