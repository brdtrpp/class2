(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var EJSON = Package.ejson.EJSON;
var Spacebars = Package.spacebars.Spacebars;
var BaseComponent = Package['peerlibrary:base-component'].BaseComponent;
var BaseComponentDebug = Package['peerlibrary:base-component'].BaseComponentDebug;
var assert = Package['peerlibrary:assert'].assert;
var ReactiveField = Package['peerlibrary:reactive-field'].ReactiveField;
var ComputedField = Package['peerlibrary:computed-field'].ComputedField;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var __coffeescriptShare, BlazeComponent, BlazeComponentDebug;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/peerlibrary_blaze-components/packages/peerlibrary_blaze-components.js                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function () {                                                                                                        // 1
                                                                                                                      // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/peerlibrary:blaze-components/lookup.js                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/* This file backports Blaze lookup.js from Meteor 1.2 so that required                                               // 1
   Blaze features to support Blaze Components are available also in                                                   // 2
   older Meteor versions.                                                                                             // 3
                                                                                                                      // 4
   TODO: Remove this file eventually.                                                                                 // 5
 */                                                                                                                   // 6
                                                                                                                      // 7
// Check if we are not running Meteor 1.2+.                                                                           // 8
if (! Blaze._getTemplate) {                                                                                           // 9
  // If `x` is a function, binds the value of `this` for that function                                                // 10
  // to the current data context.                                                                                     // 11
  var bindDataContext = function (x) {                                                                                // 12
    if (typeof x === 'function') {                                                                                    // 13
      return function () {                                                                                            // 14
        var data = Blaze.getData();                                                                                   // 15
        if (data == null)                                                                                             // 16
          data = {};                                                                                                  // 17
        return x.apply(data, arguments);                                                                              // 18
      };                                                                                                              // 19
    }                                                                                                                 // 20
    return x;                                                                                                         // 21
  };                                                                                                                  // 22
                                                                                                                      // 23
  Blaze._getTemplateHelper = function (template, name, tmplInstanceFunc) {                                            // 24
    // XXX COMPAT WITH 0.9.3                                                                                          // 25
    var isKnownOldStyleHelper = false;                                                                                // 26
                                                                                                                      // 27
    if (template.__helpers.has(name)) {                                                                               // 28
      var helper = template.__helpers.get(name);                                                                      // 29
      if (helper === Blaze._OLDSTYLE_HELPER) {                                                                        // 30
        isKnownOldStyleHelper = true;                                                                                 // 31
      } else if (helper != null) {                                                                                    // 32
        return wrapHelper(bindDataContext(helper), tmplInstanceFunc);                                                 // 33
      } else {                                                                                                        // 34
        return null;                                                                                                  // 35
      }                                                                                                               // 36
    }                                                                                                                 // 37
                                                                                                                      // 38
    // old-style helper                                                                                               // 39
    if (name in template) {                                                                                           // 40
      // Only warn once per helper                                                                                    // 41
      if (!isKnownOldStyleHelper) {                                                                                   // 42
        template.__helpers.set(name, Blaze._OLDSTYLE_HELPER);                                                         // 43
        if (!template._NOWARN_OLDSTYLE_HELPERS) {                                                                     // 44
          Blaze._warn('Assigning helper with `' + template.viewName + '.' +                                           // 45
            name + ' = ...` is deprecated.  Use `' + template.viewName +                                              // 46
            '.helpers(...)` instead.');                                                                               // 47
        }                                                                                                             // 48
      }                                                                                                               // 49
      if (template[name] != null) {                                                                                   // 50
        return wrapHelper(bindDataContext(template[name]), tmplInstanceFunc);                                         // 51
      }                                                                                                               // 52
    }                                                                                                                 // 53
                                                                                                                      // 54
    return null;                                                                                                      // 55
  };                                                                                                                  // 56
                                                                                                                      // 57
  var wrapHelper = function (f, templateFunc) {                                                                       // 58
    // XXX COMPAT WITH METEOR 1.0.3.2                                                                                 // 59
    if (!Blaze.Template._withTemplateInstanceFunc) {                                                                  // 60
      return Blaze._wrapCatchingExceptions(f, 'template helper');                                                     // 61
    }                                                                                                                 // 62
                                                                                                                      // 63
    if (typeof f !== "function") {                                                                                    // 64
      return f;                                                                                                       // 65
    }                                                                                                                 // 66
                                                                                                                      // 67
    return function () {                                                                                              // 68
      var self = this;                                                                                                // 69
      var args = arguments;                                                                                           // 70
                                                                                                                      // 71
      return Blaze.Template._withTemplateInstanceFunc(templateFunc, function () {                                     // 72
        return Blaze._wrapCatchingExceptions(f, 'template helper').apply(self, args);                                 // 73
      });                                                                                                             // 74
    };                                                                                                                // 75
  };                                                                                                                  // 76
                                                                                                                      // 77
  // templateInstance argument is provided to be available for possible                                               // 78
  // alternative implementations of this function by 3rd party packages.                                              // 79
  Blaze._getTemplate = function (name, templateInstance) {                                                            // 80
    if ((name in Blaze.Template) && (Blaze.Template[name] instanceof Blaze.Template)) {                               // 81
      return Blaze.Template[name];                                                                                    // 82
    }                                                                                                                 // 83
    return null;                                                                                                      // 84
  };                                                                                                                  // 85
                                                                                                                      // 86
  Blaze._getGlobalHelper = function (name, templateInstance) {                                                        // 87
    if (Blaze._globalHelpers[name] != null) {                                                                         // 88
      return wrapHelper(bindDataContext(Blaze._globalHelpers[name]), templateInstance);                               // 89
    }                                                                                                                 // 90
    return null;                                                                                                      // 91
  };                                                                                                                  // 92
                                                                                                                      // 93
  Blaze.View.prototype.lookup = function (name, _options) {                                                           // 94
    var template = this.template;                                                                                     // 95
    var lookupTemplate = _options && _options.template;                                                               // 96
    var helper;                                                                                                       // 97
    var binding;                                                                                                      // 98
    var boundTmplInstance;                                                                                            // 99
    var foundTemplate;                                                                                                // 100
                                                                                                                      // 101
    if (this.templateInstance) {                                                                                      // 102
      boundTmplInstance = _.bind(this.templateInstance, this);                                                        // 103
    }                                                                                                                 // 104
                                                                                                                      // 105
    // 0. looking up the parent data context with the special "../" syntax                                            // 106
    if (/^\./.test(name)) {                                                                                           // 107
      // starts with a dot. must be a series of dots which maps to an                                                 // 108
      // ancestor of the appropriate height.                                                                          // 109
      if (!/^(\.)+$/.test(name))                                                                                      // 110
        throw new Error("id starting with dot must be a series of dots");                                             // 111
                                                                                                                      // 112
      return Blaze._parentData(name.length - 1, true /*_functionWrapped*/);                                           // 113
                                                                                                                      // 114
    }                                                                                                                 // 115
                                                                                                                      // 116
    // 1. look up a helper on the current template                                                                    // 117
    if (template && ((helper = Blaze._getTemplateHelper(template, name, boundTmplInstance)) != null)) {               // 118
      return helper;                                                                                                  // 119
    }                                                                                                                 // 120
                                                                                                                      // 121
    // 2. look up a binding by traversing the lexical view hierarchy inside the                                       // 122
    // current template                                                                                               // 123
    /*if (template && (binding = Blaze._lexicalBindingLookup(Blaze.currentView, name)) != null) {                     // 124
      return binding;                                                                                                 // 125
    }*/                                                                                                               // 126
                                                                                                                      // 127
    // 3. look up a template by name                                                                                  // 128
    if (lookupTemplate && ((foundTemplate = Blaze._getTemplate(name, boundTmplInstance)) != null)) {                  // 129
      return foundTemplate;                                                                                           // 130
    }                                                                                                                 // 131
                                                                                                                      // 132
    // 4. look up a global helper                                                                                     // 133
    if ((helper = Blaze._getGlobalHelper(name, boundTmplInstance)) != null) {                                         // 134
      return helper;                                                                                                  // 135
    }                                                                                                                 // 136
                                                                                                                      // 137
    // 5. look up in a data context                                                                                   // 138
    return function () {                                                                                              // 139
      var isCalledAsFunction = (arguments.length > 0);                                                                // 140
      var data = Blaze.getData();                                                                                     // 141
      var x = data && data[name];                                                                                     // 142
      if (!x) {                                                                                                       // 143
        if (lookupTemplate) {                                                                                         // 144
          throw new Error("No such template: " + name);                                                               // 145
        } else if (isCalledAsFunction) {                                                                              // 146
          throw new Error("No such function: " + name);                                                               // 147
        } /*else if (name.charAt(0) === '@' && ((x === null) ||                                                       // 148
          (x === undefined))) {                                                                                       // 149
          // Throw an error if the user tries to use a `@directive`                                                   // 150
          // that doesn't exist.  We don't implement all directives                                                   // 151
          // from Handlebars, so there's a potential for confusion                                                    // 152
          // if we fail silently.  On the other hand, we want to                                                      // 153
          // throw late in case some app or package wants to provide                                                  // 154
          // a missing directive.                                                                                     // 155
          throw new Error("Unsupported directive: " + name);                                                          // 156
        }*/                                                                                                           // 157
      }                                                                                                               // 158
      if (!data) {                                                                                                    // 159
        return null;                                                                                                  // 160
      }                                                                                                               // 161
      if (typeof x !== 'function') {                                                                                  // 162
        if (isCalledAsFunction) {                                                                                     // 163
          throw new Error("Can't call non-function: " + x);                                                           // 164
        }                                                                                                             // 165
        return x;                                                                                                     // 166
      }                                                                                                               // 167
      return x.apply(data, arguments);                                                                                // 168
    };                                                                                                                // 169
  };                                                                                                                  // 170
}                                                                                                                     // 171
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 181
}).call(this);                                                                                                        // 182
                                                                                                                      // 183
                                                                                                                      // 184
                                                                                                                      // 185
                                                                                                                      // 186
                                                                                                                      // 187
                                                                                                                      // 188
