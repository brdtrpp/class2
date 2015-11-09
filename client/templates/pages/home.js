Template.home.helpers({
  calevent: function() {
    return CalEvent.find({}, {sort: { start: 1 }});
  },
});

Template.home.events({
  "click .apple": function (){
    Meteor.call('recur'); 
  }
});

