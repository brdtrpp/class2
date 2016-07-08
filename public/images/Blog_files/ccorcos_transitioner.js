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
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var Template = Package.templating.Template;
var _ = Package.underscore._;
var Iron = Package['iron:core'].Iron;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var __coffeescriptShare, Transitioner;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/ccorcos_transitioner/packages/ccorcos_transitioner.js                                              //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
(function () {                                                                                                 // 1
                                                                                                               // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                       //    // 4
// packages/ccorcos:transitioner/lib/template.transitioner.js                                            //    // 5
//                                                                                                       //    // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                         //    // 8
                                                                                                         // 1  // 9
Template.__checkName("transitioner");                                                                    // 2  // 10
Template["transitioner"] = new Template("Template.transitioner", (function() {                           // 3  // 11
  var view = this;                                                                                       // 4  // 12
  return HTML.DIV({                                                                                      // 5  // 13
    "class": "transitioner",                                                                             // 6  // 14
    id: function() {                                                                                     // 7  // 15
      return [ "transitioner-", Spacebars.mustache(view.lookup("id")) ];                                 // 8  // 16
    }                                                                                                    // 9  // 17
  }, Blaze._InOuterTemplateScope(view, function() {                                                      // 10
    return Spacebars.include(function() {                                                                // 11
      return Spacebars.call(view.templateContentBlock);                                                  // 12
    });                                                                                                  // 13
  }));                                                                                                   // 14
}));                                                                                                     // 15
                                                                                                         // 16
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 25
                                                                                                               // 26
}).call(this);                                                                                                 // 27
                                                                                                               // 28
                                                                                                               // 29
                                                                                                               // 30
                                                                                                               // 31
                                                                                                               // 32
                                                                                                               // 33
