Template.payout.helpers({
  hasCard:function() {
    Meteor.call("getCard", function(error, result) {
      if (error) {
        Session.set('hasCard', false);
      } else if (result) {
        Session.set('hasCard', true);
      }
    });
    return Session.get('hasCard');
  },

  card : function(){
    Meteor.call("getCard", function(error, result) {
      if (error) {
      } else if (result) {
        Session.set("card", result);
      }
    });
    var card = Session.get('card');
    return card;
  },
})