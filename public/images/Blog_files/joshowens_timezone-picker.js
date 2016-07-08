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
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Template = Package.templating.Template;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var _ = Package.underscore._;
var moment = Package['mrt:moment'].moment;
var HTML = Package.htmljs.HTML;
var Spacebars = Package.spacebars.Spacebars;

/* Package-scope variables */
var TimezonePicker;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/joshowens_timezone-picker/packages/joshowens_timezone-picker.js                                    //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
(function () {                                                                                                 // 1
                                                                                                               // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                      //     // 4
// packages/joshowens:timezone-picker/mapping.js                                                        //     // 5
//                                                                                                      //     // 6
//////////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                        //     // 8
TimezonePicker;                                                                                         // 1   // 9
                                                                                                        // 2   // 10
TimezonePicker = {                                                                                      // 3   // 11
  detectedZone: function() {                                                                            // 4   // 12
    var tz = jstz.determine();                                                                          // 5   // 13
    return tz.name();                                                                                   // 6   // 14
  },                                                                                                    // 7   // 15
  mapping: function() {                                                                                 // 8   // 16
    return _.map(moment.tz.names(), function(name) {                                                    // 9   // 17
      var prettyName = name.replace("_", " ");                                                          // 10  // 18
      var offset = moment.tz(name)._offset / 60 * -1;                                                   // 11  // 19
                                                                                                        // 12  // 20
      var sign = offset < 0 ? "-" : "";                                                                 // 13  // 21
      var min = Math.floor(Math.abs(offset));                                                           // 14  // 22
      var sec = Math.floor((Math.abs(offset) * 60) % 60);                                               // 15  // 23
      var gmtOffset = sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;           // 16  // 24
                                                                                                        // 17  // 25
      return {name: prettyName, timezone: name, gmtOffset: gmtOffset};                                  // 18  // 26
    });                                                                                                 // 19  // 27
  },                                                                                                    // 20  // 28
  from: function(value) {                                                                               // 21  // 29
    return this.mapping[value];                                                                         // 22  // 30
  },                                                                                                    // 23  // 31
  to: function(value) {                                                                                 // 24  // 32
    for (var key in this.mapping) {                                                                     // 25  // 33
      if (this.mapping[key] === value) return key;                                                      // 26  // 34
    }                                                                                                   // 27  // 35
  }                                                                                                     // 28  // 36
};                                                                                                      // 29  // 37
                                                                                                        // 30  // 38
//////////////////////////////////////////////////////////////////////////////////////////////////////////     // 39
                                                                                                               // 40
}).call(this);                                                                                                 // 41
                                                                                                               // 42
                                                                                                               // 43
                                                                                                               // 44
                                                                                                               // 45
                                                                                                               // 46
                                                                                                               // 47
