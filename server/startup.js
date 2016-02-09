Meteor.startup(function() {
  CalEvent._ensureIndex({
    'title': "text",
    'category': 'text',
    'description': 'text',
    'ownerName': 'text'
  });
  SyncedCron.start();
});