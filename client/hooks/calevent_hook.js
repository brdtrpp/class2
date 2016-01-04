AutoForm.hooks({
  insertClass:{
    before:{
      insert: function(doc) {
        if (doc.recur) {
          Meteor.call('recur', doc);
        } else {
          Meteor.call('saveCalEvent',doc);
        }
        Router.go('/my-classes');
        return false;
      }
    },
  },
})