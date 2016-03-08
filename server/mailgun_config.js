Meteor.startup(function(){
  Meteor.Mailgun.config({
    username: Meteor.settings.private.mailgunUser,
    password: Meteor.settings.private.mailgunPass
  });
});

// In your server code: define a method that the client can call
// Meteor.call('searchCraigs');


Meteor.call('sendEmail',{
  to: 'support@joinclass.co',
  from: 'support@joinclass.co',
  subject: 'Deployed',
  html: "Deployed"
});