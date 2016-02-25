Template.eventInsert.helpers({
  steps: function() {
    return [{
      id: 'recur',
      title: 'Recurring',
      schema: 'RecurSchema',
      template: 'recur',
      formId: 'recur',
    },{
      id: 'dates',
      title: 'Dates',
      schema: 'DatesSchema',
      template: 'dates',
      formId: 'dates',
    },{
      id: 'details',
      title: 'Details',
      schema: 'DetailsSchema',
      template: 'details',
      formId: 'details',
    },{
      id: 'location',
      title: 'Location',
      schema: 'LocationSchema',
      template: 'location',
      formId: 'location',
      onSubmit: function(data, wizard) {
        var doc = wizard.store.keys;
        Meteor.call('submitCalEvent', doc, function(error, result){
          if (result == "success") {
            Router.go('/my-classes');
          }
        });
      }
    }];
  }
});