(function () {                                                                                                        // 189
                                                                                                                      // 190
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/peerlibrary:blaze-components/lib.coffee.js                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var ComponentsNamespaceReference, REQUIRE_RENDERED_INSTANCE, SUPPORTS_REACTIVE_INSTANCE, addEvents, bindComponent, bindDataContext, callTemplateBaseHooks, getTemplateBase, getTemplateInstance, getTemplateInstanceFunction, method, methodName, originalDot, originalGetTemplate, originalInclude, registerFirstCreatedHook, registerHooks, templateInstanceToComponent, withTemplateInstanceFunc, wrapHelper, _fn, _ref,                
  __slice = [].slice,                                                                                                 // 199
  __hasProp = {}.hasOwnProperty,                                                                                      // 200
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
                                                                                                                      // 203
getTemplateInstance = function(view) {                                                                                // 204
  while (view && !view._templateInstance) {                                                                           // 205
    view = view.parentView;                                                                                           // 206
  }                                                                                                                   // 207
  return view != null ? view._templateInstance : void 0;                                                              // 208
};                                                                                                                    // 209
                                                                                                                      // 210
templateInstanceToComponent = function(templateInstanceFunc) {                                                        // 211
  var templateInstance;                                                                                               // 212
  templateInstance = typeof templateInstanceFunc === "function" ? templateInstanceFunc() : void 0;                    // 213
  templateInstance = getTemplateInstance(templateInstance != null ? templateInstance.view : void 0);                  // 214
  while (templateInstance) {                                                                                          // 215
    if ('component' in templateInstance) {                                                                            // 216
      return templateInstance.component;                                                                              // 217
    }                                                                                                                 // 218
    templateInstance = getTemplateInstance(templateInstance.view.parentView);                                         // 219
  }                                                                                                                   // 220
  return null;                                                                                                        // 221
};                                                                                                                    // 222
                                                                                                                      // 223
getTemplateInstanceFunction = function(view) {                                                                        // 224
  var templateInstance;                                                                                               // 225
  templateInstance = getTemplateInstance(view);                                                                       // 226
  return function() {                                                                                                 // 227
    return templateInstance;                                                                                          // 228
  };                                                                                                                  // 229
};                                                                                                                    // 230
                                                                                                                      // 231
ComponentsNamespaceReference = (function() {                                                                          // 232
  function ComponentsNamespaceReference(namespace, templateInstance) {                                                // 233
    this.namespace = namespace;                                                                                       // 234
    this.templateInstance = templateInstance;                                                                         // 235
  }                                                                                                                   // 236
                                                                                                                      // 237
  return ComponentsNamespaceReference;                                                                                // 238
                                                                                                                      // 239
})();                                                                                                                 // 240
                                                                                                                      // 241
originalDot = Spacebars.dot;                                                                                          // 242
                                                                                                                      // 243
Spacebars.dot = function() {                                                                                          // 244
  var args, value;                                                                                                    // 245
  value = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];                               // 246
  if (value instanceof ComponentsNamespaceReference) {                                                                // 247
    return Blaze._getTemplate("" + value.namespace + "." + (args.join('.')), value.templateInstance);                 // 248
  }                                                                                                                   // 249
  return originalDot.apply(null, [value].concat(__slice.call(args)));                                                 // 250
};                                                                                                                    // 251
                                                                                                                      // 252
originalInclude = Spacebars.include;                                                                                  // 253
                                                                                                                      // 254
Spacebars.include = function() {                                                                                      // 255
  var args, templateOrFunction;                                                                                       // 256
  templateOrFunction = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];                  // 257
  if (templateOrFunction instanceof ComponentsNamespaceReference) {                                                   // 258
    templateOrFunction = Blaze._getTemplate(templateOrFunction.namespace, templateOrFunction.templateInstance);       // 259
  }                                                                                                                   // 260
  return originalInclude.apply(null, [templateOrFunction].concat(__slice.call(args)));                                // 261
};                                                                                                                    // 262
                                                                                                                      // 263
