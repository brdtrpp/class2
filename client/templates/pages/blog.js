Template.blog.helpers({
  blog: function() {
    return Blog.find().fetch();
  },

  admin: function() {
    if (Meteor.user().emails[0].address === "bradley.trapp@joinclass.co") {
      return true;
    }
  }
})
