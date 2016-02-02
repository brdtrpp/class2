Account = new Mongo.Collection('account');

ExternalAccSchema = new SimpleSchema({
  accountNumber: {
    type: String,
  },
  routingNumber: {
    type: String,
  }
});

LegalEntSchema = new SimpleSchema({
  business_name: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  dob: {
    type: Date,
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

