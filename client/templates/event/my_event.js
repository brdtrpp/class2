Template.myEvent.helpers({  
  calevent: function() {
    return CalEvent.find({owner:Meteor.userId()});
  },
});

Template.myEventHosted.helpers({  
  calevent: function() {
    return CalEvent.find({owner:Meteor.userId()});
  },
});

Template.myEvent.helpers({  
  calevent: function() {
    return CalEvent.find({owner:Meteor.userId()});
  },
});