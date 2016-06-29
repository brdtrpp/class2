Meteor.methods({
  // craftAdminEmail: function(doc) {
  //   if (doc.to == 'beta_list') {
  //     Meteor.call('betaListEmail', doc);
  //   } else if (doc.to == 'users') {
  //     Meteor.call('userListEmail', doc);
  //   } else if (doc.to == 'test') {
  //     doc.to = 'trapp2357@gmail.com',
  //     Meteor.call('sendEmail', doc);
  //   }
  // },

  userListEmail: function(doc) {
    var users = Meteor.users.find().fetch();
    _.forEach(users, function(user) {

      doc.to = user.emails[0].address;
      doc.from = "support@joinclass.co";
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

  chargeEmail : function(doc, owner) {
    doc.from = "support@joinclass.co";
    doc.to = Meteor.users.findOne({_id: owner}).emails[0].address;
    
    Meteor.call('sendEmail', doc);
  },

  craftEmail: function(mailFields){
    console.log(mailFields);
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


    if (Meteor.settings.public.environ == "production") {
      Meteor.Mailgun.send({
        to: mailFields.to,
        from: mailFields.from,
        subject: mailFields.subject,
        html: mailFields.html
      });
    }

    if (Meteor.settings.public.environ == "development") {
      console.log({
        to: mailFields.to,
        from: mailFields.from,
        subject: mailFields.subject,
        html: mailFields.html
      });
    }
    console.log("email sent!");
  }
});