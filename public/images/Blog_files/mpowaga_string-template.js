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
var SpacebarsCompiler = Package['spacebars-compiler'].SpacebarsCompiler;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var StringTemplate;

(function(){

/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// packages/mpowaga_string-template/packages/mpowaga_string-template.js    //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
(function () {                                                             // 1
                                                                           // 2
///////////////////////////////////////////////////////////////////////    // 3
//                                                                   //    // 4
// packages/mpowaga:string-template/lib/client/string-template.js    //    // 5
//                                                                   //    // 6
///////////////////////////////////////////////////////////////////////    // 7
                                                                     //    // 8
StringTemplate = {};                                                 // 1  // 9
                                                                     // 2  // 10
StringTemplate.compile = function (str, data) {                      // 3  // 11
	var compiled = SpacebarsCompiler.compile(str);                      // 4  // 12
	var renderer = eval(compiled);                                      // 5  // 13
	var view = new Blaze.View(renderer);                                // 6  // 14
                                                                     // 7  // 15
	if (data) {                                                         // 8  // 16
		return Blaze.toHTMLWithData(view, data);                           // 9  // 17
	}                                                                   // 10
	return Blaze.toHTML(view);                                          // 11
};                                                                   // 12
                                                                     // 13
UI.registerHelper('compileString', function(options) {               // 14
	var result = null;                                                  // 15
	var source = '';                                                    // 16
	var data = this;                                                    // 17
                                                                     // 18
	if (typeof options == 'string') {                                   // 19
		source = options;                                                  // 20
	} else if (options && options.hash) {                               // 21
		if (typeof options.hash.str == 'string') {                         // 22
			source = options.hash.str;                                        // 23
		}                                                                  // 24
		if (options.hash.data) {                                           // 25
			data = options.hash.data;                                         // 26
		}                                                                  // 27
	}                                                                   // 28
                                                                     // 29
	return StringTemplate.compile(source, data);                        // 30
});                                                                  // 31
///////////////////////////////////////////////////////////////////////    // 40
                                                                           // 41
}).call(this);                                                             // 42
                                                                           // 43
/////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['mpowaga:string-template'] = {}, {
  StringTemplate: StringTemplate
});

})();
