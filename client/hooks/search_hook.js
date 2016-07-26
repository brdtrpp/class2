AutoForm.hooks({
  // search:{
  //   onSubmit: function(doc) {
  //     console.log('LANDING');
  //
  //     Session.set('search', false);
  //     Session.set('loading', true);
  //     Meteor.call('search', doc, function(error, result){
  //       if (error) {
  //         Bert.alert(error.message, 'warning');
  //       } else {
  //         Session.set('classes', result);
  //       }
  //     });
  //     return false;
  //   },
  //   beginSubmit: function() {},
  //   endSubmit: function() {}
  // },

  searchLanding:{
    onSubmit: function(doc) {
      var page = Session.get('page')
      console.log(page);
      if(page != 'eventSearch') {
        Router.go('/classes');
      }

      if ( doc.zip || doc.radius != undefined) {

        //Randomly generate category if no category is supplied
        if (doc.category === undefined) {
          doc.category = _.sample([
            'academic',
            'style',
            'computer',
            'crafts',
            'culinary',
            'health',
            'language',
            'music',
            'performance',
            'sports',
            'fitness',
            'arts',
            'religious',
            'homeschool',
            'other'
          ]);
        }

        //close modal
        $('#searchModal').modal('hide')
        Session.set('loading', true);
        Meteor.call('search', doc, function(error, result){
          if (error) {
            Bert.alert(error.message, 'warning');
          } else {
            Session.set('classes', result);
          }
        });
      }
      return false;
    },
    beginSubmit: function() {},
    endSubmit: function() {}
  },

});
