CalEvent = new Mongo.Collection('calevent');
CalEvent.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  start: {
    type: String,
    label: "Start Date and Time",
    // autoform: {
    //   afFieldInput: {
    //     type: "datetimepicker"
    //   }
    // }
  },
  end: {
    type: String,
    label: "End Date and Time",
    // autoform: {
    //   afFieldInput: {
    //     type: "datetimepicker"
    //   }
    // }
    optional: true,
  },
  description: {
    type: String,
    optional: true,
    label: "Description",
    max: 5000,
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 5,
      }
    }
  },
  owner: {
    type: String,
    label: "Host",
  },
  allDay: {
    type: Boolean,
    label: "All Day Event",
    optional: true,
    // autoform: {
    //   afFieldInput: {
    //     type: "boolean-checkbox",
    //   }
    // }
  },
  price: {
   type: Number,
   label: "Price",
   optional: true,
   min: 10,
   max: 50000
  }
}));