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
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Session = Package.session.Session;
var EJSON = Package.ejson.EJSON;
var AutoForm = Package['aldeed:autoform'].AutoForm;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;

/* Package-scope variables */
var Wizard, CacheStore;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/forwarder_autoform-wizard/template.wizard.js                                                      //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("wizard");                                                                               // 2
Template["wizard"] = new Template("Template.wizard", (function() {                                            // 3
  var view = this;                                                                                            // 4
  return Spacebars.With(function() {                                                                          // 5
    return Spacebars.dataMustache(view.lookup("innerContext"), view.lookup(".."));                            // 6
  }, function() {                                                                                             // 7
    return [ "\n  ", HTML.DIV({                                                                               // 8
      id: function() {                                                                                        // 9
        return Spacebars.mustache(Spacebars.dot(view.lookup("wizard"), "id"));                                // 10
      },                                                                                                      // 11
      "class": "wizard"                                                                                       // 12
    }, "\n    ", Blaze._TemplateWith(function() {                                                             // 13
      return {                                                                                                // 14
        template: Spacebars.call(Spacebars.dot(view.lookup("wizard"), "stepsTemplate"))                       // 15
      };                                                                                                      // 16
    }, function() {                                                                                           // 17
      return Spacebars.include(function() {                                                                   // 18
        return Spacebars.call(Template.__dynamic);                                                            // 19
      });                                                                                                     // 20
    }), "\n    ", Blaze._TemplateWith(function() {                                                            // 21
      return {                                                                                                // 22
        template: Spacebars.call(view.lookup("activeStepTemplate"))                                           // 23
      };                                                                                                      // 24
    }, function() {                                                                                           // 25
      return Spacebars.include(function() {                                                                   // 26
        return Spacebars.call(Template.__dynamic);                                                            // 27
      });                                                                                                     // 28
    }), "\n  "), "\n  " ];                                                                                    // 29
  });                                                                                                         // 30
}));                                                                                                          // 31
                                                                                                              // 32
Template.__checkName("__wizard_steps");                                                                       // 33
Template["__wizard_steps"] = new Template("Template.__wizard_steps", (function() {                            // 34
  var view = this;                                                                                            // 35
  return HTML.DIV({                                                                                           // 36
    "class": "steps"                                                                                          // 37
  }, "\n    ", HTML.OL("\n    ", Blaze.Each(function() {                                                      // 38
    return Spacebars.call(Spacebars.dot(view.lookup("wizard"), "steps"));                                     // 39
  }, function() {                                                                                             // 40
    return [ "\n      ", HTML.LI({                                                                            // 41
      "class": function() {                                                                                   // 42
        return Spacebars.mustache(view.lookup("activeStepClass"), view.lookup("id"));                         // 43
      }                                                                                                       // 44
    }, "\n        ", Blaze.If(function() {                                                                    // 45
      return Spacebars.dataMustache(view.lookup("pathForStep"), view.lookup("id"));                           // 46
    }, function() {                                                                                           // 47
      return [ "\n          ", HTML.A({                                                                       // 48
        href: function() {                                                                                    // 49
          return Spacebars.mustache(view.lookup("pathForStep"), view.lookup("id"));                           // 50
        }                                                                                                     // 51
      }, Blaze.View("lookup:title", function() {                                                              // 52
        return Spacebars.mustache(view.lookup("title"));                                                      // 53
      })), "\n        " ];                                                                                    // 54
    }, function() {                                                                                           // 55
      return [ "\n          ", Blaze.View("lookup:title", function() {                                        // 56
        return Spacebars.mustache(view.lookup("title"));                                                      // 57
      }), "\n        " ];                                                                                     // 58
    }), "\n        "), "\n    " ];                                                                            // 59
  }), "\n    "), "\n  ");                                                                                     // 60
}));                                                                                                          // 61
                                                                                                              // 62
