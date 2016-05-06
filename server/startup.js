Meteor.startup(function() {
  CalEvent._ensureIndex({
    'title': "text",
    'category': 'text',
    'description': 'text',
    'ownerName': 'text'
  });

  console.log("DEPLOYED");

  Meteor.call('sendEmail',{
    to: 'support@joinclass.co',
    from: 'support@joinclass.co',
    subject: 'Deployed',
    html: "Deployed"
  });

});