(function () {                                                                                                 // 48
                                                                                                               // 49
//////////////////////////////////////////////////////////////////////////////////////////////////////////     // 50
//                                                                                                      //     // 51
// packages/joshowens:timezone-picker/template.picker.js                                                //     // 52
//                                                                                                      //     // 53
//////////////////////////////////////////////////////////////////////////////////////////////////////////     // 54
                                                                                                        //     // 55
                                                                                                        // 1   // 56
Template.__checkName("timezonePicker");                                                                 // 2   // 57
Template["timezonePicker"] = new Template("Template.timezonePicker", (function() {                      // 3   // 58
  var view = this;                                                                                      // 4   // 59
  return HTML.SELECT({                                                                                  // 5   // 60
    "class": function() {                                                                               // 6   // 61
      return Spacebars.mustache(view.lookup("class"));                                                  // 7   // 62
    },                                                                                                  // 8   // 63
    name: "pickedTimezone"                                                                              // 9   // 64
  }, "\n    ", Blaze.Each(function() {                                                                  // 10  // 65
    return Spacebars.call(view.lookup("timezones"));                                                    // 11  // 66
  }, function() {                                                                                       // 12  // 67
    return [ "\n      ", Blaze.If(function() {                                                          // 13  // 68
      return Spacebars.call(view.lookup("name"));                                                       // 14  // 69
    }, function() {                                                                                     // 15  // 70
      return [ "\n      ", HTML.OPTION(HTML.Attrs({                                                     // 16  // 71
        value: function() {                                                                             // 17  // 72
          return Spacebars.mustache(view.lookup("timezone"));                                           // 18  // 73
        }                                                                                               // 19  // 74
      }, function() {                                                                                   // 20  // 75
        return Spacebars.attrMustache(view.lookup("selected"));                                         // 21  // 76
      }), "(GMT ", Blaze.View(function() {                                                              // 22  // 77
        return Spacebars.mustache(view.lookup("gmtOffset"));                                            // 23  // 78
      }), ") ", Blaze.View(function() {                                                                 // 24  // 79
        return Spacebars.mustache(view.lookup("name"));                                                 // 25  // 80
      }), " "), "\n      " ];                                                                           // 26  // 81
    }, function() {                                                                                     // 27  // 82
      return [ "\n      ", HTML.OPTION(HTML.Attrs({                                                     // 28  // 83
        value: function() {                                                                             // 29  // 84
          return Spacebars.mustache(view.lookup("timezone"));                                           // 30  // 85
        }                                                                                               // 31  // 86
      }, function() {                                                                                   // 32  // 87
        return Spacebars.attrMustache(view.lookup("selected"));                                         // 33  // 88
      })), "\n      " ];                                                                                // 34  // 89
    }), "\n    " ];                                                                                     // 35  // 90
  }), "\n  ");                                                                                          // 36  // 91
}));                                                                                                    // 37  // 92
                                                                                                        // 38  // 93
//////////////////////////////////////////////////////////////////////////////////////////////////////////     // 94
                                                                                                               // 95
}).call(this);                                                                                                 // 96
                                                                                                               // 97
                                                                                                               // 98
                                                                                                               // 99
                                                                                                               // 100
                                                                                                               // 101
                                                                                                               // 102
(function () {                                                                                                 // 103
                                                                                                               // 104
//////////////////////////////////////////////////////////////////////////////////////////////////////////     // 105
//                                                                                                      //     // 106
// packages/joshowens:timezone-picker/picker.js                                                         //     // 107
//                                                                                                      //     // 108
//////////////////////////////////////////////////////////////////////////////////////////////////////////     // 109
                                                                                                        //     // 110
Template.timezonePicker.helpers({                                                                       // 1   // 111
  timezones: function(usFirst) {                                                                        // 2   // 112
    var usZones = ['US/Eastern', 'US/Central', 'US/Mountain', 'US/Pacific'];                            // 3   // 113
    var list = _(TimezonePicker.mapping()).chain().sortBy('name').sortBy(function(zone) {               // 4   // 114
      return parseInt(zone.gmtOffset);                                                                  // 5   // 115
    }).value();                                                                                         // 6   // 116
    var usList = _(usZones).map(function(tz) {                                                          // 7   // 117
      return _(list).find(function(ele) {                                                               // 8   // 118
        return ele.name === tz;                                                                         // 9   // 119
      });                                                                                               // 10  // 120
    });                                                                                                 // 11  // 121
    usList.push({name: "", timezone: "", gmtOffset: ""});                                               // 12  // 122
    return usList.concat(list);                                                                         // 13  // 123
  },                                                                                                    // 14  // 124
  selected: function() {                                                                                // 15  // 125
    if (Template.parentData(1).selected === this.timezone)                                              // 16  // 126
      return 'selected';                                                                                // 17  // 127
  }                                                                                                     // 18  // 128
});                                                                                                     // 19  // 129
                                                                                                        // 20  // 130
//////////////////////////////////////////////////////////////////////////////////////////////////////////     // 131
                                                                                                               // 132
}).call(this);                                                                                                 // 133
                                                                                                               // 134
                                                                                                               // 135
                                                                                                               // 136
                                                                                                               // 137
                                                                                                               // 138
                                                                                                               // 139