Template.__checkName("__wizard_step");                                                                        // 63
Template["__wizard_step"] = new Template("Template.__wizard_step", (function() {                              // 64
  var view = this;                                                                                            // 65
  return HTML.DIV({                                                                                           // 66
    "class": "wizard-step"                                                                                    // 67
  }, "\n  ", Blaze._TemplateWith(function() {                                                                 // 68
    return {                                                                                                  // 69
      id: Spacebars.call(Spacebars.dot(view.lookup("step"), "formId")),                                       // 70
      doc: Spacebars.call(Spacebars.dot(view.lookup("step"), "data")),                                        // 71
      schema: Spacebars.call(Spacebars.dot(view.lookup("step"), "schema"))                                    // 72
    };                                                                                                        // 73
  }, function() {                                                                                             // 74
    return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                    // 75
      return [ "\n    ", Blaze.Each(function() {                                                              // 76
        return Spacebars.call(view.lookup("afFieldNames"));                                                   // 77
      }, function() {                                                                                         // 78
        return [ "\n      ", Blaze._TemplateWith(function() {                                                 // 79
          return {                                                                                            // 80
            name: Spacebars.call(Spacebars.dot(view.lookup("."), "name")),                                    // 81
            options: Spacebars.call(view.lookup("afOptionsFromSchema"))                                       // 82
          };                                                                                                  // 83
        }, function() {                                                                                       // 84
          return Spacebars.include(view.lookupTemplate("afQuickField"));                                      // 85
        }), "\n    " ];                                                                                       // 86
      }), "\n    ", Spacebars.include(view.lookupTemplate("wizardButtons")), "\n  " ];                        // 87
    });                                                                                                       // 88
  }), "\n  ");                                                                                                // 89
}));                                                                                                          // 90
                                                                                                              // 91
Template.__checkName("wizardButtons");                                                                        // 92
Template["wizardButtons"] = new Template("Template.wizardButtons", (function() {                              // 93
  var view = this;                                                                                            // 94
  return Spacebars.With(function() {                                                                          // 95
    return Spacebars.call(view.lookup("wizard"));                                                             // 96
  }, function() {                                                                                             // 97
    return [ "\n  ", HTML.NAV({                                                                               // 98
      "class": "wizard-nav"                                                                                   // 99
    }, "\n    ", Blaze.If(function() {                                                                        // 100
      return Spacebars.call(view.lookup("showBackButton"));                                                   // 101
    }, function() {                                                                                           // 102
      return [ "\n    ", HTML.BUTTON({                                                                        // 103
        type: "button",                                                                                       // 104
        "class": function() {                                                                                 // 105
          return [ "wizard-back-button ", Spacebars.mustache(view.lookup("buttonClasses")) ];                 // 106
        }                                                                                                     // 107
      }, Blaze.View("lookup:backButton", function() {                                                         // 108
        return Spacebars.mustache(view.lookup("backButton"));                                                 // 109
      })), "\n    " ];                                                                                        // 110
    }), "\n    ", Blaze.If(function() {                                                                       // 111
      return Spacebars.call(view.lookup("isLastStep"));                                                       // 112
    }, function() {                                                                                           // 113
      return [ "\n    ", HTML.BUTTON({                                                                        // 114
        type: "submit",                                                                                       // 115
        "class": function() {                                                                                 // 116
          return [ "wizard-submit-button ", Spacebars.mustache(view.lookup("buttonClasses")) ];               // 117
        }                                                                                                     // 118
      }, Blaze.View("lookup:confirmButton", function() {                                                      // 119
        return Spacebars.mustache(view.lookup("confirmButton"));                                              // 120
      })), "\n    " ];                                                                                        // 121
    }, function() {                                                                                           // 122
      return [ "\n    ", HTML.BUTTON({                                                                        // 123
        type: "submit",                                                                                       // 124
        "class": function() {                                                                                 // 125
          return [ "wizard-next-button ", Spacebars.mustache(view.lookup("buttonClasses")) ];                 // 126
        }                                                                                                     // 127
      }, Blaze.View("lookup:nextButton", function() {                                                         // 128
        return Spacebars.mustache(view.lookup("nextButton"));                                                 // 129
      })), "\n    " ];                                                                                        // 130
    }), "\n  "), "\n  " ];                                                                                    // 131
  });                                                                                                         // 132
}));                                                                                                          // 133
                                                                                                              // 134
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/forwarder_autoform-wizard/wizard.js                                                               //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var wizardsById = {};                                                                                         // 1
var defaultId = '_defaultId';                                                                                 // 2
                                                                                                              // 3
Template.registerHelper('pathForStep', function(id) {                                                         // 4
  var activeStep = this.wizard.activeStep(false);                                                             // 5
  if (activeStep.id === id || !this.data() || this.wizard.indexOf(id) > this.wizard.indexOf(activeStep.id)) {
    return null;                                                                                              // 7
  } if (!this.wizard.route) {                                                                                 // 8
    return '#' + id;                                                                                          // 9
  }                                                                                                           // 10
                                                                                                              // 11
  return Wizard.Router.path(this.wizard.route, id);                                                           // 12
});                                                                                                           // 13
                                                                                                              // 14
