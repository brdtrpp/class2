(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/collections/event_search.js                                     //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Search = new Mongo.Collection('search');                               // 1
                                                                       //
Search.attachSchema(new SimpleSchema({                                 // 3
  createdAt: {                                                         // 4
    type: Date,                                                        // 5
    autoValue: function () {                                           // 6
      if (this.isInsert) {                                             // 7
        return new Date();                                             // 8
      } else if (this.isUpsert) {                                      //
        return { $setOnInsert: new Date() };                           // 10
      } else {                                                         //
        this.unset(); // Prevent user from supplying their own value   // 12
      }                                                                //
    },                                                                 //
    autoform: {                                                        // 15
      omit: true                                                       // 16
    }                                                                  //
  },                                                                   //
  keyword: {                                                           // 19
    type: String,                                                      // 20
    optional: true                                                     // 21
  },                                                                   //
                                                                       //
  category: {                                                          // 24
    type: String,                                                      // 25
    allowedValues: ['academic', 'beauty_style', 'computer', 'crafts_hobbies', 'culinary', 'health_wellness', 'language', 'music', 'performance', 'sports', 'fitness', 'arts', 'religious', 'homeschool', 'other'],
    autoform: {                                                        // 43
      type: "select",                                                  // 44
      options: {                                                       // 45
        academic: "Academics",                                         // 46
        beauty_style: "Beauty & Style",                                // 47
        computer: "Computers & Technology",                            // 48
        crafts_hobbies: "Craft & Hobbies",                             // 49
        culinary: "Culinary",                                          // 50
        health_wellness: "Health & Wellness",                          // 51
        language: "Language",                                          // 52
        music: "Music",                                                // 53
        performance: "Performaning Arts",                              // 54
        sports: "Sports & Athletics",                                  // 55
        fitness: "Fitness",                                            // 56
        arts: "Creative Arts",                                         // 57
        religious: "Religious",                                        // 58
        homeschool: "Homeschool",                                      // 59
        other: "Other"                                                 // 60
      }                                                                //
    }                                                                  //
  },                                                                   //
                                                                       //
  // optional: true,                                                   //
  zip: {                                                               // 66
    type: String,                                                      // 67
    regEx: /^[0-9]{5}$/                                                // 68
  },                                                                   //
  radius: {                                                            // 70
    type: Number,                                                      // 71
    optional: true,                                                    // 72
    defaultValue: 25                                                   // 73
  },                                                                   //
                                                                       //
  owner: {                                                             // 76
    type: String,                                                      // 77
    autoform: {                                                        // 78
      omit: true                                                       // 79
    },                                                                 //
    optional: true                                                     // 81
  }                                                                    //
}));                                                                   //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=event_search.js.map
