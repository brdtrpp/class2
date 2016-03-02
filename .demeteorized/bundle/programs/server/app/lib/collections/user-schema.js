(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/collections/user-schema.js                                      //
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
        type: "datetimepicker",                                        // 32
        "class": "form-control",                                       // 33
        readonly: true                                                 // 34
      }                                                                //
    }                                                                  //
  },                                                                   //
  gender: {                                                            // 38
    type: String,                                                      // 39
    allowedValues: ['Male', 'Female'],                                 // 40
    optional: true                                                     // 41
  },                                                                   //
  organization: {                                                      // 43
    type: String,                                                      // 44
    optional: true                                                     // 45
  },                                                                   //
  website: {                                                           // 47
    type: String,                                                      // 48
    regEx: SimpleSchema.RegEx.Url,                                     // 49
    optional: true                                                     // 50
  },                                                                   //
  bio: {                                                               // 52
    type: String,                                                      // 53
    optional: true                                                     // 54
  },                                                                   //
  homeAddress: {                                                       // 56
    type: AddressSchema,                                               // 57
    optional: true                                                     // 58
  },                                                                   //
  businessAddress: {                                                   // 60
    type: AddressSchema,                                               // 61
    optional: true,                                                    // 62
    autoform: {                                                        // 63
      omit: true                                                       // 64
    }                                                                  //
  },                                                                   //
                                                                       //
  businessName: {                                                      // 68
    type: String,                                                      // 69
    optional: true,                                                    // 70
    autoform: {                                                        // 71
      omit: true                                                       // 72
    }                                                                  //
  },                                                                   //
                                                                       //
  customerId: {                                                        // 76
    type: String,                                                      // 77
    autoValue: function () {                                           // 78
      if (this.isInsert) {                                             // 79
        Meteor.call('createCustomer', function (error, result) {       // 80
          if (error) {                                                 // 81
            console.log(error);                                        // 82
          } else {                                                     //
            c = result.id;                                             // 84
          }                                                            //
        });                                                            //
        return c;                                                      // 87
      } else {                                                         //
        this.unset(); // Prevent user from supplying their own value   // 89
      }                                                                //
    },                                                                 //
    autoform: {                                                        // 92
      omit: true                                                       // 93
    }                                                                  //
  },                                                                   //
                                                                       //
  accountId: {                                                         // 97
    type: String,                                                      // 98
    optional: true,                                                    // 99
    autoform: {                                                        // 100
      omit: true                                                       // 101
    }                                                                  //
  },                                                                   //
  cardId: {                                                            // 104
    type: String,                                                      // 105
    optional: true,                                                    // 106
    blackbox: true,                                                    // 107
    autoform: {                                                        // 108
      omit: true                                                       // 109
    }                                                                  //
  },                                                                   //
  affiliateId: {                                                       // 112
    type: String,                                                      // 113
    optional: true,                                                    // 114
    autoform: {                                                        // 115
      omit: true                                                       // 116
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
Schema.User = new SimpleSchema({                                       // 121
  username: {                                                          // 122
    type: String,                                                      // 123
    regEx: /^[a-z0-9A-Z_]{3,15}$/,                                     // 124
    unique: true,                                                      // 125
    optional: true                                                     // 126
  },                                                                   //
  emails: {                                                            // 128
    type: Array,                                                       // 129
    optional: true                                                     // 130
  },                                                                   //
  "emails.$": {                                                        // 132
    type: Object                                                       // 133
  },                                                                   //
  "emails.$.address": {                                                // 135
    type: String,                                                      // 136
    regEx: SimpleSchema.RegEx.Email                                    // 137
  },                                                                   //
  "emails.$.verified": {                                               // 139
    type: Boolean                                                      // 140
  },                                                                   //
  profile: {                                                           // 142
    type: Schema.UserProfile,                                          // 143
    optional: true                                                     // 144
  },                                                                   //
                                                                       //
  services: {                                                          // 147
    type: Object,                                                      // 148
    optional: true,                                                    // 149
    blackbox: true                                                     // 150
  }                                                                    //
});                                                                    //
                                                                       //
Meteor.users.attachSchema(Schema.User);                                // 154
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=user-schema.js.map
