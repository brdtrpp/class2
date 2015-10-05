    Template.calendar.helpers({
        calendarOptions: {
            // Standard fullcalendar options
            height: window.innerHeight - 85,
            // hiddenDays: [ 0 ],
            slotDuration: '01:00:00',
            minTime: '00:00:01',
            maxTime: '24:00:00',
            lang: 'en',
            // Function providing events reactive computation for fullcalendar plugin
            dayClick: function(date, jsEvent, view) {
              console.log('Clicked on: ' + date.format());
              var calendarEvent = {};
                calendarEvent.start = date.format();
                calendarEvent.end = date.format();
                calendarEvent.title = 'New Event';
                calendarEvent.owner = Meteor.userId();
                Meteor.call('saveCalEvent',calendarEvent);
              $('#calevent-update').modal('show');
              console.log('Modal Fired');
            },
            events: function(start, end, timezone, callback) {
              console.log("Events Trigger");
                console.log(start);
                console.log(end);
                console.log(timezone);
                var events = CalEvent.find();
                // Get only events from one document of the Calendars collection
                // events is a field of the Calendars collection document
                // var calendar = CalEvent.findOne();
                // events need to be an array of subDocuments:
                // each event field named as fullcalendar Event Object property is automatically used by fullcalendar
                // if (calendar && calendar.events) {
                //     calendar.events.forEach(function (event) {
                //         eventDetails = {};
                //         for(key in event)
                //             eventDetails[key] = event[key];
                //         events.push(eventDetails);
                //     });
                // }
                callback(events);
            },
            // Optional: id of the calendar
            // id: "calendar1" + MeteorId(),
            // Optional: Additional classes to apply to the calendar
            // addedClasses: "col-md-8",
            // Optional: Additional functions to apply after each reactive events computation
            autoruns: [
                function () {
                    console.log("user defined autorun function executed!");
                }
            ]
        },
    });