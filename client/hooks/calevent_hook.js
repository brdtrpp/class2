AutoForm.hooks({
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
        $('#afModal').modal('hide');
        return false;
      }
    },
    beginSubmit: function() {},
    endSubmit: function() {}
  }
})