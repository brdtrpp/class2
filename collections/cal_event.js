CalEvent = new Mongo.Collection('calevent');
CalEvent.attachSchema(new SimpleSchema({
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    },
    autoform: {
      omit: true
    },
  },
  title: {
    type: String,
    label: "Title",
    max: 200,
    autoValue: function() {
      return "New Class";
    },
  },
  start: {
    type: String,
    label: "Start Date and Time",
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    }
  },
  end: {
    type: String,
    label: "Start Date and Time",
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    },
    optional: true
  },

  description: {
    type: String,
    optional: true,
    label: "Description",
    max: 5000,
    defaultValue: function() {
      return "Write the class description here";
    },
  },
  owner: {
    type: String,
    autoValue: function() {
      return Meteor.userId();
    },
    autoform: {
      omit: true
    },
  },
  allDay: {
    type: Boolean,
    label: "All Day Event",
    optional: true,
  },
  price: {
   type: Number,
   label: "Price in $",
   optional: true,
   decimal: true,
   min: 10,
   defaultValue: function() {
      return 10;
    },
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
    defaultValue: function() {
      return 10;
    },
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
