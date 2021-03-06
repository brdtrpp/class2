Template.eventInsert.helpers({
  steps: function() {
    return [{
      id: 'recur',
      title: 'Structure',
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
        doc.start = moment(doc.dates.start)._d;
        doc.end = moment(doc.dates.end)._d;
        // console.log(doc);
        doc.location = data;
        Meteor.call('submitCalEvent', doc, function(error, result){
          if (result == "success") {
            Router.go('/my-classes');
          } else {
            Bert.alert(error, 'danger');
          }
        });
      }
    }];
  }
});

Template.recur.helpers({
  classStructure: function(){
    // console.log(this.data);
    return false;
  }
});


Template.details.helpers({
  hasAccount: function() {
    return Meteor.user().accountId;
  }
});