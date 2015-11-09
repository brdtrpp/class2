AutoForm.hooks({
  insertClass:{
    before:{
      insert: function(doc) {
        if (doc.recur.type === "lesson") {
          Meteor.call('recurLessonInterval', doc);
        }
      }
    }
  }
})