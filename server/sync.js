SyncedCron.add({
  name: 'charge',
  schedule: function(parser) {
    return parser.text('every 10 minutes');
  },
  job: function() {
    var sendEmail = function(doc, owner, eventId) {
      Meteor.call('chargeEmail', doc, owner, function(err, res) {});
    };

    var today = moment().add(8, 'h').toISOString();
    var events = CalEvent.find({price: { $gt: 0 }}).fetch();

    _.forEach(events, function(event) {
      if (moment(event.start).isSame(today, 'hour')) {
        var attendees = Attendee.find({eventId: event._id, charge: null}).fetch();

        _.forEach(attendees, function(attendee) {
          Meteor.call('charge', event, attendee, function(error, result) {
            if (error) {
              status = "Unsuccessful";
            } else {
              status = "Successful";

              Meteor.call('updateCharge', attendee._id, result.id);
            }
          });

          sendEmail({subject: 'Payment Notification', html: 'Status: ' + status}, attendee.owner);
          sendEmail({subject: 'Payment Notification', html: 'Status: ' + status}, event.owner);
        });
      }
    });
  }
});

// SyncedCron.add({
//   name: 'SumoMe',
//   schedule: function(parser) {
//     return parser.text('every 1 second');
//   },
//   job: function() {
//     Inject.rawModHtml('inject a script at the beginning of the head', function(html) {
//       if (this.userId === undefined) {
//         return html.replace('<toaster>', '<script src="//load.sumome.com/" data-sumo-site-id="fb90c4b5177765d378ca9a4d142aeeeb7d7161533962199c1548c017066febfc" async="async"></script>');
//       } else {
//         console.log(this.userId);
//         return html.replace('<script src="//load.sumome.com/" data-sumo-site-id="fb90c4b5177765d378ca9a4d142aeeeb7d7161533962199c1548c017066febfc" async="async"></script>', '<toaster>');
//       }
//     });
//   }
// });

SyncedCron.start();
