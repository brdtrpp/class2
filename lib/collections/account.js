Account = new Mongo.Collection('account');

ExternalAccSchema = new SimpleSchema({
  accountNumber: {
    type: Number,
    label: "Account Number",
  },
  routingNumber: {
    type: Number,
    label: "Routing Number",
  }
});

LegalEntSchema = new SimpleSchema({
  firstName: {
    type: String,
    label: "First Name"
  },
  lastName: {
    type: String,
    label: "Last Name"
  },
  last4: {
    type: Number,
    label: "Last 4 of Social Security",
    min: 4,
    max: 4,
  },
  dob: {
    type: Date,
    label: "Date of Birth",
    autoform: {
      afFieldInput: {
        type: "bootstrap-datepicker",
      }
    },
  },
  type: {
    type: String,
    label: "Type of Business",
    allowedValues: ['individual', 'corporation'],
    autoform: {
      options: {
        individual: "Individual",
        corporation: "Corporation",
      }
    }
  },

}),

Account.attachSchema(new SimpleSchema({
  businessName: {
    type: String,
  },
  legalEntity: {
    type: LegalEntSchema
  },
  address: {
    type: AddressSchema
  },
  externalAccount: {
    type: ExternalAccSchema,
    label: "Bank Account Information"
  },
  acceptedTos: {
    type: Boolean,
    label: "I have read and accepted Class, Inc. and Stripes terms of service"
  },
}));
