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

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/aldeed_autoform-bs-datepicker/packages/aldeed_autoform-bs-datepicker.js                     //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
(function () {                                                                                          // 1
                                                                                                        // 2
///////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                               //     // 4
// packages/aldeed:autoform-bs-datepicker/template.autoform-bs-datepicker.js                     //     // 5
//                                                                                               //     // 6
///////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                 //     // 8
                                                                                                 // 1   // 9
Template.__checkName("afBootstrapDatepicker");                                                   // 2   // 10
Template["afBootstrapDatepicker"] = new Template("Template.afBootstrapDatepicker", (function() { // 3   // 11
  var view = this;                                                                               // 4   // 12
  return Blaze.If(function() {                                                                   // 5   // 13
    return Spacebars.call(Spacebars.dot(view.lookup("atts"), "buttonClasses"));                  // 6   // 14
  }, function() {                                                                                // 7   // 15
    return [ "\n    ", HTML.DIV({                                                                // 8   // 16
      "class": "input-group date"                                                                // 9   // 17
    }, "\n      ", HTML.INPUT(HTML.Attrs({                                                       // 10  // 18
      type: "text",                                                                              // 11  // 19
      value: ""                                                                                  // 12  // 20
    }, function() {                                                                              // 13  // 21
      return Spacebars.attrMustache(view.lookup("atts"));                                        // 14  // 22
    })), HTML.SPAN({                                                                             // 15  // 23
      "class": "input-group-addon"                                                               // 16  // 24
    }, HTML.I({                                                                                  // 17  // 25
      "class": function() {                                                                      // 18  // 26
        return Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "buttonClasses"));          // 19  // 27
      }                                                                                          // 20  // 28
    })), "\n    "), "\n  " ];                                                                    // 21  // 29
  }, function() {                                                                                // 22  // 30
    return [ "\n    ", HTML.INPUT(HTML.Attrs({                                                   // 23  // 31
      type: "text",                                                                              // 24  // 32
      value: ""                                                                                  // 25  // 33
    }, function() {                                                                              // 26  // 34
      return Spacebars.attrMustache(view.lookup("atts"));                                        // 27  // 35
    })), "\n  " ];                                                                               // 28  // 36
  });                                                                                            // 29  // 37
}));                                                                                             // 30  // 38
                                                                                                 // 31  // 39
///////////////////////////////////////////////////////////////////////////////////////////////////     // 40
                                                                                                        // 41
}).call(this);                                                                                          // 42
                                                                                                        // 43
                                                                                                        // 44
                                                                                                        // 45
                                                                                                        // 46
                                                                                                        // 47
                                                                                                        // 48
