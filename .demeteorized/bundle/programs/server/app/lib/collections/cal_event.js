(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/collections/cal_event.js                                        //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
CalEvent = new Mongo.Collection('calevent');                           // 1
// CalEvent.attachSchema([                                             //
//   EventLogic,                                                       //
//   DetailsSchema,                                                    //
//   DatesSchema,                                                      //
//   RecurSchema,                                                      //
//   LocationSchema                                                    //
// ]);                                                                 //
                                                                       //
RecurSchema = new SimpleSchema({                                       // 10
  type: {                                                              // 11
    type: String,                                                      // 12
    label: "Type of Class",                                            // 13
    allowedValues: ['classes', 'lesson', 'course'],                    // 14
    autoform: {                                                        // 15
      type: "select-radio",                                            // 16
      options: {                                                       // 17
        classes: "None Recurring",                                     // 18
        lesson: "Lesson (individual classes with separate attendee list)",
        course: "Course (a recurring class with the same attendees)"   // 20
      }                                                                //
    }                                                                  //
  },                                                                   //
  intervalNumber: {                                                    // 24
    type: Number,                                                      // 25
    label: "Repeat this class every..."                                // 26
  },                                                                   //
  intervalType: {                                                      // 28
    type: String,                                                      // 29
    label: "Interval",                                                 // 30
    allowedValues: ['days', 'weeks', "months", "years"],               // 31
    autoform: {                                                        // 32
      type: "select-radio-inline",                                     // 33
      options: {                                                       // 34
        days: "Days",                                                  // 35
        weeks: "Weeks",                                                // 36
        months: "Months",                                              // 37
        years: "Years"                                                 // 38
      }                                                                //
    }                                                                  //
  },                                                                   //
  intervalStop: {                                                      // 42
    type: Number,                                                      // 43
    label: "Stop after this many occurances.",                         // 44
    max: 365                                                           // 45
  }                                                                    //
});                                                                    //
                                                                       //
CalEvent.attachSchema(new SimpleSchema({                               // 49
  createdAt: {                                                         // 50
    type: Date,                                                        // 51
    autoValue: function () {                                           // 52
      if (this.isInsert) {                                             // 53
        return new Date();                                             // 54
      } else if (this.isUpsert) {                                      //
        return { $setOnInsert: new Date() };                           // 56
      } else {                                                         //
        this.unset(); // Prevent user from supplying their own value   // 58
      }                                                                //
    },                                                                 //
    autoform: {                                                        // 61
      omit: true                                                       // 62
    }                                                                  //
  },                                                                   //
  title: {                                                             // 65
    type: String,                                                      // 66
    label: "Title",                                                    // 67
    max: 200,                                                          // 68
    defaultValue: "New Class"                                          // 69
  },                                                                   //
  start: {                                                             // 71
    type: String,                                                      // 72
    label: "Start Date and Time",                                      // 73
    autoform: {                                                        // 74
      afFieldInput: {                                                  // 75
        type: "datetimepicker",                                        // 76
        'class': "form-control",                                       // 77
        readonly: true                                                 // 78
      }                                                                //
    }                                                                  //
  },                                                                   //
  end: {                                                               // 82
    type: String,                                                      // 83
    label: "End Date and Time",                                        // 84
    autoform: {                                                        // 85
      afFieldInput: {                                                  // 86
        type: "datetimepicker",                                        // 87
        'class': "form-control",                                       // 88
        readonly: true                                                 // 89
      }                                                                //
    }                                                                  //
  },                                                                   //
                                                                       //
  category: {                                                          // 94
    type: String,                                                      // 95
    allowedValues: ['academic', 'beauty_style', 'computer', 'crafts_hobbies', 'culinary', 'health_wellness', 'language', 'music', 'performance', 'sports', 'fitness', 'arts', 'religious', 'homeschool', 'other'],
    autoform: {                                                        // 113
      type: "select",                                                  // 114
      options: {                                                       // 115
        academic: "Academics",                                         // 116
        beauty_style: "Beauty & Style",                                // 117
        computer: "Computers & Technology",                            // 118
        crafts_hobbies: "Craft & Hobbies",                             // 119
        culinary: "Culinary",                                          // 120
        health_wellness: "Health & Wellness",                          // 121
        language: "Language",                                          // 122
        music: "Music",                                                // 123
        performance: "Performaning Arts",                              // 124
        sports: "Sports & Athletics",                                  // 125
        fitness: "Fitness",                                            // 126
        arts: "Creative Arts",                                         // 127
        religious: "Religious",                                        // 128
        homeschool: "Homeschool",                                      // 129
        other: "Other"                                                 // 130
      }                                                                //
    },                                                                 //
    optional: true                                                     // 133
  },                                                                   //
                                                                       //
  description: {                                                       // 136
    type: String,                                                      // 137
    optional: true,                                                    // 138
    label: "Description",                                              // 139
    defaultValue: "Write class description here.",                     // 140
    autoValue: function () {                                           // 141
      if (Meteor.isServer) {                                           // 142
        return sanitizeHtml(this.value, {                              // 143
          allowedTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div', 'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre']
        });                                                            //
      } else {                                                         //
        return this.value;                                             // 147
      }                                                                //
    }                                                                  //
                                                                       //
  },                                                                   //
  owner: {                                                             // 152
    type: String,                                                      // 153
    autoValue: function () {                                           // 154
      return Meteor.userId();                                          // 155
    },                                                                 //
    autoform: {                                                        // 157
      omit: true                                                       // 158
    }                                                                  //
  },                                                                   //
  ownerName: {                                                         // 161
    type: String,                                                      // 162
    autoValue: function () {                                           // 163
      if (Meteor.user().profile.businessName) {                        // 164
        return Meteor.user().profile.businessName;                     // 165
      } else {                                                         //
        return Meteor.user().emails[0].address;                        // 167
      }                                                                //
    },                                                                 //
    autoform: {                                                        // 170
      omit: true                                                       // 171
    }                                                                  //
  },                                                                   //
  allDay: {                                                            // 174
    type: Boolean,                                                     // 175
    label: "All Day Event",                                            // 176
    optional: true                                                     // 177
  },                                                                   //
  recur: {                                                             // 179
    type: RecurSchema,                                                 // 180
    label: "Recurring Structure (optional)",                           // 181
    optional: true                                                     // 182
  },                                                                   //
  price: {                                                             // 184
    type: Number,                                                      // 185
    label: "Price in $ (leave blank if class is free)",                // 186
    optional: true,                                                    // 187
    min: 10,                                                           // 188
    max: 900000,                                                       // 189
    defaultValue: 25                                                   // 190
  },                                                                   //
                                                                       //
  attendeeCount: {                                                     // 193
    type: Number,                                                      // 194
    label: "Attendee Limit",                                           // 195
    optional: true,                                                    // 196
    min: 1,                                                            // 197
    defaultValue: 10                                                   // 198
  },                                                                   //
  street: {                                                            // 200
    type: String,                                                      // 201
    max: 100                                                           // 202
  },                                                                   //
  // defaultValue: function() {                                        //
  //   var user = Meteor.user().profile;                               //
  //   if (user.businessAddress.street != null) {                      //
  //     return user.businessAddress.street;                           //
  //   }                                                               //
  // }                                                                 //
  city: {                                                              // 210
    type: String,                                                      // 211
    max: 50                                                            // 212
  },                                                                   //
  // defaultValue: function() {                                        //
  //   var user = Meteor.user().profile;                               //
  //   return user.businessAddress.street;                             //
  // }                                                                 //
  state: {                                                             // 218
    type: String,                                                      // 219
    regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/,
    autoform: {                                                        // 221
      options: function () {                                           // 222
        return _.map(["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MH", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "PW", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"], function (c, i) {
          return { label: c, value: c };                               // 224
        });                                                            //
      }                                                                //
    }                                                                  //
  },                                                                   //
  zip: {                                                               // 229
    type: String,                                                      // 230
    regEx: /^[0-9]{5}$/                                                // 231
  },                                                                   //
  // defaultValue: function() {                                        //
  //   var user = Meteor.user().profile;                               //
  //   return user.businessAddress.street;                             //
  // }                                                                 //
  courseId: {                                                          // 237
    type: String,                                                      // 238
    optional: true,                                                    // 239
    autoform: {                                                        // 240
      omit: true                                                       // 241
    }                                                                  //
  },                                                                   //
  canceled: {                                                          // 244
    type: Boolean,                                                     // 245
    defaultValue: false,                                               // 246
    autoform: {                                                        // 247
      omit: true                                                       // 248
    }                                                                  //
  },                                                                   //
                                                                       //
  selected: {                                                          // 252
    type: Boolean,                                                     // 253
    defaultValue: false,                                               // 254
    autoform: {                                                        // 255
      omit: true                                                       // 256
    }                                                                  //
  }                                                                    //
}));                                                                   //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=cal_event.js.map
