Template.calendar.rendered = function() {
  var calendar = $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today myCustomButton',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      dayClick:function(date,jsEvent,view){
        var calendarEvent = {};
        calendarEvent.start = date;
        calendarEvent.end = date;
        calendarEvent.title = 'New Class';
        calendarEvent.owner = Meteor.userId();
        Meteor.call('saveCalEvent',calendarEvent);
      },
      events:function(start,end,calback){
        var calevent = CalEvent.find({}, {reactive:false}).fetch();
        calback(calevent);
      },
      eventDrop:function(reqEvent){
        Meteor.call('moveEvent',reqEvent);
      },
      editable:true,
      selectable:true,
      eventColor: '#378006',
      eventBackgroundColor: '#378006'
  }).data().fullCalendar;
  Deps.autorun(function(){
    CalEvent.find().fetch();
    if(calendar){
      calendar.refetchEvents();
    }
  });
};
