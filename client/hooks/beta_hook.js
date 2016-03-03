AutoForm.hooks({
  betaSignUp : {
    before: {
      insert:function(doc){
        Bert.alert("Welcome " + doc.email + " to the beta list!");
        return doc;
      }
    }
  }
})