Blaze._getTemplateHelper = function(template, name, templateInstance) {                                               // 264
  var component, helper, isKnownOldStyleHelper, mixinOrComponent, _ref, _ref1, _ref2;                                 // 265
  isKnownOldStyleHelper = false;                                                                                      // 266
  if (template.__helpers.has(name)) {                                                                                 // 267
    helper = template.__helpers.get(name);                                                                            // 268
    if (helper === Blaze._OLDSTYLE_HELPER) {                                                                          // 269
      isKnownOldStyleHelper = true;                                                                                   // 270
    } else if (helper != null) {                                                                                      // 271
      return wrapHelper(bindDataContext(helper), templateInstance);                                                   // 272
    } else {                                                                                                          // 273
      return null;                                                                                                    // 274
    }                                                                                                                 // 275
  }                                                                                                                   // 276
  if (name in template) {                                                                                             // 277
    if (!isKnownOldStyleHelper) {                                                                                     // 278
      template.__helpers.set(name, Blaze._OLDSTYLE_HELPER);                                                           // 279
      if (!template._NOWARN_OLDSTYLE_HELPERS) {                                                                       // 280
        Blaze._warn("Assigning helper with `" + template.viewName + "." + name + " = ...` is deprecated.  Use `" + template.viewName + ".helpers(...)` instead.");
      }                                                                                                               // 282
    }                                                                                                                 // 283
    if (template[name] != null) {                                                                                     // 284
      return wrapHelper(bindDataContext(template[name]), templateInstance);                                           // 285
    } else {                                                                                                          // 286
      return null;                                                                                                    // 287
    }                                                                                                                 // 288
  }                                                                                                                   // 289
  if (!templateInstance) {                                                                                            // 290
    return null;                                                                                                      // 291
  }                                                                                                                   // 292
  if ((_ref = template.viewName) === 'Template.__dynamicWithDataContext' || _ref === 'Template.__dynamic') {          // 293
    return null;                                                                                                      // 294
  }                                                                                                                   // 295
  component = Tracker.nonreactive(function() {                                                                        // 296
    return templateInstanceToComponent(templateInstance);                                                             // 297
  });                                                                                                                 // 298
  if (component) {                                                                                                    // 299
    if (mixinOrComponent = component.getFirstWith(null, name)) {                                                      // 300
      return wrapHelper(bindComponent(mixinOrComponent, mixinOrComponent[name]), templateInstance);                   // 301
    }                                                                                                                 // 302
  }                                                                                                                   // 303
  if (name && name in BlazeComponent.components) {                                                                    // 304
    return new ComponentsNamespaceReference(name, templateInstance);                                                  // 305
  }                                                                                                                   // 306
  if (component) {                                                                                                    // 307
    if ((helper = (_ref1 = component._componentInternals) != null ? (_ref2 = _ref1.templateBase) != null ? _ref2.__helpers.get(name) : void 0 : void 0) != null) {
      return wrapHelper(bindDataContext(helper), templateInstance);                                                   // 309
    }                                                                                                                 // 310
  }                                                                                                                   // 311
  return null;                                                                                                        // 312
};                                                                                                                    // 313
                                                                                                                      // 314
bindComponent = function(component, helper) {                                                                         // 315
  if (_.isFunction(helper)) {                                                                                         // 316
    return _.bind(helper, component);                                                                                 // 317
  } else {                                                                                                            // 318
    return helper;                                                                                                    // 319
  }                                                                                                                   // 320
};                                                                                                                    // 321
                                                                                                                      // 322
bindDataContext = function(helper) {                                                                                  // 323
  if (_.isFunction(helper)) {                                                                                         // 324
    return function() {                                                                                               // 325
      var data;                                                                                                       // 326
      data = Blaze.getData();                                                                                         // 327
      if (data == null) {                                                                                             // 328
        data = {};                                                                                                    // 329
      }                                                                                                               // 330
      return helper.apply(data, arguments);                                                                           // 331
    };                                                                                                                // 332
  } else {                                                                                                            // 333
    return helper;                                                                                                    // 334
  }                                                                                                                   // 335
};                                                                                                                    // 336
                                                                                                                      // 337
wrapHelper = function(f, templateFunc) {                                                                              // 338
  if (!Blaze.Template._withTemplateInstanceFunc) {                                                                    // 339
    return Blaze._wrapCatchingExceptions(f, 'template helper');                                                       // 340
  }                                                                                                                   // 341
  if (!_.isFunction(f)) {                                                                                             // 342
    return f;                                                                                                         // 343
  }                                                                                                                   // 344
  return function() {                                                                                                 // 345
    var args, self;                                                                                                   // 346
    self = this;                                                                                                      // 347
    args = arguments;                                                                                                 // 348
    return Blaze.Template._withTemplateInstanceFunc(templateFunc, function() {                                        // 349
      return Blaze._wrapCatchingExceptions(f, 'template helper').apply(self, args);                                   // 350
    });                                                                                                               // 351
  };                                                                                                                  // 352
};                                                                                                                    // 353
                                                                                                                      // 354
if (Blaze.Template._withTemplateInstanceFunc) {                                                                       // 355
  withTemplateInstanceFunc = Blaze.Template._withTemplateInstanceFunc;                                                // 356
} else {                                                                                                              // 357
  withTemplateInstanceFunc = function(templateInstance, f) {                                                          // 358
    return f();                                                                                                       // 359
  };                                                                                                                  // 360
}                                                                                                                     // 361
                                                                                                                      // 362
getTemplateBase = function(component) {                                                                               // 363
  return Tracker.nonreactive(function() {                                                                             // 364
    var componentTemplate, templateBase;                                                                              // 365
    componentTemplate = component.template();                                                                         // 366
    if (_.isString(componentTemplate)) {                                                                              // 367
      templateBase = Template[componentTemplate];                                                                     // 368
      if (!templateBase) {                                                                                            // 369
        throw new Error("Template '" + componentTemplate + "' cannot be found.");                                     // 370
      }                                                                                                               // 371
    } else if (componentTemplate) {                                                                                   // 372
      templateBase = componentTemplate;                                                                               // 373
    } else {                                                                                                          // 374
      throw new Error("Template for the component '" + (component.componentName() || 'unnamed') + "' not provided.");
    }                                                                                                                 // 376
    return templateBase;                                                                                              // 377
  });                                                                                                                 // 378
};                                                                                                                    // 379
                                                                                                                      // 380
callTemplateBaseHooks = function(component, hookName) {                                                               // 381
  var callbacks, templateInstance;                                                                                    // 382
  if (component._componentInternals == null) {                                                                        // 383
    component._componentInternals = {};                                                                               // 384
  }                                                                                                                   // 385
  if (!component._componentInternals.templateInstance) {                                                              // 386
    return;                                                                                                           // 387
  }                                                                                                                   // 388
  templateInstance = Tracker.nonreactive(function() {                                                                 // 389
    return component._componentInternals.templateInstance();                                                          // 390
  });                                                                                                                 // 391
  callbacks = component._componentInternals.templateBase._getCallbacks(hookName);                                     // 392
  Template._withTemplateInstanceFunc(function() {                                                                     // 393
    return templateInstance;                                                                                          // 394
  }, function() {                                                                                                     // 395
    var callback, _i, _len, _results;                                                                                 // 396
    _results = [];                                                                                                    // 397
    for (_i = 0, _len = callbacks.length; _i < _len; _i++) {                                                          // 398
      callback = callbacks[_i];                                                                                       // 399
      _results.push(callback.call(templateInstance));                                                                 // 400
    }                                                                                                                 // 401
    return _results;                                                                                                  // 402
  });                                                                                                                 // 403
};                                                                                                                    // 404
                                                                                                                      // 405
addEvents = function(view, component) {                                                                               // 406
  var eventMap, events, eventsList, handler, spec, _fn, _i, _len;                                                     // 407
  eventsList = component.events();                                                                                    // 408
  if (!_.isArray(eventsList)) {                                                                                       // 409
    throw new Error("'events' method from the component '" + (component.componentName() || 'unnamed') + "' did not return a list of event maps.");
  }                                                                                                                   // 411
  for (_i = 0, _len = eventsList.length; _i < _len; _i++) {                                                           // 412
    events = eventsList[_i];                                                                                          // 413
    eventMap = {};                                                                                                    // 414
    _fn = function(spec, handler) {                                                                                   // 415
      return eventMap[spec] = function() {                                                                            // 416
        var args, currentView, event, templateInstance;                                                               // 417
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                               // 418
        event = args[0];                                                                                              // 419
        currentView = Blaze.getView(event.currentTarget);                                                             // 420
        templateInstance = getTemplateInstanceFunction(currentView);                                                  // 421
        withTemplateInstanceFunc(templateInstance, function() {                                                       // 422
          return Blaze._withCurrentView(currentView, function() {                                                     // 423
            return handler.apply(component, args);                                                                    // 424
          });                                                                                                         // 425
        });                                                                                                           // 426
      };                                                                                                              // 427
    };                                                                                                                // 428
    for (spec in events) {                                                                                            // 429
      handler = events[spec];                                                                                         // 430
      _fn(spec, handler);                                                                                             // 431
    }                                                                                                                 // 432
    Blaze._addEventMap(view, eventMap, view);                                                                         // 433
  }                                                                                                                   // 434
};                                                                                                                    // 435
                                                                                                                      // 436
