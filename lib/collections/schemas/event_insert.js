RecurSchema = new SimpleSchema({
  type: {
    type: String,
    label: "What type of class is this?",
    allowedValues: ['classes','lesson','course'],
    autoform: {
      type: "select-radio",
      options: {
        classes: "A single class with one attendee list",
        lesson: " A set of individual classes with separate attendee list",
        course: "A recurring class with the same attendees)",
      }
    },
    optional: true,
  },
  intervalNumber: {
    type: Number,
    label: "Repeat this class every...",
    optional: true,
    defaultValue: 0
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
    },
    defaultValue: 'days',
    optional: true,
  },
  intervalStop: {
    type: Number,
    label: "Stop after this many occurances.",
    max: 365,
    defaultValue: 0,
    optional: true,
  },
});

DatesSchema = new SimpleSchema({
  start: {
    type: String,
    label: "Start Date and Time",
    autoform: {
      afFieldInput: {
        type: "datetimepicker",
        class: "form-control",
        // readonly: true,
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
        // readonly: true,
      }
    },
  },
});

DetailsSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200,
    defaultValue: "New Class",
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
        beauty: "Beauty & Style",
        dance: "Dance",
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
  },


  description: {
    type: String,
    label: "Description",
    autoform: {
      type: 'summernote',
      class: 'summernote', // optional
      settings: {
        height: 150,
        toolbar: [
          ['style', ['style', 'bold', 'italic', 'underline', 'clear']],
          // ['font', ['strikethrough', 'superscript', 'subscript']],
          ['fontsize', ['fontsize', 'fontname']],
          // ['color', ['color']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['height', ['height']]
        ],
      }

    },
    // defaultValue: "Write class description here.",
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
});

LocationSchema = new SimpleSchema({
  street: {
    type: String,
    max: 100,
  },
  city: {
    type: String,
    max: 50,
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
  },
});

EventLogic = new SimpleSchema({
  owner: {
    type: String,
    autoValue: function() {
      return Meteor.userId();
    },
    autoform: {
      omit: true
    },
  },
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
});
