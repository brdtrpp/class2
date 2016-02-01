CalEvent = new Mongo.Collection('calevent');

RecurSchema = new SimpleSchema({
  type: {
    type: String,
    label: "Type of Class",
    allowedValues: ['false','lesson', 'course'],
    autoform: {
      type: "select-radio",
      options: {
        undefined: "None Recurring",
        lesson: "Lesson (individual classes with separate attendee list)",
        course: "Course (a recurring class with the same attendees)",
      }
    }
  },
  intervalNumber: {
    type: Number,
    label: "Repeat this class every...",
  },
  intervalType: {
    type: String,
    label: "Interval",
    allowedValues: ['days', 'weeks', "months", "years"],
    autoform: {
      type: "select-radio-inline",
      options: {
        days: "Days",
        weeks: "Weeks",
        months: "Months",
        years: "Years"
      }
    }
  },
  intervalStop: {
    type: Number,
    label: "Stop after this many occurances.",
    max: 365
  },
});

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
        type: "bootstrap-datetimepicker",
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
  },

  category: {
    type: String,
    allowedValues: [
      'academic',
      'beauty_style',
      'computer',
      'crafts_hobbies',
      'culinary',
      'health_wellness',
      'language',
      'music',
      'performance',
      'sports',
      'fitness',
      'arts',
      'religious',
      'other'
    ],
    autoform: {
      type: "select",
      options: {
        academic: "Academics",
        beauty_style: "Beauty & Style",
        computer: "Computers & Technology",
        crafts_hobbies: "Craft & Hobbies",
        culinary: "Culinary",
        health_wellness: "Health & Wellness",
        language: "Language",
        music: "Music",
        performance: "Performaning Arts",
        sports: "Sports & Athletics",
        fitness: "Fitness",
        arts: "Creative Arts",
        religious: "Religious",
        other: "Other"
      }
    },
    optional: true
  },

  description: {
    type: String,
    optional: true,
    label: "Description",
    min: 10,
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
  ownerName: {
    type: String,
    autoValue: function() {
      return Meteor.user().profile.businessName;
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
  recur: {
    type: RecurSchema,
    label: "Recurring Structure (optional)",
    optional: true,
  },
  price: {
   type: Number,
   label: "Price in $ (leave blank if class is free)",
   optional: true,
   min: 10,
   max: 900000,
   defaultValue: 25,
  },

  attendeeCount: {
    type: Number,
    label: "Attendee Limit",
    optional: true,
    min: 1,
    defaultValue: 10,
  },
  street: {
    type: String,
    max: 100,
    defaultValue: function() {
      var user = Meteor.user();
      return user.profile.businessAddress.street;
    }
  },
  city: {
    type: String,
    max: 50,
    defaultValue: function() {
      return Meteor.user().profile.businessAddress.city;
    },

  },
  state: {
    type: String,
    regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/,
    autoform: {
      options: function () {
        return _.map(["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID", "IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY", "OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"], function (c, i) {
          return {label: c, value: c};
        });
      }
    }
  },
  zip: {
    type: String,
    regEx: /^[0-9]{5}$/,
    defaultValue: function() {
      return Meteor.user().profile.businessAddress.zip;
    }
  },
  courseId: {
    type: String,
    optional: true,
    autoform: {
      omit: true
    },
  },
  canceled: {
    type: Boolean,
    defaultValue: false,
    autoform: {
      omit: true
    },
  },

  selected: {
    type: Boolean,
    defaultValue: false,
    autoform: {
      omit: true
    },
  }
}));


