Template.teach.helpers({
  isAdmin: function() {

  },

  blog: function () {
    return Blog.find().fetch()
  }
});
