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
var _ = Package.underscore._;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var AutoForm = Package['aldeed:autoform'].AutoForm;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var HTML = Package.htmljs.HTML;

(function(){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// packages/mpowaga_autoform-summernote/lib/client/template.templates.js       //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
                                                                               // 1
Template.__checkName("afSummernote");                                          // 2
Template["afSummernote"] = new Template("Template.afSummernote", (function() {
  var view = this;                                                             // 4
  return HTML.DIV(HTML.Attrs(function() {                                      // 5
    return Spacebars.attrMustache(view.lookup("atts"));                        // 6
  }));                                                                         // 7
}));                                                                           // 8
                                                                               // 9
/////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// packages/mpowaga_autoform-summernote/lib/client/templates.js                //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
Template.afSummernote.created = function () {                                  // 1
  this.value = new ReactiveVar(this.data.value);                               // 2
};                                                                             // 3
                                                                               // 4
Template.afSummernote.rendered = function() {                                  // 5
  var self = this;                                                             // 6
  var options = this.data.atts.settings || {};                                 // 7
  var $editor = $(this.firstNode);                                             // 8
                                                                               // 9
  var onblur = options.onblur;                                                 // 10
  options.onblur = function(e) {                                               // 11
    $editor.change();                                                          // 12
    if (typeof onblur === 'function') {                                        // 13
      onblur.apply(this, arguments);                                           // 14
    }                                                                          // 15
  };                                                                           // 16
                                                                               // 17
  $editor.summernote(options);                                                 // 18
                                                                               // 19
  this.autorun(function () {                                                   // 20
    $editor.summernote('code', self.value.get());                              // 21
  });                                                                          // 22
                                                                               // 23
  $editor.closest('form').on('reset', function() {                             // 24
    $editor.summernote('code', '');                                            // 25
  });                                                                          // 26
};                                                                             // 27
                                                                               // 28
Template.afSummernote.helpers({                                                // 29
  atts: function () {                                                          // 30
    var self = this;                                                           // 31
                                                                               // 32
    /**                                                                        // 33
     * This is bit hacky but created and rendered callback sometimes           // 34
     * (or always?) get empty value. This helper gets called multiple          // 35
     * times so we intercept and save the value once it is not empty.          // 36
     */                                                                        // 37
    Tracker.nonreactive(function () {                                          // 38
      var t = Template.instance();                                             // 39
      if (t.value.get() !== self.value) {                                      // 40
        t.value.set(self.value);                                               // 41
      }                                                                        // 42
    });                                                                        // 43
                                                                               // 44
    return _.omit(this.atts, 'settings');                                      // 45
  }                                                                            // 46
});                                                                            // 47
/////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// packages/mpowaga_autoform-summernote/lib/client/autoform-summernote.js      //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
AutoForm.addInputType('summernote', {                                          // 1
	template: 'afSummernote',                                                     // 2
	valueOut: function() {                                                        // 3
		return this.summernote('code');                                              // 4
	}                                                                             // 5
});                                                                            // 6
                                                                               // 7
/////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['mpowaga:autoform-summernote'] = {};

})();
