Template.calendar.helpers({
  options: function() {
    return {
      height: $(window).height() - 75,
      timezone: "local",
      defaultView:'agendaWeek',
      handleWindowResize: true,
      selectable: true,
      header: {
        left: "month,agendaWeek,agendaDay",
        center: "title",
      },
      eventLimit: true,
      slotDuration: '00:30:00',
      eventSources: [
        {
          events: function(start,end,timezone,callback) {
            // var events = CalEventIndex.search({title: 'Class'}).fetch();
            // var id = Meteor.userId();
            var events = CalEvent.find({owner: {$not: Meteor.userId()}}).fetch();
            callback(events);
          },
          color: '#1A6ECC',
        },
        {
          events: function(start,end,timezone,callback) {
            // var events = CalEventIndex.search({owner: Meteor.userId()}).fetch();
            var events = CalEvent.find({owner: Meteor.userId()}).fetch();
            callback(events);
          },
          editable: true,
          color: '#3FB618',
        },
      ],
  
      // dayClick: funct30n(date, jsEvent, view) {
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
        var user = Meteor.user();
        var doc = {};
        doc.start = start._d.toISOString();
        doc.end = end._d.toISOString();
        doc.street = user.profile.businessAddress.street;
        doc.city = user.profile.businessAddress.city;
        doc.state = user.profile.businessAddress.state;
        doc.zip = user.profile.businessAddress.zip;
        Meteor.call('saveCalEvent', doc);
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