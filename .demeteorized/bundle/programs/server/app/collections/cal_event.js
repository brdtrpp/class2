(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// collections/cal_event.js                                            //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
CalEvent = new Mongo.Collection('calevent');                           // 1
                                                                       //
CalEventIndex = new EasySearch.Index({                                 // 3
  collection: CalEvent,                                                // 4
  fields: ['title', 'description', 'start', 'zip', 'owner', 'city', 'state', '_id'],
  engine: new EasySearch.MongoDB()                                     // 6
});                                                                    //
                                                                       //
RecurSchema = new SimpleSchema({                                       // 9
  type: {                                                              // 10
    type: String,                                                      // 11
    label: "Type of Class",                                            // 12
    allowedValues: ['false', 'lesson', 'course'],                      // 13
    autoform: {                                                        // 14
      type: "select-radio",                                            // 15
      options: {                                                       // 16
        undefined: "None Recurring",                                   // 17
        lesson: "Lesson (individual classes with separate attendee list)",
        course: "Course (a recurring class with the same attendees)"   // 19
      }                                                                //
    }                                                                  //
  },                                                                   //
  intervalNumber: {                                                    // 23
    type: Number,                                                      // 24
    label: "Repeat this class every..."                                // 25
  },                                                                   //
  intervalType: {                                                      // 27
    type: String,                                                      // 28
    label: "Interval",                                                 // 29
    allowedValues: ['days', 'weeks', "months", "years"],               // 30
    autoform: {                                                        // 31
      type: "select-radio-inline",                                     // 32
      options: {                                                       // 33
        days: "Days",                                                  // 34
        weeks: "Weeks",                                                // 35
        months: "Months",                                              // 36
        years: "Years"                                                 // 37
      }                                                                //
    }                                                                  //
  },                                                                   //
  intervalStop: {                                                      // 41
    type: Number,                                                      // 42
    label: "Stop after this many occurances.",                         // 43
    max: 365                                                           // 44
  }                                                                    //
});                                                                    //
                                                                       //
CalEvent.attachSchema(new SimpleSchema({                               // 48
  createdAt: {                                                         // 49
    type: Date,                                                        // 50
    autoValue: function () {                                           // 51
      if (this.isInsert) {                                             // 52
        return new Date();                                             // 53
      } else if (this.isUpsert) {                                      //
        return { $setOnInsert: new Date() };                           // 55
      } else {                                                         //
        this.unset(); // Prevent user from supplying their own value   // 57
      }                                                                //
    },                                                                 //
    autoform: {                                                        // 60
      omit: true                                                       // 61
    }                                                                  //
  },                                                                   //
  title: {                                                             // 64
    type: String,                                                      // 65
    label: "Title",                                                    // 66
    max: 200,                                                          // 67
    defaultValue: "New Class"                                          // 68
  },                                                                   //
  start: {                                                             // 70
    type: String,                                                      // 71
    label: "Start Date and Time",                                      // 72
    autoform: {                                                        // 73
      afFieldInput: {                                                  // 74
        type: "bootstrap-datetimepicker"                               // 75
      }                                                                //
    }                                                                  //
  },                                                                   //
  end: {                                                               // 79
    type: String,                                                      // 80
    label: "End Date and Time",                                        // 81
    autoform: {                                                        // 82
      afFieldInput: {                                                  // 83
        type: "bootstrap-datetimepicker"                               // 84
      }                                                                //
    }                                                                  //
  },                                                                   //
                                                                       //
  category: {                                                          // 89
    type: String,                                                      // 90
    allowedValues: ['academic', 'beauty_style', 'computer', 'crafts_hobbies', 'culinary', 'health_wellness', 'language', 'music', 'performance', 'sports', 'fitness', 'arts', 'other'],
    autoform: {                                                        // 106
      type: "select",                                                  // 107
      options: {                                                       // 108
        academic: "Academics",                                         // 109
        beauty_style: "Beauty & Style",                                // 110
        computer: "Computers & Technology",                            // 111
        crafts_hobbies: "Craft & Hobbies",                             // 112
        culinary: "Culinary",                                          // 113
        health_wellness: "Health & Wellness",                          // 114
        language: "Language",                                          // 115
        music: "Music",                                                // 116
        performance: "Performaning Arts",                              // 117
        sports: "Sports & Athletics",                                  // 118
        fitness: "Fitness",                                            // 119
        arts: "Creative Arts",                                         // 120
        other: "Other"                                                 // 121
      }                                                                //
    },                                                                 //
    optional: true                                                     // 124
  },                                                                   //
                                                                       //
  description: {                                                       // 127
    type: String,                                                      // 128
    optional: true,                                                    // 129
    label: "Description",                                              // 130
    min: 10,                                                           // 131
    max: 5000,                                                         // 132
    defaultValue: "Write class description here."                      // 133
  },                                                                   //
  owner: {                                                             // 135
    type: String,                                                      // 136
    autoValue: function () {                                           // 137
      return Meteor.userId();                                          // 138
    },                                                                 //
    autoform: {                                                        // 140
      omit: true                                                       // 141
    }                                                                  //
  },                                                                   //
  allDay: {                                                            // 144
    type: Boolean,                                                     // 145
    label: "All Day Event",                                            // 146
    optional: true                                                     // 147
  },                                                                   //
  recur: {                                                             // 149
    type: RecurSchema,                                                 // 150
    label: "Recurring Structure (optional)",                           // 151
    optional: true                                                     // 152
  },                                                                   //
  price: {                                                             // 154
    type: Number,                                                      // 155
    label: "Price in $ (leave blank if class is free)",                // 156
    optional: true,                                                    // 157
    min: 10,                                                           // 158
    max: 900000,                                                       // 159
    defaultValue: 25                                                   // 160
  },                                                                   //
                                                                       //
  attendeeCount: {                                                     // 163
    type: Number,                                                      // 164
    label: "Attendee Limit",                                           // 165
    optional: true,                                                    // 166
    min: 1,                                                            // 167
    defaultValue: 10                                                   // 168
  },                                                                   //
  street: {                                                            // 170
    type: String,                                                      // 171
    max: 100,                                                          // 172
    defaultValue: function () {                                        // 173
      var user = Meteor.user();                                        // 174
      return user.profile.businessAddress.street;                      // 175
    }                                                                  //
  },                                                                   //
  city: {                                                              // 178
    type: String,                                                      // 179
    max: 50,                                                           // 180
    defaultValue: function () {                                        // 181
      return Meteor.user().profile.businessAddress.city;               // 182
    }                                                                  //
                                                                       //
  },                                                                   //
  state: {                                                             // 186
    type: String,                                                      // 187
    regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/,
    defaultValue: function () {                                        // 189
      return Meteor.user().profile.businessAddress.state;              // 190
    }                                                                  //
  },                                                                   //
  zip: {                                                               // 193
    type: String,                                                      // 194
    regEx: /^[0-9]{5}$/,                                               // 195
    defaultValue: function () {                                        // 196
      return Meteor.user().profile.businessAddress.zip;                // 197
    }                                                                  //
  },                                                                   //
  courseId: {                                                          // 200
    type: String,                                                      // 201
    optional: true,                                                    // 202
    autoform: {                                                        // 203
      omit: true                                                       // 204
    }                                                                  //
  }                                                                    //
}));                                                                   //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=cal_event.js.map
