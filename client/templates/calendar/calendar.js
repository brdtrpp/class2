Template.calendar.helpers({
  calEventIndex: () => CalEventIndex, // instance of EasySearch.Index
  getSearchAttributes :{
      class: "form-control",
      placeholder: "Search",
  },
  options: function() {
    return {
      height: $(window).height() - 115,
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
            if (Meteor.user().profile.homeAddress) {
              var event = CalEventIndex.search({city: Meteor.user().profile.homeAddress.city, state: Meteor.user().profile.homeAddress.state}).fetch();
            } else {
              var event = null;
            }
            callback(event);
          },
          color: '#1A6ECC',
        },
        {
          events: function(start,end,timezone,callback) {
            if (Meteor.user().profile.accountId) {
              var events = CalEventIndex.search({owner: Meteor.userId()}).fetch();
              callback(events);
            } else {
              callback(null);
            }
          },
          editable: true,
          color: '#3FB618',
        },
        {
          event: function(start,end,timezone,callback) {
            if (Meteor.user()) {
              var events = [];
              var att = Attendee.find({owner: Meteor.userId()}).fetch();
              _.forEach(att, function(item) {
                var id = CalEventIndex.search({_id: item.eventId});
                if (events.indexOf(id) == -1) {
                  events.push(id);
                }
              });
              callback(events);
            } else {
              callback(null);
            }
          }
        }
      ],

      // dayClick: funct30n(date, jsEvent, view) {
      //   var ce = {};
      //   ce.start = date.format();
      //   ce.end = date.add(1,"h").format();
      //   Meteor.call('saveCalEvent',ce);
      // },
      eventClick: function(event, jsEvent, view) {
        var cal = CalEvent.findOne(event.__originalId);
        Router.go('/class/'+ cal._id, {
        });
      },

      eventDrop: function(event, delta, revertFunc, jsEvent, ui, view) {
        var id = CalEvent.findOne(event.__originalId)._id;
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
          var id = CalEvent.findOne(event.__originalId)._id;
          Meteor.call('resizeCalEvent', id, delta);
        } else {
          Bert.alert("You are not allowed to modify this event", "danger");
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