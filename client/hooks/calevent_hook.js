AutoForm.hooks({
  insertClass:{
    before:{
      insert: function(doc) {
        console.log(doc.id);
        if (doc.recur) {
          Meteor.call('recur', doc);
        } else {
          Meteor.call('saveCalEvent',doc);
        }
        Router.go('/my-classes');
        $('#afModal').modal('hide');
        return false;
      }
    },
    beginSubmit: function() {},
    endSubmit: function() {}
  },
  updateClass: {
    before:{
      update: function(doc) {
        var id = this.docId;
        if (doc.$set.recur) {
          Meteor.call('recur', doc);
        } else {
          Meteor.call('updateCalEvent',doc, id);
        }
        Router.go('/class/' + id);
        return false;
      }
    },
    beginSubmit: function() {},
    endSubmit: function() {}
  }
})