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
var Mongo = Package.mongo.Mongo;
var _ = Package.underscore._;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var Random = Package.random.Random;
var EJSON = Package.ejson.EJSON;

/* Package-scope variables */
var Security;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/ongoworks_security/lib/client/security-api.js                                         //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
// We only stub on the client to prevent errors if putting in common code                         // 1
                                                                                                  // 2
Security = {                                                                                      // 3
  Rule: function () {},                                                                           // 4
  // the starting point of the chain                                                              // 5
  permit: function permit() {                                                                     // 6
    return new Security.Rule();                                                                   // 7
  },                                                                                              // 8
  Check: function () {},                                                                          // 9
  can: function can() {                                                                           // 10
    return new Security.Check();                                                                  // 11
  },                                                                                              // 12
  defineMethod: function securityDefineMethod(name) {                                             // 13
    // Check whether a rule with the given name already exists; can't overwrite                   // 14
    if (Security.Rule.prototype[name]) {                                                          // 15
      throw new Error('A security method with the name "' + name + '" has already been defined');
    }                                                                                             // 17
    Security.Rule.prototype[name] = function () {                                                 // 18
      return this;                                                                                // 19
    };                                                                                            // 20
  }                                                                                               // 21
};                                                                                                // 22
                                                                                                  // 23
// Security.Rule prototypes                                                                       // 24
Security.Rule.prototype.collections = function () {                                               // 25
  return this;                                                                                    // 26
};                                                                                                // 27
                                                                                                  // 28
Security.Rule.prototype.apply = function () {};                                                   // 29
                                                                                                  // 30
Mongo.Collection.prototype.permit = function () {                                                 // 31
  return Security.permit().collections(this);                                                     // 32
};                                                                                                // 33
                                                                                                  // 34
// Security.Check prototypes                                                                      // 35
Security.Check.prototype.for = function () {                                                      // 36
  return this;                                                                                    // 37
};                                                                                                // 38
                                                                                                  // 39
['insert', 'update', 'remove'].forEach(function (type) {                                          // 40
  Security.Check.prototype[type] = function () {                                                  // 41
    return this;                                                                                  // 42
  };                                                                                              // 43
});                                                                                               // 44
                                                                                                  // 45
Security.Check.prototype.check = function () {                                                    // 46
  return true;                                                                                    // 47
};                                                                                                // 48
                                                                                                  // 49
Security.Check.prototype.throw = function () {};                                                  // 50
                                                                                                  // 51
////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/ongoworks_security/lib/security-rules.js                                              //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
/*                                                                                                // 1
 * This file defines built-in restriction methods                                                 // 2
 */                                                                                               // 3
                                                                                                  // 4
/*                                                                                                // 5
 * No one                                                                                         // 6
 */                                                                                               // 7
                                                                                                  // 8
Security.defineMethod("never", {                                                                  // 9
  fetch: [],                                                                                      // 10
  transform: null,                                                                                // 11
  deny: function () {                                                                             // 12
    return true;                                                                                  // 13
  }                                                                                               // 14
});                                                                                               // 15
                                                                                                  // 16
/*                                                                                                // 17
 * Logged In                                                                                      // 18
 */                                                                                               // 19
                                                                                                  // 20
Security.defineMethod("ifLoggedIn", {                                                             // 21
  fetch: [],                                                                                      // 22
  transform: null,                                                                                // 23
  deny: function (type, arg, userId) {                                                            // 24
    return !userId;                                                                               // 25
  }                                                                                               // 26
});                                                                                               // 27
                                                                                                  // 28
/*                                                                                                // 29
 * Specific User ID                                                                               // 30
 */                                                                                               // 31
                                                                                                  // 32
Security.defineMethod("ifHasUserId", {                                                            // 33
  fetch: [],                                                                                      // 34
  transform: null,                                                                                // 35
  deny: function (type, arg, userId) {                                                            // 36
    return userId !== arg;                                                                        // 37
  }                                                                                               // 38
});                                                                                               // 39
                                                                                                  // 40
