//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var EJSON = Package.ejson.EJSON;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var __coffeescriptShare, isolateValue;

(function(){

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// packages/mrt_isolate-value/packages/mrt_isolate-value.js                //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
(function () {                                                             // 1
                                                                           // 2
//////////////////////////////////////////////////////////////////////////
//                                                                      //
// packages/mrt:isolate-value/isolate.coffee.js                         //
//                                                                      //
//////////////////////////////////////////////////////////////////////////
                                                                        //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
                                                                           // 10
                                                                           // 11
isolateValue = function(fn) {                                              // 12
  var dep, firstTime, lastValue, outerComputation;                         // 13
  firstTime = true;                                                        // 14
  lastValue = null;                                                        // 15
  outerComputation = Deps.currentComputation;                              // 16
  dep = new Deps.Dependency();                                             // 17
  Deps.autorun(function(c) {                                               // 18
    var value;                                                             // 19
    if (outerComputation != null ? outerComputation.stopped : void 0) {    // 20
      c.stop();                                                            // 21
      return;                                                              // 22
    }                                                                      // 23
    value = fn();                                                          // 24
    if (firstTime) {                                                       // 25
      lastValue = value;                                                   // 26
      firstTime = false;                                                   // 27
    } else {                                                               // 28
      if (!EJSON.equals(value, lastValue)) {                               // 29
        dep.changed();                                                     // 30
      }                                                                    // 31
    }                                                                      // 32
  });                                                                      // 33
  dep.depend();                                                            // 34
  return lastValue;                                                        // 35
};                                                                         // 36
                                                                           // 37
if (typeof Package === "undefined" || Package === null) {                  // 38
  this.isolateValue = isolateValue;                                        // 39
}                                                                          // 40
//////////////////////////////////////////////////////////////////////////
                                                                           // 42
}).call(this);                                                             // 43
                                                                           // 44
/////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['mrt:isolate-value'] = {}, {
  isolateValue: isolateValue
});

})();
