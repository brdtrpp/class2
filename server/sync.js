SyncedCron.add({
  name: 'Test',
  schedule: function(parser) {
    // parser is a later.parse object
    return parser.text('every 20 seconds');
  },
  job: function() {
    var today = moment().toISOString();
    var events = CalEvent.find({price: { $gt: 0 }}).fetch();
    _.forEach(events, function(event) {
      // if (moment(event).isSame(today._d, 'day')) {
      if (moment(event.start).isSame(today, 'day')){
        console.log(event.start);
      }
    });
  }
});