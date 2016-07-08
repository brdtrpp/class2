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
var AutoForm = Package['aldeed:autoform'].AutoForm;
var _ = Package.underscore._;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

(function(){

/////////////////////////////////////////////////////////////////////////////////////
//                                                                                 //
// packages/drewy_autoform-datetimepicker/template.autoform-datetimepicker.js      //
//                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////
                                                                                   //
                                                                                   // 1
Template.__checkName("datetimepicker");                                            // 2
Template["datetimepicker"] = new Template("Template.datetimepicker", (function() {
  var view = this;                                                                 // 4
  return HTML.INPUT(HTML.Attrs({                                                   // 5
    type: "text",                                                                  // 6
    value: function() {                                                            // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));         // 8
    }                                                                              // 9
  }, function() {                                                                  // 10
    return Spacebars.attrMustache(view.lookup("atts"));                            // 11
  }));                                                                             // 12
}));                                                                               // 13
                                                                                   // 14
/////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////
//                                                                                 //
// packages/drewy_autoform-datetimepicker/autoform-datetimepicker.js               //
//                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////
                                                                                   //
Template.datetimepicker.onRendered(function() {                                    // 1
  $(this.firstNode).datetimepicker(this.data.atts.opts);                           // 2
});                                                                                // 3
                                                                                   // 4
Template.datetimepicker.helpers({                                                  // 5
  atts: function () {                                                              // 6
    var atts = _.omit(this.atts, 'opts');                                          // 7
    return atts;                                                                   // 8
  }                                                                                // 9
});                                                                                // 10
                                                                                   // 11
AutoForm.addInputType("datetimepicker", {                                          // 12
  template: "datetimepicker",                                                      // 13
  valueOut: function () {                                                          // 14
    return this.val();                                                             // 15
  }                                                                                // 16
});                                                                                // 17
                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['drewy:autoform-datetimepicker'] = {};

})();
