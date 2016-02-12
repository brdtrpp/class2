  Meteor.startup(function(){
    Meteor.Mailgun.config({
      username: Meteor.settings.private.mailgunUser,
      password: Meteor.settings.private.mailgunPass
    });
    console.log(Meteor.settings.private.mailgunUser);
  });

  // In your server code: define a method that the client can call



Meteor.methods({
  sendEmail: function (mailFields) {
      console.log("about to send email...");
      check([mailFields.to, mailFields.from, mailFields.subject, mailFields.text, mailFields.html], [String]);

      // Let other method calls from the same client start running,
      // without waiting for the email sending to complete.
      this.unblock();

      Meteor.Mailgun.send({
          to: mailFields.to,
          from: mailFields.from,
          subject: mailFields.subject,
          text: mailFields.text,
          html: mailFields.html
      });
      console.log("email sent!");
  }
});

Meteor.call('sendEmail',{
  to: 'support@joinclass.co',
  from: 'support@joinclass.co',
  subject: 'I really like sending emails with Mailgun!',
  text: 'Mailgun is totally awesome for sending emails!',
  html: 'With meteor it&apos;s easy to set up <strong>HTML</strong> <span style="color:red">emails</span> too.'
});