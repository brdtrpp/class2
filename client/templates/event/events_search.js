Template.eventSearch.helpers({
  classes: function() {
    var classes = [];
    var events = Session.get('classes');
    _.forEach(events, function(event) {
      if (moment(event.start).isAfter(moment())){
        classes.push(event);
      }
    });
    return classes;
  }
});
Template.eventSearch.onRendered( function() {
  Session.set("search", true);
});


Template.eventSearch.onDestroyed( function() {
  Session.set("search", false);
});