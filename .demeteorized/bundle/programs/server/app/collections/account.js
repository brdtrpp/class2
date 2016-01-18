(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// collections/account.js                                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Account = new Mongo.Collection('account');                             // 1
                                                                       //
ExternalAccSchema = new SimpleSchema({                                 // 3
  accountNumber: {                                                     // 4
    type: String                                                       // 5
  },                                                                   //
  routingNumber: {                                                     // 7
    type: String                                                       // 8
  }                                                                    //
});                                                                    //
                                                                       //
LegalEntSchema = new SimpleSchema({                                    // 12
  business_name: {                                                     // 13
    type: String                                                       // 14
  },                                                                   //
  firstName: {                                                         // 16
    type: String                                                       // 17
  },                                                                   //
  lastName: {                                                          // 19
    type: String                                                       // 20
  },                                                                   //
  dob: {                                                               // 22
    type: Date,                                                        // 23
    autoform: {                                                        // 24
      afFieldInput: {                                                  // 25
        type: "bootstrap-datepicker"                                   // 26
      }                                                                //
    }                                                                  //
  },                                                                   //
  type: {                                                              // 30
    type: String,                                                      // 31
    label: "Type of Business",                                         // 32
    allowedValues: ['individual', 'corporation'],                      // 33
    autoform: {                                                        // 34
      options: {                                                       // 35
        individual: "Individual",                                      // 36
        corporation: "Corporation"                                     // 37
      }                                                                //
    }                                                                  //
  }                                                                    //
                                                                       //
}), Account.attachSchema(new SimpleSchema({                            //
  businessName: {                                                      // 45
    type: String                                                       // 46
  },                                                                   //
  legalEntity: {                                                       // 48
    type: LegalEntSchema                                               // 49
  },                                                                   //
  address: {                                                           // 51
    type: AddressSchema                                                // 52
  },                                                                   //
  externalAccount: {                                                   // 54
    type: ExternalAccSchema,                                           // 55
    label: "Bank Account Information"                                  // 56
  },                                                                   //
  acceptedTos: {                                                       // 58
    type: Boolean,                                                     // 59
    label: "I have read and accepted Class, Inc. and Stripes terms of service"
  }                                                                    //
}));                                                                   //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=account.js.map
