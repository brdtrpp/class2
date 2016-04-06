Meteor.startup(function() {
  CalEvent._ensureIndex({
    'title': "text",
    'category': 'text',
    'description': 'text',
    'ownerName': 'text'
  });

  // Meteor.Mailgun.config({
  //   username: 'YOUR_MAILGUN_USERNAME',
  //   password: 'YOUR_MAILGUN_PASSWORD'
  // });

  Meteor.call('sendEmail',{
    to: 'support@joinclass.co',
    from: 'support@joinclass.co',
    subject: 'Deployed',
    html: "Deployed"
  });

  // var beta = BetaList.find().fetch();
  // _.forEach(beta, function (user) {
  //   Meteor.call('craftEmail',{
  //     emailTemplate: 'betaList',
  //     asset: 'beta_list.html',
  //     to: user.email,
  //     from: 'support@joinclass.co',
  //     subject: 'Welcome to Class!',
  //   });
  // });

  // SyncedCron.add({
  //   name: 'Crunch some important numbers for the marketing department',
  //   schedule: function(parser) {
  //     // parser is a later.parse object
  //     return parser.text('every 2 minutes');
  //   },
  //   job: function() {
  //     console.log('e')
  //   }
  // });
});