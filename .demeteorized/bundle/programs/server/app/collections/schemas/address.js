(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// collections/schemas/address.js                                      //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
AddressSchema = new SimpleSchema({                                     // 1
  street: {                                                            // 2
    type: String,                                                      // 3
    max: 100                                                           // 4
  },                                                                   //
  city: {                                                              // 6
    type: String,                                                      // 7
    max: 50                                                            // 8
  },                                                                   //
  state: {                                                             // 10
    type: String,                                                      // 11
    regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/,
    autoform: {                                                        // 13
      options: function () {                                           // 14
        return _.map(["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MH", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "PW", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"], function (c, i) {
          return { label: c, value: c };                               // 16
        });                                                            //
      }                                                                //
    }                                                                  //
    // options: function () {                                          //
    //     _.map(, function (c, i) {                                   //
    //       return {label: "Color " + i + ": " + c, value: c};        //
    //     });                                                         //
    //   }                                                             //
  },                                                                   //
  zip: {                                                               // 26
    type: String,                                                      // 27
    regEx: SimpleSchema.RegEx.ZipCode                                  // 28
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=address.js.map
