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

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// packages/aldeed_autoform-select2/packages/aldeed_autoform-select2.js                   //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
(function () {                                                                            // 1
                                                                                          // 2
/////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                 //     // 4
// packages/aldeed:autoform-select2/template.autoform-select2.js                   //     // 5
//                                                                                 //     // 6
/////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                   //     // 8
                                                                                   // 1   // 9
Template.__checkName("afSelect2");                                                 // 2   // 10
Template["afSelect2"] = new Template("Template.afSelect2", (function() {           // 3   // 11
  var view = this;                                                                 // 4   // 12
  return HTML.SELECT(HTML.Attrs(function() {                                       // 5   // 13
    return Spacebars.attrMustache(view.lookup("atts"));                            // 6   // 14
  }), "\n    ", Blaze.Each(function() {                                            // 7   // 15
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));               // 8   // 16
  }, function() {                                                                  // 9   // 17
    return [ "\n      ", Blaze.If(function() {                                     // 10  // 18
      return Spacebars.call(Spacebars.dot(view.lookup("."), "optgroup"));          // 11  // 19
    }, function() {                                                                // 12  // 20
      return [ "\n        ", HTML.OPTGROUP({                                       // 13  // 21
        label: function() {                                                        // 14  // 22
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "optgroup"));  // 15  // 23
        }                                                                          // 16  // 24
      }, "\n        ", Blaze.Each(function() {                                     // 17  // 25
        return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));           // 18  // 26
      }, function() {                                                              // 19  // 27
        return [ "\n        ", HTML.OPTION(HTML.Attrs(function() {                 // 20  // 28
          return Spacebars.attrMustache(view.lookup("afSelectOptionAtts"));        // 21  // 29
        }), Blaze.View("lookup:..label", function() {                              // 22  // 30
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));     // 23  // 31
        })), "\n        " ];                                                       // 24  // 32
      }), "\n        "), "\n      " ];                                             // 25  // 33
    }, function() {                                                                // 26  // 34
      return [ "\n        ", HTML.OPTION(HTML.Attrs(function() {                   // 27  // 35
        return Spacebars.attrMustache(view.lookup("afSelectOptionAtts"));          // 28  // 36
      }), Blaze.View("lookup:..label", function() {                                // 29  // 37
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));       // 30  // 38
      })), "\n      " ];                                                           // 31  // 39
    }), "\n    " ];                                                                // 32  // 40
  }), "\n  ");                                                                     // 33  // 41
}));                                                                               // 34  // 42
                                                                                   // 35  // 43
/////////////////////////////////////////////////////////////////////////////////////     // 44
                                                                                          // 45
}).call(this);                                                                            // 46
                                                                                          // 47
                                                                                          // 48
                                                                                          // 49
                                                                                          // 50
                                                                                          // 51
                                                                                          // 52
