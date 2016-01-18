(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// collections/user-schema.js                                          //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Schema = {}, Schema.UserProfile = new SimpleSchema({                   // 1
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
    autoform: {                                                        // 15
      omit: true                                                       // 16
    }                                                                  //
  },                                                                   //
  firstName: {                                                         // 19
    type: String,                                                      // 20
    optional: true                                                     // 21
  },                                                                   //
  lastName: {                                                          // 23
    type: String,                                                      // 24
    optional: true                                                     // 25
  },                                                                   //
  birthday: {                                                          // 27
    type: Date,                                                        // 28
    optional: true,                                                    // 29
    autoform: {                                                        // 30
      afFieldInput: {                                                  // 31
        type: "bootstrap-datepicker"                                   // 32
      }                                                                //
    }                                                                  //
  },                                                                   //
  gender: {                                                            // 36
    type: String,                                                      // 37
    allowedValues: ['Male', 'Female'],                                 // 38
    optional: true                                                     // 39
  },                                                                   //
  organization: {                                                      // 41
    type: String,                                                      // 42
    optional: true                                                     // 43
  },                                                                   //
  website: {                                                           // 45
    type: String,                                                      // 46
    regEx: SimpleSchema.RegEx.Url,                                     // 47
    optional: true                                                     // 48
  },                                                                   //
  bio: {                                                               // 50
    type: String,                                                      // 51
    optional: true                                                     // 52
  },                                                                   //
  homeAddress: {                                                       // 54
    type: AddressSchema,                                               // 55
    optional: true                                                     // 56
  },                                                                   //
  businessAddress: {                                                   // 58
    type: AddressSchema,                                               // 59
    optional: true,                                                    // 60
    autoform: {                                                        // 61
      omit: true                                                       // 62
    }                                                                  //
  },                                                                   //
                                                                       //
  customerId: {                                                        // 66
    type: String,                                                      // 67
    autoValue: function () {                                           // 68
      if (this.isInsert) {                                             // 69
        Meteor.call('createCustomer', function (error, result) {       // 70
          if (error) {                                                 // 71
            console.log(error);                                        // 72
          } else {                                                     //
            c = result.id;                                             // 74
          }                                                            //
        });                                                            //
        return c;                                                      // 77
      } else {                                                         //
        this.unset(); // Prevent user from supplying their own value   // 79
      }                                                                //
    },                                                                 //
    autoform: {                                                        // 82
      omit: true                                                       // 83
    }                                                                  //
  },                                                                   //
                                                                       //
  accountId: {                                                         // 87
    type: String,                                                      // 88
    optional: true,                                                    // 89
    autoform: {                                                        // 90
      omit: true                                                       // 91
    }                                                                  //
  },                                                                   //
  cardId: {                                                            // 94
    type: String,                                                      // 95
    optional: true,                                                    // 96
    blackbox: true,                                                    // 97
    autoform: {                                                        // 98
      omit: true                                                       // 99
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
Schema.User = new SimpleSchema({                                       // 104
  username: {                                                          // 105
    type: String,                                                      // 106
    regEx: /^[a-z0-9A-Z_]{3,15}$/,                                     // 107
    unique: true,                                                      // 108
    optional: true                                                     // 109
  },                                                                   //
  emails: {                                                            // 111
    type: Array,                                                       // 112
    optional: true                                                     // 113
  },                                                                   //
  "emails.$": {                                                        // 115
    type: Object                                                       // 116
  },                                                                   //
  "emails.$.address": {                                                // 118
    type: String,                                                      // 119
    regEx: SimpleSchema.RegEx.Email                                    // 120
  },                                                                   //
  "emails.$.verified": {                                               // 122
    type: Boolean                                                      // 123
  },                                                                   //
  profile: {                                                           // 125
    type: Schema.UserProfile,                                          // 126
    optional: true                                                     // 127
  },                                                                   //
                                                                       //
  services: {                                                          // 130
    type: Object,                                                      // 131
    optional: true,                                                    // 132
    blackbox: true                                                     // 133
  }                                                                    //
});                                                                    //
                                                                       //
Meteor.users.attachSchema(Schema.User);                                // 137
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=user-schema.js.map
