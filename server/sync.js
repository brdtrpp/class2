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

SyncedCron.start();
