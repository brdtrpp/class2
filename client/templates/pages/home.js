Template.home.helpers({  
  calevent: function() {
    return CalEvent.find({}, {sort: { start: 1 }});  
  },
});