/*                                                                                                // 41
 * Specific Roles                                                                                 // 42
 */                                                                                               // 43
                                                                                                  // 44
/*                                                                                                // 45
 * alanning:roles support                                                                         // 46
 */                                                                                               // 47
if (Package && Package["alanning:roles"]) {                                                       // 48
                                                                                                  // 49
  var Roles = Package["alanning:roles"].Roles;                                                    // 50
                                                                                                  // 51
  Security.defineMethod("ifHasRole", {                                                            // 52
    fetch: [],                                                                                    // 53
    transform: null,                                                                              // 54
    deny: function (type, arg, userId) {                                                          // 55
      if (!arg) {                                                                                 // 56
        throw new Error('ifHasRole security rule method requires an argument');                   // 57
      }                                                                                           // 58
      if (arg.role) {                                                                             // 59
        return !Roles.userIsInRole(userId, arg.role, arg.group);                                  // 60
      } else {                                                                                    // 61
        return !Roles.userIsInRole(userId, arg);                                                  // 62
      }                                                                                           // 63
    }                                                                                             // 64
  });                                                                                             // 65
                                                                                                  // 66
}                                                                                                 // 67
                                                                                                  // 68
/*                                                                                                // 69
 * nicolaslopezj:roles support                                                                    // 70
 * Note: doesn't support groups                                                                   // 71
 */                                                                                               // 72
if (Package && Package["nicolaslopezj:roles"]) {                                                  // 73
                                                                                                  // 74
  var Roles = Package["nicolaslopezj:roles"].Roles;                                               // 75
                                                                                                  // 76
  Security.defineMethod("ifHasRole", {                                                            // 77
    fetch: [],                                                                                    // 78
    transform: null,                                                                              // 79
    deny: function (type, arg, userId) {                                                          // 80
      if (!arg) {                                                                                 // 81
        throw new Error('ifHasRole security rule method requires an argument');                   // 82
      }                                                                                           // 83
      return !Roles.userHasRole(userId, arg);                                                     // 84
    }                                                                                             // 85
  });                                                                                             // 86
                                                                                                  // 87
}                                                                                                 // 88
                                                                                                  // 89
/*                                                                                                // 90
 * Specific Properties                                                                            // 91
 */                                                                                               // 92
                                                                                                  // 93
Security.defineMethod("onlyProps", {                                                              // 94
  fetch: [],                                                                                      // 95
  transform: null,                                                                                // 96
  deny: function (type, arg, userId, doc, fieldNames) {                                           // 97
    if (!_.isArray(arg)) {                                                                        // 98
      arg = [arg];                                                                                // 99
    }                                                                                             // 100
                                                                                                  // 101
    fieldNames = fieldNames || _.keys(doc);                                                       // 102
                                                                                                  // 103
    return !_.every(fieldNames, function (fieldName) {                                            // 104
      return _.contains(arg, fieldName);                                                          // 105
    });                                                                                           // 106
  }                                                                                               // 107
});                                                                                               // 108
                                                                                                  // 109
Security.defineMethod("exceptProps", {                                                            // 110
  fetch: [],                                                                                      // 111
  transform: null,                                                                                // 112
  deny: function (type, arg, userId, doc, fieldNames) {                                           // 113
    if (!_.isArray(arg)) {                                                                        // 114
      arg = [arg];                                                                                // 115
    }                                                                                             // 116
                                                                                                  // 117
    fieldNames = fieldNames || _.keys(doc);                                                       // 118
                                                                                                  // 119
    return _.any(fieldNames, function (fieldName) {                                               // 120
      return _.contains(arg, fieldName);                                                          // 121
    });                                                                                           // 122
  }                                                                                               // 123
});                                                                                               // 124
                                                                                                  // 125
////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['ongoworks:security'] = {}, {
  Security: Security
});

})();
