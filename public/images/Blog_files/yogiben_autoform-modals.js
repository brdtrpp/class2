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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Template = Package.templating.Template;
var Session = Package.session.Session;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var AutoForm = Package['aldeed:autoform'].AutoForm;
var Helpers = Package['raix:handlebar-helpers'].Helpers;
var StringTemplate = Package['mpowaga:string-template'].StringTemplate;
var Spacebars = Package.spacebars.Spacebars;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var __coffeescriptShare;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/yogiben_autoform-modals/lib/client/template.modals.js                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("autoformModals");                                                                          // 2
Template["autoformModals"] = new Template("Template.autoformModals", (function() {                               // 3
  var view = this;                                                                                               // 4
  return HTML.DIV({                                                                                              // 5
    "class": "modal fade",                                                                                       // 6
    id: "afModal"                                                                                                // 7
  }, "\n		", HTML.DIV({                                                                                          // 8
    "class": function() {                                                                                        // 9
      return [ "modal-dialog ", Spacebars.mustache(view.lookup("cmModalDialogClass")) ];                         // 10
    }                                                                                                            // 11
  }, "\n			", HTML.DIV({                                                                                         // 12
    "class": "modal-content"                                                                                     // 13
  }, "\n				", HTML.DIV({                                                                                        // 14
    "class": "modal-header"                                                                                      // 15
  }, "\n					", HTML.Raw('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'), "\n					", HTML.H4({
    "class": "modal-title"                                                                                       // 17
  }, Blaze.View("lookup:title", function() {                                                                     // 18
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("title")));                                          // 19
  })), "\n				"), "\n				", HTML.DIV({                                                                           // 20
    "class": "modal-body"                                                                                        // 21
  }, "\n					", Blaze.If(function() {                                                                            // 22
    return Spacebars.dataMustache(view.lookup("$and"), view.lookup("cmCollection"), view.lookup("cmOperation"));
  }, function() {                                                                                                // 24
    return [ "\n					", HTML.P(Blaze.View("lookup:prompt", function() {                                          // 25
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("prompt")));                                       // 26
    })), "\n					", Blaze.If(function() {                                                                        // 27
      return Spacebars.dataMustache(view.lookup("$neq"), view.lookup("cmOperation"), "remove");                  // 28
    }, function() {                                                                                              // 29
      return [ "\n					", Blaze._TemplateWith(function() {                                                       // 30
        return {                                                                                                 // 31
          title: Spacebars.call(view.lookup("cmTitle")),                                                         // 32
          id: Spacebars.call(view.lookup("cmFormId")),                                                           // 33
          collection: Spacebars.call(view.lookup("cmCollection")),                                               // 34
          doc: Spacebars.call(view.lookup("cmDoc")),                                                             // 35
          type: Spacebars.call(view.lookup("cmAutoformType")),                                                   // 36
          buttonContent: Spacebars.call(view.lookup("cmButtonContent")),                                         // 37
          fields: Spacebars.call(view.lookup("cmFields")),                                                       // 38
          omitFields: Spacebars.call(view.lookup("cmOmitFields")),                                               // 39
          template: Spacebars.call(view.lookup("cmTemplate")),                                                   // 40
          "label-class": Spacebars.call(view.lookup("cmLabelClass")),                                            // 41
          "input-col-class": Spacebars.call(view.lookup("cmInputColClass")),                                     // 42
          buttonClasses: Spacebars.call(view.lookup("cmButtonClasses")),                                         // 43
          "afFieldInput-placeholder": Spacebars.call(view.lookup("cmPlaceholder")),                              // 44
          meteormethod: Spacebars.call(view.lookup("cmMeteorMethod"))                                            // 45
        };                                                                                                       // 46
      }, function() {                                                                                            // 47
        return Spacebars.include(view.lookupTemplate("quickForm"));                                              // 48
      }), "\n					" ];                                                                                           // 49
    }), "\n					" ];                                                                                             // 50
  }), "\n				"), "\n				", Blaze.If(function() {                                                                 // 51
    return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("cmOperation"), "remove");                     // 52
  }, function() {                                                                                                // 53
    return [ "\n				", HTML.DIV({                                                                                // 54
      "class": "modal-footer"                                                                                    // 55
    }, "\n					", Blaze.If(function() {                                                                          // 56
      return Spacebars.call(view.lookup("closeButtonContent"));                                                  // 57
    }, function() {                                                                                              // 58
      return [ "\n					", HTML.A({                                                                               // 59
        role: "button",                                                                                          // 60
        href: "#",                                                                                               // 61
        "data-dismiss": "modal",                                                                                 // 62
        "class": function() {                                                                                    // 63
          return Spacebars.mustache(view.lookup("cmCloseButtonClasses"));                                        // 64
        }                                                                                                        // 65
      }, Blaze.View("lookup:closeButtonContent", function() {                                                    // 66
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("closeButtonContent")));                         // 67
      })), "\n					" ];                                                                                          // 68
    }), "\n					", HTML.BUTTON({                                                                                 // 69
      "class": function() {                                                                                      // 70
        return Spacebars.mustache(view.lookup("cmButtonClasses"));                                               // 71
      }                                                                                                          // 72
    }, Blaze.View("lookup:buttonContent", function() {                                                           // 73
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("buttonContent")));                                // 74
    })), "\n				"), "\n				" ];                                                                                  // 75
  }), "\n			"), "\n		"), "\n	");                                                                                 // 76
}));                                                                                                             // 77
                                                                                                                 // 78
