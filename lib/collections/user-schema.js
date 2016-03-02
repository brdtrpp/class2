Schema = {},

Schema.UserProfile = new SimpleSchema({
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
    }
  },
  firstName: {
      type: String,
      optional: true,
    },
  lastName: {
      type: String,
      optional: true
  },
  birthday: {
    type: Date,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "datetimepicker",
        class: "form-control",
        readonly: true,
      }
    }
  },
  gender: {
      type: String,
      allowedValues: ['Male', 'Female'],
      optional: true
  },
  organization : {
      type: String,
      optional: true
  },
  website: {
      type: String,
      regEx: SimpleSchema.RegEx.Url,
      optional: true
  },
  bio: {
      type: String,
      optional: true
  },
  homeAddress: {
    type: AddressSchema,
    optional: true,
  },
  businessAddress: {
    type: AddressSchema,
    optional: true,
    autoform: {
      omit: true
    }
  },

  businessName: {
    type: String,
    optional: true,
    autoform: {
      omit: true
    }
  },

  customerId: {
    type: String,
    autoValue: function() {
      if (this.isInsert) {
        Meteor.call('createCustomer', function(error, result) {
          if (error) {
            console.log(error);
          } else {
            c = result.id;
          }
        });
        return c;
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    },
    autoform: {
      omit: true
    }
  },

  accountId: {
    type : String,
    optional: true,
    autoform: {
      omit: true
    }
  },
  cardId : {
    type: String,
    optional: true,
    blackbox: true,
    autoform: {
      omit: true
    }
  },
  affiliateId: {
    type: String,
    optional: true,
    autoform: {
      omit: true
    },
  }
});

Schema.User = new SimpleSchema({
    username: {
      type: String,
      regEx: /^[a-z0-9A-Z_]{3,15}$/,
      unique: true,
      optional: true,
    },
    emails: {
        type: Array,
        optional: true
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    profile: {
        type: Schema.UserProfile,
        optional: true
    },

    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
});

Meteor.users.attachSchema(Schema.User);