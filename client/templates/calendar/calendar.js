Template.calendar.helpers({
    options: function() {
        return {
          height: $(window).height() - 80,
          timezone: "local",
          defaultView:'agendaWeek',
          handleWindowResize: true,
          editable: true,
          selectable: true,
          header: {
            left: "month,agendaWeek,agendaDay",
            center: "title",
          },
          eventLimit: true,
          slotDuration: '01:00:00',
          events: function(start,end,timezone,callback) {
            var events = CalEvent.find().fetch();
            color: 'yellow';
            callback(events);
          },
          
          // dayClick: function(date, jsEvent, view) {
          //   var ce = {};
          //   ce.start = date.format();
          //   ce.end = date.add(1,"h").format();
          //   Meteor.call('saveCalEvent',ce);
          // },
          eventClick: function(event, jsEvent, view) {
            Router.go('/class/'+event._id, {
            });
          },

          eventDrop: function(event, delta, revertFunc, jsEvent, ui, view) {
            var id = event._id;
            Meteor.call('moveEvent', id, delta);
          },

          eventAfterAllRender: function(view) {
            // console.log("Events have been rendered");
          },

          eventResizeStart: function(event, jsEvent, ui, view) {

          },

          select: function(start, end, jsEvent, view) {
            var ce = {};
            ce.start = start._d;
            ce.end = end._d;
            Meteor.call('saveCalEvent', ce);
          },

          eventResize: function(event, delta, revertFunc, jsEvent, ui, view) {
            if (Meteor.userId() === event.owner) {
              var id = event._id;
              Meteor.call('resizeCalEvet', id, delta);
            } else {
              Bert.alert("You are not allowed to modify this event", "danger", "fixed-bottom");
            }
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