  Meteor.startup(function(){
    Meteor.Mailgun.config({
      username: Meteor.settings.private.mailgunUser,
      password: Meteor.settings.private.mailgunPass
    });
  });

  // In your server code: define a method that the client can call


Meteor.methods({
  craftEmail: function(mailFields){
    SSR.compileTemplate( mailFields.emailTemplate, Assets.getText( mailFields.asset ) );
    mailFields.html = SSR.render( mailFields.emailTemplate );
    Meteor.call('sendEmail', mailFields);
  },

  sendEmail: function (mailFields) {
    // console.log(mailFields);
    console.log("about to send email...");
    check([mailFields.to, mailFields.from, mailFields.subject, mailFields.html], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    console.log(mailFields);

    Meteor.Mailgun.send({
        to: mailFields.to,
        from: mailFields.from,
        subject: mailFields.subject,
        // text: mailFields.text,
        html: mailFields.html
    });
    console.log("email sent!");
  }
});

// Meteor.call('searchCraigs');



// Meteor.call('sendEmail',{
//   to: 'support@joinclass.co',
//   from: 'support@joinclass.co',
//   subject: 'Deployed',
//   // text: 'Deployed',
//   html: "Deployed"
// });