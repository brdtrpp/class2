Template.myEvent.helpers({  
  calevent: function() {
    return CalEvent.find({owner:Meteor.userId()});
  },
});