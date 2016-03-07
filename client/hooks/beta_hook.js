AutoForm.hooks({
  betaSignUp : {
    before: {
      insert:function(doc){
        if (BetaList.find({email: doc.email}).count() > 0) {
          Bert.alert("You have already sign-up for our beta program.", 'danger');
        } else {
          Meteor.call('sendEmail',{
            to: doc.email,
            from: 'support@joinclass.co',
            subject: 'Welcome to Class!',
            text: 'Thank you for signing up for our beta list.',
            html: "<h1>Welcome</h1>",
          });
          Bert.alert("Welcome " + doc.email + " to the beta list!");
          return doc;
        }
      }
    },
    beginSubmit: function() {},
    endSubmit: function() {}
  }
});