(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ReactiveVar = Package['reactive-var'].ReactiveVar;

/* Package-scope variables */
var __coffeescriptShare, ReactiveField;

(function(){

////////////////////////////////////////////////////////////////////////////
//                                                                        //
// packages/peerlibrary_reactive-field/packages/peerlibrary_reactive-fiel //
//                                                                        //
////////////////////////////////////////////////////////////////////////////
                                                                          //
(function () {                                                            // 1
                                                                          // 2
/////////////////////////////////////////////////////////////////////////
//                                                                     //
// packages/peerlibrary:reactive-field/lib.coffee.js                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
                                                                          // 10
                                                                          // 11
ReactiveField = (function() {                                             // 12
  function ReactiveField(initialValue, equalsFunc) {                      // 13
    var getterSetter, value;                                              // 14
    value = new ReactiveVar(initialValue, equalsFunc);                    // 15
    getterSetter = function(newValue) {                                   // 16
      if (arguments.length > 0) {                                         // 17
        value.set(newValue);                                              // 18
        return Tracker.nonreactive((function(_this) {                     // 19
          return function() {                                             // 20
            return value.get();                                           // 21
          };                                                              // 22
        })(this));                                                        // 23
      }                                                                   // 24
      return value.get();                                                 // 25
    };                                                                    // 26
    if (Object.setPrototypeOf) {                                          // 27
      Object.setPrototypeOf(getterSetter, this.constructor.prototype);    // 28
    } else {                                                              // 29
      getterSetter.__proto__ = this.constructor.prototype;                // 30
    }                                                                     // 31
    getterSetter.toString = function() {                                  // 32
      return "ReactiveField{" + (this()) + "}";                           // 33
    };                                                                    // 34
    getterSetter.apply = function(obj, args) {                            // 35
      if ((args != null ? args.length : void 0) > 0) {                    // 36
        return getterSetter(args[0]);                                     // 37
      } else {                                                            // 38
        return getterSetter();                                            // 39
      }                                                                   // 40
    };                                                                    // 41
    getterSetter.call = function(obj, arg) {                              // 42
      if (arguments.length > 1) {                                         // 43
        return getterSetter(arg);                                         // 44
      } else {                                                            // 45
        return getterSetter();                                            // 46
      }                                                                   // 47
    };                                                                    // 48
    return getterSetter;                                                  // 49
  }                                                                       // 50
                                                                          // 51
  return ReactiveField;                                                   // 52
                                                                          // 53
})();                                                                     // 54
/////////////////////////////////////////////////////////////////////////
                                                                          // 56
}).call(this);                                                            // 57
                                                                          // 58
////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['peerlibrary:reactive-field'] = {
  ReactiveField: ReactiveField
};

})();

//# sourceMappingURL=peerlibrary_reactive-field.js.map
