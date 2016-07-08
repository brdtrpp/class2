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
var Spacebars = Package.spacebars.Spacebars;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var AutoForm = Package['aldeed:autoform'].AutoForm;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var WebApp = Package.webapp.WebApp;
var Log = Package.logging.Log;
var Tracker = Package.deps.Tracker;
var Deps = Package.deps.Deps;
var Session = Package.session.Session;
var DDP = Package['ddp-client'].DDP;
var Mongo = Package.mongo.Mongo;
var Template = Package.templating.Template;
var check = Package.check.check;
var Match = Package.check.Match;
var _ = Package.underscore._;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Random = Package.random.Random;
var EJSON = Package.ejson.EJSON;
var LaunchScreen = Package['launch-screen'].LaunchScreen;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var __coffeescriptShare;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/philip100_autoform-bs-country-field/lib/client/template.autoform-bs-countries-field.js       //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
                                                                                                         // 1
Template.__checkName("afBootstrapCountriesInput");                                                       // 2
Template["afBootstrapCountriesInput"] = new Template("Template.afBootstrapCountriesInput", (function() {
  var view = this;                                                                                       // 4
  return [ HTML.SELECT(HTML.Attrs(function() {                                                           // 5
    return Spacebars.attrMustache(view.lookup("atts"));                                                  // 6
  }), "\n		", Blaze.Each(function() {                                                                    // 7
    return Spacebars.call(view.lookup("countries"));                                                     // 8
  }, function() {                                                                                        // 9
    return [ "\n		", HTML.OPTION({                                                                       // 10
      value: function() {                                                                                // 11
        return Spacebars.mustache(view.lookup("name"));                                                  // 12
      }                                                                                                  // 13
    }, Blaze.View("lookup:name", function() {                                                            // 14
      return Spacebars.mustache(view.lookup("name"));                                                    // 15
    })), "\n		" ];                                                                                       // 16
  }), "\n	"), HTML.Raw('\n	<!-- <input type="text" value="0"/> -->') ];                                  // 17
}));                                                                                                     // 18
                                                                                                         // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/philip100_autoform-bs-country-field/lib/client/autoform-bs-countries-field.coffee.js         //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var Countries;                                                                                           // 1
                                                                                                         //
this.Countries = {};                                                                                     // 1
                                                                                                         //
