Template.blog.helpers({
  blog: function() {
    return Blog.find().fetch();
  }
})
