Schema = {},


AddressSchema = new SimpleSchema({
  street: {
    type: String,
    max: 100
  },
  city: {
    type: String,
    max: 50
  },
  state: {
    type: String,
    regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/
  },
  zip: {
    type: String,
    regEx: /^[0-9]{5}$/
  }
});

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
          type: "bootstrap-datepicker"
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

  customerId: {
    type: String,
    autoValue: function() {
      if (this.isInsert) {
        var Stripe = StripeAPI(Meteor.settings.private.stripe.testSecretKey);
        var stripeCustomersCreateSync = Meteor.wrapAsync(Stripe.customers.create,Stripe.customers);
        var result = stripeCustomersCreateSync({
          description: 'Attendee',
        });
        return result.id;
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

    // Add `roles` to your schema if you use the meteor-roles package.
    // Option 1: Object type
    // If you specify that type as Object, you must also specify the
    // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
    // Example:
    // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
    // You can't mix and match adding with and without a group since
    // you will fail validation in some cases.
    // roles: {
    //     type: Object,
    //     optional: true,
    //     blackbox: true
    // },
    // // Option 2: [String] type
    // // If you are sure you will never need to use role groups, then
    // // you can specify [String] as the type
    // roles: {
    //     type: [String],
    //     optional: true
    // }
});

Meteor.users.attachSchema(Schema.User);