Meteor.startup(function() {
  CalEvent._ensureIndex({
    'title': "text",
    'category': 'text',
    'description': 'text',
    'ownerName': 'text'
  });
  
  SyncedCron.add({
    name: 'Crunch some important numbers for the marketing department',
    schedule: function(parser) {
      // parser is a later.parse object
      return parser.text('every 2 minutes');
    },
    job: function() {
      console.log('e');
    }
  });
});