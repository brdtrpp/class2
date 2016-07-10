CalEvent = new Mongo.Collection('calevent');

RecurSchema = new SimpleSchema({
  type: {
    type: String,
    label: "Type of Class",
    allowedValues: ['classes','lesson', 'course'],
    autoform: {
      type: "select-radio",
      options: {
        classes: "None Recurring",
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
        type: "datetimepicker",
        class: "form-control",
        readonly: true,
      }
    }
  },
  end: {
    type: String,
    label: "End Date and Time",
    autoform: {
      afFieldInput: {
        type: "datetimepicker",
        class: "form-control",
        readonly: true,
      }
    },
  },

  category: {
    type: String,
    allowedValues: [
      'tutor',
      'dance',
      'beauty',
      'computer',
      'hobbies',
      'culinary',
      'health',
      'language',
      'music',
      'performance',
      'sports',
      'fitness',
      'arts',
      'religious',
      'homeschool',
      'other'
    ],
    autoform: {
      type: "select",
      options: {
        tutor: "Tutor",
        dance: "Dance",
        beauty: "Beauty & Style",
        computer: "Computers & Technology",
        hobbies: "Craft & Hobbies",
        culinary: "Culinary",
        health: "Health & Wellness",
        language: "Language",
        music: "Music",
        performance: "Performing Arts",
        sports: "Sports & Athletics",
        fitness: "Fitness",
        arts: "Creative Arts",
        religious: "Religious",
        homeschool: "Homeschool",
        other: "Other"
      }
    },
    optional: true
  },

  description: {
    type: String,
    label: "Description",
    autoValue: function(){
      if( Meteor.isServer ){
        return sanitizeHtml( this.value, {
          allowedTags: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div', 'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre' ],
        } );
      }else{
        return this.value;
      }
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
  ownerName: {
    type: String,
    autoValue: function() {
      if (Meteor.user().profile.businessName) {
        return Meteor.user().profile.businessName;
      } else {
        return Meteor.user().emails[0].address;
      }
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
    // defaultValue: function() {
    //   var user = Meteor.user().profile;
    //   if (user.businessAddress.street != null) {
    //     return user.businessAddress.street;
    //   }
    // }
  },
  city: {
    type: String,
    max: 50,
    // defaultValue: function() {
    //   var user = Meteor.user().profile;
    //   return user.businessAddress.street;
    // }
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
    // defaultValue: function() {
    //   var user = Meteor.user().profile;
    //   return user.businessAddress.street;
    // }
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
