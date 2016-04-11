Template.eventSearch.helpers({
  classes: function() {
    var classes = [];
    var events = Session.get('classes');
    _.forEach(events, function(event) {
      if (moment(event.start).isAfter(moment())){
        classes.push(event);
      }
    });
    if(classes.length > 0){
      Session.set('empty', false);
    }else{
      Session.set('empty', true);
    }
    return classes;
  },

  empty: function() {
    return Session.get('empty');
  }
});


Template.eventSearch.onRendered( function() {
  Session.set("search", true);
});


Template.eventSearch.onDestroyed( function() {
  Session.set("search", false);
});