Template.eventInsert.helpers({
  steps: function() {
    return [{
      id: 'recur',
      title: 'Recurring Structure',
      schema: 'RecurSchema',
      template: 'recur',
      formId: 'recur',
    },{
      id: 'dates',
      title: 'Date Details',
      schema: 'DatesSchema',
      template: 'dates',
      formId: 'dates',
    }];
  }
});