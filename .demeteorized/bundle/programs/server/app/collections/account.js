(function(){Account = new Mongo.Collection('account');

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
  business_name: {
    type: String,
  },
  firstName: {
    type: String,
    // defaultValue: function() {
    //   var user = Meteor.user().profile.firstName;
    //   return user; 
    // }  
  },
  lastName: {
    type: String,
    // defaultValue: function() {
    //   var user = Meteor.user().profile.lastName;
    //   return user; 
    // }  
  },
  dob: {
    type: Date,
    autoform: {
      afFieldInput: {
        type: "bootstrap-datepicker",
      }
    },
    // defaultValue: function() {
    //   var user = Meteor.user().profile.birthday;
    //   return user; 
    // }  
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
  // createdAt: {
  //   type: Date,
  //   autoValue: function() {
  //     if (this.isInsert) {
  //       return new Date;
  //     } else {
  //       this.unset();  // Prevent user from supplying their own value
  //     }
  //   },
  //   autoform: {
  //     omit: true
  //   },
  // },
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
  // acceptedIp: {
  //   type: String,
  //   defaultValue: function(){
  //     var clientIP = this.connection.clientAddress;
  //     return clientIP;
  //   }
  // }
}));


}).call(this);

//# sourceMappingURL=account.js.map
