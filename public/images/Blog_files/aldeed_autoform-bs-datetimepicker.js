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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/aldeed_autoform-bs-datetimepicker/packages/aldeed_autoform-bs-datetimepicker.js                     //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
(function () {                                                                                                  // 1
                                                                                                                // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                       //     // 4
// packages/aldeed:autoform-bs-datetimepicker/template.autoform-bs-datetimepicker.js                     //     // 5
//                                                                                                       //     // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                         //     // 8
                                                                                                         // 1   // 9
Template.__checkName("afBootstrapDateTimePicker");                                                       // 2   // 10
Template["afBootstrapDateTimePicker"] = new Template("Template.afBootstrapDateTimePicker", (function() { // 3   // 11
  var view = this;                                                                                       // 4   // 12
  return HTML.INPUT(HTML.Attrs({                                                                         // 5   // 13
    type: "text",                                                                                        // 6   // 14
    value: ""                                                                                            // 7   // 15
  }, function() {                                                                                        // 8   // 16
    return Spacebars.attrMustache(view.lookup("atts"));                                                  // 9   // 17
  }));                                                                                                   // 10  // 18
}));                                                                                                     // 11  // 19
                                                                                                         // 12  // 20
///////////////////////////////////////////////////////////////////////////////////////////////////////////     // 21
                                                                                                                // 22
}).call(this);                                                                                                  // 23
                                                                                                                // 24
                                                                                                                // 25
                                                                                                                // 26
                                                                                                                // 27
                                                                                                                // 28
                                                                                                                // 29
