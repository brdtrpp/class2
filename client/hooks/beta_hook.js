AutoForm.hooks({
  betaSignUp : {
    before: {
      insert:function(doc){
        if (BetaList.find({email: doc.email}).count() > 0) {
          Bert.alert("You have already sign-up for our beta program.", 'danger');
        } else {
          // SSR.compileTemplate( 'betaList', Assets.getText( 'beta_list.html' ) );
          // Meteor.call('craftEmail',{
          //   emailTemplate: 'betaList',
          //   asset: 'beta_list.html',
          //   to: doc.email,
          //   from: 'support@joinclass.co',
          //   subject: 'Welcome to Class!',
          // });
          Bert.alert("Welcome " + doc.email + " to the beta list!");
          return doc;
        }
      }
    },
    beginSubmit: function() {},
    endSubmit: function() {}
  }
});