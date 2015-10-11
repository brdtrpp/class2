CalEvent = new Mongo.Collection('calevent');
CalEvent.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  start: {
    type: Date,
    label: "Start Date and Time",
    // autoform: {
    //   afFieldInput: {
    //     type: "datetimepicker"
    //   }
    // }
  },
  end: {
    type: Date,
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
        rows: 10,
      }
    }
  },
  owner: {
    type: String,
    label: "Host",
  },
  price: {
   type: Number,
   label: "Price",
   optional: true,
   min: 10,
   max: 50000
  }
}));