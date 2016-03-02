(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/collections/schemas/event_insert.js                             //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
RecurSchema = new SimpleSchema({                                       // 1
  type: {                                                              // 2
    type: String,                                                      // 3
    label: "What type of class is this?",                              // 4
    allowedValues: ['classes', 'lesson', 'course'],                    // 5
    autoform: {                                                        // 6
      type: "select-radio",                                            // 7
      options: {                                                       // 8
        classes: "A single class with one attendee list",              // 9
        lesson: " A set of individual classes with separate attendee list",
        course: "A recurring class with the same attendees)"           // 11
      }                                                                //
    },                                                                 //
    optional: true                                                     // 14
  },                                                                   //
  intervalNumber: {                                                    // 16
    type: Number,                                                      // 17
    label: "Repeat this class every...",                               // 18
    optional: true,                                                    // 19
    defaultValue: 0                                                    // 20
  },                                                                   //
  intervalType: {                                                      // 22
    type: String,                                                      // 23
    label: "Interval",                                                 // 24
    allowedValues: ['days', 'weeks', "months", "years"],               // 25
    autoform: {                                                        // 26
      type: "select-radio-inline",                                     // 27
      options: {                                                       // 28
        days: "Days",                                                  // 29
        weeks: "Weeks",                                                // 30
        months: "Months",                                              // 31
        years: "Years"                                                 // 32
      }                                                                //
    },                                                                 //
    defaultValue: 'days',                                              // 35
    optional: true                                                     // 36
  },                                                                   //
  intervalStop: {                                                      // 38
    type: Number,                                                      // 39
    label: "Stop after this many occurances.",                         // 40
    max: 365,                                                          // 41
    defaultValue: 0,                                                   // 42
    optional: true                                                     // 43
  }                                                                    //
});                                                                    //
                                                                       //
DatesSchema = new SimpleSchema({                                       // 47
  start: {                                                             // 48
    type: String,                                                      // 49
    label: "Start Date and Time",                                      // 50
    autoform: {                                                        // 51
      afFieldInput: {                                                  // 52
        type: "datetimepicker",                                        // 53
        'class': "form-control",                                       // 54
        readonly: true                                                 // 55
      }                                                                //
    }                                                                  //
  },                                                                   //
  end: {                                                               // 59
    type: String,                                                      // 60
    label: "End Date and Time",                                        // 61
    autoform: {                                                        // 62
      afFieldInput: {                                                  // 63
        type: "datetimepicker",                                        // 64
        'class': "form-control",                                       // 65
        readonly: true                                                 // 66
      }                                                                //
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
DetailsSchema = new SimpleSchema({                                     // 72
  title: {                                                             // 73
    type: String,                                                      // 74
    label: "Title",                                                    // 75
    max: 200,                                                          // 76
    defaultValue: "New Class"                                          // 77
  },                                                                   //
  category: {                                                          // 79
    type: String,                                                      // 80
    allowedValues: ['academic', 'beauty_style', 'computer', 'crafts_hobbies', 'culinary', 'health_wellness', 'language', 'music', 'performance', 'sports', 'fitness', 'arts', 'religious', 'homeschool', 'other'],
    autoform: {                                                        // 98
      type: "select",                                                  // 99
      options: {                                                       // 100
        academic: "Academics",                                         // 101
        beauty_style: "Beauty & Style",                                // 102
        computer: "Computers & Technology",                            // 103
        crafts_hobbies: "Craft & Hobbies",                             // 104
        culinary: "Culinary",                                          // 105
        health_wellness: "Health & Wellness",                          // 106
        language: "Language",                                          // 107
        music: "Music",                                                // 108
        performance: "Performaning Arts",                              // 109
        sports: "Sports & Athletics",                                  // 110
        fitness: "Fitness",                                            // 111
        arts: "Creative Arts",                                         // 112
        religious: "Religious",                                        // 113
        homeschool: "Homeschool",                                      // 114
        other: "Other"                                                 // 115
      }                                                                //
    }                                                                  //
  },                                                                   //
                                                                       //
  description: {                                                       // 120
    type: String,                                                      // 121
    label: "Description",                                              // 122
    autoform: {                                                        // 123
      type: 'summernote',                                              // 124
      'class': 'editor' },                                             // 125
    // optional                                                        //
    // settings: {                                                     //
    //   toolbar: [                                                    //
    //     ['style', ['style', 'bold', 'italic', 'underline', 'clear']],
    //     // ['font', ['strikethrough', 'superscript', 'subscript']],
    //     ['fontsize', ['fontsize', 'fontname']],                     //
    //     // ['color', ['color']],                                    //
    //     ['para', ['ul', 'ol', 'paragraph']],                        //
    //     // ['height', ['height']]                                   //
    //   ],                                                            //
    // }                                                               //
                                                                       //
    defaultValue: "Write class description here.",                     // 138
    autoValue: function () {                                           // 139
      if (Meteor.isServer) {                                           // 140
        return sanitizeHtml(this.value, {                              // 141
          allowedTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div', 'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre']
        });                                                            //
      } else {                                                         //
        return this.value;                                             // 145
      }                                                                //
    }                                                                  //
  },                                                                   //
                                                                       //
  price: {                                                             // 150
    type: Number,                                                      // 151
    label: "Price in $ (leave blank if class is free)",                // 152
    optional: true,                                                    // 153
    min: 10,                                                           // 154
    max: 900000,                                                       // 155
    defaultValue: 25                                                   // 156
  },                                                                   //
                                                                       //
  attendeeCount: {                                                     // 159
    type: Number,                                                      // 160
    label: "Attendee Limit",                                           // 161
    optional: true,                                                    // 162
    min: 1,                                                            // 163
    defaultValue: 10                                                   // 164
  }                                                                    //
});                                                                    //
                                                                       //
LocationSchema = new SimpleSchema({                                    // 168
  street: {                                                            // 169
    type: String,                                                      // 170
    max: 100                                                           // 171
  },                                                                   //
  city: {                                                              // 173
    type: String,                                                      // 174
    max: 50                                                            // 175
  },                                                                   //
  state: {                                                             // 177
    type: String,                                                      // 178
    regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/,
    autoform: {                                                        // 180
      options: function () {                                           // 181
        return _.map(["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MH", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "PW", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"], function (c, i) {
          return { label: c, value: c };                               // 183
        });                                                            //
      }                                                                //
    }                                                                  //
  },                                                                   //
  zip: {                                                               // 188
    type: String,                                                      // 189
    regEx: /^[0-9]{5}$/                                                // 190
  }                                                                    //
});                                                                    //
                                                                       //
EventLogic = new SimpleSchema({                                        // 194
  owner: {                                                             // 195
    type: String,                                                      // 196
    autoValue: function () {                                           // 197
      return Meteor.userId();                                          // 198
    },                                                                 //
    autoform: {                                                        // 200
      omit: true                                                       // 201
    }                                                                  //
  },                                                                   //
  createdAt: {                                                         // 204
    type: Date,                                                        // 205
    autoValue: function () {                                           // 206
      if (this.isInsert) {                                             // 207
        return new Date();                                             // 208
      } else if (this.isUpsert) {                                      //
        return { $setOnInsert: new Date() };                           // 210
      } else {                                                         //
        this.unset(); // Prevent user from supplying their own value   // 212
      }                                                                //
    },                                                                 //
    autoform: {                                                        // 215
      omit: true                                                       // 216
    }                                                                  //
  },                                                                   //
  ownerName: {                                                         // 219
    type: String,                                                      // 220
    autoValue: function () {                                           // 221
      if (Meteor.user().profile.businessName) {                        // 222
        return Meteor.user().profile.businessName;                     // 223
      } else {                                                         //
        return Meteor.user().emails[0].address;                        // 225
      }                                                                //
    },                                                                 //
    autoform: {                                                        // 228
      omit: true                                                       // 229
    }                                                                  //
  },                                                                   //
  courseId: {                                                          // 232
    type: String,                                                      // 233
    optional: true,                                                    // 234
    autoform: {                                                        // 235
      omit: true                                                       // 236
    }                                                                  //
  },                                                                   //
  canceled: {                                                          // 239
    type: Boolean,                                                     // 240
    defaultValue: false,                                               // 241
    autoform: {                                                        // 242
      omit: true                                                       // 243
    }                                                                  //
  },                                                                   //
                                                                       //
  selected: {                                                          // 247
    type: Boolean,                                                     // 248
    defaultValue: false,                                               // 249
    autoform: {                                                        // 250
      omit: true                                                       // 251
    }                                                                  //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=event_insert.js.map