(function () {                                                                                          // 49
                                                                                                        // 50
///////////////////////////////////////////////////////////////////////////////////////////////////     // 51
//                                                                                               //     // 52
// packages/aldeed:autoform-bs-datepicker/autoform-bs-datepicker.js                              //     // 53
//                                                                                               //     // 54
///////////////////////////////////////////////////////////////////////////////////////////////////     // 55
                                                                                                 //     // 56
/* global AutoForm, $ */                                                                         // 1   // 57
                                                                                                 // 2   // 58
AutoForm.addInputType("bootstrap-datepicker", {                                                  // 3   // 59
  template: "afBootstrapDatepicker",                                                             // 4   // 60
  valueOut: function () {                                                                        // 5   // 61
    if (this.val()) {                                                                            // 6   // 62
      var val = this.datepicker('getUTCDate');                                                   // 7   // 63
      return (val instanceof Date) ? val : this.val();                                           // 8   // 64
    }                                                                                            // 9   // 65
  },                                                                                             // 10  // 66
  valueConverters: {                                                                             // 11  // 67
    "string": function (val) {                                                                   // 12  // 68
      return (val instanceof Date) ? AutoForm.Utility.dateToDateStringUTC(val) : val;            // 13  // 69
    },                                                                                           // 14  // 70
    "stringArray": function (val) {                                                              // 15  // 71
      if (val instanceof Date) {                                                                 // 16  // 72
        return [AutoForm.Utility.dateToDateStringUTC(val)];                                      // 17  // 73
      }                                                                                          // 18  // 74
      return val;                                                                                // 19  // 75
    },                                                                                           // 20  // 76
    "number": function (val) {                                                                   // 21  // 77
      return (val instanceof Date) ? val.getTime() : val;                                        // 22  // 78
    },                                                                                           // 23  // 79
    "numberArray": function (val) {                                                              // 24  // 80
      if (val instanceof Date) {                                                                 // 25  // 81
        return [val.getTime()];                                                                  // 26  // 82
      }                                                                                          // 27  // 83
      return val;                                                                                // 28  // 84
    },                                                                                           // 29  // 85
    "dateArray": function (val) {                                                                // 30  // 86
      if (val instanceof Date) {                                                                 // 31  // 87
        return [val];                                                                            // 32  // 88
      }                                                                                          // 33  // 89
      return val;                                                                                // 34  // 90
    }                                                                                            // 35  // 91
  }                                                                                              // 36  // 92
});                                                                                              // 37  // 93
                                                                                                 // 38  // 94
Template.afBootstrapDatepicker.helpers({                                                         // 39  // 95
  atts: function addFormControlAtts() {                                                          // 40  // 96
    var atts = _.clone(this.atts);                                                               // 41  // 97
    // Add bootstrap class                                                                       // 42  // 98
    atts = AutoForm.Utility.addClass(atts, "form-control");                                      // 43  // 99
    delete atts.datePickerOptions;                                                               // 44  // 100
    return atts;                                                                                 // 45  // 101
  }                                                                                              // 46  // 102
});                                                                                              // 47  // 103
                                                                                                 // 48  // 104
Template.afBootstrapDatepicker.rendered = function () {                                          // 49  // 105
  var $input = this.data.atts.buttonClasses ? this.$('.input-group.date') : this.$('input');     // 50  // 106
  var data = this.data;                                                                          // 51  // 107
                                                                                                 // 52  // 108
  // instanciate datepicker                                                                      // 53  // 109
  $input.datepicker(data.atts.datePickerOptions);                                                // 54  // 110
                                                                                                 // 55  // 111
  // set and reactively update values                                                            // 56  // 112
  this.autorun(function () {                                                                     // 57  // 113
    var data = Template.currentData();                                                           // 58  // 114
                                                                                                 // 59  // 115
    // set field value                                                                           // 60  // 116
    if (data.value instanceof Date) {                                                            // 61  // 117
      $input.datepicker('setUTCDate', data.value);                                               // 62  // 118
    } else if (typeof data.value === "string") {                                                 // 63  // 119
      $input.datepicker('update', data.value);                                                   // 64  // 120
    }                                                                                            // 65  // 121
                                                                                                 // 66  // 122
    // set start date if there's a min in the schema                                             // 67  // 123
    if (data.min instanceof Date) {                                                              // 68  // 124
      // datepicker plugin expects local Date object,                                            // 69  // 125
      // so convert UTC Date object to local                                                     // 70  // 126
      var startDate = utcToLocal(data.min);                                                      // 71  // 127
      $input.datepicker('setStartDate', startDate);                                              // 72  // 128
    }                                                                                            // 73  // 129
                                                                                                 // 74  // 130
    // set end date if there's a max in the schema                                               // 75  // 131
    if (data.max instanceof Date) {                                                              // 76  // 132
      // datepicker plugin expects local Date object,                                            // 77  // 133
      // so convert UTC Date object to local                                                     // 78  // 134
      var endDate = utcToLocal(data.max);                                                        // 79  // 135
      $input.datepicker('setEndDate', endDate);                                                  // 80  // 136
    }                                                                                            // 81  // 137
  });                                                                                            // 82  // 138
};                                                                                               // 83  // 139
                                                                                                 // 84  // 140
Template.afBootstrapDatepicker.destroyed = function () {                                         // 85  // 141
  var $input = this.data.atts.buttonClasses ? this.$('.input-group.date') : this.$('input');     // 86  // 142
  $input.datepicker('remove');                                                                   // 87  // 143
};                                                                                               // 88  // 144
                                                                                                 // 89  // 145
function utcToLocal(utcDate) {                                                                   // 90  // 146
  var localDateObj = new Date();                                                                 // 91  // 147
  localDateObj.setDate(utcDate.getUTCDate());                                                    // 92  // 148
  localDateObj.setMonth(utcDate.getUTCMonth());                                                  // 93  // 149
  localDateObj.setFullYear(utcDate.getUTCFullYear());                                            // 94  // 150
  localDateObj.setHours(0);                                                                      // 95  // 151
  localDateObj.setMinutes(0);                                                                    // 96  // 152
  localDateObj.setSeconds(0);                                                                    // 97  // 153
  localDateObj.setMilliseconds(0);                                                               // 98  // 154
  return localDateObj;                                                                           // 99  // 155
}                                                                                                // 100
                                                                                                 // 101
///////////////////////////////////////////////////////////////////////////////////////////////////     // 158
                                                                                                        // 159
}).call(this);                                                                                          // 160
                                                                                                        // 161
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['aldeed:autoform-bs-datepicker'] = {};

})();
