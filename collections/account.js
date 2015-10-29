Account = new Mongo.Collection('account');

ExternalAccSchema = new SimpleSchema({
  accountNumber: {
    type: String,
  },
  // country: {
  //   type: String,
  // },
  routingNumber: {
    type: String,
  }
});

LegalEntSchema = new SimpleSchema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  type: {
    type: String,
  },
  acceptedTos: {
    type: String,
  },
  acceptedIp: {
    type: String,
    autoValue: function(){
       var clientIP = this.connection.clientAddress;
       return clientIP;
    }
  }
}),

Account.attachSchema(new SimpleSchema({
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    },
    autoform: {
      omit: true
    },
  },
  businessName: {
    type: String,
  },
  legalEntity: {
    type: LegalEntSchema
  },
  // legalEntityDob: {
  //   type: String,
  //   label: "Legal Name of Business"
  // },
  // legalEntityFirstName: {
  //   type: String,
  //   label: "Legal First Name"
  // }, 
  // legalEntityLastName: {
  //   type: String,
  // }, 
  // legalEntityType: {
  //   type: String,
  // }, 
  // tosAcceptanceDate: {
  //   type: String,
  // }, 
  // tosAcceptanceIp: {
  //   type: String,
  // },
  externalAccount: {
    type: ExternalAccSchema,
    label: "Bank Account Information"
  },
}));

