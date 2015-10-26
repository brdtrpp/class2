Meteor.methods({
  basuccess : function(message) {
    Bert.alert( message, 'success', 'fixed-bottom' );
  },
});