Template.__checkName("afModal");                                                                                 // 79
Template["afModal"] = new Template("Template.afModal", (function() {                                             // 80
  var view = this;                                                                                               // 81
  return HTML.A({                                                                                                // 82
    href: "#afModal",                                                                                            // 83
    "class": function() {                                                                                        // 84
      return Spacebars.mustache(view.lookup("class"));                                                           // 85
    },                                                                                                           // 86
    collection: function() {                                                                                     // 87
      return Spacebars.mustache(view.lookup("collection"));                                                      // 88
    },                                                                                                           // 89
    operation: function() {                                                                                      // 90
      return Spacebars.mustache(view.lookup("operation"));                                                       // 91
    }                                                                                                            // 92
  }, "\n		", Blaze._InOuterTemplateScope(view, function() {                                                      // 93
    return Spacebars.include(function() {                                                                        // 94
      return Spacebars.call(view.templateContentBlock);                                                          // 95
    });                                                                                                          // 96
  }), "\n	");                                                                                                    // 97
}));                                                                                                             // 98
                                                                                                                 // 99
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/yogiben_autoform-modals/lib/client/modals.coffee.js                                                  //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var cmOnSuccessCallback, collectionObj, defaultFormId, helpers, registeredAutoFormHooks;                         // 1
                                                                                                                 //
registeredAutoFormHooks = ['cmForm'];                                                                            // 1
                                                                                                                 //
defaultFormId = 'cmForm';                                                                                        // 2
                                                                                                                 //
cmOnSuccessCallback = null;                                                                                      // 4
                                                                                                                 //
AutoForm.addHooks('cmForm', {                                                                                    // 6
  onSuccess: function() {                                                                                        //
    return $('#afModal').modal('hide');                                                                          //
  }                                                                                                              //
});                                                                                                              //
                                                                                                                 //
collectionObj = function(name) {                                                                                 // 10
  return name.split('.').reduce(function(o, x) {                                                                 //
    return o[x];                                                                                                 //
  }, window);                                                                                                    //
};                                                                                                               // 10
                                                                                                                 //
Template.autoformModals.rendered = function() {                                                                  // 15
  var onEscKey;                                                                                                  // 16
  $('#afModal').modal({                                                                                          //
    show: false                                                                                                  //
  });                                                                                                            //
  onEscKey = function(e) {                                                                                       //
    if (e.keyCode === 27) {                                                                                      //
      return $('#afModal').modal('hide');                                                                        //
    }                                                                                                            //
  };                                                                                                             //
  $('#afModal').on('shown.bs.modal', function() {                                                                //
    return $(window).bind('keyup', onEscKey);                                                                    //
  });                                                                                                            //
  return $('#afModal').on('hidden.bs.modal', function() {                                                        //
    var i, key, len, results, sessionKeys;                                                                       // 26
    $(window).unbind('keyup', onEscKey);                                                                         //
    AutoForm.resetForm(Session.get('cmFormId') || defaultFormId);                                                //
    sessionKeys = ['cmCollection', 'cmOperation', 'cmDoc', 'cmButtonHtml', 'cmFields', 'cmOmitFields', 'cmButtonContent', 'cmTitle', 'cmButtonClasses', 'cmPrompt', 'cmTemplate', 'cmLabelClass', 'cmInputColClass', 'cmPlaceholder', 'cmFormId', 'cmAutoformType', 'cmMeteorMethod', 'cmCloseButtonContent', 'cmCloseButtonClasses'];
    results = [];                                                                                                // 51
    for (i = 0, len = sessionKeys.length; i < len; i++) {                                                        //
      key = sessionKeys[i];                                                                                      //
      results.push(delete Session.keys[key]);                                                                    //
    }                                                                                                            // 51
    return results;                                                                                              //
  });                                                                                                            //
};                                                                                                               // 15
                                                                                                                 //