(function () {                                                                                                 // 140
                                                                                                               // 141
//////////////////////////////////////////////////////////////////////////////////////////////////////////     // 142
//                                                                                                      //     // 143
// packages/joshowens:timezone-picker/jstz.js                                                           //     // 144
//                                                                                                      //     // 145
//////////////////////////////////////////////////////////////////////////////////////////////////////////     // 146
                                                                                                        //     // 147
/**                                                                                                     // 1   // 148
 * This script gives you the zone info key representing your device's time zone setting.                // 2   // 149
 *                                                                                                      // 3   // 150
 * @name jsTimezoneDetect                                                                               // 4   // 151
 * @version 1.0.5                                                                                       // 5   // 152
 * @author Jon Nylander                                                                                 // 6   // 153
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php                            // 7   // 154
 *                                                                                                      // 8   // 155
 * For usage and examples, visit:                                                                       // 9   // 156
 * http://pellepim.bitbucket.org/jstz/                                                                  // 10  // 157
 *                                                                                                      // 11  // 158
 * Copyright (c) Jon Nylander                                                                           // 12  // 159
 */                                                                                                     // 13  // 160
                                                                                                        // 14  // 161
/*jslint undef: true */                                                                                 // 15  // 162
/*global console, exports*/                                                                             // 16  // 163
                                                                                                        // 17  // 164
(function(root) {                                                                                       // 18  // 165
  /**                                                                                                   // 19  // 166
   * Namespace to hold all the code for timezone detection.                                             // 20  // 167
   */                                                                                                   // 21  // 168
  var jstz = (function () {                                                                             // 22  // 169
      'use strict';                                                                                     // 23  // 170
      var HEMISPHERE_SOUTH = 's',                                                                       // 24  // 171
                                                                                                        // 25  // 172
          /**                                                                                           // 26  // 173
           * Gets the offset in minutes from UTC for a certain date.                                    // 27  // 174
           * @param {Date} date                                                                         // 28  // 175
           * @returns {Number}                                                                          // 29  // 176
           */                                                                                           // 30  // 177
          get_date_offset = function (date) {                                                           // 31  // 178
              var offset = -date.getTimezoneOffset();                                                   // 32  // 179
              return (offset !== null ? offset : 0);                                                    // 33  // 180
          },                                                                                            // 34  // 181
                                                                                                        // 35  // 182
          get_date = function (year, month, date) {                                                     // 36  // 183
              var d = new Date();                                                                       // 37  // 184
              if (year !== undefined) {                                                                 // 38  // 185
                d.setFullYear(year);                                                                    // 39  // 186
              }                                                                                         // 40  // 187
              d.setMonth(month);                                                                        // 41  // 188
              d.setDate(date);                                                                          // 42  // 189
              return d;                                                                                 // 43  // 190
          },                                                                                            // 44  // 191
                                                                                                        // 45  // 192
          get_january_offset = function (year) {                                                        // 46  // 193
              return get_date_offset(get_date(year, 0 ,2));                                             // 47  // 194
          },                                                                                            // 48  // 195
                                                                                                        // 49  // 196
          get_june_offset = function (year) {                                                           // 50  // 197
              return get_date_offset(get_date(year, 5, 2));                                             // 51  // 198
          },                                                                                            // 52  // 199
                                                                                                        // 53  // 200
          /**                                                                                           // 54  // 201
           * Private method.                                                                            // 55  // 202
           * Checks whether a given date is in daylight saving time.                                    // 56  // 203
           * If the date supplied is after august, we assume that we're checking                        // 57  // 204
           * for southern hemisphere DST.                                                               // 58  // 205
           * @param {Date} date                                                                         // 59  // 206
           * @returns {Boolean}                                                                         // 60  // 207
           */                                                                                           // 61  // 208
          date_is_dst = function (date) {                                                               // 62  // 209
              var is_southern = date.getMonth() > 7,                                                    // 63  // 210
                  base_offset = is_southern ? get_june_offset(date.getFullYear()) :                     // 64  // 211
                                              get_january_offset(date.getFullYear()),                   // 65  // 212
                  date_offset = get_date_offset(date),                                                  // 66  // 213
                  is_west = base_offset < 0,                                                            // 67  // 214
                  dst_offset = base_offset - date_offset;                                               // 68  // 215
                                                                                                        // 69  // 216
              if (!is_west && !is_southern) {                                                           // 70  // 217
                  return dst_offset < 0;                                                                // 71  // 218
              }                                                                                         // 72  // 219
                                                                                                        // 73  // 220
              return dst_offset !== 0;                                                                  // 74  // 221
          },                                                                                            // 75  // 222
                                                                                                        // 76  // 223
          /**                                                                                           // 77  // 224
           * This function does some basic calculations to create information about                     // 78  // 225
           * the user's timezone. It uses REFERENCE_YEAR as a solid year for which                      // 79  // 226
           * the script has been tested rather than depend on the year set by the                       // 80  // 227
           * client device.                                                                             // 81  // 228
           *                                                                                            // 82  // 229
           * Returns a key that can be used to do lookups in jstz.olson.timezones.                      // 83  // 230
           * eg: "720,1,2".                                                                             // 84  // 231
           *                                                                                            // 85  // 232
           * @returns {String}                                                                          // 86  // 233
           */                                                                                           // 87  // 234
                                                                                                        // 88  // 235
          lookup_key = function () {                                                                    // 89  // 236
              var january_offset = get_january_offset(),                                                // 90  // 237
                  june_offset = get_june_offset(),                                                      // 91  // 238
                  diff = january_offset - june_offset;                                                  // 92  // 239
                                                                                                        // 93  // 240
              if (diff < 0) {                                                                           // 94  // 241
                  return january_offset + ",1";                                                         // 95  // 242
              } else if (diff > 0) {                                                                    // 96  // 243
                  return june_offset + ",1," + HEMISPHERE_SOUTH;                                        // 97  // 244
              }                                                                                         // 98  // 245
                                                                                                        // 99  // 246
              return january_offset + ",0";                                                             // 100
          },                                                                                            // 101
                                                                                                        // 102
                                                                                                        // 103
          /**                                                                                           // 104
           * Tries to get the time zone key directly from the operating system for those                // 105
           * environments that support the ECMAScript Internationalization API.                         // 106
           */                                                                                           // 107
          get_from_intl = function() {                                                                  // 108
            if (typeof Intl === "undefined" || typeof Intl.DateTimeFormat === "undefined")              // 109
                return;                                                                                 // 110
            var format = Intl.DateTimeFormat();                                                         // 111
            if (typeof format === "undefined" || typeof format.resolvedOptions === "undefined")         // 112
                return;                                                                                 // 113
            return format.resolvedOptions().timeZone;                                                   // 114
          },                                                                                            // 115
                                                                                                        // 116
          /**                                                                                           // 117
           * Uses get_timezone_info() to formulate a key to use in the olson.timezones dictionary.      // 118
           *                                                                                            // 119
           * Returns a primitive object on the format:                                                  // 120
           * {'timezone': TimeZone, 'key' : 'the key used to find the TimeZone object'}                 // 121
           *                                                                                            // 122
           * @returns Object                                                                            // 123
           */                                                                                           // 124
          determine = function () {                                                                     // 125
                                                                                                        // 126
              // first try to use the Intl API                                                          // 127
              var zone = get_from_intl();                                                               // 128
              if (zone) return new jstz.TimeZone(zone);                                                 // 129
                                                                                                        // 130
              // otherwise, use our own logic                                                           // 131
              var key = lookup_key();                                                                   // 132
              return new jstz.TimeZone(jstz.olson.timezones[key]);                                      // 133
          },                                                                                            // 134
                                                                                                        // 135
          /**                                                                                           // 136
           * This object contains information on when daylight savings starts for                       // 137
           * different timezones.                                                                       // 138
           *                                                                                            // 139
           * The list is short for a reason. Often we do not have to be very specific                   // 140
           * to single out the correct timezone. But when we do, this list comes in                     // 141
           * handy.                                                                                     // 142
           *                                                                                            // 143
           * Each value is a date denoting when daylight savings starts for that timezone.              // 144
           */                                                                                           // 145
          dst_start_for = function (tz_name) {                                                          // 146
                                                                                                        // 147
            var ru_pre_dst_change = new Date(2010, 6, 15, 1, 0, 0, 0), // In 2010 Russia had DST, this allows us to detect Russia :)
                dst_starts = {                                                                          // 149
                    'America/Denver': new Date(2011, 2, 13, 3, 0, 0, 0),                                // 150
                    'America/Mazatlan': new Date(2011, 3, 3, 3, 0, 0, 0),                               // 151
                    'America/Chicago': new Date(2011, 2, 13, 3, 0, 0, 0),                               // 152
                    'America/Mexico_City': new Date(2011, 3, 3, 3, 0, 0, 0),                            // 153
                    'America/Asuncion': new Date(2012, 9, 7, 3, 0, 0, 0),                               // 154
                    'America/Santiago': new Date(2012, 9, 3, 3, 0, 0, 0),                               // 155
                    'America/Campo_Grande': new Date(2012, 9, 21, 5, 0, 0, 0),                          // 156
                    'America/Montevideo': new Date(2011, 9, 2, 3, 0, 0, 0),                             // 157
                    'America/Sao_Paulo': new Date(2011, 9, 16, 5, 0, 0, 0),                             // 158
                    'America/Los_Angeles': new Date(2011, 2, 13, 8, 0, 0, 0),                           // 159
                    'America/Santa_Isabel': new Date(2011, 3, 5, 8, 0, 0, 0),                           // 160
                    'America/Havana': new Date(2012, 2, 10, 2, 0, 0, 0),                                // 161
                    'America/New_York': new Date(2012, 2, 10, 7, 0, 0, 0),                              // 162
                    'Europe/Helsinki': new Date(2013, 2, 31, 5, 0, 0, 0),                               // 163
                    'Pacific/Auckland': new Date(2011, 8, 26, 7, 0, 0, 0),                              // 164
                    'America/Halifax': new Date(2011, 2, 13, 6, 0, 0, 0),                               // 165
                    'America/Goose_Bay': new Date(2011, 2, 13, 2, 1, 0, 0),                             // 166
                    'America/Miquelon': new Date(2011, 2, 13, 5, 0, 0, 0),                              // 167
                    'America/Godthab': new Date(2011, 2, 27, 1, 0, 0, 0),                               // 168
                    'Europe/Moscow': ru_pre_dst_change,                                                 // 169
                    'Asia/Amman': new Date(2013, 2, 29, 1, 0, 0, 0),                                    // 170
                    'Asia/Beirut': new Date(2013, 2, 31, 2, 0, 0, 0),                                   // 171
                    'Asia/Damascus': new Date(2013, 3, 6, 2, 0, 0, 0),                                  // 172
                    'Asia/Jerusalem': new Date(2013, 2, 29, 5, 0, 0, 0),                                // 173
                    'Asia/Yekaterinburg': ru_pre_dst_change,                                            // 174
                    'Asia/Omsk': ru_pre_dst_change,                                                     // 175
                    'Asia/Krasnoyarsk': ru_pre_dst_change,                                              // 176
                    'Asia/Irkutsk': ru_pre_dst_change,                                                  // 177
                    'Asia/Yakutsk': ru_pre_dst_change,                                                  // 178
                    'Asia/Vladivostok': ru_pre_dst_change,                                              // 179
                    'Asia/Baku': new Date(2013, 2, 31, 4, 0, 0),                                        // 180
                    'Asia/Yerevan': new Date(2013, 2, 31, 3, 0, 0),                                     // 181
                    'Asia/Kamchatka': ru_pre_dst_change,                                                // 182
                    'Asia/Gaza': new Date(2010, 2, 27, 4, 0, 0),                                        // 183
                    'Africa/Cairo': new Date(2010, 4, 1, 3, 0, 0),                                      // 184
                    'Europe/Minsk': ru_pre_dst_change,                                                  // 185
                    'Pacific/Apia': new Date(2010, 10, 1, 1, 0, 0, 0),                                  // 186
                    'Pacific/Fiji': new Date(2010, 11, 1, 0, 0, 0),                                     // 187
                    'Australia/Perth': new Date(2008, 10, 1, 1, 0, 0, 0)                                // 188
                };                                                                                      // 189
                                                                                                        // 190
              return dst_starts[tz_name];                                                               // 191
          };                                                                                            // 192
                                                                                                        // 193
      return {                                                                                          // 194
          determine: determine,                                                                         // 195
          date_is_dst: date_is_dst,                                                                     // 196
          dst_start_for: dst_start_for                                                                  // 197
      };                                                                                                // 198
  }());                                                                                                 // 199
                                                                                                        // 200
  /**                                                                                                   // 201
   * Simple object to perform ambiguity check and to return name of time zone.                          // 202
   */                                                                                                   // 203
  jstz.TimeZone = function (tz_name) {                                                                  // 204
      'use strict';                                                                                     // 205
        /**                                                                                             // 206
         * The keys in this object are timezones that we know may be ambiguous after                    // 207
         * a preliminary scan through the olson_tz object.                                              // 208
         *                                                                                              // 209
         * The array of timezones to compare must be in the order that daylight savings                 // 210
         * starts for the regions.                                                                      // 211
         */                                                                                             // 212
      var AMBIGUITIES = {                                                                               // 213
              'America/Denver':       ['America/Denver', 'America/Mazatlan'],                           // 214
              'America/Chicago':      ['America/Chicago', 'America/Mexico_City'],                       // 215
              'America/Santiago':     ['America/Santiago', 'America/Asuncion', 'America/Campo_Grande'], // 216
              'America/Montevideo':   ['America/Montevideo', 'America/Sao_Paulo'],                      // 217
              'Asia/Beirut':          ['Asia/Amman', 'Asia/Jerusalem', 'Asia/Beirut', 'Europe/Helsinki','Asia/Damascus'],
              'Pacific/Auckland':     ['Pacific/Auckland', 'Pacific/Fiji'],                             // 219
              'America/Los_Angeles':  ['America/Los_Angeles', 'America/Santa_Isabel'],                  // 220
              'America/New_York':     ['America/Havana', 'America/New_York'],                           // 221
              'America/Halifax':      ['America/Goose_Bay', 'America/Halifax'],                         // 222
              'America/Godthab':      ['America/Miquelon', 'America/Godthab'],                          // 223
              'Asia/Dubai':           ['Europe/Moscow'],                                                // 224
              'Asia/Dhaka':           ['Asia/Yekaterinburg'],                                           // 225
              'Asia/Jakarta':         ['Asia/Omsk'],                                                    // 226
              'Asia/Shanghai':        ['Asia/Krasnoyarsk', 'Australia/Perth'],                          // 227
              'Asia/Tokyo':           ['Asia/Irkutsk'],                                                 // 228
              'Australia/Brisbane':   ['Asia/Yakutsk'],                                                 // 229
              'Pacific/Noumea':       ['Asia/Vladivostok'],                                             // 230
              'Pacific/Tarawa':       ['Asia/Kamchatka', 'Pacific/Fiji'],                               // 231
              'Pacific/Tongatapu':    ['Pacific/Apia'],                                                 // 232
              'Asia/Baghdad':         ['Europe/Minsk'],                                                 // 233
              'Asia/Baku':            ['Asia/Yerevan','Asia/Baku'],                                     // 234
              'Africa/Johannesburg':  ['Asia/Gaza', 'Africa/Cairo']                                     // 235
          },                                                                                            // 236
                                                                                                        // 237
          timezone_name = tz_name,                                                                      // 238
                                                                                                        // 239
          /**                                                                                           // 240
           * Checks if a timezone has possible ambiguities. I.e timezones that are similar.             // 241
           *                                                                                            // 242
           * For example, if the preliminary scan determines that we're in America/Denver.              // 243
           * We double check here that we're really there and not in America/Mazatlan.                  // 244
           *                                                                                            // 245
           * This is done by checking known dates for when daylight savings start for different         // 246
           * timezones during 2010 and 2011.                                                            // 247
           */                                                                                           // 248
          ambiguity_check = function () {                                                               // 249
              var ambiguity_list = AMBIGUITIES[timezone_name],                                          // 250
                  length = ambiguity_list.length,                                                       // 251
                  i = 0,                                                                                // 252
                  tz = ambiguity_list[0];                                                               // 253
                                                                                                        // 254
              for (; i < length; i += 1) {                                                              // 255
                  tz = ambiguity_list[i];                                                               // 256
                                                                                                        // 257
                  if (jstz.date_is_dst(jstz.dst_start_for(tz))) {                                       // 258
                      timezone_name = tz;                                                               // 259
                      return;                                                                           // 260
                  }                                                                                     // 261
              }                                                                                         // 262
          },                                                                                            // 263
                                                                                                        // 264
          /**                                                                                           // 265
           * Checks if it is possible that the timezone is ambiguous.                                   // 266
           */                                                                                           // 267
          is_ambiguous = function () {                                                                  // 268
              return typeof (AMBIGUITIES[timezone_name]) !== 'undefined';                               // 269
          };                                                                                            // 270
                                                                                                        // 271
      if (is_ambiguous()) {                                                                             // 272
          ambiguity_check();                                                                            // 273
      }                                                                                                 // 274
                                                                                                        // 275
      return {                                                                                          // 276
          name: function () {                                                                           // 277
              return timezone_name;                                                                     // 278
          }                                                                                             // 279
      };                                                                                                // 280
  };                                                                                                    // 281
                                                                                                        // 282
  jstz.olson = {};                                                                                      // 283
                                                                                                        // 284
  /*                                                                                                    // 285
   * The keys in this dictionary are comma separated as such:                                           // 286
   *                                                                                                    // 287
   * First the offset compared to UTC time in minutes.                                                  // 288
   *                                                                                                    // 289
   * Then a flag which is 0 if the timezone does not take daylight savings into account and 1 if it     // 290
   * does.                                                                                              // 291
   *                                                                                                    // 292
   * Thirdly an optional 's' signifies that the timezone is in the southern hemisphere,                 // 293
   * only interesting for timezones with DST.                                                           // 294
   *                                                                                                    // 295
   * The mapped arrays is used for constructing the jstz.TimeZone object from within                    // 296
   * jstz.determine();                                                                                  // 297
   */                                                                                                   // 298
  jstz.olson.timezones = {                                                                              // 299
      '-720,0'   : 'Pacific/Majuro',                                                                    // 300
      '-660,0'   : 'Pacific/Pago_Pago',                                                                 // 301
      '-600,1'   : 'America/Adak',                                                                      // 302
      '-600,0'   : 'Pacific/Honolulu',                                                                  // 303
      '-570,0'   : 'Pacific/Marquesas',                                                                 // 304
      '-540,0'   : 'Pacific/Gambier',                                                                   // 305
      '-540,1'   : 'America/Anchorage',                                                                 // 306
      '-480,1'   : 'America/Los_Angeles',                                                               // 307
      '-480,0'   : 'Pacific/Pitcairn',                                                                  // 308
      '-420,0'   : 'America/Phoenix',                                                                   // 309
      '-420,1'   : 'America/Denver',                                                                    // 310
      '-360,0'   : 'America/Guatemala',                                                                 // 311
      '-360,1'   : 'America/Chicago',                                                                   // 312
      '-360,1,s' : 'Pacific/Easter',                                                                    // 313
      '-300,0'   : 'America/Bogota',                                                                    // 314
      '-300,1'   : 'America/New_York',                                                                  // 315
      '-270,0'   : 'America/Caracas',                                                                   // 316
      '-240,1'   : 'America/Halifax',                                                                   // 317
      '-240,0'   : 'America/Santo_Domingo',                                                             // 318
      '-240,1,s' : 'America/Santiago',                                                                  // 319
      '-210,1'   : 'America/St_Johns',                                                                  // 320
      '-180,1'   : 'America/Godthab',                                                                   // 321
      '-180,0'   : 'America/Argentina/Buenos_Aires',                                                    // 322
      '-180,1,s' : 'America/Montevideo',                                                                // 323
      '-120,0'   : 'America/Noronha',                                                                   // 324
      '-120,1'   : 'America/Noronha',                                                                   // 325
      '-60,1'    : 'Atlantic/Azores',                                                                   // 326
      '-60,0'    : 'Atlantic/Cape_Verde',                                                               // 327
      '0,0'      : 'UTC',                                                                               // 328
      '0,1'      : 'Europe/London',                                                                     // 329
      '60,1'     : 'Europe/Berlin',                                                                     // 330
      '60,0'     : 'Africa/Lagos',                                                                      // 331
      '60,1,s'   : 'Africa/Windhoek',                                                                   // 332
      '120,1'    : 'Asia/Beirut',                                                                       // 333
      '120,0'    : 'Africa/Johannesburg',                                                               // 334
      '180,0'    : 'Asia/Baghdad',                                                                      // 335
      '180,1'    : 'Europe/Moscow',                                                                     // 336
      '210,1'    : 'Asia/Tehran',                                                                       // 337
      '240,0'    : 'Asia/Dubai',                                                                        // 338
      '240,1'    : 'Asia/Baku',                                                                         // 339
      '270,0'    : 'Asia/Kabul',                                                                        // 340
      '300,1'    : 'Asia/Yekaterinburg',                                                                // 341
      '300,0'    : 'Asia/Karachi',                                                                      // 342
      '330,0'    : 'Asia/Kolkata',                                                                      // 343
      '345,0'    : 'Asia/Kathmandu',                                                                    // 344
      '360,0'    : 'Asia/Dhaka',                                                                        // 345
      '360,1'    : 'Asia/Omsk',                                                                         // 346
      '390,0'    : 'Asia/Rangoon',                                                                      // 347
      '420,1'    : 'Asia/Krasnoyarsk',                                                                  // 348
      '420,0'    : 'Asia/Jakarta',                                                                      // 349
      '480,0'    : 'Asia/Shanghai',                                                                     // 350
      '480,1'    : 'Asia/Irkutsk',                                                                      // 351
      '525,0'    : 'Australia/Eucla',                                                                   // 352
      '525,1,s'  : 'Australia/Eucla',                                                                   // 353
      '540,1'    : 'Asia/Yakutsk',                                                                      // 354
      '540,0'    : 'Asia/Tokyo',                                                                        // 355
      '570,0'    : 'Australia/Darwin',                                                                  // 356
      '570,1,s'  : 'Australia/Adelaide',                                                                // 357
      '600,0'    : 'Australia/Brisbane',                                                                // 358
      '600,1'    : 'Asia/Vladivostok',                                                                  // 359
      '600,1,s'  : 'Australia/Sydney',                                                                  // 360
      '630,1,s'  : 'Australia/Lord_Howe',                                                               // 361
      '660,1'    : 'Asia/Kamchatka',                                                                    // 362
      '660,0'    : 'Pacific/Noumea',                                                                    // 363
      '690,0'    : 'Pacific/Norfolk',                                                                   // 364
      '720,1,s'  : 'Pacific/Auckland',                                                                  // 365
      '720,0'    : 'Pacific/Tarawa',                                                                    // 366
      '765,1,s'  : 'Pacific/Chatham',                                                                   // 367
      '780,0'    : 'Pacific/Tongatapu',                                                                 // 368
      '780,1,s'  : 'Pacific/Apia',                                                                      // 369
      '840,0'    : 'Pacific/Kiritimati'                                                                 // 370
  };                                                                                                    // 371
                                                                                                        // 372
  if (typeof exports !== 'undefined') {                                                                 // 373
    exports.jstz = jstz;                                                                                // 374
  } else {                                                                                              // 375
    root.jstz = jstz;                                                                                   // 376
  }                                                                                                     // 377
})(this);                                                                                               // 378
                                                                                                        // 379
//////////////////////////////////////////////////////////////////////////////////////////////////////////     // 527
                                                                                                               // 528
}).call(this);                                                                                                 // 529
                                                                                                               // 530
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['joshowens:timezone-picker'] = {}, {
  TimezonePicker: TimezonePicker
});

})();
