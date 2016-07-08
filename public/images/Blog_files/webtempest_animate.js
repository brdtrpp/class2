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
var Template = Package.templating.Template;
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
var __coffeescriptShare;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/webtempest_animate/packages/webtempest_animate.js                                             //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
(function () {                                                                                            // 1
                                                                                                          // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                  //    // 4
// packages/webtempest:animate/template.transition.js                                               //    // 5
//                                                                                                  //    // 6
//////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                    //    // 8
                                                                                                    // 1  // 9
Template.__checkName("transition");                                                                 // 2  // 10
Template["transition"] = new Template("Template.transition", (function() {                          // 3  // 11
  var view = this;                                                                                  // 4  // 12
  return Blaze.If(function() {                                                                      // 5  // 13
    return Spacebars.call(Spacebars.dot(view.lookup("."), "wrap"));                                 // 6  // 14
  }, function() {                                                                                   // 7  // 15
    return [ "\n    ", HTML.DIV({                                                                   // 8  // 16
      "class": "transition-wrapper"                                                                 // 9  // 17
    }, "\n      ", Blaze._InOuterTemplateScope(view, function() {                                   // 10
      return Spacebars.include(function() {                                                         // 11
        return Spacebars.call(view.templateContentBlock);                                           // 12
      });                                                                                           // 13
    }), "\n    "), "\n  " ];                                                                        // 14
  }, function() {                                                                                   // 15
    return [ "\n    ", Blaze._InOuterTemplateScope(view, function() {                               // 16
      return Spacebars.include(function() {                                                         // 17
        return Spacebars.call(view.templateContentBlock);                                           // 18
      });                                                                                           // 19
    }), "\n  " ];                                                                                   // 20
  });                                                                                               // 21
}));                                                                                                // 22
                                                                                                    // 23
//////////////////////////////////////////////////////////////////////////////////////////////////////    // 32
                                                                                                          // 33
}).call(this);                                                                                            // 34
                                                                                                          // 35
                                                                                                          // 36
                                                                                                          // 37
                                                                                                          // 38
                                                                                                          // 39
                                                                                                          // 40
