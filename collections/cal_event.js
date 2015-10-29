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
    defaultValue: "New Class",
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
    label: "End Date and Time",
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
    defaultValue: "Write class description here.",
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
   min: 10,
   max: 900000,
   defaultValue: 35,
  },
  // eventPrice: {
  //   type: Number,
  //   autoValue: function() {
  //     var price = this.field("price");
  //     return (price * 1.1) + 1;
  //   },
  //   autoform: {
  //     omit: true
  //   },
  // },
  attendeeCount: {
    type: Number,
    label: "Attendee Limit",
    optional: true,
    min: 1,
    defaultValue: 10,
  },
  // street: {
  //   type: String,
  //   max: 100
  // },
  // city: {
  //   type: String,
  //   max: 50
  // },
  // state: {
  //   type: String,
  //   regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/
  // },
  // zip: {
  //   type: String,
  //   regEx: /^[0-9]{5}$/
  // }
}));
