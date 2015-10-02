Template.myEvent.helpers({  
  calevent: function() {
    return CalEvent.find({owner: this.userId});
  },
});