(function () {                                                                                            // 41
                                                                                                          // 42
//////////////////////////////////////////////////////////////////////////////////////////////////////    // 43
//                                                                                                  //    // 44
// packages/webtempest:animate/transitions.coffee.js                                                //    // 45
//                                                                                                  //    // 46
//////////////////////////////////////////////////////////////////////////////////////////////////////    // 47
                                                                                                    //    // 48
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var ENDTRANSITION, Transitions;                                                                           // 50
                                                                                                          // 51
ENDTRANSITION = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd transitionEnd msTransitionEnd animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd animationEnd msAnimationEnd';
                                                                                                          // 53
Transitions = (function() {                                                                               // 54
  function Transitions(options) {                                                                         // 55
    var defaults, self;                                                                                   // 56
    defaults = {                                                                                          // 57
      onScreenClass: '',                                                                                  // 58
      offScreenClass: '',                                                                                 // 59
      hiddenClass: 'out',                                                                                 // 60
      animateClass: "animated"                                                                            // 61
    };                                                                                                    // 62
    this.opt = _.defaults(options, defaults);                                                             // 63
    this.opt.insertTimeout = this.getInsertTimeout();                                                     // 64
    this.opt.removeTimeout = this.getRemoveTimeout();                                                     // 65
    this.opt.parentNode._uihooks = this.createHooks();                                                    // 66
    self = this;                                                                                          // 67
    this.setupStyles();                                                                                   // 68
    _.each($(this.opt.parentNode).find('.animated.out'), function(item) {                                 // 69
      return self.insertElement(item, null);                                                              // 70
    });                                                                                                   // 71
  }                                                                                                       // 72
                                                                                                          // 73
  Transitions.prototype.setupStyles = function() {                                                        // 74
    var randName, styleInjection;                                                                         // 75
    if (this.opt.inDuration || this.opt.outDuration) {                                                    // 76
      randName = this.opt.onScreenClass + _.random(0, 1000);                                              // 77
      styleInjection = $("<style></style>");                                                              // 78
      $(this.opt.parentNode).addClass(randName);                                                          // 79
      if (this.opt.inDuration) {                                                                          // 80
        styleInjection.append("." + randName + " .animated." + this.opt.onScreenClass + " {-webkit-animation-duration: " + this.opt.inDuration + "ms;animation-duration: " + this.opt.inDuration + "ms;}");
      }                                                                                                   // 82
      if (this.opt.outDuration) {                                                                         // 83
        styleInjection.append("." + randName + " .animated." + this.opt.offScreenClass + " {-webkit-animation-duration: " + this.opt.outDuration + "ms;animation-duration: " + this.opt.outDuration + "ms;}");
      }                                                                                                   // 85
      return $(this.opt.parentNode).append(styleInjection);                                               // 86
    }                                                                                                     // 87
  };                                                                                                      // 88
                                                                                                          // 89
  Transitions.prototype.getInsertTimeout = function() {                                                   // 90
    if (this.opt.inDuration) {                                                                            // 91
      return parseInt(this.opt.inDuration);                                                               // 92
    }                                                                                                     // 93
    switch (this.opt.onScreenClass) {                                                                     // 94
      case 'hinge':                                                                                       // 95
        return 2000;                                                                                      // 96
      case 'bounceIn':                                                                                    // 97
        return 750;                                                                                       // 98
      default:                                                                                            // 99
        return 1000;                                                                                      // 100
    }                                                                                                     // 101
  };                                                                                                      // 102
                                                                                                          // 103
  Transitions.prototype.getRemoveTimeout = function() {                                                   // 104
    if (this.opt.outDuration) {                                                                           // 105
      return parseInt(this.opt.outDuration);                                                              // 106
    }                                                                                                     // 107
    switch (this.opt.offScreenClass) {                                                                    // 108
      case 'hinge':                                                                                       // 109
        return 2000;                                                                                      // 110
      case 'bounceOut':                                                                                   // 111
        return 750;                                                                                       // 112
      case 'flipOutX':                                                                                    // 113
        return 750;                                                                                       // 114
      case 'flipOutY':                                                                                    // 115
        return 750;                                                                                       // 116
      default:                                                                                            // 117
        return 1000;                                                                                      // 118
    }                                                                                                     // 119
  };                                                                                                      // 120
                                                                                                          // 121
  Transitions.prototype.insertElement = function(node, next) {                                            // 122
    var $node, $parent, finish, insert, self;                                                             // 123
    self = this;                                                                                          // 124
    $node = $(node);                                                                                      // 125
    $parent = $(self.opt.parentNode);                                                                     // 126
    $node.addClass("" + self.opt.animateClass + " " + self.opt.hiddenClass);                              // 127
    $node.attr('hidden', true);                                                                           // 128
    $(next).before($node);                                                                                // 129
    finish = function(e) {                                                                                // 130
      $node.removeClass(self.opt.onScreenClass);                                                          // 131
      return node.setAttribute('inserting', false);                                                       // 132
    };                                                                                                    // 133
    insert = function() {                                                                                 // 134
      $node.width();                                                                                      // 135
      $node.attr('hidden', false);                                                                        // 136
      $node.removeClass(self.opt.hiddenClass);                                                            // 137
      $node.addClass(self.opt.onScreenClass);                                                             // 138
      return $node.one(ENDTRANSITION, finish);                                                            // 139
    };                                                                                                    // 140
    if (self.removing) {                                                                                  // 141
      return Meteor.setTimeout(insert, self.opt.removeTimeout);                                           // 142
    } else {                                                                                              // 143
      return insert();                                                                                    // 144
    }                                                                                                     // 145
  };                                                                                                      // 146
                                                                                                          // 147
  Transitions.prototype.removeElement = function(node) {                                                  // 148
    var $node, remove, self;                                                                              // 149
    $node = $(node);                                                                                      // 150
    self = this;                                                                                          // 151
    $node.addClass(self.opt.animateClass);                                                                // 152
    remove = function(e) {                                                                                // 153
      self.removing = false;                                                                              // 154
      return $node.remove();                                                                              // 155
    };                                                                                                    // 156
    if (self.opt.offScreenClass) {                                                                        // 157
      $node.addClass(self.opt.offScreenClass);                                                            // 158
      self.removing = true;                                                                               // 159
      return $node.one(ENDTRANSITION, remove);                                                            // 160
    } else {                                                                                              // 161
      return remove();                                                                                    // 162
    }                                                                                                     // 163
  };                                                                                                      // 164
                                                                                                          // 165
  Transitions.prototype.createHooks = function() {                                                        // 166
    return {                                                                                              // 167
      opt: this.opt,                                                                                      // 168
      insertElement: this.insertElement,                                                                  // 169
      removeElement: this.removeElement                                                                   // 170
    };                                                                                                    // 171
  };                                                                                                      // 172
                                                                                                          // 173
  return Transitions;                                                                                     // 174
                                                                                                          // 175
})();                                                                                                     // 176
                                                                                                          // 177
Template.transition.onRendered(function() {                                                               // 178
  var inDuration, outDuration, params, parentNode, transitionIn, transitionOut, transitions, _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
  transitionIn = ((_ref = this.data) != null ? (_ref1 = _ref["in"]) != null ? (_ref2 = _ref1.match(/^(.*)\:/)) != null ? _ref2[1] : void 0 : void 0 : void 0) || ((_ref3 = this.data) != null ? _ref3["in"] : void 0);
  transitionOut = ((_ref4 = this.data) != null ? (_ref5 = _ref4.out) != null ? (_ref6 = _ref5.match(/^(.*)\:/)) != null ? _ref6[1] : void 0 : void 0 : void 0) || ((_ref7 = this.data) != null ? _ref7.out : void 0);
  inDuration = (_ref8 = this.data) != null ? (_ref9 = _ref8["in"]) != null ? (_ref10 = _ref9.match(/\:(\d*)/)) != null ? _ref10[1] : void 0 : void 0 : void 0;
  outDuration = (_ref11 = this.data) != null ? (_ref12 = _ref11.out) != null ? (_ref13 = _ref12.match(/\:(\d*)/)) != null ? _ref13[1] : void 0 : void 0 : void 0;
  if (this.$('>').first().hasClass('transition-wrapper')) {                                               // 184
    parentNode = this.$('>').first()[0];                                                                  // 185
  } else {                                                                                                // 186
    parentNode = (_ref14 = this.firstNode) != null ? _ref14.parentNode : void 0;                          // 187
  }                                                                                                       // 188
  params = {                                                                                              // 189
    onScreenClass: transitionIn,                                                                          // 190
    offScreenClass: transitionOut,                                                                        // 191
    inDuration: inDuration,                                                                               // 192
    outDuration: outDuration,                                                                             // 193
    parentNode: parentNode                                                                                // 194
  };                                                                                                      // 195
  return transitions = new Transitions(params);                                                           // 196
});                                                                                                       // 197
                                                                                                          // 198
Template.transition.onDestroyed(function() {                                                              // 199
  var _ref, _ref1;                                                                                        // 200
  return (_ref = this.firstNode) != null ? (_ref1 = _ref.parentNode) != null ? _ref1._uihooks = null : void 0 : void 0;
});                                                                                                       // 202
//////////////////////////////////////////////////////////////////////////////////////////////////////    // 203
                                                                                                          // 204
}).call(this);                                                                                            // 205
                                                                                                          // 206
                                                                                                          // 207
                                                                                                          // 208
                                                                                                          // 209
                                                                                                          // 210
                                                                                                          // 211
