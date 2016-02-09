// SyncedCron.add({
//   name: 'Test',
//   schedule: function(parser) {
//     // parser is a later.parse object
//     return parser.text('every 1 minute');
//   },
//   job: function() {
//     var today = moment().add(1, 'd').toISOString();
//     var events = CalEvent.find({price: { $gt: 0 }}).fetch();
//     _.forEach(events, function(event) {
//       if (moment(event.start).isSame(today, 'day')){
//         console.log(event.start);
//       }
//     });
//   }
// });