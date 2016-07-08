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
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var AutoForm = Package['aldeed:autoform'].AutoForm;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/aldeed_autoform-bs-button-group-input/packages/aldeed_autoform-bs-button-group-input.js                //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
(function () {                                                                                                     // 1
                                                                                                                   // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                           //    // 4
// packages/aldeed:autoform-bs-button-group-input/template.cb-buttons.js                                     //    // 5
//                                                                                                           //    // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                             //    // 8
                                                                                                             // 1  // 9
Template.__checkName("afCheckboxGroup_buttonGroup");                                                         // 2  // 10
Template["afCheckboxGroup_buttonGroup"] = new Template("Template.afCheckboxGroup_buttonGroup", (function() { // 3  // 11
  var view = this;                                                                                           // 4  // 12
  return HTML.DIV(HTML.Attrs({                                                                               // 5  // 13
    "class": "btn-group af-checkbox-group",                                                                  // 6  // 14
    "data-toggle": "buttons"                                                                                 // 7  // 15
  }, function() {                                                                                            // 8  // 16
    return Spacebars.attrMustache(view.lookup("dsk"));                                                       // 9  // 17
  }), "\n    ", Blaze.Each(function() {                                                                      // 10
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                         // 11
  }, function() {                                                                                            // 12
    return [ "\n      ", HTML.LABEL({                                                                        // 13
      "class": function() {                                                                                  // 14
        return [ "btn btn-default ", Blaze.If(function() {                                                   // 15
          return Spacebars.call(Spacebars.dot(view.lookup("."), "selected"));                                // 16
        }, function() {                                                                                      // 17
          return "active";                                                                                   // 18
        }) ];                                                                                                // 19
      }                                                                                                      // 20
    }, "\n        ", HTML.INPUT(HTML.Attrs({                                                                 // 21
      type: "checkbox",                                                                                      // 22
      value: function() {                                                                                    // 23
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                 // 24
      }                                                                                                      // 25
    }, function() {                                                                                          // 26
      return Spacebars.attrMustache(view.lookup("atts"));                                                    // 27
    })), "\n        ", Blaze.View(function() {                                                               // 28
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                   // 29
    }), "\n      "), "\n    " ];                                                                             // 30
  }), "\n  ");                                                                                               // 31
}));                                                                                                         // 32
                                                                                                             // 33
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 42
                                                                                                                   // 43
}).call(this);                                                                                                     // 44
                                                                                                                   // 45
                                                                                                                   // 46
                                                                                                                   // 47
                                                                                                                   // 48
                                                                                                                   // 49
                                                                                                                   // 50
(function () {                                                                                                     // 51
                                                                                                                   // 52
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 53
//                                                                                                           //    // 54
// packages/aldeed:autoform-bs-button-group-input/cb-buttons.js                                              //    // 55
//                                                                                                           //    // 56
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 57
                                                                                                             //    // 58
Template["afCheckboxGroup_buttonGroup"].helpers({                                                            // 1  // 59
  atts: function selectedAttsAdjust() {                                                                      // 2  // 60
    var atts = _.clone(this.atts);                                                                           // 3  // 61
    if (this.selected) {                                                                                     // 4  // 62
      atts.checked = "";                                                                                     // 5  // 63
    }                                                                                                        // 6  // 64
    // remove data-schema-key attribute because we put it                                                    // 7  // 65
    // on the entire group                                                                                   // 8  // 66
    delete atts["data-schema-key"];                                                                          // 9  // 67
    return atts;                                                                                             // 10
  },                                                                                                         // 11
  dsk: function dsk() {                                                                                      // 12
    return {                                                                                                 // 13
      "data-schema-key": this.atts["data-schema-key"]                                                        // 14
    }                                                                                                        // 15
  }                                                                                                          // 16
});                                                                                                          // 17
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 76
                                                                                                                   // 77
}).call(this);                                                                                                     // 78
                                                                                                                   // 79
                                                                                                                   // 80
                                                                                                                   // 81
                                                                                                                   // 82
                                                                                                                   // 83
                                                                                                                   // 84
