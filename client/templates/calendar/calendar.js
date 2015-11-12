Template.calendar.helpers({
    options: function() {
        return {
          height: $(window).height() - 80,
          timezone: "local",
          defaultView:'agendaWeek',
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
            // var ce = {};
            // ce.start = date.format();
            // ce.end = date.add(1,"h").format();
            // Meteor.call('saveCalEvent',ce);
          },
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

          eventResize: function(event, delta, revertFunc, jsEvent, ui, view) {
            var id = event._id;
            Meteor.call('resizeCalEvet', id, delta);
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

Meteor.methods({
  'saveCalEvent':function(ce){
      CalEvent.insert(ce);
    },
  'moveEvent':function(event){
    return CalEvent.update({_id:event._id},{
      $set:{
        start:event.start.format(),
        end:event.end.format(),
        owner:Meteor.userId(),
      }
    });
  },
});