Template.wizard.created = function() {                                                                        // 15
  var id = this.data.id || defaultId;                                                                         // 16
  this.wizard = wizardsById[id] = new Wizard(this.data);                                                      // 17
};                                                                                                            // 18
                                                                                                              // 19
Template.wizard.destroyed = function() {                                                                      // 20
  var id = this.data.id || defaultId;                                                                         // 21
                                                                                                              // 22
  if (wizardsById[id]) {                                                                                      // 23
    wizardsById[id].destroy();                                                                                // 24
    delete wizardsById[id];                                                                                   // 25
  }                                                                                                           // 26
};                                                                                                            // 27
                                                                                                              // 28
Template.wizard.helpers({                                                                                     // 29
  innerContext: function(outerContext) {                                                                      // 30
    var context = this                                                                                        // 31
    , wizard = Template.instance().wizard;                                                                    // 32
                                                                                                              // 33
    return _.extend({                                                                                         // 34
      wizard: wizard,                                                                                         // 35
      step: wizard.activeStep(),                                                                              // 36
    }, outerContext);                                                                                         // 37
  },                                                                                                          // 38
  activeStepTemplate: function() {                                                                            // 39
    var activeStep = this.wizard.activeStep();                                                                // 40
    return activeStep && (activeStep.template || this.wizard.stepTemplate) || null;                           // 41
  }                                                                                                           // 42
});                                                                                                           // 43
                                                                                                              // 44
Template.__wizard_steps.events({                                                                              // 45
  'click a': function(e, tpl) {                                                                               // 46
    if (!this.wizard.route) {                                                                                 // 47
      e.preventDefault();                                                                                     // 48
      this.wizard.show(this.id);                                                                              // 49
    }                                                                                                         // 50
  }                                                                                                           // 51
});                                                                                                           // 52
                                                                                                              // 53
Template.__wizard_steps.helpers({                                                                             // 54
  activeStepClass: function(id) {                                                                             // 55
    var activeStep = this.wizard.activeStep();                                                                // 56
    return (activeStep && activeStep.id == id) && 'active' || '';                                             // 57
  }                                                                                                           // 58
});                                                                                                           // 59
                                                                                                              // 60
Template.wizardButtons.events({                                                                               // 61
  'click .wizard-back-button': function(e) {                                                                  // 62
    e.preventDefault();                                                                                       // 63
    this.previous(AutoForm.getFormValues(this.activeStep(false).formId).insertDoc);                           // 64
  }                                                                                                           // 65
});                                                                                                           // 66
                                                                                                              // 67
Template.wizardButtons.helpers({                                                                              // 68
  showBackButton: function() {                                                                                // 69
    return this.backButton && !this.isFirstStep();                                                            // 70
  }                                                                                                           // 71
});                                                                                                           // 72
                                                                                                              // 73
var _options = [                                                                                              // 74
  'id',                                                                                                       // 75
  'route',                                                                                                    // 76
  'steps',                                                                                                    // 77
  'stepsTemplate',                                                                                            // 78
  'stepTemplate',                                                                                             // 79
  'buttonClasses',                                                                                            // 80
  'nextButton',                                                                                               // 81
  'backButton',                                                                                               // 82
  'confirmButton',                                                                                            // 83
  'persist',                                                                                                  // 84
  'clearOnDestroy'                                                                                            // 85
];                                                                                                            // 86
                                                                                                              // 87
var _defaults = {                                                                                             // 88
  stepsTemplate: '__wizard_steps',                                                                            // 89
  stepTemplate: '__wizard_step',                                                                              // 90
  nextButton: 'Next',                                                                                         // 91
  backButton: 'Back',                                                                                         // 92
  confirmButton: 'Confirm',                                                                                   // 93
  persist: true                                                                                               // 94
}                                                                                                             // 95
                                                                                                              // 96
Wizard = function(options) {                                                                                  // 97
  this._dep = new Tracker.Dependency();                                                                       // 98
                                                                                                              // 99
  options = _.chain(options).pick(_options).defaults(_defaults).value();                                      // 100
  _.extend(this, options);                                                                                    // 101
                                                                                                              // 102
  this._stepsByIndex = [];                                                                                    // 103
  this._stepsById = {};                                                                                       // 104
                                                                                                              // 105
  this.store = new CacheStore(this.id, {                                                                      // 106
    persist: this.persist !== false                                                                           // 107
  });                                                                                                         // 108
                                                                                                              // 109
  this.initialize();                                                                                          // 110
};                                                                                                            // 111
                                                                                                              // 112