originalGetTemplate = Blaze._getTemplate;                                                                             // 437
                                                                                                                      // 438
Blaze._getTemplate = function(name, templateInstance) {                                                               // 439
  var template;                                                                                                       // 440
  template = Tracker.nonreactive(function() {                                                                         // 441
    var parentComponent, _ref;                                                                                        // 442
    parentComponent = templateInstanceToComponent(templateInstance);                                                  // 443
    return (_ref = BlazeComponent.getComponent(name)) != null ? _ref.renderComponent(parentComponent) : void 0;       // 444
  });                                                                                                                 // 445
  if (template && (template instanceof Blaze.Template || _.isFunction(template))) {                                   // 446
    return template;                                                                                                  // 447
  }                                                                                                                   // 448
  return originalGetTemplate(name);                                                                                   // 449
};                                                                                                                    // 450
                                                                                                                      // 451
registerHooks = function(template, hooks) {                                                                           // 452
  if (template.onCreated) {                                                                                           // 453
    template.onCreated(hooks.onCreated);                                                                              // 454
    template.onRendered(hooks.onRendered);                                                                            // 455
    return template.onDestroyed(hooks.onDestroyed);                                                                   // 456
  } else {                                                                                                            // 457
    template.created = hooks.onCreated;                                                                               // 458
    template.rendered = hooks.onRendered;                                                                             // 459
    return template.destroyed = hooks.onDestroyed;                                                                    // 460
  }                                                                                                                   // 461
};                                                                                                                    // 462
                                                                                                                      // 463
registerFirstCreatedHook = function(template, onCreated) {                                                            // 464
  var oldCreated;                                                                                                     // 465
  if (template._callbacks) {                                                                                          // 466
    return template._callbacks.created.unshift(onCreated);                                                            // 467
  } else {                                                                                                            // 468
    oldCreated = template.created;                                                                                    // 469
    return template.created = function() {                                                                            // 470
      onCreated.call(this);                                                                                           // 471
      return oldCreated != null ? oldCreated.call(this) : void 0;                                                     // 472
    };                                                                                                                // 473
  }                                                                                                                   // 474
};                                                                                                                    // 475
                                                                                                                      // 476
