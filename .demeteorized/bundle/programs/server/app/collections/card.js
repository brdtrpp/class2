(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// collections/card.js                                                 //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Card = new Mongo.Collection('card');                                   // 1
                                                                       //
Card.attachSchema(new SimpleSchema({                                   // 3
  creditCardNumber: {                                                  // 4
    type: Number,                                                      // 5
    label: "Credit Card Number",                                       // 6
    min: 16,                                                           // 7
    max: 16                                                            // 8
  },                                                                   //
                                                                       //
  cvc: {                                                               // 11
    type: Number,                                                      // 12
    label: "3 Digit CVC",                                              // 13
    max: 3,                                                            // 14
    min: 3                                                             // 15
  },                                                                   //
                                                                       //
  expMo: {                                                             // 18
    type: Number,                                                      // 19
    label: "Experation Month",                                         // 20
    min: 1,                                                            // 21
    max: 12                                                            // 22
  },                                                                   //
                                                                       //
  expYr: {                                                             // 25
    type: Number,                                                      // 26
    label: "ExperationYear"                                            // 27
  }                                                                    //
}));                                                                   //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=card.js.map
