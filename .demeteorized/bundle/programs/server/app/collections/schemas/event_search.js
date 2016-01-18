(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// collections/schemas/event_search.js                                 //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Search = new Mongo.Collection('search');                               // 1
                                                                       //
Search.attachSchema(new SimpleSchema({                                 // 3
  category: {                                                          // 4
    type: String,                                                      // 5
    allowedValues: ['academic', 'beauty_style', 'computer', 'crafts_hobbies', 'culinary', 'health_wellness', 'language', 'music', 'performance', 'sports', 'fitness', 'arts', 'other'],
    autoform: {                                                        // 21
      type: "select",                                                  // 22
      options: {                                                       // 23
        academic: "Academics",                                         // 24
        beauty_style: "Beauty & Style",                                // 25
        computer: "Computers & Technology",                            // 26
        crafts_hobbies: "Craft & Hobbies",                             // 27
        culinary: "Culinary",                                          // 28
        health_wellness: "Health & Wellness",                          // 29
        language: "Language",                                          // 30
        music: "Music",                                                // 31
        performance: "Performaning Arts",                              // 32
        sports: "Sports & Athletics",                                  // 33
        fitness: "Fitness",                                            // 34
        arts: "Creative Arts",                                         // 35
        other: "Other"                                                 // 36
      }                                                                //
    },                                                                 //
    optional: true                                                     // 39
  },                                                                   //
                                                                       //
  city: {                                                              // 42
    type: String,                                                      // 43
    max: 50                                                            // 44
  },                                                                   //
  state: {                                                             // 46
    type: String,                                                      // 47
    regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/,
    autoform: {                                                        // 49
      options: function () {                                           // 50
        return _.map(["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MH", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "PW", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"], function (c, i) {
          return { label: c, value: c };                               // 52
        });                                                            //
      }                                                                //
    }                                                                  //
  },                                                                   //
  radius: {                                                            // 57
    type: Number,                                                      // 58
    optional: true,                                                    // 59
    defaultValue: 25                                                   // 60
  }                                                                    //
}));                                                                   //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=event_search.js.map