BlazeComponent = (function(_super) {                                                                                  // 477
  __extends(BlazeComponent, _super);                                                                                  // 478
                                                                                                                      // 479
  function BlazeComponent() {                                                                                         // 480
    return BlazeComponent.__super__.constructor.apply(this, arguments);                                               // 481
  }                                                                                                                   // 482
                                                                                                                      // 483
  BlazeComponent.getComponentForElement = function(domElement) {                                                      // 484
    if (!domElement) {                                                                                                // 485
      return null;                                                                                                    // 486
    }                                                                                                                 // 487
    if (domElement.nodeType !== Node.ELEMENT_NODE) {                                                                  // 488
      throw new Error("Expected DOM element.");                                                                       // 489
    }                                                                                                                 // 490
    return templateInstanceToComponent((function(_this) {                                                             // 491
      return function() {                                                                                             // 492
        return getTemplateInstance(Blaze.getView(domElement));                                                        // 493
      };                                                                                                              // 494
    })(this));                                                                                                        // 495
  };                                                                                                                  // 496
                                                                                                                      // 497
  BlazeComponent.prototype.mixins = function() {                                                                      // 498
    return [];                                                                                                        // 499
  };                                                                                                                  // 500
                                                                                                                      // 501
  BlazeComponent.prototype.mixinParent = function(mixinParent) {                                                      // 502
    if (this._componentInternals == null) {                                                                           // 503
      this._componentInternals = {};                                                                                  // 504
    }                                                                                                                 // 505
    if (mixinParent) {                                                                                                // 506
      this._componentInternals.mixinParent = mixinParent;                                                             // 507
      return this;                                                                                                    // 508
    }                                                                                                                 // 509
    return this._componentInternals.mixinParent || null;                                                              // 510
  };                                                                                                                  // 511
                                                                                                                      // 512
  BlazeComponent.prototype.requireMixin = function(nameOrMixin) {                                                     // 513
    var _ref;                                                                                                         // 514
    assert((_ref = this._componentInternals) != null ? _ref.mixins : void 0);                                         // 515
    Tracker.nonreactive((function(_this) {                                                                            // 516
      return function() {                                                                                             // 517
        var mixinInstance, mixinInstanceComponent, _base, _ref1, _ref2, _ref3;                                        // 518
        if (_this.getMixin(nameOrMixin)) {                                                                            // 519
          return;                                                                                                     // 520
        }                                                                                                             // 521
        if (_.isString(nameOrMixin)) {                                                                                // 522
          if (_this.constructor.getComponent) {                                                                       // 523
            mixinInstanceComponent = _this.constructor.getComponent(nameOrMixin);                                     // 524
          } else {                                                                                                    // 525
            mixinInstanceComponent = BlazeComponent.getComponent(nameOrMixin);                                        // 526
          }                                                                                                           // 527
          if (!mixinInstanceComponent) {                                                                              // 528
            throw new Error("Unknown mixin '" + nameOrMixin + "'.");                                                  // 529
          }                                                                                                           // 530
          mixinInstance = new mixinInstanceComponent();                                                               // 531
        } else if (_.isFunction(nameOrMixin)) {                                                                       // 532
          mixinInstance = new nameOrMixin();                                                                          // 533
        } else {                                                                                                      // 534
          mixinInstance = nameOrMixin;                                                                                // 535
        }                                                                                                             // 536
        _this._componentInternals.mixins.push(mixinInstance);                                                         // 537
        if (mixinInstance.mixinParent) {                                                                              // 538
          mixinInstance.mixinParent(_this);                                                                           // 539
        }                                                                                                             // 540
        if (typeof mixinInstance.createMixins === "function") {                                                       // 541
          mixinInstance.createMixins();                                                                               // 542
        }                                                                                                             // 543
        if ((_base = _this._componentInternals).templateInstance == null) {                                           // 544
          _base.templateInstance = new ReactiveField(null, function(a, b) {                                           // 545
            return a === b;                                                                                           // 546
          });                                                                                                         // 547
        }                                                                                                             // 548
        if (!((_ref1 = _this._componentInternals.templateInstance()) != null ? _ref1.view.isDestroyed : void 0)) {    // 549
          if (!_this._componentInternals.inOnCreated && ((_ref2 = _this._componentInternals.templateInstance()) != null ? _ref2.view.isCreated : void 0)) {
            if (typeof mixinInstance.onCreated === "function") {                                                      // 551
              mixinInstance.onCreated();                                                                              // 552
            }                                                                                                         // 553
          }                                                                                                           // 554
          if (!_this._componentInternals.inOnRendered && ((_ref3 = _this._componentInternals.templateInstance()) != null ? _ref3.view.isRendered : void 0)) {
            return typeof mixinInstance.onRendered === "function" ? mixinInstance.onRendered() : void 0;              // 556
          }                                                                                                           // 557
        }                                                                                                             // 558
      };                                                                                                              // 559
    })(this));                                                                                                        // 560
    return this;                                                                                                      // 561
  };                                                                                                                  // 562
                                                                                                                      // 563
  BlazeComponent.prototype.createMixins = function() {                                                                // 564
    var mixin, _i, _len, _ref;                                                                                        // 565
    if (this._componentInternals == null) {                                                                           // 566
      this._componentInternals = {};                                                                                  // 567
    }                                                                                                                 // 568
    if (this._componentInternals.mixins) {                                                                            // 569
      return;                                                                                                         // 570
    }                                                                                                                 // 571
    this._componentInternals.mixins = [];                                                                             // 572
    _ref = this.mixins();                                                                                             // 573
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                               // 574
      mixin = _ref[_i];                                                                                               // 575
      this.requireMixin(mixin);                                                                                       // 576
    }                                                                                                                 // 577
    return this;                                                                                                      // 578
  };                                                                                                                  // 579
                                                                                                                      // 580
  BlazeComponent.prototype.getMixin = function(nameOrMixin) {                                                         // 581
    var mixin, mixinComponentName, _i, _j, _len, _len1, _ref, _ref1, _ref2;                                           // 582
    assert((_ref = this._componentInternals) != null ? _ref.mixins : void 0);                                         // 583
    if (_.isString(nameOrMixin)) {                                                                                    // 584
      _ref1 = this._componentInternals.mixins;                                                                        // 585
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {                                                            // 586
        mixin = _ref1[_i];                                                                                            // 587
        mixinComponentName = (typeof mixin.componentName === "function" ? mixin.componentName() : void 0) || null;    // 588
        if (mixinComponentName && mixinComponentName === nameOrMixin) {                                               // 589
          return mixin;                                                                                               // 590
        }                                                                                                             // 591
      }                                                                                                               // 592
    } else {                                                                                                          // 593
      _ref2 = this._componentInternals.mixins;                                                                        // 594
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {                                                          // 595
        mixin = _ref2[_j];                                                                                            // 596
        if (mixin.constructor === nameOrMixin) {                                                                      // 597
          return mixin;                                                                                               // 598
        } else if (mixin === nameOrMixin) {                                                                           // 599
          return mixin;                                                                                               // 600
        }                                                                                                             // 601
      }                                                                                                               // 602
    }                                                                                                                 // 603
    return null;                                                                                                      // 604
  };                                                                                                                  // 605
                                                                                                                      // 606
  BlazeComponent.prototype.callFirstWith = function() {                                                               // 607
    var afterComponentOrMixin, args, mixin, propertyName;                                                             // 608
    afterComponentOrMixin = arguments[0], propertyName = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
    mixin = this.getFirstWith(afterComponentOrMixin, propertyName);                                                   // 610
    if (!mixin) {                                                                                                     // 611
      return;                                                                                                         // 612
    }                                                                                                                 // 613
    if (_.isFunction(mixin[propertyName])) {                                                                          // 614
      return mixin[propertyName].apply(mixin, args);                                                                  // 615
    } else {                                                                                                          // 616
      return mixin[propertyName];                                                                                     // 617
    }                                                                                                                 // 618
  };                                                                                                                  // 619
                                                                                                                      // 620
  BlazeComponent.prototype.getFirstWith = function(afterComponentOrMixin, propertyName) {                             // 621
    var found, mixin, _i, _len, _ref, _ref1;                                                                          // 622
    assert((_ref = this._componentInternals) != null ? _ref.mixins : void 0);                                         // 623
    if (!afterComponentOrMixin) {                                                                                     // 624
      if (propertyName in this) {                                                                                     // 625
        return this;                                                                                                  // 626
      }                                                                                                               // 627
      found = true;                                                                                                   // 628
    } else if (afterComponentOrMixin && afterComponentOrMixin === this) {                                             // 629
      found = true;                                                                                                   // 630
    } else {                                                                                                          // 631
      found = false;                                                                                                  // 632
    }                                                                                                                 // 633
    _ref1 = this._componentInternals.mixins;                                                                          // 634
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {                                                              // 635
      mixin = _ref1[_i];                                                                                              // 636
      if (found && propertyName in mixin) {                                                                           // 637
        return mixin;                                                                                                 // 638
      }                                                                                                               // 639
      if (mixin === afterComponentOrMixin) {                                                                          // 640
        found = true;                                                                                                 // 641
      }                                                                                                               // 642
    }                                                                                                                 // 643
    return null;                                                                                                      // 644
  };                                                                                                                  // 645
                                                                                                                      // 646
  BlazeComponent.renderComponent = function(parentComponent) {                                                        // 647
    return Tracker.nonreactive((function(_this) {                                                                     // 648
      return function() {                                                                                             // 649
        var componentClass, data, templateInstance;                                                                   // 650
        componentClass = _this;                                                                                       // 651
        if (Blaze.currentView) {                                                                                      // 652
          data = Template.currentData();                                                                              // 653
        } else {                                                                                                      // 654
          data = null;                                                                                                // 655
        }                                                                                                             // 656
        if ((data != null ? data.constructor : void 0) !== share.argumentsConstructor) {                              // 657
          templateInstance = getTemplateInstanceFunction(Blaze.currentView);                                          // 658
          return withTemplateInstanceFunc(templateInstance, function() {                                              // 659
            var component;                                                                                            // 660
            component = new componentClass();                                                                         // 661
            return component.renderComponent(parentComponent);                                                        // 662
          });                                                                                                         // 663
        }                                                                                                             // 664
        return function() {                                                                                           // 665
          var currentWith, nonreactiveArguments, reactiveArguments;                                                   // 666
          assert(Tracker.active);                                                                                     // 667
          currentWith = Blaze.getView('with');                                                                        // 668
          reactiveArguments = new ComputedField(function() {                                                          // 669
            data = currentWith.dataVar.get();                                                                         // 670
            assert.equal(data != null ? data.constructor : void 0, share.argumentsConstructor);                       // 671
            return data._arguments;                                                                                   // 672
          }, EJSON.equals);                                                                                           // 673
          nonreactiveArguments = reactiveArguments();                                                                 // 674
          return Tracker.nonreactive(function() {                                                                     // 675
            var template;                                                                                             // 676
            template = Blaze._withCurrentView(Blaze.currentView.parentView.parentView, (function(_this) {             // 677
              return function() {                                                                                     // 678
                templateInstance = getTemplateInstanceFunction(Blaze.currentView);                                    // 679
                return withTemplateInstanceFunc(templateInstance, function() {                                        // 680
                  var component;                                                                                      // 681
                  component = (function(func, args, ctor) {                                                           // 682
                    ctor.prototype = func.prototype;                                                                  // 683
                    var child = new ctor, result = func.apply(child, args);                                           // 684
                    return Object(result) === result ? result : child;                                                // 685
                  })(componentClass, nonreactiveArguments, function(){});                                             // 686
                  return component.renderComponent(parentComponent);                                                  // 687
                });                                                                                                   // 688
              };                                                                                                      // 689
            })(this));                                                                                                // 690
            registerFirstCreatedHook(template, function() {                                                           // 691
              this.view.originalParentView = this.view.parentView;                                                    // 692
              return this.view.parentView = this.view.parentView.parentView.parentView;                               // 693
            });                                                                                                       // 694
            return template;                                                                                          // 695
          });                                                                                                         // 696
        };                                                                                                            // 697
      };                                                                                                              // 698
    })(this));                                                                                                        // 699
  };                                                                                                                  // 700
                                                                                                                      // 701
  BlazeComponent.prototype.renderComponent = function(parentComponent) {                                              // 702
    return Tracker.nonreactive((function(_this) {                                                                     // 703
      return function() {                                                                                             // 704
        var component, template, templateBase;                                                                        // 705
        component = _this;                                                                                            // 706
        component.createMixins();                                                                                     // 707
        templateBase = getTemplateBase(component);                                                                    // 708
        template = new Blaze.Template("BlazeComponent." + (component.componentName() || 'unnamed'), templateBase.renderFunction);
        if (component._componentInternals == null) {                                                                  // 710
          component._componentInternals = {};                                                                         // 711
        }                                                                                                             // 712
        component._componentInternals.templateBase = templateBase;                                                    // 713
        registerHooks(template, {                                                                                     // 714
          onCreated: function() {                                                                                     // 715
            var componentOrMixin, _base, _base1, _base2, _base3, _results;                                            // 716
            if (parentComponent) {                                                                                    // 717
              Tracker.nonreactive((function(_this) {                                                                  // 718
                return function() {                                                                                   // 719
                  assert(!component.parentComponent());                                                               // 720
                  component.parentComponent(parentComponent);                                                         // 721
                  return parentComponent.addChildComponent(component);                                                // 722
                };                                                                                                    // 723
              })(this));                                                                                              // 724
            }                                                                                                         // 725
            this.view._onViewRendered((function(_this) {                                                              // 726
              return function() {                                                                                     // 727
                var componentOrMixin, _results;                                                                       // 728
                if (_this.view.renderCount !== 1) {                                                                   // 729
                  return;                                                                                             // 730
                }                                                                                                     // 731
                componentOrMixin = null;                                                                              // 732
                _results = [];                                                                                        // 733
                while (componentOrMixin = _this.component.getFirstWith(componentOrMixin, 'events')) {                 // 734
                  _results.push(addEvents(_this.view, componentOrMixin));                                             // 735
                }                                                                                                     // 736
                return _results;                                                                                      // 737
              };                                                                                                      // 738
            })(this));                                                                                                // 739
            this.component = component;                                                                               // 740
            assert(!Tracker.nonreactive((function(_this) {                                                            // 741
              return function() {                                                                                     // 742
                var _base;                                                                                            // 743
                return typeof (_base = _this.component._componentInternals).templateInstance === "function" ? _base.templateInstance() : void 0;
              };                                                                                                      // 745
            })(this)));                                                                                               // 746
            if ((_base = this.component._componentInternals).templateInstance == null) {                              // 747
              _base.templateInstance = new ReactiveField(this, function(a, b) {                                       // 748
                return a === b;                                                                                       // 749
              });                                                                                                     // 750
            }                                                                                                         // 751
            this.component._componentInternals.templateInstance(this);                                                // 752
            if ((_base1 = this.component._componentInternals).isCreated == null) {                                    // 753
              _base1.isCreated = new ReactiveField(true);                                                             // 754
            }                                                                                                         // 755
            this.component._componentInternals.isCreated(true);                                                       // 756
            if ((_base2 = this.component._componentInternals).isRendered == null) {                                   // 757
              _base2.isRendered = new ReactiveField(false);                                                           // 758
            }                                                                                                         // 759
            this.component._componentInternals.isRendered(false);                                                     // 760
            if ((_base3 = this.component._componentInternals).isDestroyed == null) {                                  // 761
              _base3.isDestroyed = new ReactiveField(false);                                                          // 762
            }                                                                                                         // 763
            this.component._componentInternals.isDestroyed(false);                                                    // 764
            try {                                                                                                     // 765
              this.component._componentInternals.inOnCreated = true;                                                  // 766
              componentOrMixin = null;                                                                                // 767
              _results = [];                                                                                          // 768
              while (componentOrMixin = this.component.getFirstWith(componentOrMixin, 'onCreated')) {                 // 769
                _results.push(componentOrMixin.onCreated());                                                          // 770
              }                                                                                                       // 771
              return _results;                                                                                        // 772
            } finally {                                                                                               // 773
              delete this.component._componentInternals.inOnCreated;                                                  // 774
            }                                                                                                         // 775
          },                                                                                                          // 776
          onRendered: function() {                                                                                    // 777
            var componentOrMixin, _base, _results;                                                                    // 778
            if ((_base = this.component._componentInternals).isRendered == null) {                                    // 779
              _base.isRendered = new ReactiveField(true);                                                             // 780
            }                                                                                                         // 781
            this.component._componentInternals.isRendered(true);                                                      // 782
            Tracker.nonreactive((function(_this) {                                                                    // 783
              return function() {                                                                                     // 784
                return assert.equal(_this.component._componentInternals.isCreated(), true);                           // 785
              };                                                                                                      // 786
            })(this));                                                                                                // 787
            try {                                                                                                     // 788
              this.component._componentInternals.inOnRendered = true;                                                 // 789
              componentOrMixin = null;                                                                                // 790
              _results = [];                                                                                          // 791
              while (componentOrMixin = this.component.getFirstWith(componentOrMixin, 'onRendered')) {                // 792
                _results.push(componentOrMixin.onRendered());                                                         // 793
              }                                                                                                       // 794
              return _results;                                                                                        // 795
            } finally {                                                                                               // 796
              delete this.component._componentInternals.inOnRendered;                                                 // 797
            }                                                                                                         // 798
          },                                                                                                          // 799
          onDestroyed: function() {                                                                                   // 800
            return this.autorun((function(_this) {                                                                    // 801
              return function(computation) {                                                                          // 802
                if (_this.component.childComponents().length) {                                                       // 803
                  return;                                                                                             // 804
                }                                                                                                     // 805
                computation.stop();                                                                                   // 806
                return Tracker.nonreactive(function() {                                                               // 807
                  var componentOrMixin, _base, _base1;                                                                // 808
                  assert.equal(_this.component._componentInternals.isCreated(), true);                                // 809
                  _this.component._componentInternals.isCreated(false);                                               // 810
                  if ((_base = _this.component._componentInternals).isRendered == null) {                             // 811
                    _base.isRendered = new ReactiveField(false);                                                      // 812
                  }                                                                                                   // 813
                  _this.component._componentInternals.isRendered(false);                                              // 814
                  if ((_base1 = _this.component._componentInternals).isDestroyed == null) {                           // 815
                    _base1.isDestroyed = new ReactiveField(true);                                                     // 816
                  }                                                                                                   // 817
                  _this.component._componentInternals.isDestroyed(true);                                              // 818
                  componentOrMixin = null;                                                                            // 819
                  while (componentOrMixin = _this.component.getFirstWith(componentOrMixin, 'onDestroyed')) {          // 820
                    componentOrMixin.onDestroyed();                                                                   // 821
                  }                                                                                                   // 822
                  if (parentComponent) {                                                                              // 823
                    component.parentComponent(null);                                                                  // 824
                    parentComponent.removeChildComponent(component);                                                  // 825
                  }                                                                                                   // 826
                  return _this.component._componentInternals.templateInstance(null);                                  // 827
                });                                                                                                   // 828
              };                                                                                                      // 829
            })(this));                                                                                                // 830
          }                                                                                                           // 831
        });                                                                                                           // 832
        return template;                                                                                              // 833
      };                                                                                                              // 834
    })(this));                                                                                                        // 835
  };                                                                                                                  // 836
                                                                                                                      // 837
  BlazeComponent.prototype.removeComponent = function() {                                                             // 838
    if (this.isRendered()) {                                                                                          // 839
      return Blaze.remove(this._componentInternals.templateInstance().view);                                          // 840
    }                                                                                                                 // 841
  };                                                                                                                  // 842
                                                                                                                      // 843
  BlazeComponent.prototype.template = function() {                                                                    // 844
    return this.callFirstWith(this, 'template') || this.constructor.componentName();                                  // 845
  };                                                                                                                  // 846
                                                                                                                      // 847
  BlazeComponent.prototype.onCreated = function() {                                                                   // 848
    return callTemplateBaseHooks(this, 'created');                                                                    // 849
  };                                                                                                                  // 850
                                                                                                                      // 851
  BlazeComponent.prototype.onRendered = function() {                                                                  // 852
    return callTemplateBaseHooks(this, 'rendered');                                                                   // 853
  };                                                                                                                  // 854
                                                                                                                      // 855
  BlazeComponent.prototype.onDestroyed = function() {                                                                 // 856
    return callTemplateBaseHooks(this, 'destroyed');                                                                  // 857
  };                                                                                                                  // 858
                                                                                                                      // 859
  BlazeComponent.prototype.isCreated = function() {                                                                   // 860
    var _base;                                                                                                        // 861
    if (this._componentInternals == null) {                                                                           // 862
      this._componentInternals = {};                                                                                  // 863
    }                                                                                                                 // 864
    if ((_base = this._componentInternals).isCreated == null) {                                                       // 865
      _base.isCreated = new ReactiveField(false);                                                                     // 866
    }                                                                                                                 // 867
    return this._componentInternals.isCreated();                                                                      // 868
  };                                                                                                                  // 869
                                                                                                                      // 870
  BlazeComponent.prototype.isRendered = function() {                                                                  // 871
    var _base;                                                                                                        // 872
    if (this._componentInternals == null) {                                                                           // 873
      this._componentInternals = {};                                                                                  // 874
    }                                                                                                                 // 875
    if ((_base = this._componentInternals).isRendered == null) {                                                      // 876
      _base.isRendered = new ReactiveField(false);                                                                    // 877
    }                                                                                                                 // 878
    return this._componentInternals.isRendered();                                                                     // 879
  };                                                                                                                  // 880
                                                                                                                      // 881
  BlazeComponent.prototype.isDestroyed = function() {                                                                 // 882
    var _base;                                                                                                        // 883
    if (this._componentInternals == null) {                                                                           // 884
      this._componentInternals = {};                                                                                  // 885
    }                                                                                                                 // 886
    if ((_base = this._componentInternals).isDestroyed == null) {                                                     // 887
      _base.isDestroyed = new ReactiveField(false);                                                                   // 888
    }                                                                                                                 // 889
    return this._componentInternals.isDestroyed();                                                                    // 890
  };                                                                                                                  // 891
                                                                                                                      // 892
  BlazeComponent.prototype.insertDOMElement = function(parent, node, before) {                                        // 893
    if (before == null) {                                                                                             // 894
      before = null;                                                                                                  // 895
    }                                                                                                                 // 896
    if (parent && node && (node.parentNode !== parent || node.nextSibling !== before)) {                              // 897
      parent.insertBefore(node, before);                                                                              // 898
    }                                                                                                                 // 899
  };                                                                                                                  // 900
                                                                                                                      // 901
  BlazeComponent.prototype.moveDOMElement = function(parent, node, before) {                                          // 902
    if (before == null) {                                                                                             // 903
      before = null;                                                                                                  // 904
    }                                                                                                                 // 905
    if (parent && node && (node.parentNode !== parent || node.nextSibling !== before)) {                              // 906
      parent.insertBefore(node, before);                                                                              // 907
    }                                                                                                                 // 908
  };                                                                                                                  // 909
                                                                                                                      // 910
  BlazeComponent.prototype.removeDOMElement = function(parent, node) {                                                // 911
    if (parent && node && node.parentNode === parent) {                                                               // 912
      parent.removeChild(node);                                                                                       // 913
    }                                                                                                                 // 914
  };                                                                                                                  // 915
                                                                                                                      // 916
  BlazeComponent.prototype.events = function() {                                                                      // 917
    var eventMap, events, handler, spec, templateInstance, view, _fn, _i, _len, _ref, _results;                       // 918
    if (this._componentInternals == null) {                                                                           // 919
      this._componentInternals = {};                                                                                  // 920
    }                                                                                                                 // 921
    if (!this._componentInternals.templateInstance) {                                                                 // 922
      return [];                                                                                                      // 923
    }                                                                                                                 // 924
    view = Tracker.nonreactive((function(_this) {                                                                     // 925
      return function() {                                                                                             // 926
        return _this._componentInternals.templateInstance().view;                                                     // 927
      };                                                                                                              // 928
    })(this));                                                                                                        // 929
    templateInstance = getTemplateInstanceFunction(view);                                                             // 930
    _ref = this._componentInternals.templateBase.__eventMaps;                                                         // 931
    _results = [];                                                                                                    // 932
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                               // 933
      events = _ref[_i];                                                                                              // 934
      eventMap = {};                                                                                                  // 935
      _fn = function(spec, handler) {                                                                                 // 936
        return eventMap[spec] = function() {                                                                          // 937
          var args;                                                                                                   // 938
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                             // 939
          return withTemplateInstanceFunc(templateInstance, function() {                                              // 940
            return Blaze._withCurrentView(view, function() {                                                          // 941
              return handler.apply(view, args);                                                                       // 942
            });                                                                                                       // 943
          });                                                                                                         // 944
        };                                                                                                            // 945
      };                                                                                                              // 946
      for (spec in events) {                                                                                          // 947
        handler = events[spec];                                                                                       // 948
        _fn(spec, handler);                                                                                           // 949
      }                                                                                                               // 950
      _results.push(eventMap);                                                                                        // 951
    }                                                                                                                 // 952
    return _results;                                                                                                  // 953
  };                                                                                                                  // 954
                                                                                                                      // 955
  BlazeComponent.prototype.data = function() {                                                                        // 956
    var view, _base, _ref;                                                                                            // 957
    if (this._componentInternals == null) {                                                                           // 958
      this._componentInternals = {};                                                                                  // 959
    }                                                                                                                 // 960
    if ((_base = this._componentInternals).templateInstance == null) {                                                // 961
      _base.templateInstance = new ReactiveField(null, function(a, b) {                                               // 962
        return a === b;                                                                                               // 963
      });                                                                                                             // 964
    }                                                                                                                 // 965
    if (view = (_ref = this._componentInternals.templateInstance()) != null ? _ref.view : void 0) {                   // 966
      return Blaze.getData(view);                                                                                     // 967
    }                                                                                                                 // 968
    return void 0;                                                                                                    // 969
  };                                                                                                                  // 970
                                                                                                                      // 971
  BlazeComponent.currentData = function() {                                                                           // 972
    if (Blaze.currentView) {                                                                                          // 973
      return Blaze.getData();                                                                                         // 974
    }                                                                                                                 // 975
    return void 0;                                                                                                    // 976
  };                                                                                                                  // 977
                                                                                                                      // 978
  BlazeComponent.prototype.currentData = function() {                                                                 // 979
    return this.constructor.currentData();                                                                            // 980
  };                                                                                                                  // 981
                                                                                                                      // 982
  BlazeComponent.prototype.component = function() {                                                                   // 983
    return this;                                                                                                      // 984
  };                                                                                                                  // 985
                                                                                                                      // 986
  BlazeComponent.currentComponent = function() {                                                                      // 987
    return Tracker.nonreactive((function(_this) {                                                                     // 988
      return function() {                                                                                             // 989
        return templateInstanceToComponent(Template.instance);                                                        // 990
      };                                                                                                              // 991
    })(this));                                                                                                        // 992
  };                                                                                                                  // 993
                                                                                                                      // 994
  BlazeComponent.prototype.currentComponent = function() {                                                            // 995
    return this.constructor.currentComponent();                                                                       // 996
  };                                                                                                                  // 997
                                                                                                                      // 998
  BlazeComponent.prototype.firstNode = function() {                                                                   // 999
    if (this.isRendered()) {                                                                                          // 1000
      return this._componentInternals.templateInstance().view._domrange.firstNode();                                  // 1001
    }                                                                                                                 // 1002
    return void 0;                                                                                                    // 1003
  };                                                                                                                  // 1004
                                                                                                                      // 1005
  BlazeComponent.prototype.lastNode = function() {                                                                    // 1006
    if (this.isRendered()) {                                                                                          // 1007
      return this._componentInternals.templateInstance().view._domrange.lastNode();                                   // 1008
    }                                                                                                                 // 1009
    return void 0;                                                                                                    // 1010
  };                                                                                                                  // 1011
                                                                                                                      // 1012
  return BlazeComponent;                                                                                              // 1013
                                                                                                                      // 1014
})(BaseComponent);                                                                                                    // 1015
                                                                                                                      // 1016
