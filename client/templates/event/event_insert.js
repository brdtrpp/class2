AutoForm.hooks({
  insertClass:{
    before:{
      insert: function(doc) {
        if (doc.recur != undefined) {
          Meteor.call('recur', doc);
          return doc;
        } else {
          return doc;
        }
      }
    }
  }
})