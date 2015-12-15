Template.eventSearch.helpers({
  calEventIndex: () => CalEventIndex, // instance of EasySearch.Index
  getLoadMoreAttributes: { 
      class: "btn btn-success btn-block" 
  },
  getSearchAttributes :{
      class: "form-control",
      type: "bootstrap-datepicker"
  },
  id: function () {
    var cal = CalEvent.findOne(this.__originalId);
    return cal._id;
  }
});

