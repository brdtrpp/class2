(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/mailgun_config.js                                            //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.startup(function () {                                           // 1
  Meteor.Mailgun.config({                                              // 2
    username: Meteor.settings["private"].mailgunUser,                  // 3
    password: Meteor.settings["private"].mailgunPass                   // 4
  });                                                                  //
});                                                                    //
                                                                       //
// In your server code: define a method that the client can call       //
                                                                       //
Meteor.methods({                                                       // 12
  sendEmail: function (mailFields) {                                   // 13
    console.log("about to send email...");                             // 14
    check([mailFields.to, mailFields.from, mailFields.subject, mailFields.text, mailFields.html], [String]);
                                                                       //
    // Let other method calls from the same client start running,      //
    // without waiting for the email sending to complete.              //
    this.unblock();                                                    // 19
                                                                       //
    Meteor.Mailgun.send({                                              // 21
      to: mailFields.to,                                               // 22
      from: mailFields.from,                                           // 23
      subject: mailFields.subject,                                     // 24
      text: mailFields.text,                                           // 25
      html: mailFields.html                                            // 26
    });                                                                //
    console.log("email sent!");                                        // 28
  }                                                                    //
});                                                                    //
                                                                       //
// Meteor.call('searchCraigs');                                        //
                                                                       //
Meteor.call('sendEmail', {                                             // 34
  to: 'support@joinclass.co',                                          // 35
  from: 'support@joinclass.co',                                        // 36
  subject: 'Deployed',                                                 // 37
  text: 'Deployed',                                                    // 38
  html: "Deployed"                                                     // 39
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=mailgun_config.js.map