Template.autoformModals.events({                                                                                 // 53
  'click button:not(.close)': function() {                                                                       //
    var _id, collection, operation;                                                                              // 55
    collection = Session.get('cmCollection');                                                                    //
    operation = Session.get('cmOperation');                                                                      //
    if (operation !== 'insert') {                                                                                //
      _id = Session.get('cmDoc')._id;                                                                            //
    }                                                                                                            //
    if (operation === 'remove') {                                                                                //
      return collectionObj(collection).remove(_id, function(e) {                                                 //
        if (e) {                                                                                                 //
          return alert('Sorry, this could not be deleted.');                                                     //
        } else {                                                                                                 //
          $('#afModal').modal('hide');                                                                           //
          return typeof cmOnSuccessCallback === "function" ? cmOnSuccessCallback() : void 0;                     //
        }                                                                                                        //
      });                                                                                                        //
    }                                                                                                            //
  }                                                                                                              //
});                                                                                                              //
                                                                                                                 //
helpers = {                                                                                                      // 69
  cmCollection: function() {                                                                                     //
    return Session.get('cmCollection');                                                                          //
  },                                                                                                             //
  cmOperation: function() {                                                                                      //
    return Session.get('cmOperation');                                                                           //
  },                                                                                                             //
  cmDoc: function() {                                                                                            //
    return Session.get('cmDoc');                                                                                 //
  },                                                                                                             //
  cmButtonHtml: function() {                                                                                     //
    return Session.get('cmButtonHtml');                                                                          //
  },                                                                                                             //
  cmFields: function() {                                                                                         //
    return Session.get('cmFields');                                                                              //
  },                                                                                                             //
  cmOmitFields: function() {                                                                                     //
    return Session.get('cmOmitFields');                                                                          //
  },                                                                                                             //
  cmButtonContent: function() {                                                                                  //
    return Session.get('cmButtonContent');                                                                       //
  },                                                                                                             //
  cmCloseButtonContent: function() {                                                                             //
    return Session.get('cmCloseButtonContent');                                                                  //
  },                                                                                                             //
  cmTitle: function() {                                                                                          //
    return Session.get('cmTitle');                                                                               //
  },                                                                                                             //
  cmButtonClasses: function() {                                                                                  //
    return Session.get('cmButtonClasses');                                                                       //
  },                                                                                                             //
  cmCloseButtonClasses: function() {                                                                             //
    return Session.get('cmCloseButtonClasses');                                                                  //
  },                                                                                                             //
  cmPrompt: function() {                                                                                         //
    return Session.get('cmPrompt');                                                                              //
  },                                                                                                             //
  cmTemplate: function() {                                                                                       //
    return Session.get('cmTemplate');                                                                            //
  },                                                                                                             //
  cmLabelClass: function() {                                                                                     //
    return Session.get('cmLabelClass');                                                                          //
  },                                                                                                             //
  cmInputColClass: function() {                                                                                  //
    return Session.get('cmInputColClass');                                                                       //
  },                                                                                                             //
  cmPlaceholder: function() {                                                                                    //
    return Session.get('cmPlaceholder');                                                                         //
  },                                                                                                             //
  cmFormId: function() {                                                                                         //
    return Session.get('cmFormId') || defaultFormId;                                                             //
  },                                                                                                             //
  cmAutoformType: function() {                                                                                   //
    if (Session.get('cmMeteorMethod')) {                                                                         //
      return 'method';                                                                                           //
    } else {                                                                                                     //
      return Session.get('cmOperation');                                                                         //
    }                                                                                                            //
  },                                                                                                             //
  cmModalDialogClass: function() {                                                                               //
    return Session.get('cmModalDialogClass');                                                                    //
  },                                                                                                             //
  cmMeteorMethod: function() {                                                                                   //
    return Session.get('cmMeteorMethod');                                                                        //
  },                                                                                                             //
  title: function() {                                                                                            //
    return StringTemplate.compile('{{{cmTitle}}}', helpers);                                                     //
  },                                                                                                             //
  prompt: function() {                                                                                           //
    return StringTemplate.compile('{{{cmPrompt}}}', helpers);                                                    //
  },                                                                                                             //
  buttonContent: function() {                                                                                    //
    return StringTemplate.compile('{{{cmButtonContent}}}', helpers);                                             //
  },                                                                                                             //
  closeButtonContent: function() {                                                                               //
    return StringTemplate.compile('{{{cmCloseButtonContent}}}', helpers);                                        //
  }                                                                                                              //
};                                                                                                               //
                                                                                                                 //
