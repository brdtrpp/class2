Template.calendar.rendered = function() {
  var calendar = $('#calendar').fullCalendar({
      dayClick:function(date,allDay,jsEvent,view){
        var calendarEvent = {};
        calendarEvent.start = date;
        calendarEvent.end = date;
        calendarEvent.title = 'New Event';
        calendarEvent.owner = Meteor.userId();
        Meteor.call('saveCalEvent',calendarEvent);
      },
      events:function(start,end,calback){
        var calevent = CalEvent.find().fetch();
        calback(calevent);
      },
      eventClick:function(calEvent,jsEvent,view){
        Session.set('editing_event',calEvent._id);
        $('#title').val(calEvent.title);
      },
      eventDrop:function(reqEvent){
        Meteor.call('moveEvent',reqEvent);
      },
      editable:true,
      selectable:true
  }).data().fullCalendar;
  Deps.autorun(function(){
    CalEvent.find().fetch();
    if(calendar){
      calendar.refetchEvents();
    }
  });
};

Template.calendar.helpers({


});