Wizard.get = function(id) {                                                                                   // 113
  return wizardsById[id || defaultId];                                                                        // 114
};                                                                                                            // 115
                                                                                                              // 116
Wizard.extendOptions = function(options, defaults) {                                                          // 117
  _options = _options.concat(options);                                                                        // 118
  _.extend(_defaults, defaults);                                                                              // 119
};                                                                                                            // 120
                                                                                                              // 121
Wizard.prototype = {                                                                                          // 122
                                                                                                              // 123
  constructor: Wizard,                                                                                        // 124
                                                                                                              // 125
  initialize: function() {                                                                                    // 126
    var self = this;                                                                                          // 127
                                                                                                              // 128
    _.each(this.steps, function(step) {                                                                       // 129
      self._initStep(step);                                                                                   // 130
    });                                                                                                       // 131
                                                                                                              // 132
    this._comp = Tracker.autorun(function() {                                                                 // 133
      var step;                                                                                               // 134
      if (self.route)                                                                                         // 135
        step = Wizard.Router.getStep();                                                                       // 136
                                                                                                              // 137
      self._setActiveStep(step);                                                                              // 138
    });                                                                                                       // 139
  },                                                                                                          // 140
                                                                                                              // 141
  _initStep: function(step) {                                                                                 // 142
    var self = this;                                                                                          // 143
                                                                                                              // 144
    if (!step.id) {                                                                                           // 145
      throw new Meteor.Error('step-id-required', 'Step.id is required');                                      // 146
    }                                                                                                         // 147
                                                                                                              // 148
    if (!step.formId) {                                                                                       // 149
      step.formId = step.id + '-form';                                                                        // 150
    }                                                                                                         // 151
                                                                                                              // 152
    if (step.data) {                                                                                          // 153
      this.setData(step.id, step.data);                                                                       // 154
    }                                                                                                         // 155
                                                                                                              // 156
    this._stepsByIndex.push(step.id);                                                                         // 157
    this._stepsById[step.id] = _.extend(step, {                                                               // 158
      wizard: self,                                                                                           // 159
      data: function() {                                                                                      // 160
        return self.store.get(step.id);                                                                       // 161
      }                                                                                                       // 162
    });                                                                                                       // 163
                                                                                                              // 164
    AutoForm.addHooks(step.formId, {                                                                          // 165
      onSubmit: function(data) {                                                                              // 166
        this.event.preventDefault();                                                                          // 167
                                                                                                              // 168
        if(step.onSubmit) {                                                                                   // 169
          step.onSubmit.call(this, data, self);                                                               // 170
        } else {                                                                                              // 171
          this.done();                                                                                        // 172
          self.next(data);                                                                                    // 173
        }                                                                                                     // 174
      }                                                                                                       // 175
    }, true);                                                                                                 // 176
  },                                                                                                          // 177
                                                                                                              // 178
  _setActiveStep: function(step) {                                                                            // 179
    // show the first step if not bound to a route                                                            // 180
    if(!step) {                                                                                               // 181
      return this.setStep(0);                                                                                 // 182
    }                                                                                                         // 183
                                                                                                              // 184
    var index = this.indexOf(step)                                                                            // 185
      , previousStep = this.getStep(index - 1);                                                               // 186
                                                                                                              // 187
    // initial route or non existing step, redirect to first step                                             // 188
    if(index === -1) {                                                                                        // 189
      return this.setStep(0);                                                                                 // 190
    }                                                                                                         // 191
                                                                                                              // 192
    // invalid step                                                                                           // 193
    if(index > 0 && previousStep && !previousStep.data()) {                                                   // 194
      return this.setStep(0);                                                                                 // 195
    }                                                                                                         // 196
                                                                                                              // 197
    // valid                                                                                                  // 198
    this.setStep(step);                                                                                       // 199
  },                                                                                                          // 200
                                                                                                              // 201
  setData: function(id, data) {                                                                               // 202
    this.store.set(id, data);                                                                                 // 203
  },                                                                                                          // 204
                                                                                                              // 205
  clearData: function() {                                                                                     // 206
    this.store.clear();                                                                                       // 207
  },                                                                                                          // 208
                                                                                                              // 209
  mergedData: function() {                                                                                    // 210
    var data = {};                                                                                            // 211
    _.each(this._stepsById, function(step) {                                                                  // 212
      _.extend(data, step.data());                                                                            // 213
    });                                                                                                       // 214
    return data;                                                                                              // 215
  },                                                                                                          // 216
                                                                                                              // 217
  next: function(data) {                                                                                      // 218
    var activeIndex = _.indexOf(this._stepsByIndex, this._activeStepId);                                      // 219
                                                                                                              // 220
    if(data) {                                                                                                // 221
      this.setData(this._activeStepId, data);                                                                 // 222
    }                                                                                                         // 223
                                                                                                              // 224
    this.show(activeIndex + 1);                                                                               // 225
  },                                                                                                          // 226
                                                                                                              // 227
  previous: function(data) {                                                                                  // 228
    var activeIndex = _.indexOf(this._stepsByIndex, this._activeStepId);                                      // 229
                                                                                                              // 230
    if(data) {                                                                                                // 231
     this.setData(this._activeStepId, data);                                                                  // 232
    }                                                                                                         // 233
                                                                                                              // 234
    this.show(activeIndex - 1);                                                                               // 235
  },                                                                                                          // 236
                                                                                                              // 237
  show: function(id) {                                                                                        // 238
    if(typeof id === 'number') {                                                                              // 239
      id = id in this._stepsByIndex && this._stepsByIndex[id];                                                // 240
    }                                                                                                         // 241
                                                                                                              // 242
    if(!id) return false;                                                                                     // 243
                                                                                                              // 244
    if(this.route) {                                                                                          // 245
      Wizard.Router.go(this.route, id);                                                                       // 246
    } else {                                                                                                  // 247
      this.setStep(id);                                                                                       // 248
    }                                                                                                         // 249
                                                                                                              // 250
    return true;                                                                                              // 251
  },                                                                                                          // 252
                                                                                                              // 253
  getStep: function(id) {                                                                                     // 254
    if(typeof id === 'number') {                                                                              // 255
      id = id in this._stepsByIndex && this._stepsByIndex[id];                                                // 256
    }                                                                                                         // 257
                                                                                                              // 258
    return id in this._stepsById && this._stepsById[id];                                                      // 259
  },                                                                                                          // 260
                                                                                                              // 261
  activeStep: function(reactive) {                                                                            // 262
    if(reactive !== false) {                                                                                  // 263
      this._dep.depend();                                                                                     // 264
    }                                                                                                         // 265
    return this._stepsById[this._activeStepId];                                                               // 266
  },                                                                                                          // 267
                                                                                                              // 268
  setStep: function(id) {                                                                                     // 269
    if(typeof id === 'number') {                                                                              // 270
      id = id in this._stepsByIndex && this._stepsByIndex[id];                                                // 271
    }                                                                                                         // 272
                                                                                                              // 273
    if(!id) return false;                                                                                     // 274
                                                                                                              // 275
    this._activeStepId = id;                                                                                  // 276
    this._dep.changed();                                                                                      // 277
    return this._stepsById[this._activeStepId];                                                               // 278
  },                                                                                                          // 279
                                                                                                              // 280
  isActiveStep: function(id) {                                                                                // 281
    return id === this._activeStepId;                                                                         // 282
  },                                                                                                          // 283
                                                                                                              // 284
  isFirstStep: function(id) {                                                                                 // 285
    id = id || this._activeStepId;                                                                            // 286
    return this.indexOf(id) === 0;                                                                            // 287
  },                                                                                                          // 288
                                                                                                              // 289
  isLastStep: function(id) {                                                                                  // 290
    id = id || this._activeStepId;                                                                            // 291
    return this.indexOf(id) === this._stepsByIndex.length - 1;                                                // 292
  },                                                                                                          // 293
                                                                                                              // 294
  indexOf: function(id) {                                                                                     // 295
    return _.indexOf(this._stepsByIndex, id);                                                                 // 296
  },                                                                                                          // 297
                                                                                                              // 298
  destroy: function() {                                                                                       // 299
    this._comp.stop();                                                                                        // 300
                                                                                                              // 301
    if(this.clearOnDestroy) this.clearData();                                                                 // 302
  }                                                                                                           // 303
};                                                                                                            // 304
                                                                                                              // 305
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/forwarder_autoform-wizard/router.js                                                               //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var routers = {}, activeRouter = 'default';                                                                   // 1
                                                                                                              // 2
