Template.payout.helpers({
  card : function(){
    Meteor.call("getCard", function(error, result) {
      if (error) {
        Bert.alert("You don't have a card stored", 'warning');
      } else if (result) {
        Session.set("card", result);
      }
    });
    var card = Session.get('card');
    return card;
  },
})