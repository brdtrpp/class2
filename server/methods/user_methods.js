Meteor.methods({
  getIP: function(){
      var ip = this.connection.clientAddress;
      return ip;
  }
});

// Meteor.onConnection(function(connection){ 
//   console.log(connection); 
// });