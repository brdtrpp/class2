AutoForm.hooks({
  blogInsert : {
    before: {
      insert:function(doc){
        $('#blog').modal('hide');
        return doc;
      }
    },
    beginSubmit: function() {},
    endSubmit: function() {}
  }
});
