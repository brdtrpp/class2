(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var Zipcodes;

(function(){

////////////////////////////////////////////////////////////////////////////
//                                                                        //
// packages/mrt_zipcodes/packages/mrt_zipcodes.js                         //
//                                                                        //
////////////////////////////////////////////////////////////////////////////
                                                                          //
(function () {                                                            // 1
                                                                          // 2
///////////////////////////////////////////////////////////////////////   // 3
//                                                                   //   // 4
// packages/mrt:zipcodes/server.js                                   //   // 5
//                                                                   //   // 6
///////////////////////////////////////////////////////////////////////   // 7
                                                                     //   // 8
Zipcodes = Npm.require('zipcodes');                                  // 1
///////////////////////////////////////////////////////////////////////   // 10
                                                                          // 11
}).call(this);                                                            // 12
                                                                          // 13
////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['mrt:zipcodes'] = {
  Zipcodes: Zipcodes
};

})();

//# sourceMappingURL=mrt_zipcodes.js.map
