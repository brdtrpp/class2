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
      return false;
    },
    beginSubmit: function() {},
    endSubmit: function() {}
  },

  searchLanding:{
    onSubmit: function(doc) {
      Meteor.call('search', doc, function(error, result){
        if (error) {
          Bert.alert(error.message, 'warning');
        } else {
          Session.set('classes', result);
        }
      });
      Router.go('/classes');
      return false;
    },
    beginSubmit: function() {},
    endSubmit: function() {}
  },
});