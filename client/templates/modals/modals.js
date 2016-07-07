Template.registerHelper("Schemas", Schemas);

Template.modals.events({
  'click .search': function () {
    console.log("event Triggered ");
    // Session.set('search', false);
    // Session.set('loading', true);
    // Meteor.call('search', doc, function(error, result){
    //   if (error) {
    //     Bert.alert(error.message, 'warning');
    //   } else {
    //     Session.set('classes', result);
    //   }
    // });
  }
});
