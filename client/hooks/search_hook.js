AutoForm.hooks({
  search:{
    onSubmit: function(doc) {
      Meteor.call('search', doc, function(error, result){
        Session.set('classes', result);
      });
      return false;
    }
  }
});