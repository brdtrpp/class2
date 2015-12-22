(function(){Meteor.methods({
  getIP: function(){
      var ip = this.connection.clientAddress;
      return ip;
  }
});
}).call(this);

//# sourceMappingURL=user_methods.js.map