(function () {                                                                                                 // 34
                                                                                                               // 35
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 36
//                                                                                                       //    // 37
// packages/ccorcos:transitioner/lib/transitioner.coffee.js                                              //    // 38
//                                                                                                       //    // 39
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 40
                                                                                                         //    // 41
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var TransitionerClass, counter, fromRoute, toRoute, uniqueIdMaker;                                             // 43
                                                                                                               // 44
TransitionerClass = (function() {                                                                              // 45
  function TransitionerClass() {                                                                               // 46
    this.transitions = [];                                                                                     // 47
  }                                                                                                            // 48
                                                                                                               // 49
  TransitionerClass.prototype["default"] = function(velocityAnimation) {                                       // 50
    if ((velocityAnimation != null ? velocityAnimation["in"] : void 0) == null) {                              // 51
      console.log('ERROR: velocityAnimation must contain a velocityAnimation.in');                             // 52
      return;                                                                                                  // 53
    }                                                                                                          // 54
    if ((velocityAnimation != null ? velocityAnimation.out : void 0) == null) {                                // 55
      console.log('ERROR: velocityAnimation must contain a velocityAnimation.out');                            // 56
      return;                                                                                                  // 57
    }                                                                                                          // 58
    return this.defaultVelocityAnimation = velocityAnimation;                                                  // 59
  };                                                                                                           // 60
                                                                                                               // 61
  TransitionerClass.prototype.transition = function(obj) {                                                     // 62
    var _ref, _ref1;                                                                                           // 63
    if ((obj != null ? obj.fromRoute : void 0) == null) {                                                      // 64
      console.log('ERROR: transition object must contain a fromRoute');                                        // 65
      return;                                                                                                  // 66
    }                                                                                                          // 67
    if ((obj != null ? obj.toRoute : void 0) == null) {                                                        // 68
      console.log('ERROR: transition object must contain a toRoute');                                          // 69
      return;                                                                                                  // 70
    }                                                                                                          // 71
    if ((obj != null ? obj.velocityAnimation : void 0) == null) {                                              // 72
      console.log('ERROR: transition object must contain a velocityAnimation');                                // 73
      return;                                                                                                  // 74
    }                                                                                                          // 75
    if ((obj != null ? (_ref = obj.velocityAnimation) != null ? _ref["in"] : void 0 : void 0) == null) {       // 76
      console.log('ERROR: transition object must contain a velocityAnimation.in');                             // 77
      return;                                                                                                  // 78
    }                                                                                                          // 79
    if ((obj != null ? (_ref1 = obj.velocityAnimation) != null ? _ref1.out : void 0 : void 0) == null) {       // 80
      console.log('ERROR: transition object must contain a velocityAnimation.out');                            // 81
      return;                                                                                                  // 82
    }                                                                                                          // 83
    return this.transitions.push(obj);                                                                         // 84
  };                                                                                                           // 85
                                                                                                               // 86
  TransitionerClass.prototype.getAnimation = function(fromRoute, toRoute) {                                    // 87
    var transitionObj;                                                                                         // 88
    transitionObj = _.find(this.transitions, function(transition) {                                            // 89
      return transition.fromRoute === fromRoute && transition.toRoute === toRoute;                             // 90
    });                                                                                                        // 91
    if (transitionObj) {                                                                                       // 92
      return transitionObj.velocityAnimation;                                                                  // 93
    } else if (this.defaultVelocityAnimation) {                                                                // 94
      return this.defaultVelocityAnimation;                                                                    // 95
    } else {                                                                                                   // 96
      return {                                                                                                 // 97
        "in": function(node, next) {                                                                           // 98
          return $(node).insertBefore(next);                                                                   // 99
        },                                                                                                     // 100
        out: function(node) {                                                                                  // 101
          return $(node).remove();                                                                             // 102
        }                                                                                                      // 103
      };                                                                                                       // 104
    }                                                                                                          // 105
    if ((transitionObj != null ? transitionObj.animationName : void 0) && (transitionObj != null ? transitionObj.animationName : void 0) in this.animations) {
      return this.animations[transitionObj.animationName](transitionObj.duration, transitionObj.easing);       // 107
    } else {                                                                                                   // 108
      return this.animations[this["default"]]();                                                               // 109
    }                                                                                                          // 110
  };                                                                                                           // 111
                                                                                                               // 112
  return TransitionerClass;                                                                                    // 113
                                                                                                               // 114
})();                                                                                                          // 115
                                                                                                               // 116
Transitioner = new TransitionerClass();                                                                        // 117
                                                                                                               // 118
counter = function() {                                                                                         // 119
  var count;                                                                                                   // 120
  count = 0;                                                                                                   // 121
  return function() {                                                                                          // 122
    return count++;                                                                                            // 123
  };                                                                                                           // 124
};                                                                                                             // 125
                                                                                                               // 126
uniqueIdMaker = counter();                                                                                     // 127
                                                                                                               // 128
Template.transitioner.created = function() {                                                                   // 129
  return this.id = uniqueIdMaker();                                                                            // 130
};                                                                                                             // 131
                                                                                                               // 132
Template.transitioner.helpers({                                                                                // 133
  id: function() {                                                                                             // 134
    return Template.instance().id;                                                                             // 135
  }                                                                                                            // 136
});                                                                                                            // 137
                                                                                                               // 138
fromRoute = null;                                                                                              // 139
                                                                                                               // 140
toRoute = null;                                                                                                // 141
                                                                                                               // 142
Meteor.startup(function() {                                                                                    // 143
  return Tracker.autorun(function() {                                                                          // 144
    var _ref, _ref1;                                                                                           // 145
    fromRoute = toRoute;                                                                                       // 146
    return toRoute = (_ref = Router.current()) != null ? (_ref1 = _ref.route) != null ? typeof _ref1.getName === "function" ? _ref1.getName() : void 0 : void 0 : void 0;
  });                                                                                                          // 148
});                                                                                                            // 149
                                                                                                               // 150
Template.transitioner.rendered = function() {                                                                  // 151
  var _ref;                                                                                                    // 152
  return (_ref = this.find("#transitioner-" + this.id)) != null ? _ref._uihooks = {                            // 153
    insertElement: function(node, next) {                                                                      // 154
      var $node, animation;                                                                                    // 155
      animation = Transitioner.getAnimation(fromRoute, toRoute);                                               // 156
      if (_.isFunction(animation != null ? animation["in"] : void 0)) {                                        // 157
        return animation["in"].apply(this, [node, next]);                                                      // 158
      } else if (_.isString(animation != null ? animation["in"] : void 0)) {                                   // 159
        return $(node).insertBefore(next).velocity(animation["in"]);                                           // 160
      } else if (_.isArray(animation != null ? animation["in"] : void 0)) {                                    // 161
        $node = $(node);                                                                                       // 162
        return $node.insertBefore(next).velocity.apply($node, animation["in"]);                                // 163
      } else {                                                                                                 // 164
        console.log("ERROR: animation.in not found!!");                                                        // 165
        return $(node).insertBefore(next);                                                                     // 166
      }                                                                                                        // 167
    },                                                                                                         // 168
    removeElement: function(node) {                                                                            // 169
      var $node, animation;                                                                                    // 170
      animation = Transitioner.getAnimation(fromRoute, toRoute);                                               // 171
      if (_.isFunction(animation != null ? animation.out : void 0)) {                                          // 172
        return animation.out.apply(this, [node]);                                                              // 173
      } else if (_.isString(animation != null ? animation.out : void 0)) {                                     // 174
        $node = $(node);                                                                                       // 175
        return $node.velocity(animation.out, {                                                                 // 176
          complete: function() {                                                                               // 177
            return $node.remove();                                                                             // 178
          }                                                                                                    // 179
        });                                                                                                    // 180
      } else if (_.isArray(animation != null ? animation.out : void 0)) {                                      // 181
        $node = $(node);                                                                                       // 182
        return $node.velocity.apply($node, animation.out).velocity({                                           // 183
          opacity: 0                                                                                           // 184
        }, {                                                                                                   // 185
          duration: 0,                                                                                         // 186
          queue: true,                                                                                         // 187
          complete: function() {                                                                               // 188
            return $node.remove();                                                                             // 189
          }                                                                                                    // 190
        });                                                                                                    // 191
      } else {                                                                                                 // 192
        console.log("ERROR: animation.out not found!!");                                                       // 193
        return $(node).remove();                                                                               // 194
      }                                                                                                        // 195
    }                                                                                                          // 196
  } : void 0;                                                                                                  // 197
};                                                                                                             // 198
///////////////////////////////////////////////////////////////////////////////////////////////////////////    // 199
                                                                                                               // 200
}).call(this);                                                                                                 // 201
                                                                                                               // 202
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['ccorcos:transitioner'] = {}, {
  Transitioner: Transitioner
});

})();
