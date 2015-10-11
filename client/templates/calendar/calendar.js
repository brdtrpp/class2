Template.calendar.helpers({
    options: function() {
        return {
          height: $(window).height() - 80,
          defaultView:'month',
          editable: true,
          selectable: true,
          header: {
            left: "month,agendaDay,agendaWeek",
            center: "title",
          },
          events: function(start,end,timezone,callback) {
            var events = CalEvent.find().fetch();
            callback(events);
          },
          dayClick: function(start, end, jsEvent, view) {
            console.log(start.format() + " Clicked");
          },
          select: function(start, end, jsEvent, view) {
            console.log(start.format()+ end.format() + " Selected");
          },

          eventDrop: function(event, delta, revertFunc) {
            console.log(event.title + " was dropped on " + event.start.format());
            // console.log(event.title + " was dropped on " + event.end.format());
          },

          eventAfterAllRender: function(view) {
            console.log("Events have been rendered");
          },

          eventResizeStart: function(event, jsEvent, ui, view) {
            console.log(event.title + " Start Resizing Started " + event.start.format());
            // console.log(event.title + "End Resizing Started " + event.end.format());
          },

          eventResizeStop: function(event, jsEvent, ui, view) {
            console.log(event.title + " Start Resizing Stopped " + event.start.format());
            // console.log(event._id + "End Resizing Started " + event.end.format());
          },
        };
    }
});


Template.calendar.onRendered(function() {
  Tracker.autorun(function() {
      $('#calendarView').fullCalendar('refetchEvents');
  });

  var fc = this.$('.fc');
  this.autorun(function () {
      //1) trigger event re-rendering when the collection is changed in any way
      //2) find all, because we've already subscribed to a specific range
      CalEvent.find();
      fc.fullCalendar('refetchEvents');
  });
});