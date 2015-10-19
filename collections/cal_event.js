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
        type: 'textangular'
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
    autoform: {
      afFieldInput: {
        type: "select-checkbox",
      }
    }
  },
  price: {
   type: Number,
   label: "Price",
   optional: true,
   decimal: true,
   min: 10,
   max: 50000
  },
  // eventPrice: {
  //   type: Number,
  //   autoValue: function() {
  //     var price = this.field("price");
  //     return price * 1.1;
  //   }
  // },
  attendeeCount: {
    type: Number,
    label: "Attendee Limit",
    optional: true,
    min: 1,
  },
}));

// CalEvent.allow({  
//   insert: function(userId, doc) {
//     // only allow posting if you are logged in
//     return !! userId;  
//   },
//   remove: function(userId, calevent) {
//     return ownsDocument(userId, calevent);
//   },
// });