var defaultConfig = {                                                                                         // 3
  go: function(name, stepId) {},                                                                              // 4
  getParams: function(stepId) {},                                                                             // 5
  getStep: function() {},                                                                                     // 6
  path: function(name, stepId) {                                                                              // 7
    return '#' + stepId;                                                                                      // 8
  }                                                                                                           // 9
};                                                                                                            // 10
                                                                                                              // 11
Wizard.Router = {                                                                                             // 12
  apply: function(method, args) {                                                                             // 13
    var router = routers[activeRouter];                                                                       // 14
    return router[method].apply(router, args);                                                                // 15
  },                                                                                                          // 16
  go: function() {                                                                                            // 17
    return this.apply('go', arguments);                                                                       // 18
  },                                                                                                          // 19
  getParams: function() {                                                                                     // 20
    return this.apply('getParams', arguments);                                                                // 21
  },                                                                                                          // 22
  getStep: function() {                                                                                       // 23
    return this.apply('getStep', arguments);                                                                  // 24
  },                                                                                                          // 25
  path: function() {                                                                                          // 26
    return this.apply('path', arguments);                                                                     // 27
  }                                                                                                           // 28
};                                                                                                            // 29
                                                                                                              // 30
Wizard.registerRouter = function wizardRegisterRouter(name, config) {                                         // 31
  if (routers[name]) {                                                                                        // 32
    throw new Meteor.Error('router-configured', 'A router with his name has already been configured.');       // 33
  }                                                                                                           // 34
  routers[name] = _.defaults(config, defaultConfig);                                                          // 35
};                                                                                                            // 36
                                                                                                              // 37