Template.autoformModals.helpers(helpers);                                                                        // 122
                                                                                                                 //
Template.afModal.events({                                                                                        // 124
  'click *': function(e, t) {                                                                                    //
    var html;                                                                                                    // 126
    e.preventDefault();                                                                                          //
    html = t.$('*').html();                                                                                      //
    Session.set('cmCollection', t.data.collection);                                                              //
    Session.set('cmOperation', t.data.operation);                                                                //
    Session.set('cmFields', t.data.fields);                                                                      //
    Session.set('cmOmitFields', t.data.omitFields);                                                              //
    Session.set('cmButtonHtml', html);                                                                           //
    Session.set('cmTitle', t.data.title || html);                                                                //
    Session.set('cmTemplate', t.data.template);                                                                  //
    Session.set('cmLabelClass', t.data.labelClass || t.data['label-class']);                                     //
    Session.set('cmInputColClass', t.data.inputColClass || t.data['input-col-class']);                           //
    Session.set('cmPlaceholder', t.data.placeholder === true ? 'schemaLabel' : '');                              //
    Session.set('cmFormId', t.data.formId);                                                                      //
    Session.set('cmMeteorMethod', t.data.meteormethod);                                                          //
    Session.set('cmModalDialogClass', t.data.dialogClass);                                                       //
    cmOnSuccessCallback = t.data.onSuccess;                                                                      //
    if (!_.contains(registeredAutoFormHooks, t.data.formId)) {                                                   //
      AutoForm.addHooks(t.data.formId, {                                                                         //
        onSuccess: function() {                                                                                  //
          return $('#afModal').modal('hide');                                                                    //
        }                                                                                                        //
      });                                                                                                        //
      registeredAutoFormHooks.push(t.data.formId);                                                               //
    }                                                                                                            //
    if (t.data.doc) {                                                                                            //
      Session.set('cmDoc', collectionObj(t.data.collection).findOne({                                            //
        _id: t.data.doc                                                                                          //
      }));                                                                                                       //
    }                                                                                                            //
    if (t.data.buttonContent) {                                                                                  //
      Session.set('cmButtonContent', t.data.buttonContent);                                                      //
    } else if (t.data.operation === 'insert') {                                                                  //
      Session.set('cmButtonContent', 'Create');                                                                  //
    } else if (t.data.operation === 'update') {                                                                  //
      Session.set('cmButtonContent', 'Update');                                                                  //
    } else if (t.data.operation === 'remove') {                                                                  //
      Session.set('cmButtonContent', 'Delete');                                                                  //
    }                                                                                                            //
    if (t.data.buttonClasses) {                                                                                  //
      Session.set('cmButtonClasses', t.data.buttonClasses);                                                      //
    } else if (t.data.operation === 'remove') {                                                                  //
      Session.set('cmButtonClasses', 'btn btn-danger');                                                          //
    } else {                                                                                                     //
      Session.set('cmButtonClasses', 'btn btn-primary');                                                         //
    }                                                                                                            //
    Session.set('cmCloseButtonContent', t.data.closeButtonContent || '');                                        //
    Session.set('cmCloseButtonClasses', t.data.closeButtonClasses || 'btn btn-default');                         //
    if (t.data.prompt) {                                                                                         //
      Session.set('cmPrompt', t.data.prompt);                                                                    //
    } else if (t.data.operation === 'remove') {                                                                  //
      Session.set('cmPrompt', 'Are you sure?');                                                                  //
    } else {                                                                                                     //
      Session.set('cmPrompt', '');                                                                               //
    }                                                                                                            //
    $('#afModal').data('bs.modal').options.backdrop = t.data.backdrop || true;                                   //
    return $('#afModal').modal('show');                                                                          //
  }                                                                                                              //
});                                                                                                              //
                                                                                                                 //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['yogiben:autoform-modals'] = {};

})();