Countries = [                                                                                            // 2
  {                                                                                                      //
    name: 'Afghanistan'                                                                                  //
  }, {                                                                                                   //
    name: 'Albania'                                                                                      //
  }, {                                                                                                   //
    name: 'Algeria'                                                                                      //
  }, {                                                                                                   //
    name: 'Andorra'                                                                                      //
  }, {                                                                                                   //
    name: 'Angola'                                                                                       //
  }, {                                                                                                   //
    name: 'Antigua and Barbuda'                                                                          //
  }, {                                                                                                   //
    name: 'Argentina'                                                                                    //
  }, {                                                                                                   //
    name: 'Armenia'                                                                                      //
  }, {                                                                                                   //
    name: 'Aruba'                                                                                        //
  }, {                                                                                                   //
    name: 'Australia'                                                                                    //
  }, {                                                                                                   //
    name: 'Austria'                                                                                      //
  }, {                                                                                                   //
    name: 'Azerbaijan'                                                                                   //
  }, {                                                                                                   //
    name: 'Bahamas, The'                                                                                 //
  }, {                                                                                                   //
    name: 'Bahrain'                                                                                      //
  }, {                                                                                                   //
    name: 'Bangladesh'                                                                                   //
  }, {                                                                                                   //
    name: 'Barbados'                                                                                     //
  }, {                                                                                                   //
    name: 'Belarus'                                                                                      //
  }, {                                                                                                   //
    name: 'Belgium'                                                                                      //
  }, {                                                                                                   //
    name: 'Belize'                                                                                       //
  }, {                                                                                                   //
    name: 'Benin'                                                                                        //
  }, {                                                                                                   //
    name: 'Bhutan'                                                                                       //
  }, {                                                                                                   //
    name: 'Bolivia'                                                                                      //
  }, {                                                                                                   //
    name: 'Bosnia and Herzegovina'                                                                       //
  }, {                                                                                                   //
    name: 'Botswana'                                                                                     //
  }, {                                                                                                   //
    name: 'Brazil'                                                                                       //
  }, {                                                                                                   //
    name: 'Brunei'                                                                                       //
  }, {                                                                                                   //
    name: 'Bulgaria'                                                                                     //
  }, {                                                                                                   //
    name: 'Burkina Faso'                                                                                 //
  }, {                                                                                                   //
    name: 'Burma'                                                                                        //
  }, {                                                                                                   //
    name: 'Burundi'                                                                                      //
  }, {                                                                                                   //
    name: 'Cambodia'                                                                                     //
  }, {                                                                                                   //
    name: 'Cameroon'                                                                                     //
  }, {                                                                                                   //
    name: 'Canada'                                                                                       //
  }, {                                                                                                   //
    name: 'Cape Verde'                                                                                   //
  }, {                                                                                                   //
    name: 'Central African Republic'                                                                     //
  }, {                                                                                                   //
    name: 'Chad'                                                                                         //
  }, {                                                                                                   //
    name: 'Chile'                                                                                        //
  }, {                                                                                                   //
    name: 'China'                                                                                        //
  }, {                                                                                                   //
    name: 'Colombia'                                                                                     //
  }, {                                                                                                   //
    name: 'Comoros'                                                                                      //
  }, {                                                                                                   //
    name: 'Congo, Democratic Republic of the'                                                            //
  }, {                                                                                                   //
    name: 'Congo, Republic of the'                                                                       //
  }, {                                                                                                   //
    name: 'Costa Rica'                                                                                   //
  }, {                                                                                                   //
    name: 'Cote d\'Ivoire'                                                                               //
  }, {                                                                                                   //
    name: 'Croatia'                                                                                      //
  }, {                                                                                                   //
    name: 'Cuba'                                                                                         //
  }, {                                                                                                   //
    name: 'Curacao'                                                                                      //
  }, {                                                                                                   //
    name: 'Cyprus'                                                                                       //
  }, {                                                                                                   //
    name: 'Czech Republic'                                                                               //
  }, {                                                                                                   //
    name: 'Denmark'                                                                                      //
  }, {                                                                                                   //
    name: 'Djibouti'                                                                                     //
  }, {                                                                                                   //
    name: 'Dominica'                                                                                     //
  }, {                                                                                                   //
    name: 'Dominican Republic'                                                                           //
  }, {                                                                                                   //
    name: 'East Timor (see Timor-Leste)'                                                                 //
  }, {                                                                                                   //
    name: 'Ecuador'                                                                                      //
  }, {                                                                                                   //
    name: 'Egypt'                                                                                        //
  }, {                                                                                                   //
    name: 'El Salvador'                                                                                  //
  }, {                                                                                                   //
    name: 'Equatorial Guinea'                                                                            //
  }, {                                                                                                   //
    name: 'Eritrea'                                                                                      //
  }, {                                                                                                   //
    name: 'Estonia'                                                                                      //
  }, {                                                                                                   //
    name: 'Ethiopia'                                                                                     //
  }, {                                                                                                   //
    name: 'Fiji'                                                                                         //
  }, {                                                                                                   //
    name: 'Finland'                                                                                      //
  }, {                                                                                                   //
    name: 'France'                                                                                       //
  }, {                                                                                                   //
    name: 'Gabon'                                                                                        //
  }, {                                                                                                   //
    name: 'Gambia, The'                                                                                  //
  }, {                                                                                                   //
    name: 'Georgia'                                                                                      //
  }, {                                                                                                   //
    name: 'Germany'                                                                                      //
  }, {                                                                                                   //
    name: 'Ghana'                                                                                        //
  }, {                                                                                                   //
    name: 'Greece'                                                                                       //
  }, {                                                                                                   //
    name: 'Grenada'                                                                                      //
  }, {                                                                                                   //
    name: 'Guatemala'                                                                                    //
  }, {                                                                                                   //
    name: 'Guinea'                                                                                       //
  }, {                                                                                                   //
    name: 'Guinea-Bissau'                                                                                //
  }, {                                                                                                   //
    name: 'Guyana'                                                                                       //
  }, {                                                                                                   //
    name: 'Haiti'                                                                                        //
  }, {                                                                                                   //
    name: 'Holy See'                                                                                     //
  }, {                                                                                                   //
    name: 'Honduras'                                                                                     //
  }, {                                                                                                   //
    name: 'Hong Kong'                                                                                    //
  }, {                                                                                                   //
    name: 'Hungary'                                                                                      //
  }, {                                                                                                   //
    name: 'Iceland'                                                                                      //
  }, {                                                                                                   //
    name: 'India'                                                                                        //
  }, {                                                                                                   //
    name: 'Indonesia'                                                                                    //
  }, {                                                                                                   //
    name: 'Iran'                                                                                         //
  }, {                                                                                                   //
    name: 'Iraq'                                                                                         //
  }, {                                                                                                   //
    name: 'Ireland'                                                                                      //
  }, {                                                                                                   //
    name: 'Israel'                                                                                       //
  }, {                                                                                                   //
    name: 'Italy'                                                                                        //
  }, {                                                                                                   //
    name: 'Jamaica'                                                                                      //
  }, {                                                                                                   //
    name: 'Japan'                                                                                        //
  }, {                                                                                                   //
    name: 'Jordan'                                                                                       //
  }, {                                                                                                   //
    name: 'Kazakhstan'                                                                                   //
  }, {                                                                                                   //
    name: 'Kenya'                                                                                        //
  }, {                                                                                                   //
    name: 'Kiribati'                                                                                     //
  }, {                                                                                                   //
    name: 'Korea, North'                                                                                 //
  }, {                                                                                                   //
    name: 'Korea, South'                                                                                 //
  }, {                                                                                                   //
    name: 'Kosovo'                                                                                       //
  }, {                                                                                                   //
    name: 'Kuwait'                                                                                       //
  }, {                                                                                                   //
    name: 'Kyrgyzstan'                                                                                   //
  }, {                                                                                                   //
    name: 'Laos'                                                                                         //
  }, {                                                                                                   //
    name: 'Latvia'                                                                                       //
  }, {                                                                                                   //
    name: 'Lebanon'                                                                                      //
  }, {                                                                                                   //
    name: 'Lesotho'                                                                                      //
  }, {                                                                                                   //
    name: 'Liberia'                                                                                      //
  }, {                                                                                                   //
    name: 'Libya'                                                                                        //
  }, {                                                                                                   //
    name: 'Liechtenstein'                                                                                //
  }, {                                                                                                   //
    name: 'Lithuania'                                                                                    //
  }, {                                                                                                   //
    name: 'Luxembourg'                                                                                   //
  }, {                                                                                                   //
    name: 'Macau'                                                                                        //
  }, {                                                                                                   //
    name: 'Macedonia'                                                                                    //
  }, {                                                                                                   //
    name: 'Madagascar'                                                                                   //
  }, {                                                                                                   //
    name: 'Malawi'                                                                                       //
  }, {                                                                                                   //
    name: 'Malaysia'                                                                                     //
  }, {                                                                                                   //
    name: 'Maldives'                                                                                     //
  }, {                                                                                                   //
    name: 'Mali'                                                                                         //
  }, {                                                                                                   //
    name: 'Malta'                                                                                        //
  }, {                                                                                                   //
    name: 'Marshall Islands'                                                                             //
  }, {                                                                                                   //
    name: 'Mauritania'                                                                                   //
  }, {                                                                                                   //
    name: 'Mauritius'                                                                                    //
  }, {                                                                                                   //
    name: 'Mexico'                                                                                       //
  }, {                                                                                                   //
    name: 'Micronesia'                                                                                   //
  }, {                                                                                                   //
    name: 'Moldova'                                                                                      //
  }, {                                                                                                   //
    name: 'Monaco'                                                                                       //
  }, {                                                                                                   //
    name: 'Mongolia'                                                                                     //
  }, {                                                                                                   //
    name: 'Montenegro'                                                                                   //
  }, {                                                                                                   //
    name: 'Morocco'                                                                                      //
  }, {                                                                                                   //
    name: 'Mozambique'                                                                                   //
  }, {                                                                                                   //
    name: 'Namibia'                                                                                      //
  }, {                                                                                                   //
    name: 'Nauru'                                                                                        //
  }, {                                                                                                   //
    name: 'Nepal'                                                                                        //
  }, {                                                                                                   //
    name: 'Netherlands'                                                                                  //
  }, {                                                                                                   //
    name: 'Netherlands Antilles'                                                                         //
  }, {                                                                                                   //
    name: 'New Zealand'                                                                                  //
  }, {                                                                                                   //
    name: 'Nicaragua'                                                                                    //
  }, {                                                                                                   //
    name: 'Niger'                                                                                        //
  }, {                                                                                                   //
    name: 'Nigeria'                                                                                      //
  }, {                                                                                                   //
    name: 'North Korea'                                                                                  //
  }, {                                                                                                   //
    name: 'Norway'                                                                                       //
  }, {                                                                                                   //
    name: 'Oman'                                                                                         //
  }, {                                                                                                   //
    name: 'Pakistan'                                                                                     //
  }, {                                                                                                   //
    name: 'Palau'                                                                                        //
  }, {                                                                                                   //
    name: 'Palestinian Territories'                                                                      //
  }, {                                                                                                   //
    name: 'Panama'                                                                                       //
  }, {                                                                                                   //
    name: 'Papua New Guinea'                                                                             //
  }, {                                                                                                   //
    name: 'Paraguay'                                                                                     //
  }, {                                                                                                   //
    name: 'Peru'                                                                                         //
  }, {                                                                                                   //
    name: 'Philippines'                                                                                  //
  }, {                                                                                                   //
    name: 'Poland'                                                                                       //
  }, {                                                                                                   //
    name: 'Portugal'                                                                                     //
  }, {                                                                                                   //
    name: 'Qatar'                                                                                        //
  }, {                                                                                                   //
    name: 'Romania'                                                                                      //
  }, {                                                                                                   //
    name: 'Russia'                                                                                       //
  }, {                                                                                                   //
    name: 'Rwanda'                                                                                       //
  }, {                                                                                                   //
    name: 'Saint Kitts and Nevis'                                                                        //
  }, {                                                                                                   //
    name: 'Saint Lucia'                                                                                  //
  }, {                                                                                                   //
    name: 'Saint Vincent and the Grenadines'                                                             //
  }, {                                                                                                   //
    name: 'Samoa '                                                                                       //
  }, {                                                                                                   //
    name: 'San Marino'                                                                                   //
  }, {                                                                                                   //
    name: 'Sao Tome and Principe'                                                                        //
  }, {                                                                                                   //
    name: 'Saudi Arabia'                                                                                 //
  }, {                                                                                                   //
    name: 'Senegal'                                                                                      //
  }, {                                                                                                   //
    name: 'Serbia'                                                                                       //
  }, {                                                                                                   //
    name: 'Seychelles'                                                                                   //
  }, {                                                                                                   //
    name: 'Sierra Leone'                                                                                 //
  }, {                                                                                                   //
    name: 'Singapore'                                                                                    //
  }, {                                                                                                   //
    name: 'Sint Maarten'                                                                                 //
  }, {                                                                                                   //
    name: 'Slovakia'                                                                                     //
  }, {                                                                                                   //
    name: 'Slovenia'                                                                                     //
  }, {                                                                                                   //
    name: 'Solomon Islands'                                                                              //
  }, {                                                                                                   //
    name: 'Somalia'                                                                                      //
  }, {                                                                                                   //
    name: 'South Africa'                                                                                 //
  }, {                                                                                                   //
    name: 'South Korea'                                                                                  //
  }, {                                                                                                   //
    name: 'South Sudan'                                                                                  //
  }, {                                                                                                   //
    name: 'Spain '                                                                                       //
  }, {                                                                                                   //
    name: 'Sri Lanka'                                                                                    //
  }, {                                                                                                   //
    name: 'Sudan'                                                                                        //
  }, {                                                                                                   //
    name: 'Suriname'                                                                                     //
  }, {                                                                                                   //
    name: 'Swaziland '                                                                                   //
  }, {                                                                                                   //
    name: 'Sweden'                                                                                       //
  }, {                                                                                                   //
    name: 'Switzerland'                                                                                  //
  }, {                                                                                                   //
    name: 'Syria'                                                                                        //
  }, {                                                                                                   //
    name: 'Taiwan'                                                                                       //
  }, {                                                                                                   //
    name: 'Tajikistan'                                                                                   //
  }, {                                                                                                   //
    name: 'Tanzania'                                                                                     //
  }, {                                                                                                   //
    name: 'Thailand '                                                                                    //
  }, {                                                                                                   //
    name: 'Timor-Leste'                                                                                  //
  }, {                                                                                                   //
    name: 'Togo'                                                                                         //
  }, {                                                                                                   //
    name: 'Tonga'                                                                                        //
  }, {                                                                                                   //
    name: 'Trinidad and Tobago'                                                                          //
  }, {                                                                                                   //
    name: 'Tunisia'                                                                                      //
  }, {                                                                                                   //
    name: 'Turkey'                                                                                       //
  }, {                                                                                                   //
    name: 'Turkmenistan'                                                                                 //
  }, {                                                                                                   //
    name: 'Tuvalu'                                                                                       //
  }, {                                                                                                   //
    name: 'Uganda'                                                                                       //
  }, {                                                                                                   //
    name: 'Ukraine'                                                                                      //
  }, {                                                                                                   //
    name: 'United Arab Emirates'                                                                         //
  }, {                                                                                                   //
    name: 'United Kingdom'                                                                               //
  }, {                                                                                                   //
    name: 'United States'                                                                                //
  }, {                                                                                                   //
    name: 'Uruguay'                                                                                      //
  }, {                                                                                                   //
    name: 'Uzbekistan'                                                                                   //
  }, {                                                                                                   //
    name: 'Vanuatu'                                                                                      //
  }, {                                                                                                   //
    name: 'Venezuela'                                                                                    //
  }, {                                                                                                   //
    name: 'Vietnam'                                                                                      //
  }, {                                                                                                   //
    name: 'Yemen'                                                                                        //
  }, {                                                                                                   //
    name: 'Zambia'                                                                                       //
  }, {                                                                                                   //
    name: 'Zimbabwe'                                                                                     //
  }                                                                                                      //
];                                                                                                       //
                                                                                                         //
UI.registerHelper('autoform-bs-countries', function() {                                                  // 211
  return Countries;                                                                                      // 212
});                                                                                                      // 211
                                                                                                         //
AutoForm.addInputType('bootstrap-countries-field', {                                                     // 214
  template: 'afBootstrapCountriesInput',                                                                 //
  valueOut: function() {                                                                                 //
    return this.val();                                                                                   //
  }                                                                                                      //
});                                                                                                      //
                                                                                                         //
Template.afBootstrapCountriesInput.helpers({                                                             // 220
  atts: function() {                                                                                     //
    var atts;                                                                                            // 222
    atts = _.clone(this.atts);                                                                           //
    atts = AutoForm.Utility.addClass(atts, 'form-control priceField');                                   //
    return atts;                                                                                         //
  },                                                                                                     //
  countries: function() {                                                                                //
    return Countries;                                                                                    //
  }                                                                                                      //
});                                                                                                      //
                                                                                                         //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['philip100:autoform-bs-country-field'] = {};

})();