(function () {                                                                            // 53
                                                                                          // 54
/////////////////////////////////////////////////////////////////////////////////////     // 55
//                                                                                 //     // 56
// packages/aldeed:autoform-select2/autoform-select2.js                            //     // 57
//                                                                                 //     // 58
/////////////////////////////////////////////////////////////////////////////////////     // 59
                                                                                   //     // 60
/* global AutoForm, _, $, Template */                                              // 1   // 61
                                                                                   // 2   // 62
AutoForm.addInputType("select2", {                                                 // 3   // 63
  template: "afSelect2",                                                           // 4   // 64
  valueConverters: {                                                               // 5   // 65
    "stringArray": function (val) {                                                // 6   // 66
      if (_.isArray(val)) {                                                        // 7   // 67
        return _.map(val, function (item) {                                        // 8   // 68
          return $.trim(item);                                                     // 9   // 69
        });                                                                        // 10  // 70
      }                                                                            // 11  // 71
      return val;                                                                  // 12  // 72
    },                                                                             // 13  // 73
    "number": AutoForm.Utility.stringToNumber,                                     // 14  // 74
    "numberArray": function (val) {                                                // 15  // 75
      if (_.isArray(val)) {                                                        // 16  // 76
        return _.map(val, function (item) {                                        // 17  // 77
          item = $.trim(item);                                                     // 18  // 78
          return AutoForm.Utility.stringToNumber(item);                            // 19  // 79
        });                                                                        // 20  // 80
      }                                                                            // 21  // 81
      return val;                                                                  // 22  // 82
    },                                                                             // 23  // 83
    "boolean": AutoForm.Utility.stringToBool,                                      // 24  // 84
    "booleanArray": function (val) {                                               // 25  // 85
      if (_.isArray(val)) {                                                        // 26  // 86
        return _.map(val, function (item) {                                        // 27  // 87
          item = $.trim(item);                                                     // 28  // 88
          return AutoForm.Utility.stringToBool(item);                              // 29  // 89
        });                                                                        // 30  // 90
      }                                                                            // 31  // 91
      return val;                                                                  // 32  // 92
    },                                                                             // 33  // 93
    "date": AutoForm.Utility.stringToDate,                                         // 34  // 94
    "dateArray": function (val) {                                                  // 35  // 95
      if (_.isArray(val)) {                                                        // 36  // 96
        return _.map(val, function (item) {                                        // 37  // 97
          item = $.trim(item);                                                     // 38  // 98
          return AutoForm.Utility.stringToDate(item);                              // 39  // 99
        });                                                                        // 40  // 100
      }                                                                            // 41  // 101
      return val;                                                                  // 42  // 102
    }                                                                              // 43  // 103
  },                                                                               // 44  // 104
  contextAdjust: function (context) {                                              // 45  // 105
    var itemAtts = _.omit(context.atts, 'firstOption');                            // 46  // 106
                                                                                   // 47  // 107
    // NOTE: We don't add firstOption to select2 input because                     // 48  // 108
    // it doesn't make sense with the way select2 works.                           // 49  // 109
                                                                                   // 50  // 110
    // build items list                                                            // 51  // 111
    context.items = [];                                                            // 52  // 112
                                                                                   // 53  // 113
    // Check if option is selected                                                 // 54  // 114
    var isSelected = function(conVal, optVal) {                                    // 55  // 115
      return _.isArray(conVal) ? _.contains(conVal, optVal) : optVal === conVal;   // 56  // 116
    };                                                                             // 57  // 117
                                                                                   // 58  // 118
    // Add all defined options                                                     // 59  // 119
    _.each(context.selectOptions, function(opt) {                                  // 60  // 120
      if (opt.optgroup) {                                                          // 61  // 121
        var subItems = _.map(opt.options, function(subOpt) {                       // 62  // 122
          return {                                                                 // 63  // 123
            name: context.name,                                                    // 64  // 124
            label: subOpt.label,                                                   // 65  // 125
            value: subOpt.value,                                                   // 66  // 126
            // _id must be included because it is a special property that          // 67  // 127
            // #each uses to track unique list items when adding and removing them // 68  // 128
            // See https://github.com/meteor/meteor/issues/2174                    // 69  // 129
            _id: subOpt.value,                                                     // 70  // 130
            selected: isSelected(context.value, subOpt.value),                     // 71  // 131
            atts: itemAtts                                                         // 72  // 132
          };                                                                       // 73  // 133
        });                                                                        // 74  // 134
        context.items.push({                                                       // 75  // 135
          optgroup: opt.optgroup,                                                  // 76  // 136
          items: subItems                                                          // 77  // 137
        });                                                                        // 78  // 138
      } else {                                                                     // 79  // 139
        context.items.push({                                                       // 80  // 140
          name: context.name,                                                      // 81  // 141
          label: opt.label,                                                        // 82  // 142
          value: opt.value,                                                        // 83  // 143
          // _id must be included because it is a special property that            // 84  // 144
          // #each uses to track unique list items when adding and removing them   // 85  // 145
          // See https://github.com/meteor/meteor/issues/2174                      // 86  // 146
          _id: opt.value,                                                          // 87  // 147
          selected: isSelected(context.value, opt.value),                          // 88  // 148
          atts: itemAtts                                                           // 89  // 149
        });                                                                        // 90  // 150
      }                                                                            // 91  // 151
    });                                                                            // 92  // 152
                                                                                   // 93  // 153
    return context;                                                                // 94  // 154
  }                                                                                // 95  // 155
});                                                                                // 96  // 156
                                                                                   // 97  // 157
Template.afSelect2.helpers({                                                       // 98  // 158
  atts: function addFormControlAtts() {                                            // 99  // 159
    return _.omit(this.atts, 'select2Options');                                    // 100
  }                                                                                // 101
});                                                                                // 102
                                                                                   // 103
Template.afSelect2.events({                                                        // 104
  'select2:select select': function (event, template) {                            // 105
    // When select2 selection changes, we update the `selected` attr               // 106
    // on the real select element. This persists better when the DOM               // 107
    // changes, allowing us to retain selection properly by using this             // 108
    // in the template autorun.                                                    // 109
    // Fixes #18                                                                   // 110
    var val = template.$('select').val();                                          // 111
    if (!_.isArray(val)) { val = [val]; }                                          // 112
    template.$('select option').each(function () {                                 // 113
      var $this = $(this);                                                         // 114
      var selected = val.indexOf($this.attr('value')) !== -1;                      // 115
      $this.prop('selected', selected).attr('selected', selected);                 // 116
    });                                                                            // 117
  }                                                                                // 118
});                                                                                // 119
                                                                                   // 120
Template.afSelect2.rendered = function () {                                        // 121
  var template = this;                                                             // 122
  var $s = template.$('select');                                                   // 123
                                                                                   // 124
  // instanciate select2                                                           // 125
  $s.select2(template.data.atts.select2Options || {});                             // 126
                                                                                   // 127
  template.autorun(function () {                                                   // 128
    var data = Template.currentData();                                             // 129
                                                                                   // 130
    var values = [];                                                               // 131
    _.each(data.items, function (item) {                                           // 132
      if (_.has(item, 'items')) {                                                  // 133
        _.each(item.items, function (subItem) {                                    // 134
          if (subItem.selected) {                                                  // 135
            values.push(subItem.value);                                            // 136
          }                                                                        // 137
        });                                                                        // 138
      } else {                                                                     // 139
        if (item.selected) {                                                       // 140
          values.push(item.value);                                                 // 141
        }                                                                          // 142
      }                                                                            // 143
    });                                                                            // 144
                                                                                   // 145
    var $selects;                                                                  // 146
    if (values.length === 0) {                                                     // 147
      $selects = template.$('select option');                                      // 148
    } else {                                                                       // 149
      // Include any that were previously added as new tags                        // 150
      $selects = template.$('select option[data-select2-tag]');                    // 151
    }                                                                              // 152
                                                                                   // 153
    $selects.each(function () {                                                    // 154
      var $this = $(this);                                                         // 155
      if ($this.attr('selected')) {                                                // 156
        values.push($this.attr('value'));                                          // 157
      }                                                                            // 158
    });                                                                            // 159
                                                                                   // 160
    var currentValues = $s.val();                                                  // 161
    if ((!currentValues && values.length > 0) ||                                   // 162
        (currentValues && currentValues.toString() !== values.toString())) {       // 163
      // select2 requires that we trigger change event                             // 164
      // for it to realize it needs to update the select2 list.                    // 165
      // We do it only if values have actually changed,                            // 166
      // which should help prevent autosave infinite looping.                      // 167
      $s.val(values).trigger('change');                                            // 168
    }                                                                              // 169
  });                                                                              // 170
};                                                                                 // 171
                                                                                   // 172
Template.afSelect2.destroyed = function () {                                       // 173
  try {                                                                            // 174
    if (this.view && this.view._domrange) {                                        // 175
      this.$('select').select2('destroy');                                         // 176
    }                                                                              // 177
  } catch (error) {}                                                               // 178
};                                                                                 // 179
                                                                                   // 180
/*                                                                                 // 181
 *  BOOTSTRAP THEME                                                                // 182
 */                                                                                // 183
                                                                                   // 184
Template.afSelect2.copyAs('afSelect2_bootstrap3');                                 // 185
                                                                                   // 186
// The only difference is that we need to add "form-control" class                 // 187
Template.afSelect2_bootstrap3.helpers({                                            // 188
  atts: function addFormControlAtts() {                                            // 189
    var atts = _.omit(this.atts, 'select2Options');                                // 190
    // Add bootstrap class                                                         // 191
    atts = AutoForm.Utility.addClass(atts, "form-control");                        // 192
    return atts;                                                                   // 193
  }                                                                                // 194
});                                                                                // 195
                                                                                   // 196
/////////////////////////////////////////////////////////////////////////////////////     // 257
                                                                                          // 258
}).call(this);                                                                            // 259
                                                                                          // 260
////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['aldeed:autoform-select2'] = {};

})();
