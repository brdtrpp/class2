(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/startup.js                                                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.startup(function () {                                           // 1
  CalEvent._ensureIndex({                                              // 2
    'title': "text",                                                   // 3
    'category': 'text',                                                // 4
    'description': 'text',                                             // 5
    'ownerName': 'text'                                                // 6
  });                                                                  //
                                                                       //
  // SyncedCron.add({                                                  //
  //   name: 'Crunch some important numbers for the marketing department',
  //   schedule: function(parser) {                                    //
  //     // parser is a later.parse object                             //
  //     return parser.text('every 2 minutes');                        //
  //   },                                                              //
  //   job: function() {                                               //
  //     console.log('e')                                              //
  //   }                                                               //
  // });                                                               //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=startup.js.map
