AutoForm.hooks({
  insertClass:{
    before:{
      insert: function(doc) {
        if (doc.recur) {
          Meteor.call('recur', doc);
        } else {
          Meteor.call('saveCalEvent',doc);
        }
      }
    }
  },

  deleteClass:{
    before:{
      remove: function(doc) {
        console.log("deleted");
        return doc;
      }
    }
  },
})