(function () {                                                                                                  // 30
                                                                                                                // 31
///////////////////////////////////////////////////////////////////////////////////////////////////////////     // 32
//                                                                                                       //     // 33
// packages/aldeed:autoform-bs-datetimepicker/autoform-bs-datetimepicker.js                              //     // 34
//                                                                                                       //     // 35
///////////////////////////////////////////////////////////////////////////////////////////////////////////     // 36
                                                                                                         //     // 37
AutoForm.addInputType("bootstrap-datetimepicker", {                                                      // 1   // 38
  template: "afBootstrapDateTimePicker",                                                                 // 2   // 39
  valueIn: function (val, atts) {                                                                        // 3   // 40
    // datetimepicker expects the date to represent local time,                                          // 4   // 41
    // so we need to adjust it if there's a timezoneId specified                                         // 5   // 42
    var timezoneId = atts.timezoneId;                                                                    // 6   // 43
    if (typeof timezoneId === "string") {                                                                // 7   // 44
      if (typeof moment.tz !== "function") {                                                             // 8   // 45
        throw new Error("If you specify a timezoneId, make sure that you've added a moment-timezone package to your app");
      }                                                                                                  // 10  // 47
      if (val instanceof Date) {                                                                         // 11  // 48
        return moment(AutoForm.Utility.dateToNormalizedLocalDateAndTimeString(val, timezoneId), "YYYY-MM-DD[T]HH:mm:ss.SSS").toDate();
      }                                                                                                  // 13  // 50
    }                                                                                                    // 14  // 51
                                                                                                         // 15  // 52
    return val;                                                                                          // 16  // 53
  },                                                                                                     // 17  // 54
  valueOut: function () {                                                                                // 18  // 55
    var m = this.data("DateTimePicker").getDate();                                                       // 19  // 56
                                                                                                         // 20  // 57
    if (!m) {                                                                                            // 21  // 58
      return m;                                                                                          // 22  // 59
    }                                                                                                    // 23  // 60
                                                                                                         // 24  // 61
    var timezoneId = this.attr("data-timezone-id");                                                      // 25  // 62
    // default is local, but if there's a timezoneId, we use that                                        // 26  // 63
    if (typeof timezoneId === "string") {                                                                // 27  // 64
      if (typeof moment.tz !== "function") {                                                             // 28  // 65
        throw new Error("If you specify a timezoneId, make sure that you've added a moment-timezone package to your app");
      }                                                                                                  // 30  // 67
      m = moment.tz(AutoForm.Utility.dateToNormalizedLocalDateAndTimeString(m.toDate()), timezoneId);    // 31  // 68
    }                                                                                                    // 32  // 69
    return m.toDate();                                                                                   // 33  // 70
  },                                                                                                     // 34  // 71
  valueConverters: {                                                                                     // 35  // 72
    "string": function (val) {                                                                           // 36  // 73
      return (val instanceof Date) ? val.toString() : val;                                               // 37  // 74
    },                                                                                                   // 38  // 75
    "stringArray": function (val) {                                                                      // 39  // 76
      if (val instanceof Date) {                                                                         // 40  // 77
        return [val.toString()];                                                                         // 41  // 78
      }                                                                                                  // 42  // 79
      return val;                                                                                        // 43  // 80
    },                                                                                                   // 44  // 81
    "number": function (val) {                                                                           // 45  // 82
      return (val instanceof Date) ? val.getTime() : val;                                                // 46  // 83
    },                                                                                                   // 47  // 84
    "numberArray": function (val) {                                                                      // 48  // 85
      if (val instanceof Date) {                                                                         // 49  // 86
        return [val.getTime()];                                                                          // 50  // 87
      }                                                                                                  // 51  // 88
      return val;                                                                                        // 52  // 89
    },                                                                                                   // 53  // 90
    "dateArray": function (val) {                                                                        // 54  // 91
      if (val instanceof Date) {                                                                         // 55  // 92
        return [val];                                                                                    // 56  // 93
      }                                                                                                  // 57  // 94
      return val;                                                                                        // 58  // 95
    }                                                                                                    // 59  // 96
  },                                                                                                     // 60  // 97
  contextAdjust: function (context) {                                                                    // 61  // 98
    if (context.atts.timezoneId) {                                                                       // 62  // 99
      context.atts["data-timezone-id"] = context.atts.timezoneId;                                        // 63  // 100
    }                                                                                                    // 64  // 101
    delete context.atts.timezoneId;                                                                      // 65  // 102
    return context;                                                                                      // 66  // 103
  }                                                                                                      // 67  // 104
});                                                                                                      // 68  // 105
                                                                                                         // 69  // 106
Template.afBootstrapDateTimePicker.helpers({                                                             // 70  // 107
  atts: function addFormControlAtts() {                                                                  // 71  // 108
    var atts = _.clone(this.atts);                                                                       // 72  // 109
    // Add bootstrap class                                                                               // 73  // 110
    atts = AutoForm.Utility.addClass(atts, "form-control");                                              // 74  // 111
    delete atts.dateTimePickerOptions;                                                                   // 75  // 112
    return atts;                                                                                         // 76  // 113
  }                                                                                                      // 77  // 114
});                                                                                                      // 78  // 115
                                                                                                         // 79  // 116
Template.afBootstrapDateTimePicker.rendered = function () {                                              // 80  // 117
  var $input = this.$('input');                                                                          // 81  // 118
  var data = this.data;                                                                                  // 82  // 119
  var opts = data.atts.dateTimePickerOptions || {};                                                      // 83  // 120
                                                                                                         // 84  // 121
  // To be able to properly detect a cleared field, the defaultDate,                                     // 85  // 122
  // which is "" by default, must be null instead. Otherwise we get                                      // 86  // 123
  // the current datetime when we call getDate() on an empty field.                                      // 87  // 124
  if (!opts.defaultDate || opts.defaultDate === "") {                                                    // 88  // 125
    opts.defaultDate = null;                                                                             // 89  // 126
  }                                                                                                      // 90  // 127
                                                                                                         // 91  // 128
  // instanciate datetimepicker                                                                          // 92  // 129
  $input.datetimepicker(opts);                                                                           // 93  // 130
                                                                                                         // 94  // 131
  // set and reactively update values                                                                    // 95  // 132
  this.autorun(function () {                                                                             // 96  // 133
    var data = Template.currentData();                                                                   // 97  // 134
    var dtp = $input.data("DateTimePicker");                                                             // 98  // 135
                                                                                                         // 99  // 136
    // set field value                                                                                   // 100
    if (data.value instanceof Date) {                                                                    // 101
      dtp.setDate(data.value);                                                                           // 102
    } else {                                                                                             // 103
      dtp.setDate(); // clear                                                                            // 104
    }                                                                                                    // 105
                                                                                                         // 106
    // set start date if there's a min in the schema                                                     // 107
    if (data.min instanceof Date) {                                                                      // 108
      dtp.setMinDate(data.min);                                                                          // 109
    }                                                                                                    // 110
                                                                                                         // 111
    // set end date if there's a max in the schema                                                       // 112
    if (data.max instanceof Date) {                                                                      // 113
      dtp.setMaxDate(data.max);                                                                          // 114
    }                                                                                                    // 115
  });                                                                                                    // 116
                                                                                                         // 117
};                                                                                                       // 118
                                                                                                         // 119
Template.afBootstrapDateTimePicker.destroyed = function () {                                             // 120
  var dtp = this.$('input').data("DateTimePicker");                                                      // 121
  if (dtp) {                                                                                             // 122
    dtp.destroy();                                                                                       // 123
  }                                                                                                      // 124
};                                                                                                       // 125
                                                                                                         // 126
///////////////////////////////////////////////////////////////////////////////////////////////////////////     // 164
                                                                                                                // 165
}).call(this);                                                                                                  // 166
                                                                                                                // 167
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['aldeed:autoform-bs-datetimepicker'] = {};

})();
