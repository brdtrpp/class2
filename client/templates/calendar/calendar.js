Template.calendar.helpers({
  calEventIndex: () => CalEventIndex, // instance of EasySearch.Index
  getSearchAttributes :{
      class: "form-control",
      placeholder: "Search",
  },
  options: function() {
    return {
      // theme: true,
      height: $(window).height() - 125,
      timezone: "local",
      defaultView:'basicWeek',
      handleWindowResize: true,
      selectable: true,
      header: {
        left: "",
        center: "title",
        right: "",
      },
      eventLimit: true,
      slotDuration: '00:30:00',
      eventSources: [
        {
          events: function(start,end,timezone,callback) {
            if (Meteor.user().profile.homeAddress) {
              var event = CalEventIndex.search({city: Meteor.user().profile.homeAddress.city, state: Meteor.user().profile.homeAddress.state}).fetch();
            }
            callback(event);
          },
          color: '#2780e3',
        },
        {
          events: function(start,end,timezone,callback) {
            if (Meteor.user().profile.accountId) {
              console.log('Toaster');
              var events = CalEventIndex.search({owner: Meteor.userId()}).fetch();
              callback(events);
            } else {
              callback(null);
            }
          },
          editable: true,
          color: '#3fb618',
        },
        {
          events: function(start,end,timezone,callback) {

            var events = Session.get('classes');
            callback(events);

          },
          color: '#9954bb',
        }
      ],

      // dayClick: functn(date, jsEvent, view) {
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
  },
});



Template.calendar.onRendered(function() {
  Session.set('view', 'basicWeek');
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