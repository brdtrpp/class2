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


  userListEmail: function(eventId) {
    var userList = Attendee.find({eventId: eventId}).fetch();
    var owner = Meteor.user({_id: CalEvent.findOne({_id: eventId}).owner}).emails[0].address;
    console.log(owner);
    _.forEach(userList, function(user) {
      muser = Meteor.user({_id: user.owner});
      doc = {
        to: muser.emails[0].address,
        from: owner,
        subject: "Toaster",
        html: "Toaster"
      };

      Meteor.call('sendEmail', doc)
      // console.log(doc);
    });
    // _.forEach(userList, function(user) {
    //   doc.to = user.emails[0].address;
    //   Meteor.call('sendEmail', doc);
    // });
  },

  craftEmail: function(mailFields){
    SSR.compileTemplate( mailFields.emailTemplate, Assets.getText( mailFields.asset ) );
    mailFields.html = SSR.render( mailFields.emailTemplate );
    Meteor.call('sendEmail', mailFields);
  },

  sendEmail: function (mailFields) {
    // console.log(mailFields);
    console.log("about to send email...");

    // check([mailFields.to, mailFields.from, mailFields.subject, mailFields.html], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Meteor.Mailgun.send({
      to: mailFields.to
      // from: mailFields.from,
      // subject: mailFields.subject,
      // html: mailFields.html
    });

    // console.log({
    //   to: mailFields.to,
    //   from: mailFields.from,
    //   subject: mailFields.subject,
    //   html: mailFields.html
    // });

    console.log("email sent!");
  }
});