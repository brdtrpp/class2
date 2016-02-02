AutoForm.hooks({
  search:{
    onSubmit: function(doc) {
      Meteor.call('search', doc, function(error, result){
        if (error) {
          Bert.alert(error.message, 'warning');
        } else {
          Session.set('classes', result);
        }
      });
      Search.insert(doc);
      return false;
    },
    beginSubmit: function() {},
    endSubmit: function() {}
  }
});