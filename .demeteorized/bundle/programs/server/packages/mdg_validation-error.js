(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var ECMAScript = Package.ecmascript.ECMAScript;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var check = Package.check.check;
var Match = Package.check.Match;
var babelHelpers = Package['babel-runtime'].babelHelpers;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var ValidationError;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// packages/mdg_validation-error/validation-error.js                                   //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////
                                                                                       //
/* global ValidationError:true */                                                      //
/* global SimpleSchema */                                                              //
                                                                                       //
// This is exactly what comes out of SS.                                               //
var errorSchema = new SimpleSchema({                                                   // 5
  name: { type: String },                                                              // 6
  type: { type: String },                                                              // 7
  details: { type: Object, blackbox: true, optional: true }                            // 8
});                                                                                    //
                                                                                       //
var errorsSchema = new SimpleSchema({                                                  // 11
  errors: { type: [errorSchema] }                                                      // 12
});                                                                                    //
                                                                                       //
ValidationError = (function (_Meteor$Error) {                                          // 15
  babelHelpers.inherits(_class, _Meteor$Error);                                        //
                                                                                       //
  function _class(errors) {                                                            // 16
    babelHelpers.classCallCheck(this, _class);                                         //
                                                                                       //
    check({ errors: errors }, errorsSchema);                                           // 17
                                                                                       //
    _Meteor$Error.call(this, ValidationError.ERROR_CODE, 'Validation Failed', errors);
                                                                                       //
    this.errors = errors;                                                              // 21
  }                                                                                    //
                                                                                       //
  return _class;                                                                       //
})(Meteor.Error);                                                                      //
                                                                                       //
// If people use this to check for the error code, we can change it                    //
// in future versions                                                                  //
ValidationError.ERROR_CODE = 'validation-error';                                       // 27
/////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['mdg:validation-error'] = {
  ValidationError: ValidationError
};

})();

//# sourceMappingURL=mdg_validation-error.js.map