(function () {                                                                                                     // 85
                                                                                                                   // 86
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 87
//                                                                                                           //    // 88
// packages/aldeed:autoform-bs-button-group-input/template.rad-buttons.js                                    //    // 89
//                                                                                                           //    // 90
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 91
                                                                                                             //    // 92
                                                                                                             // 1  // 93
Template.__checkName("afRadioGroup_buttonGroup");                                                            // 2  // 94
Template["afRadioGroup_buttonGroup"] = new Template("Template.afRadioGroup_buttonGroup", (function() {       // 3  // 95
  var view = this;                                                                                           // 4  // 96
  return HTML.DIV(HTML.Attrs({                                                                               // 5  // 97
    "class": "btn-group af-radio-group",                                                                     // 6  // 98
    "data-toggle": "buttons"                                                                                 // 7  // 99
  }, function() {                                                                                            // 8  // 100
    return Spacebars.attrMustache(view.lookup("dsk"));                                                       // 9  // 101
  }), "\n    ", Blaze.Each(function() {                                                                      // 10
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                         // 11
  }, function() {                                                                                            // 12
    return [ "\n      ", HTML.LABEL({                                                                        // 13
      "class": function() {                                                                                  // 14
        return [ "btn btn-default ", Blaze.If(function() {                                                   // 15
          return Spacebars.call(Spacebars.dot(view.lookup("."), "selected"));                                // 16
        }, function() {                                                                                      // 17
          return "active";                                                                                   // 18
        }) ];                                                                                                // 19
      }                                                                                                      // 20
    }, "\n        ", HTML.INPUT(HTML.Attrs({                                                                 // 21
      type: "radio",                                                                                         // 22
      value: function() {                                                                                    // 23
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                 // 24
      }                                                                                                      // 25
    }, function() {                                                                                          // 26
      return Spacebars.attrMustache(view.lookup("atts"));                                                    // 27
    })), "\n        ", Blaze.View(function() {                                                               // 28
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                   // 29
    }), "\n      "), "\n    " ];                                                                             // 30
  }), "\n  ");                                                                                               // 31
}));                                                                                                         // 32
                                                                                                             // 33
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 126
                                                                                                                   // 127
}).call(this);                                                                                                     // 128
                                                                                                                   // 129
                                                                                                                   // 130
                                                                                                                   // 131
                                                                                                                   // 132
                                                                                                                   // 133
                                                                                                                   // 134
(function () {                                                                                                     // 135
                                                                                                                   // 136
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 137
//                                                                                                           //    // 138
// packages/aldeed:autoform-bs-button-group-input/rad-buttons.js                                             //    // 139
//                                                                                                           //    // 140
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 141
                                                                                                             //    // 142
Template["afRadioGroup_buttonGroup"].helpers({                                                               // 1  // 143
  atts: function selectedAttsAdjust() {                                                                      // 2  // 144
    var atts = _.clone(this.atts);                                                                           // 3  // 145
    if (this.selected) {                                                                                     // 4  // 146
      atts.checked = "";                                                                                     // 5  // 147
    }                                                                                                        // 6  // 148
    // remove data-schema-key attribute because we put it                                                    // 7  // 149
    // on the entire group                                                                                   // 8  // 150
    delete atts["data-schema-key"];                                                                          // 9  // 151
    return atts;                                                                                             // 10
  },                                                                                                         // 11
  dsk: function dsk() {                                                                                      // 12
    return {                                                                                                 // 13
      "data-schema-key": this.atts["data-schema-key"]                                                        // 14
    }                                                                                                        // 15
  }                                                                                                          // 16
});                                                                                                          // 17
///////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 160
                                                                                                                   // 161
}).call(this);                                                                                                     // 162
                                                                                                                   // 163
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['aldeed:autoform-bs-button-group-input'] = {};

})();