(function () {                                                                                            // 212
                                                                                                          // 213
//////////////////////////////////////////////////////////////////////////////////////////////////////    // 214
//                                                                                                  //    // 215
// packages/webtempest:animate/template.animate.js                                                  //    // 216
//                                                                                                  //    // 217
//////////////////////////////////////////////////////////////////////////////////////////////////////    // 218
                                                                                                    //    // 219
                                                                                                    // 1  // 220
Template.__checkName("animate");                                                                    // 2  // 221
Template["animate"] = new Template("Template.animate", (function() {                                // 3  // 222
  var view = this;                                                                                  // 4  // 223
  return Blaze._InOuterTemplateScope(view, function() {                                             // 5  // 224
    return Spacebars.include(function() {                                                           // 6  // 225
      return Spacebars.call(view.templateContentBlock);                                             // 7  // 226
    });                                                                                             // 8  // 227
  });                                                                                               // 9  // 228
}));                                                                                                // 10
                                                                                                    // 11
//////////////////////////////////////////////////////////////////////////////////////////////////////    // 231
                                                                                                          // 232
}).call(this);                                                                                            // 233
                                                                                                          // 234
                                                                                                          // 235
                                                                                                          // 236
                                                                                                          // 237
                                                                                                          // 238
                                                                                                          // 239
(function () {                                                                                            // 240
                                                                                                          // 241
//////////////////////////////////////////////////////////////////////////////////////////////////////    // 242
//                                                                                                  //    // 243
// packages/webtempest:animate/animate.coffee.js                                                    //    // 244
//                                                                                                  //    // 245
//////////////////////////////////////////////////////////////////////////////////////////////////////    // 246
                                                                                                    //    // 247
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.animate.onRendered(function() {                                                                  // 249
  var $node, animate, animation, delay, self, _ref, _ref1;                                                // 250
  self = this;                                                                                            // 251
  $node = this.$('>').first();                                                                            // 252
  animation = ((_ref = self.data) != null ? _ref.type : void 0) || 'bounce';                              // 253
  delay = ((_ref1 = self.data) != null ? _ref1.delay : void 0) && parseInt(self.data.delay) || 200;       // 254
  animate = function() {                                                                                  // 255
    return $node.addClass("animated " + animation);                                                       // 256
  };                                                                                                      // 257
  if (delay) {                                                                                            // 258
    return Meteor.setTimeout(animate, delay);                                                             // 259
  } else {                                                                                                // 260
    return animate();                                                                                     // 261
  }                                                                                                       // 262
});                                                                                                       // 263
//////////////////////////////////////////////////////////////////////////////////////////////////////    // 264
                                                                                                          // 265
}).call(this);                                                                                            // 266
                                                                                                          // 267
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['webtempest:animate'] = {};

})();
