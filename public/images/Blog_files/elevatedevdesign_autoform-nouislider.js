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

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/elevatedevdesign_autoform-nouislider/template.autoform-nouislider.js         //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
                                                                                         // 1
Template.__checkName("afNoUiSlider");                                                    // 2
Template["afNoUiSlider"] = new Template("Template.afNoUiSlider", (function() {           // 3
  var view = this;                                                                       // 4
  return HTML.DIV(HTML.Attrs(function() {                                                // 5
    return Spacebars.attrMustache(view.lookup("atts"));                                  // 6
  }), "\n    ", Blaze.If(function() {                                                    // 7
    return Spacebars.call(Spacebars.dot(view.lookup("atts"), "doLabels"));               // 8
  }, function() {                                                                        // 9
    return [ "\n      ", HTML.DIV({                                                      // 10
      "class": "nouislider-container"                                                    // 11
    }, "\n        ", HTML.SPAN({                                                         // 12
      "class": "nouislider-label"                                                        // 13
    }, Blaze.View("lookup:atts.labelLeft", function() {                                  // 14
      return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "labelLeft"));        // 15
    })), "\n        ", HTML.DIV({                                                        // 16
      "class": "nouislider"                                                              // 17
    }), "\n        ", HTML.SPAN({                                                        // 18
      "class": "nouislider-label"                                                        // 19
    }, Blaze.View("lookup:atts.labelRight", function() {                                 // 20
      return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "labelRight"));       // 21
    })), "\n      "), "\n    " ];                                                        // 22
  }, function() {                                                                        // 23
    return [ "\n      ", HTML.DIV({                                                      // 24
      "class": "nouislider"                                                              // 25
    }), "\n    " ];                                                                      // 26
  }), "\n  ");                                                                           // 27
}));                                                                                     // 28
                                                                                         // 29
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/elevatedevdesign_autoform-nouislider/autoform-nouislider.js                  //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
/* global AutoForm, _, Template */                                                       // 1
                                                                                         // 2
AutoForm.addInputType("noUiSlider", {                                                    // 3
  template: "afNoUiSlider",                                                              // 4
  valueOut: function(){                                                                  // 5
    var slider = this.find('.nouislider');                                               // 6
    if( !slider.data('changed') ){ return; }                                             // 7
                                                                                         // 8
    if( this.attr("data-type") === "Object" ){                                           // 9
      var first = parseInt(slider.val()[0]);                                             // 10
      var second = parseInt(slider.val()[1]);                                            // 11
      var value = {                                                                      // 12
        lower: first > second ? second : first,                                          // 13
        upper: first > second ? first : second                                           // 14
      };                                                                                 // 15
      return value;                                                                      // 16
    }else{                                                                               // 17
      return slider.val();                                                               // 18
    }                                                                                    // 19
  }                                                                                      // 20
});                                                                                      // 21
                                                                                         // 22
Template.afNoUiSlider.helpers({                                                          // 23
  atts: function () {                                                                    // 24
    var data = Template.currentData(); // get data reactively                            // 25
    var atts = data.atts;                                                                // 26
    atts["data-type"] = data.schemaType.name;                                            // 27
    if( atts["class"] ){                                                                 // 28
      atts["class"] += " at-nouislider";                                                 // 29
    }else{                                                                               // 30
      atts["class"] = "at-nouislider";                                                   // 31
    }                                                                                    // 32
                                                                                         // 33
    atts.doLabels = ( atts.labelLeft || atts.labelRight );                               // 34
                                                                                         // 35
    return _.omit(atts, 'noUiSliderOptions', 'noUiSlider_pipsOptions');                  // 36
  }                                                                                      // 37
});                                                                                      // 38
                                                                                         // 39
var calculateOptions = function(data){                                                   // 40
  var schemaMinMax = _.pick(data, 'max', 'min');                                         // 41
  var autoformOptions = _.pick(data.atts || {}, 'max', 'min', 'step', 'start', 'range');
  var noUiSliderOptions = (data.atts || {}).noUiSliderOptions;                           // 43
                                                                                         // 44
  var options = _.extend({}, schemaMinMax, autoformOptions, noUiSliderOptions);          // 45
                                                                                         // 46
  // Adjust data initalization based on schema type                                      // 47
  if( options.start === undefined ){                                                     // 48
    if( data.schemaType.name === "Object" ){                                             // 49
      if( data.value && data.value.lower ){                                              // 50
        options.start = [                                                                // 51
          data.value.lower,                                                              // 52
          data.value.upper                                                               // 53
        ];                                                                               // 54
      }else{                                                                             // 55
        options.start = [                                                                // 56
          typeof data.min === "number" ? data.min : 0,                                   // 57
          typeof data.max === "number" ? data.max : 100                                  // 58
        ];                                                                               // 59
      }                                                                                  // 60
      options.connect = true;                                                            // 61
    }else{                                                                               // 62
      options.start = data.value || 0;                                                   // 63
    }                                                                                    // 64
  } else {                                                                               // 65
    options.start = JSON.parse(options.start);                                           // 66
  }                                                                                      // 67
                                                                                         // 68
  if( options.range === undefined ){                                                     // 69
    options.range = {                                                                    // 70
      min: typeof options.min === "number" ? options.min : 0,                            // 71
      max: typeof options.max === "number" ? options.max : 100                           // 72
    };                                                                                   // 73
  } else {                                                                               // 74
    options.range = JSON.parse(options.range);                                           // 75
  }                                                                                      // 76
  delete options.min;                                                                    // 77
  delete options.max;                                                                    // 78
                                                                                         // 79
  // default step to 1 if not otherwise defined                                          // 80
  if( options.step === undefined ){                                                      // 81
    options.step = 1;                                                                    // 82
  }                                                                                      // 83
                                                                                         // 84
  return options;                                                                        // 85
};                                                                                       // 86
                                                                                         // 87
Template.afNoUiSlider.rendered = function () {                                           // 88
  var template = this;                                                                   // 89
  var $s = template.$('.nouislider');                                                    // 90
                                                                                         // 91
  var setup = function(c){                                                               // 92
    var data = Template.currentData(); // get data reactively                            // 93
    var options = calculateOptions( data );                                              // 94
    $s.noUiSlider(options, true);                                                        // 95
                                                                                         // 96
    if (c.firstRun) {                                                                    // 97
      $s.on('slide', function(){                                                         // 98
        // This is a trick to fool some logic in AutoForm that makes                     // 99
        // sure values have actually changed on whichever element                        // 100
        // emits a change event. Eventually AutoForm will give                           // 101
        // input types the control of indicating exactly when                            // 102
        // their value changes rather than relying on the change event                   // 103
        $s.parent()[0].value = JSON.stringify($s.val());                                 // 104
        $s.parent().change();                                                            // 105
        $s.data('changed','true');                                                       // 106
      });                                                                                // 107
    }                                                                                    // 108
                                                                                         // 109
    if( data.atts.noUiSlider_pipsOptions ){                                              // 110
      $s.noUiSlider_pips(                                                                // 111
        data.atts.noUiSlider_pipsOptions                                                 // 112
      );                                                                                 // 113
    }                                                                                    // 114
  };                                                                                     // 115
                                                                                         // 116
  template.autorun( setup );                                                             // 117
};                                                                                       // 118
                                                                                         // 119
/*                                                                                       // 120
 *  BOOTSTRAP THEME                                                                      // 121
 */                                                                                      // 122
                                                                                         // 123
Template.afNoUiSlider.copyAs('afNoUiSlider_bootstrap3');                                 // 124
                                                                                         // 125
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['elevatedevdesign:autoform-nouislider'] = {};

})();