SUPPORTS_REACTIVE_INSTANCE = ['subscriptionsReady'];                                                                  // 1017
                                                                                                                      // 1018
REQUIRE_RENDERED_INSTANCE = ['$', 'find', 'findAll'];                                                                 // 1019
                                                                                                                      // 1020
_ref = Blaze.TemplateInstance.prototype;                                                                              // 1021
_fn = function(methodName, method) {                                                                                  // 1022
  if (__indexOf.call(SUPPORTS_REACTIVE_INSTANCE, methodName) >= 0) {                                                  // 1023
    return BlazeComponent.prototype[methodName] = function() {                                                        // 1024
      var args, templateInstance, _base;                                                                              // 1025
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                                 // 1026
      if (this._componentInternals == null) {                                                                         // 1027
        this._componentInternals = {};                                                                                // 1028
      }                                                                                                               // 1029
      if ((_base = this._componentInternals).templateInstance == null) {                                              // 1030
        _base.templateInstance = new ReactiveField(null, function(a, b) {                                             // 1031
          return a === b;                                                                                             // 1032
        });                                                                                                           // 1033
      }                                                                                                               // 1034
      if (templateInstance = this._componentInternals.templateInstance()) {                                           // 1035
        return templateInstance[methodName].apply(templateInstance, args);                                            // 1036
      }                                                                                                               // 1037
      return void 0;                                                                                                  // 1038
    };                                                                                                                // 1039
  } else if (__indexOf.call(REQUIRE_RENDERED_INSTANCE, methodName) >= 0) {                                            // 1040
    return BlazeComponent.prototype[methodName] = function() {                                                        // 1041
      var args, _ref1;                                                                                                // 1042
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                                 // 1043
      if (this.isRendered()) {                                                                                        // 1044
        return (_ref1 = this._componentInternals.templateInstance())[methodName].apply(_ref1, args);                  // 1045
      }                                                                                                               // 1046
      return void 0;                                                                                                  // 1047
    };                                                                                                                // 1048
  } else {                                                                                                            // 1049
    return BlazeComponent.prototype[methodName] = function() {                                                        // 1050
      var args, templateInstance;                                                                                     // 1051
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];                                                 // 1052
      templateInstance = Tracker.nonreactive((function(_this) {                                                       // 1053
        return function() {                                                                                           // 1054
          var _ref1;                                                                                                  // 1055
          return (_ref1 = _this._componentInternals) != null ? typeof _ref1.templateInstance === "function" ? _ref1.templateInstance() : void 0 : void 0;
        };                                                                                                            // 1057
      })(this));                                                                                                      // 1058
      if (!templateInstance) {                                                                                        // 1059
        throw new Error("The component has to be created before calling '" + methodName + "'.");                      // 1060
      }                                                                                                               // 1061
      return templateInstance[methodName].apply(templateInstance, args);                                              // 1062
    };                                                                                                                // 1063
  }                                                                                                                   // 1064
};                                                                                                                    // 1065
for (methodName in _ref) {                                                                                            // 1066
  method = _ref[methodName];                                                                                          // 1067
  _fn(methodName, method);                                                                                            // 1068
}                                                                                                                     // 1069
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 1071
}).call(this);                                                                                                        // 1072
                                                                                                                      // 1073
                                                                                                                      // 1074
                                                                                                                      // 1075
                                                                                                                      // 1076
                                                                                                                      // 1077
                                                                                                                      // 1078
