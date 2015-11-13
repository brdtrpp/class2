AutoForm.hooks({
  insertClass:{
    before:{
      insert: function(doc) {
        if (doc.recur != undefined) {
          Meteor.call('recur', doc);
        } else {
          console.log(doc);
          return doc;
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