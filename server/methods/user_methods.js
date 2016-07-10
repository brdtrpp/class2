Meteor.methods({
  getIP: function(){
      var ip = this.connection.clientAddress;
      return ip;
  },

  addBlogRoles: function (doc) {
    console.log(doc);
    var user = Accounts.findUserByEmail(doc.email)
    Meteor.users.update({_id: user._id}, {$push: {roles: doc.roles}})
    console.log(user);
  }
});
