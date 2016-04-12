Meteor.methods({
  craftAdminEmail: function(doc) {
    if (doc.to == 'beta_list') {
      Meteor.call('betaListEmail', doc);
    } else if (doc.to == 'users') {
      Meteor.call('userListEmail', doc);
    } else if (doc.to == 'test') {
      doc.to = 'trapp2357@gmail.com',
      Meteor.call('sendEmail', doc);
    }
  },

  betaListEmail: function(doc) {
    var beta = BetaList.find().fetch();
    _.forEach(beta, function(user) {
      doc.to = user.email;
      Meteor.call('sendEmail', doc);
    });
  },


  classEmail: function(doc) {
    var attendees = Attendee.find({eventId: doc.eventId}).fetch();
    var owner = CalEvent.findOne({_id: doc.eventId}).owner;
    doc.from = Meteor.users.findOne({_id: owner}).emails[0].address;
    _.forEach(attendees, function(att){

      doc.to = Meteor.users.findOne({_id: att.owner}).emails[0].address;
      Meteor.call('sendEmail', doc);
    });

  },

  directEmail : function(doc, owner, eventId) {
    var eventOwner = CalEvent.findOne({_id: eventId}).owner;
    doc.from = Meteor.users.findOne({_id: eventOwner}).emails[0].address;
    doc.to = Meteor.users.findOne({_id: owner}).emails[0].address;
    Meteor.call('sendEmail', doc);
  },

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

    // Meteor.Mailgun.send({
    //   to: mailFields.to,
    //   from: mailFields.from,
    //   subject: mailFields.subject,
    //   html: mailFields.html
    // });

    console.log({
      to: mailFields.to,
      from: mailFields.from,
      subject: mailFields.subject,
      html: mailFields.html
    });

    console.log("email sent!");
  }
});