Wizard.useRouter = function wizardUseRouter(name) {                                                           // 38
  if (!routers[name]) {                                                                                       // 39
    throw new Meteor.Error('router-not-configured', 'A router with this name hasn\'t been configured.');      // 40
  }                                                                                                           // 41
                                                                                                              // 42
  activeRouter = name;                                                                                        // 43
};                                                                                                            // 44
                                                                                                              // 45
Wizard.registerRouter('default', {                                                                            // 46
  activeStep: new ReactiveVar(),                                                                              // 47
  go: function(name, stepId) {                                                                                // 48
    this.activeStep.set(stepId);                                                                              // 49
  },                                                                                                          // 50
  getStep: function() {                                                                                       // 51
    return this.activeStep.get();                                                                             // 52
  }                                                                                                           // 53
});                                                                                                           // 54
                                                                                                              // 55
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/forwarder_autoform-wizard/cache.js                                                                //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
CacheStore = function(id, options) {                                                                          // 1
  var self = this;                                                                                            // 2
                                                                                                              // 3
  this.id = '__wizard_' + (id || 'default');                                                                  // 4
  this.keys = {};                                                                                             // 5
                                                                                                              // 6
  _.extend(this, {                                                                                            // 7
    persist: true                                                                                             // 8
  }, _.pick(options, 'persist'));                                                                             // 9
                                                                                                              // 10
  if (this.persist) {                                                                                         // 11
    var cache = Meteor._localStorage.getItem(this.id);                                                        // 12
    if (cache) {                                                                                              // 13
      _.each(EJSON.parse(cache), function(value, key) {                                                       // 14
        Session.set(self.prefix(key), value);                                                                 // 15
        self.keys[key] = value;                                                                               // 16
      });                                                                                                     // 17
    }                                                                                                         // 18
  }                                                                                                           // 19
};                                                                                                            // 20
                                                                                                              // 21
_.extend(CacheStore.prototype, Session, {                                                                     // 22
  prefix: function(key) {                                                                                     // 23
    return this.id + '__' + key;                                                                              // 24
  },                                                                                                          // 25
                                                                                                              // 26
  set: function(key, value) {                                                                                 // 27
    Session.set(this.prefix(key), value);                                                                     // 28
    if (this.persist) {                                                                                       // 29
      this.keys[key] = value;                                                                                 // 30
      Meteor._localStorage.setItem(this.id, EJSON.stringify(this.keys));                                      // 31
    }                                                                                                         // 32
  },                                                                                                          // 33
                                                                                                              // 34
  get: function(key) {                                                                                        // 35
    return Session.get(this.prefix(key));                                                                     // 36
  },                                                                                                          // 37
                                                                                                              // 38
  clear: function() {                                                                                         // 39
    var self = this;                                                                                          // 40
    _.each(this.keys, function(value, key) {                                                                  // 41
      Session.set(self.prefix(key), null);                                                                    // 42
    });                                                                                                       // 43
    if (this.persist)                                                                                         // 44
      Meteor._localStorage.removeItem(this.id);                                                               // 45
  }                                                                                                           // 46
});                                                                                                           // 47
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['forwarder:autoform-wizard'] = {}, {
  Wizard: Wizard
});

})();
