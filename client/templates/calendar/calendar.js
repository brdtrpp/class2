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
          eventLimit: true,
          events: function(start,end,timezone,callback) {
            var events = CalEvent.find().fetch();
            callback(events);
          },
          dayClick: function(date, jsEvent, view) {
            console.log(date.format("DD/MM/YYYY hh:mm a") + " Clicked");
            var ce = {};
            ce.description = "This is a test event";
            ce.start = date.format();
            ce.end = date.add(1,"h").format();
            ce.price = 10;
            Meteor.call('saveCalEvent',ce);
          },
          eventClick: function(event, jsEvent, view) {
            Router.go('/class/'+event._id, {
            });
          },

          eventDrop: function(event, delta, revertFunc) {
            console.log(event.title + " was dropped on " + event.start.format("DD/MM/YYYY hh:mm a"));
            Meteor.call('moveEvent', event);
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