(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/collections/attendee.js                                         //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Attendee = new Mongo.Collection('attendee');                           // 1
                                                                       //
AttendanceSchema = new SimpleSchema({                                  // 3
  createdAt: {                                                         // 4
    type: Date,                                                        // 5
    autoValue: function () {                                           // 6
      if (this.isInsert) {                                             // 7
        return new Date();                                             // 8
      } else if (this.isUpsert) {                                      //
        return { $setOnInsert: new Date() };                           // 10
      } else {                                                         //
        this.unset(); // Prevent user from supplying their own value   // 12
      }                                                                //
    },                                                                 //
    denyUpdate: true,                                                  // 15
    autoform: {                                                        // 16
      omit: true                                                       // 17
    }                                                                  //
                                                                       //
  },                                                                   //
  present: {                                                           // 21
    type: Boolean,                                                     // 22
    defaultValue: true,                                                // 23
    autoform: {                                                        // 24
      omit: true                                                       // 25
    }                                                                  //
  },                                                                   //
  owner: {                                                             // 28
    type: String,                                                      // 29
    autoValue: function () {                                           // 30
      return Meteor.userId();                                          // 31
    },                                                                 //
    autoform: {                                                        // 33
      omit: true                                                       // 34
    }                                                                  //
  },                                                                   //
  updatedAt: {                                                         // 37
    type: Date,                                                        // 38
    autoValue: function () {                                           // 39
      if (this.isUpdate) {                                             // 40
        return new Date();                                             // 41
      } else {                                                         //
        return null;                                                   // 43
      }                                                                //
    },                                                                 //
    optional: true,                                                    // 46
    autoform: {                                                        // 47
      omit: true                                                       // 48
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
Attendee.attachSchema(new SimpleSchema({                               // 53
  createdAt: {                                                         // 54
    type: Date,                                                        // 55
    autoValue: function () {                                           // 56
      if (this.isInsert) {                                             // 57
        return new Date();                                             // 58
      } else if (this.isUpsert) {                                      //
        return { $setOnInsert: new Date() };                           // 60
      } else {                                                         //
        this.unset(); // Prevent user from supplying their own value   // 62
      }                                                                //
    },                                                                 //
    autoform: {                                                        // 65
      omit: true                                                       // 66
    }                                                                  //
  },                                                                   //
  eventId: {                                                           // 69
    type: String,                                                      // 70
    autoform: {                                                        // 71
      omit: true                                                       // 72
    }                                                                  //
  },                                                                   //
  reEventId: {                                                         // 75
    type: String,                                                      // 76
    autoform: {                                                        // 77
      omit: true                                                       // 78
    },                                                                 //
    defaultValue: null,                                                // 80
    optional: true                                                     // 81
  },                                                                   //
  owner: {                                                             // 83
    type: String,                                                      // 84
    autoValue: function () {                                           // 85
      if (this.isInsert) {                                             // 86
        return Meteor.userId();                                        // 87
      } else {                                                         //
        this.unset();                                                  // 89
      }                                                                //
    },                                                                 //
    denyUpdate: true,                                                  // 92
    autoform: {                                                        // 93
      omit: true                                                       // 94
    }                                                                  //
  },                                                                   //
  attendeeFirstName: {                                                 // 97
    type: String,                                                      // 98
    label: "Attendee's First Name",                                    // 99
    defaultValue: function () {                                        // 100
      var user = Meteor.user();                                        // 101
      return user.profile.firstName;                                   // 102
    }                                                                  //
  },                                                                   //
  attendeeLastName: {                                                  // 105
    type: String,                                                      // 106
    label: "Attendee's Last Name",                                     // 107
    defaultValue: function () {                                        // 108
      var user = Meteor.user();                                        // 109
      return user.profile.lastName;                                    // 110
    }                                                                  //
  },                                                                   //
  charge: {                                                            // 113
    type: String,                                                      // 114
    autoform: {                                                        // 115
      omit: true                                                       // 116
    },                                                                 //
    optional: true                                                     // 118
  },                                                                   //
  refund: {                                                            // 120
    type: String,                                                      // 121
    defaultValue: null,                                                // 122
    autoform: {                                                        // 123
      omit: true                                                       // 124
    },                                                                 //
    optional: true                                                     // 126
  },                                                                   //
  courseId: {                                                          // 128
    type: String,                                                      // 129
    optional: true,                                                    // 130
    autoform: {                                                        // 131
      omit: true                                                       // 132
    }                                                                  //
  },                                                                   //
  attendance: {                                                        // 135
    type: AttendanceSchema,                                            // 136
    optional: true,                                                    // 137
    autoform: {                                                        // 138
      omit: true                                                       // 139
    }                                                                  //
  }                                                                    //
}));                                                                   //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=attendee.js.map
