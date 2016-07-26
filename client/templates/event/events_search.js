Template.eventSearch.helpers({
  classes: function() {
    var classes = [];
    var events = Session.get('classes');
    _.forEach(events, function(event) {
      if (moment(event.start).isAfter(moment())){
        classes.push(event);
      } else if (event.pid) {
        classes.push(event);
      } else if (event._id == "NoClass") {
        classes.push(event);
      }
    });

    if(classes.length > 0){
      Session.set('empty', false);
    }else{
      Session.set('empty', true);
    }
    Session.set('loading', false);
    return classes;
  },



  empty: function() {
    return Session.get('empty');
  },

  loading: function() {
    return Session.get('loading');
  }
});


Template.eventSearch.onRendered( function() {
  Session.set("search", true);
  Session.set('loading', true);
  Session.set('classes', false);
});


Template.eventSearch.onDestroyed( function() {
  Session.set("search", false);
  Session.set('loading', false);
  Session.set('classes', false);
});