(function () {                                                                                                        // 1079
                                                                                                                      // 1080
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/peerlibrary:blaze-components/debug.coffee.js                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var                                                                                                                   // 1088
  __hasProp = {}.hasOwnProperty,                                                                                      // 1089
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
                                                                                                                      // 1092
BlazeComponentDebug = (function(_super) {                                                                             // 1093
  __extends(BlazeComponentDebug, _super);                                                                             // 1094
                                                                                                                      // 1095
  function BlazeComponentDebug() {                                                                                    // 1096
    return BlazeComponentDebug.__super__.constructor.apply(this, arguments);                                          // 1097
  }                                                                                                                   // 1098
                                                                                                                      // 1099
  BlazeComponentDebug.startComponent = function(component) {                                                          // 1100
    BlazeComponentDebug.__super__.constructor.startComponent.apply(this, arguments);                                  // 1101
    return console.log(component.data());                                                                             // 1102
  };                                                                                                                  // 1103
                                                                                                                      // 1104
  BlazeComponentDebug.startMarkedComponent = function(component) {                                                    // 1105
    BlazeComponentDebug.__super__.constructor.startMarkedComponent.apply(this, arguments);                            // 1106
    return console.log(component.data());                                                                             // 1107
  };                                                                                                                  // 1108
                                                                                                                      // 1109
  BlazeComponentDebug.dumpComponentSubtree = function(rootComponentOrElement) {                                       // 1110
    if (rootComponentOrElement.nodeType === Node.ELEMENT_NODE) {                                                      // 1111
      rootComponentOrElement = BlazeComponent.getComponentForElement(rootComponentOrElement);                         // 1112
    }                                                                                                                 // 1113
    return BlazeComponentDebug.__super__.constructor.dumpComponentSubtree.apply(this, arguments);                     // 1114
  };                                                                                                                  // 1115
                                                                                                                      // 1116
  BlazeComponentDebug.dumpComponentTree = function(rootComponentOrElement) {                                          // 1117
    if (rootComponentOrElement.nodeType === Node.ELEMENT_NODE) {                                                      // 1118
      rootComponentOrElement = BlazeComponent.getComponentForElement(rootComponentOrElement);                         // 1119
    }                                                                                                                 // 1120
    return BlazeComponentDebug.__super__.constructor.dumpComponentTree.apply(this, arguments);                        // 1121
  };                                                                                                                  // 1122
                                                                                                                      // 1123
  BlazeComponentDebug.dumpAllComponents = function() {                                                                // 1124
    var allRootComponents, rootComponent, _i, _len;                                                                   // 1125
    allRootComponents = [];                                                                                           // 1126
    $('*').each((function(_this) {                                                                                    // 1127
      return function(i, element) {                                                                                   // 1128
        var component, rootComponent;                                                                                 // 1129
        component = BlazeComponent.getComponentForElement(element);                                                   // 1130
        if (!component) {                                                                                             // 1131
          return;                                                                                                     // 1132
        }                                                                                                             // 1133
        rootComponent = _this.componentRoot(component);                                                               // 1134
        if (__indexOf.call(allRootComponents, rootComponent) < 0) {                                                   // 1135
          return allRootComponents.push(rootComponent);                                                               // 1136
        }                                                                                                             // 1137
      };                                                                                                              // 1138
    })(this));                                                                                                        // 1139
    for (_i = 0, _len = allRootComponents.length; _i < _len; _i++) {                                                  // 1140
      rootComponent = allRootComponents[_i];                                                                          // 1141
      this.dumpComponentSubtree(rootComponent);                                                                       // 1142
    }                                                                                                                 // 1143
  };                                                                                                                  // 1144
                                                                                                                      // 1145
  return BlazeComponentDebug;                                                                                         // 1146
                                                                                                                      // 1147
})(BaseComponentDebug);                                                                                               // 1148
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      // 1150
}).call(this);                                                                                                        // 1151
                                                                                                                      // 1152
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['peerlibrary:blaze-components'] = {
  BlazeComponent: BlazeComponent,
  BlazeComponentDebug: BlazeComponentDebug
};

})();

//# sourceMappingURL=peerlibrary_blaze-components.js.map
