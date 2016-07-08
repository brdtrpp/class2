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
var moment = Package['mrt:moment'].moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/adelq_moment-recur/packages/adelq_moment-recur.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                               //    // 4
// packages/adelq:moment-recur/lib/moment-recur/moment-recur.js                                                  //    // 5
//                                                                                                               //    // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                                 //    // 8
(function (root, factory) {                                                                                      // 1  // 9
    if (typeof exports === 'object') {                                                                           // 2  // 10
        module.exports = factory(require('moment'));                                                             // 3  // 11
    } else if (typeof define === 'function' && define.amd) {                                                     // 4  // 12
        define('moment-recur', ['moment'], factory);                                                             // 5  // 13
    } else {                                                                                                     // 6  // 14
        root.moment = factory(root.moment);                                                                      // 7  // 15
    }                                                                                                            // 8  // 16
}(this, function (moment) {                                                                                      // 9  // 17
    var hasModule;                                                                                               // 10
                                                                                                                 // 11
    hasModule = (typeof module !== "undefined" && module !== null) && (module.exports != null);                  // 12
                                                                                                                 // 13
    if (typeof moment === 'undefined') {                                                                         // 14
      throw Error("Can't find moment");                                                                          // 15
    }                                                                                                            // 16
                                                                                                                 // 17
    // Interval object for creating and matching interval-based rules                                            // 18
    var Interval = (function() {                                                                                 // 19
        function createInterval(units, measure) {                                                                // 20
            // Make sure all of the units are integers greater than 0.                                           // 21
            for (var unit in units) {                                                                            // 22
                if (units.hasOwnProperty(unit)) {                                                                // 23
                    if ( parseInt(unit, 10) <= 0 ) {                                                             // 24
                        throw Error('Intervals must be greater than zero');                                      // 25
                    }                                                                                            // 26
                }                                                                                                // 27
            }                                                                                                    // 28
                                                                                                                 // 29
            return {                                                                                             // 30
                measure: measure.toLowerCase(),                                                                  // 31
                units: units                                                                                     // 32
            };                                                                                                   // 33
        }                                                                                                        // 34
                                                                                                                 // 35
        function matchInterval(type, units, start, date) {                                                       // 36
            // Get the difference between the start date and the provded date,                                   // 37
            // using the required measure based on the type of rule                                              // 38
            var diff = start.diff(date, type, true);                                                             // 39
                                                                                                                 // 40
            // Check to see if any of the units provided match the date                                          // 41
            for (var unit in units) {                                                                            // 42
                if (units.hasOwnProperty(unit)) {                                                                // 43
                    unit = parseInt(unit, 10);                                                                   // 44
                                                                                                                 // 45
                    // If the units devide evenly into the difference, we have a match                           // 46
                    if ((diff % unit) === 0) {                                                                   // 47
                        return true;                                                                             // 48
                    }                                                                                            // 49
                }                                                                                                // 50
            }                                                                                                    // 51
                                                                                                                 // 52
            return false;                                                                                        // 53
        }                                                                                                        // 54
                                                                                                                 // 55
        return {                                                                                                 // 56
          create: createInterval,                                                                                // 57
          match: matchInterval                                                                                   // 58
        };                                                                                                       // 59
    })();                                                                                                        // 60
                                                                                                                 // 61
    // Calendar object for creating and matching calendar-based rules                                            // 62
    var Calendar = (function (){                                                                                 // 63
        // Dictionary of unit types based on measures                                                            // 64
        var unitTypes = {                                                                                        // 65
            "daysOfMonth": "date",                                                                               // 66
            "daysOfWeek": "day",                                                                                 // 67
            "weeksOfMonth": "monthWeek",                                                                         // 68
            "weeksOfYear": "weeks",                                                                              // 69
            "monthsOfYear": "months"                                                                             // 70
        };                                                                                                       // 71
                                                                                                                 // 72
        // Dictionary of ranges based on measures                                                                // 73
        var ranges = {                                                                                           // 74
            "daysOfMonth"  : { low: 1, high: 31 },                                                               // 75
            "daysOfWeek"   : { low: 0, high: 6 },                                                                // 76
            "weeksOfMonth" : { low: 0, high: 4 },                                                                // 77
            "weeksOfYear"  : { low: 0, high: 52 },                                                               // 78
            "monthsOfYear" : { low: 0, high: 11 }                                                                // 79
        };                                                                                                       // 80
                                                                                                                 // 81
        // Private function for cehcking the range of calendar values                                            // 82
        function checkRange(low, high, list) {                                                                   // 83
            list.forEach(function(v) {                                                                           // 84
                if ( v < low || v > high ) {                                                                     // 85
                    throw Error('Value should be in range ' + low + ' to ' + high);                              // 86
                }                                                                                                // 87
            });                                                                                                  // 88
        }                                                                                                        // 89
                                                                                                                 // 90
        // Private function to convert day and month names to numbers                                            // 91
        function namesToNumbers(list, nameType) {                                                                // 92
            var unit, unitInt, unitNum;                                                                          // 93
            var newList = {};                                                                                    // 94
                                                                                                                 // 95
            for(unit in list) {                                                                                  // 96
                if (list.hasOwnProperty(unit)) {                                                                 // 97
                    unitInt = parseInt(unit, 10);                                                                // 98
                                                                                                                 // 99
                    if (isNaN(unitInt)) {                                                                        // 100
                        unitInt = unit;                                                                          // 101
                    }                                                                                            // 102
                                                                                                                 // 103
                    unitNum = moment().set(nameType, unitInt).get(nameType);                                     // 104
                    newList[unitNum] = list[unit];                                                               // 105
                }                                                                                                // 106
            }                                                                                                    // 107
                                                                                                                 // 108
            return newList;                                                                                      // 109
        }                                                                                                        // 110
                                                                                                                 // 111
        function createCalendarRule(list, measure) {                                                             // 112
            var keys = [];                                                                                       // 113
                                                                                                                 // 114
            // Convert day/month names to numbers, if needed                                                     // 115
            if (measure === "daysOfWeek") {                                                                      // 116
                list = namesToNumbers(list, "days");                                                             // 117
            }                                                                                                    // 118
                                                                                                                 // 119
            if (measure === "monthsOfYear") {                                                                    // 120
                list = namesToNumbers(list, "months");                                                           // 121
            }                                                                                                    // 122
                                                                                                                 // 123
            for (var key in list) if (hasOwnProperty.call(list, key)) keys.push(key);                            // 124
                                                                                                                 // 125
            // Make sure the listed units are in the measure's range                                             // 126
            checkRange( ranges[measure].low,                                                                     // 127
                        ranges[measure].high,                                                                    // 128
                        keys );                                                                                  // 129
                                                                                                                 // 130
            return {                                                                                             // 131
                measure: measure,                                                                                // 132
                units: list                                                                                      // 133
            };                                                                                                   // 134
        }                                                                                                        // 135
                                                                                                                 // 136
        function matchCalendarRule(measure, list, date) {                                                        // 137
            // Get the unit type (i.e. date, day, week, monthWeek, weeks, months)                                // 138
            var unitType = unitTypes[measure];                                                                   // 139
                                                                                                                 // 140
            // Get the unit based on the required measure of the date                                            // 141
            var unit = date[unitType]();                                                                         // 142
                                                                                                                 // 143
            // If the unit is in our list, return true, else return false                                        // 144
            if ( list[unit] ) {                                                                                  // 145
                return true;                                                                                     // 146
            }                                                                                                    // 147
                                                                                                                 // 148
            return false;                                                                                        // 149
        }                                                                                                        // 150
                                                                                                                 // 151
        return {                                                                                                 // 152
            create: createCalendarRule,                                                                          // 153
            match: matchCalendarRule                                                                             // 154
        };                                                                                                       // 155
    })();                                                                                                        // 156
                                                                                                                 // 157
    // The main Recur object to provide an interface for settings, rules, and matching                           // 158
    var Recur = (function() {                                                                                    // 159
                                                                                                                 // 160
        // A dictionary used to match rule measures to rule types                                                // 161
        var ruleTypes = {                                                                                        // 162
            "days": "interval",                                                                                  // 163
            "weeks": "interval",                                                                                 // 164
            "months": "interval",                                                                                // 165
            "years": "interval",                                                                                 // 166
            "daysOfWeek": "calendar",                                                                            // 167
            "daysOfMonth": "calendar",                                                                           // 168
            "weeksOfMonth": "calendar",                                                                          // 169
            "weeksOfYear": "calendar",                                                                           // 170
            "monthsOfYear": "calendar"                                                                           // 171
        };                                                                                                       // 172
                                                                                                                 // 173
        // a dictionary of plural and singular measures                                                          // 174
        var measures = {                                                                                         // 175
            "days": "day",                                                                                       // 176
            "weeks": "week",                                                                                     // 177
            "months": "month",                                                                                   // 178
            "years": "year",                                                                                     // 179
            "daysOfWeek": "dayOfWeek",                                                                           // 180
            "daysOfMonth": "dayOfMonth",                                                                         // 181
            "weeksOfMonth": "weekOfMonth",                                                                       // 182
            "weeksOfYear": "weekOfYear",                                                                         // 183
            "monthsOfYear": "monthOfYear"                                                                        // 184
        };                                                                                                       // 185
                                                                                                                 // 186
                                                                                                                 // 187
        /////////////////////////////////                                                                        // 188
        // Private Methods             //                                                                        // 189
        // Must be called with .call() //                                                                        // 190
        /////////////////////////////////                                                                        // 191
                                                                                                                 // 192
        // Private method that tries to set a rule.                                                              // 193
        function trigger() {                                                                                     // 194
            var rule;                                                                                            // 195
            var ruleType = ruleTypes[this.measure];                                                              // 196
                                                                                                                 // 197
            if (!(this instanceof Recur)) {                                                                      // 198
                throw Error("Private method trigger() was called directly or not called as instance of Recur!"); // 199
            }                                                                                                    // 200
                                                                                                                 // 201
            // Make sure units and measure is defined and not null                                               // 202
            if ((typeof this.units === "undefined" || this.units === null) || !this.measure) {                   // 203
                return this;                                                                                     // 204
            }                                                                                                    // 205
                                                                                                                 // 206
            // Error if we don't have a valid ruleType                                                           // 207
            if (ruleType !== "calendar" && ruleType !== "interval") {                                            // 208
                throw Error("Invlid measure provided: " + this.measure);                                         // 209
            }                                                                                                    // 210
                                                                                                                 // 211
            // Create the rule                                                                                   // 212
            if (ruleType === "interval") {                                                                       // 213
                if ( !this.start ) {                                                                             // 214
                    throw Error("Must have a start date set to set an interval!");                               // 215
                }                                                                                                // 216
                                                                                                                 // 217
                rule = Interval.create(this.units, this.measure);                                                // 218
            }                                                                                                    // 219
                                                                                                                 // 220
            if (ruleType === "calendar") {                                                                       // 221
                rule = Calendar.create(this.units, this.measure);                                                // 222
            }                                                                                                    // 223
                                                                                                                 // 224
            // Remove the temporary rule data                                                                    // 225
            this.units = null;                                                                                   // 226
            this.measure = null;                                                                                 // 227
                                                                                                                 // 228
            // Remove existing rule based on measure                                                             // 229
            for (var i = 0; i < this.rules.length; i++) {                                                        // 230
                if (this.rules[i].measure === rule.measure) {                                                    // 231
                    this.rules.splice(i, 1);                                                                     // 232
                }                                                                                                // 233
            }                                                                                                    // 234
                                                                                                                 // 235
            this.rules.push(rule);                                                                               // 236
            return this;                                                                                         // 237
        }                                                                                                        // 238
                                                                                                                 // 239
        // Private method to get next, previous or all occurances                                                // 240
        function getOccurances(num, format, type) {                                                              // 241
            var currentDate, date;                                                                               // 242
            var dates = [];                                                                                      // 243
                                                                                                                 // 244
            if (!(this instanceof Recur)) {                                                                      // 245
                throw Error("Private method trigger() was called directly or not called as instance of Recur!"); // 246
            }                                                                                                    // 247
                                                                                                                 // 248
            if ( !this.start && !this.from ) {                                                                   // 249
                throw Error("Cannot get occurances without start or from date.");                                // 250
            }                                                                                                    // 251
                                                                                                                 // 252
            if ( type === "all" && !this.end ) {                                                                 // 253
                throw Error("Cannot get all occurances without an end date.");                                   // 254
            }                                                                                                    // 255
                                                                                                                 // 256
            if( !!this.end && (this.start > this.end) ) {                                                        // 257
                throw Error("Start date cannot be later than end date.");                                        // 258
            }                                                                                                    // 259
                                                                                                                 // 260
            // Return empty set if the caller doesn't want any for next/prev                                     // 261
            if(type !== "all" && !(num > 0)) {                                                                   // 262
                return dates;                                                                                    // 263
            }                                                                                                    // 264
                                                                                                                 // 265
            // Start from the from date, or the start date if from is not set.                                   // 266
            currentDate = (this.from || this.start).clone();                                                     // 267
                                                                                                                 // 268
            // Include the initial date to the results if wanting all dates                                      // 269
            if(type === "all") {                                                                                 // 270
                if (this.matches(currentDate, false)) {                                                          // 271
                    date = format ? currentDate.format(format) : currentDate.clone();                            // 272
                    dates.push(date);                                                                            // 273
                }                                                                                                // 274
            }                                                                                                    // 275
                                                                                                                 // 276
            // Get the next N dates, if num is null then infinite                                                // 277
            while(dates.length < (num===null ? dates.length+1 : num)) {                                          // 278
                if (type === "next" || type === "all") {                                                         // 279
                    currentDate.add(1, "day");                                                                   // 280
                }                                                                                                // 281
                else {                                                                                           // 282
                    currentDate.subtract(1, "day");                                                              // 283
                }                                                                                                // 284
                                                                                                                 // 285
                //console.log("Match: " + currentDate.format("L") + " - " + this.matches(currentDate, true));    // 286
                                                                                                                 // 287
                // Don't match outside the date if generating all dates within start/end                         // 288
                if (this.matches(currentDate, (type==="all"?false:true))) {                                      // 289
                    date = format ? currentDate.format(format) : currentDate.clone();                            // 290
                    dates.push(date);                                                                            // 291
                }                                                                                                // 292
                if(type === "all" && currentDate >= this.end) {                                                  // 293
                    break;                                                                                       // 294
                }                                                                                                // 295
            }                                                                                                    // 296
                                                                                                                 // 297
            return dates;                                                                                        // 298
        }                                                                                                        // 299
                                                                                                                 // 300
                                                                                                                 // 301
        ///////////////////////                                                                                  // 302
        // Private Functions //                                                                                  // 303
        ///////////////////////                                                                                  // 304
                                                                                                                 // 305
        // Private function to see if a date is within range of start/end                                        // 306
        function inRange(start, end, date) {                                                                     // 307
            if (start && date.isBefore(start)) { return false; }                                                 // 308
            if (end && date.isAfter(end)) { return false; }                                                      // 309
            return true;                                                                                         // 310
        }                                                                                                        // 311
                                                                                                                 // 312
        // Private function to turn units into objects                                                           // 313
        function unitsToObject(units) {                                                                          // 314
            var list = {};                                                                                       // 315
                                                                                                                 // 316
            if ( Object.prototype.toString.call(units) == '[object Array]' ) {                                   // 317
                units.forEach(function(v) {                                                                      // 318
                    list[v] = true;                                                                              // 319
                });                                                                                              // 320
            }                                                                                                    // 321
            else if ( units === Object(units) ) {                                                                // 322
                list = units;                                                                                    // 323
            }                                                                                                    // 324
            else if ( (Object.prototype.toString.call(units) == '[object Number]') || (Object.prototype.toString.call(units) == '[object String]') ) {
                list[units] = true;                                                                              // 326
            }                                                                                                    // 327
            else {                                                                                               // 328
                throw Error("Provide an array, object, string or number when passing units!");                   // 329
            }                                                                                                    // 330
                                                                                                                 // 331
            return list;                                                                                         // 332
        }                                                                                                        // 333
                                                                                                                 // 334
        // Private function to check if a date is an exception                                                   // 335
        function isException(exceptions, date) {                                                                 // 336
            for (var i = 0, len = exceptions.length; i < len; i++ ) {                                            // 337
                if (moment(exceptions[i]).isSame(date)) {                                                        // 338
                    return true;                                                                                 // 339
                }                                                                                                // 340
            }                                                                                                    // 341
                                                                                                                 // 342
            return false;                                                                                        // 343
        }                                                                                                        // 344
                                                                                                                 // 345
        // Private function to pluralize measure names for use with dictionaries.                                // 346
        function pluralize(measure) {                                                                            // 347
            switch(measure) {                                                                                    // 348
                case "day":                                                                                      // 349
                    return "days";                                                                               // 350
                                                                                                                 // 351
                case "week":                                                                                     // 352
                    return "weeks";                                                                              // 353
                                                                                                                 // 354
                case "month":                                                                                    // 355
                    return "months";                                                                             // 356
                                                                                                                 // 357
                case "year":                                                                                     // 358
                    return "years";                                                                              // 359
                                                                                                                 // 360
                case "dayOfWeek":                                                                                // 361
                    return "daysOfWeek";                                                                         // 362
                                                                                                                 // 363
                case "dayOfMonth":                                                                               // 364
                    return "daysOfMonth";                                                                        // 365
                                                                                                                 // 366
                case "weekOfMonth":                                                                              // 367
                    return "weeksOfMonth";                                                                       // 368
                                                                                                                 // 369
                case "weekOfYear":                                                                               // 370
                    return "weeksOfYear";                                                                        // 371
                                                                                                                 // 372
                case "monthOfYear":                                                                              // 373
                    return "monthsOfYear";                                                                       // 374
                                                                                                                 // 375
                default:                                                                                         // 376
                    return measure;                                                                              // 377
            }                                                                                                    // 378
        }                                                                                                        // 379
                                                                                                                 // 380
        // Private funtion to see if all rules matche                                                            // 381
        function matchAllRules(rules, date, start) {                                                             // 382
            var i, len, rule, type;                                                                              // 383
                                                                                                                 // 384
            for ( i = 0, len = rules.length; i < len; i++ ) {                                                    // 385
                rule = rules[i];                                                                                 // 386
                type = ruleTypes[rule.measure];                                                                  // 387
                                                                                                                 // 388
                if (type === "interval") {                                                                       // 389
                    if ( !Interval.match(rule.measure, rule.units, start, date) ) {                              // 390
                        return false;                                                                            // 391
                    }                                                                                            // 392
                }                                                                                                // 393
                else if (type === "calendar") {                                                                  // 394
                    if ( !Calendar.match(rule.measure, rule.units, date) ) {                                     // 395
                        return false;                                                                            // 396
                    }                                                                                            // 397
                }                                                                                                // 398
                else {                                                                                           // 399
                    return false;                                                                                // 400
                }                                                                                                // 401
            }                                                                                                    // 402
                                                                                                                 // 403
            return true;                                                                                         // 404
        }                                                                                                        // 405
                                                                                                                 // 406
        // Private function to create measure functions                                                          // 407
        function createMeasure(measure) {                                                                        // 408
            return function(units) {                                                                             // 409
                this.every.call(this, units, measure);                                                           // 410
                return this;                                                                                     // 411
            };                                                                                                   // 412
        }                                                                                                        // 413
                                                                                                                 // 414
                                                                                                                 // 415
        //////////////////////                                                                                   // 416
        // Public Functions //                                                                                   // 417
        //////////////////////                                                                                   // 418
                                                                                                                 // 419
        // Recur Object Constrcutor                                                                              // 420
        var Recur = function(options) {                                                                          // 421
            if ( options.start ) {                                                                               // 422
                this.start = moment(options.start).dateOnly();                                                   // 423
            }                                                                                                    // 424
                                                                                                                 // 425
            if ( options.end ) {                                                                                 // 426
                this.end = moment(options.end).dateOnly();                                                       // 427
            }                                                                                                    // 428
                                                                                                                 // 429
            // Our list of rules, all of which must match                                                        // 430
            this.rules = options.rules || [];                                                                    // 431
                                                                                                                 // 432
            // Our list of exceptions. Match always fails on these dates.                                        // 433
            this.exceptions = options.exceptions || [];                                                          // 434
                                                                                                                 // 435
            // Temporary units integer, array, or object. Does not get imported/exported.                        // 436
            this.units = null;                                                                                   // 437
                                                                                                                 // 438
            // Tempoarary measure type. Does not get imported/exported.                                          // 439
            this.measure = null;                                                                                 // 440
                                                                                                                 // 441
            // Tempoarary from date for next/previous. Does not get imported/exported.                           // 442
            this.from = null;                                                                                    // 443
                                                                                                                 // 444
            return this;                                                                                         // 445
        };                                                                                                       // 446
                                                                                                                 // 447
        // Get/Set start date                                                                                    // 448
        Recur.prototype.startDate = function(date) {                                                             // 449
            if (date === null) {                                                                                 // 450
                this.start = null;                                                                               // 451
                return this;                                                                                     // 452
            }                                                                                                    // 453
                                                                                                                 // 454
            if (date) {                                                                                          // 455
                this.start = moment(date).dateOnly();                                                            // 456
                return this;                                                                                     // 457
            }                                                                                                    // 458
                                                                                                                 // 459
            return this.start;                                                                                   // 460
        };                                                                                                       // 461
                                                                                                                 // 462
        // Get/Set end date                                                                                      // 463
        Recur.prototype.endDate = function(date) {                                                               // 464
            if (date === null) {                                                                                 // 465
                this.end = null;                                                                                 // 466
                return this;                                                                                     // 467
            }                                                                                                    // 468
                                                                                                                 // 469
            if (date) {                                                                                          // 470
                this.end = moment(date).dateOnly();                                                              // 471
                return this;                                                                                     // 472
            }                                                                                                    // 473
                                                                                                                 // 474
            return this.end;                                                                                     // 475
        };                                                                                                       // 476
                                                                                                                 // 477
        // Get/Set a temporary from date                                                                         // 478
        Recur.prototype.fromDate = function(date) {                                                              // 479
             if (date === null) {                                                                                // 480
                this.from = null;                                                                                // 481
                return this;                                                                                     // 482
            }                                                                                                    // 483
                                                                                                                 // 484
            if (date) {                                                                                          // 485
                this.from = moment(date).dateOnly();                                                             // 486
                return this;                                                                                     // 487
            }                                                                                                    // 488
                                                                                                                 // 489
            return this.from;                                                                                    // 490
        };                                                                                                       // 491
                                                                                                                 // 492
        // Export the settings, rules, and exceptions of this recurring date                                     // 493
        Recur.prototype.save = function() {                                                                      // 494
            var data = {};                                                                                       // 495
                                                                                                                 // 496
            if (this.start && moment(this.start).isValid()) {                                                    // 497
                data.start = this.start.format("L");                                                             // 498
            }                                                                                                    // 499
                                                                                                                 // 500
            if (this.end && moment(this.end).isValid()) {                                                        // 501
                data.end = this.end.format("L");                                                                 // 502
            }                                                                                                    // 503
                                                                                                                 // 504
            data.exceptions = [];                                                                                // 505
            for (var i = 0, len = this.exceptions.length; i < len; i++) {                                        // 506
                data.exceptions.push(this.exceptions[i].format("L"));                                            // 507
            }                                                                                                    // 508
                                                                                                                 // 509
            data.rules = this.rules;                                                                             // 510
                                                                                                                 // 511
            return data;                                                                                         // 512
        };                                                                                                       // 513
                                                                                                                 // 514
        // Return boolean value based on whether this date repeats (has rules or not)                            // 515
        Recur.prototype.repeats = function() {                                                                   // 516
            if (this.rules.length > 0) {                                                                         // 517
                return true;                                                                                     // 518
            }                                                                                                    // 519
                                                                                                                 // 520
            return false;                                                                                        // 521
        };                                                                                                       // 522
                                                                                                                 // 523
        // Set the units and, optionally, the measure                                                            // 524
        Recur.prototype.every = function(units, measure) {                                                       // 525
                                                                                                                 // 526
            if ((typeof units !== "undefined") && (units !== null)) {                                            // 527
                this.units = unitsToObject(units);                                                               // 528
            }                                                                                                    // 529
                                                                                                                 // 530
            if ((typeof measure !== "undefined") && (measure !== null)) {                                        // 531
                this.measure = pluralize(measure);                                                               // 532
            }                                                                                                    // 533
                                                                                                                 // 534
            return trigger.call(this);                                                                           // 535
        };                                                                                                       // 536
                                                                                                                 // 537
        // Creates an exception date to prevent matches, even if rules match                                     // 538
        Recur.prototype.except = function(date) {                                                                // 539
            date = moment(date).dateOnly();                                                                      // 540
            this.exceptions.push(date);                                                                          // 541
            return this;                                                                                         // 542
        };                                                                                                       // 543
                                                                                                                 // 544
        // Forgets rules (by passing measure) and exceptions (by passing date)                                   // 545
        Recur.prototype.forget = function(dateOrRule) {                                                          // 546
            var i, len;                                                                                          // 547
            var whatMoment = moment(dateOrRule);                                                                 // 548
                                                                                                                 // 549
            // If valid date, try to remove it from exceptions                                                   // 550
            if (whatMoment.isValid()) {                                                                          // 551
                for (i = 0, len = this.exceptions.length; i < len; i++) {                                        // 552
                    if (whatMoment.isSame(this.exceptions[i])) {                                                 // 553
                        this.exceptions.splice(i, 1);                                                            // 554
                        return this;                                                                             // 555
                    }                                                                                            // 556
                }                                                                                                // 557
                                                                                                                 // 558
                return this;                                                                                     // 559
            }                                                                                                    // 560
                                                                                                                 // 561
            // Otherwise, try to remove it from the rules                                                        // 562
            for (i = 0, len = this.rules.length; i < len; i++) {                                                 // 563
                if (this.rules[i].measure === pluralize(dateOrRule)) {                                           // 564
                    this.rules.splice(i, 1);                                                                     // 565
                }                                                                                                // 566
            }                                                                                                    // 567
        };                                                                                                       // 568
                                                                                                                 // 569
        // Attempts to match a date to the rules                                                                 // 570
        Recur.prototype.matches = function(dateToMatch, ignoreStartEnd) {                                        // 571
            var date = moment(dateToMatch).dateOnly();                                                           // 572
                                                                                                                 // 573
            if (!date.isValid()) {                                                                               // 574
                throw Error("Invalid date supplied to match method: " + dateToMatch);                            // 575
            }                                                                                                    // 576
                                                                                                                 // 577
            if (!ignoreStartEnd && !inRange(this.start, this.end, date)) { return false }                        // 578
                                                                                                                 // 579
            if (isException(this.exceptions, date)) { return false; }                                            // 580
                                                                                                                 // 581
            if (!matchAllRules(this.rules, date, this.start)) { return false; }                                  // 582
                                                                                                                 // 583
            // if we passed everything above, then this date matches                                             // 584
            return true;                                                                                         // 585
        };                                                                                                       // 586
                                                                                                                 // 587
        // Get next N occurances                                                                                 // 588
        Recur.prototype.next = function(num, format) {                                                           // 589
            return getOccurances.call(this, num, format, "next");                                                // 590
        };                                                                                                       // 591
                                                                                                                 // 592
        // Get previous N occurances                                                                             // 593
        Recur.prototype.previous = function(num, format) {                                                       // 594
            return getOccurances.call(this, num, format, "previous");                                            // 595
        };                                                                                                       // 596
                                                                                                                 // 597
        // Get all occurances between start and end date                                                         // 598
        Recur.prototype.all = function(format) {                                                                 // 599
            return getOccurances.call(this, null, format, "all");                                                // 600
        };                                                                                                       // 601
                                                                                                                 // 602
        // Create the measure functions (days(), months(), daysOfMonth(), monthsOfYear(), etc.)                  // 603
        for (var measure in measures) {                                                                          // 604
            if (ruleTypes.hasOwnProperty(measure)) {                                                             // 605
                Recur.prototype[measure] = Recur.prototype[measures[measure]] = createMeasure(measure);          // 606
            }                                                                                                    // 607
        }                                                                                                        // 608
                                                                                                                 // 609
        return Recur;                                                                                            // 610
    }());                                                                                                        // 611
                                                                                                                 // 612
    // Recur can be created the following ways:                                                                  // 613
    // moment.recur()                                                                                            // 614
    // moment.recur(options)                                                                                     // 615
    // moment.recur(start)                                                                                       // 616
    // moment.recur(start, end)                                                                                  // 617
    moment.recur = function(start, end) {                                                                        // 618
        // If we have an object, use it as a set of options                                                      // 619
        if ( start === Object(start) && !moment.isMoment(start)) {                                               // 620
            return new Recur( start );                                                                           // 621
        }                                                                                                        // 622
                                                                                                                 // 623
        // else, use the values passed                                                                           // 624
        return new Recur({ start: start, end: end });                                                            // 625
    };                                                                                                           // 626
                                                                                                                 // 627
    // Recur can also be created the following ways:                                                             // 628
    // moment().recur()                                                                                          // 629
    // moment().recur(options)                                                                                   // 630
    // moment().recur(start, end)                                                                                // 631
    // moment(start).recur(end)                                                                                  // 632
    // moment().recur(end)                                                                                       // 633
    moment.fn.recur = function(start, end) {                                                                     // 634
        // If we have an object, use it as a set of options                                                      // 635
        if ( start === Object(start) && !moment.isMoment(start)) {                                               // 636
            // if we have no start date, use the moment                                                          // 637
            if ( typeof start.start === 'undefined' ) {                                                          // 638
                start.start = this;                                                                              // 639
            }                                                                                                    // 640
                                                                                                                 // 641
            return new Recur( start );                                                                           // 642
        }                                                                                                        // 643
                                                                                                                 // 644
        // if there is no end value, use the start value as the end                                              // 645
        if ( !end ) {                                                                                            // 646
            end = start;                                                                                         // 647
            start = undefined;                                                                                   // 648
        }                                                                                                        // 649
                                                                                                                 // 650
        // use the moment for the start value                                                                    // 651
        if (!start) {                                                                                            // 652
            start = this;                                                                                        // 653
        }                                                                                                        // 654
                                                                                                                 // 655
        return new Recur({ start: start, end: end, moment: this });                                              // 656
    };                                                                                                           // 657
                                                                                                                 // 658
    // Plugin for calculating the week of the month of a date                                                    // 659
    moment.fn.monthWeek = function() {                                                                           // 660
        // First day of the first week of the month                                                              // 661
        var week0 = this.clone().startOf("month").startOf("week");                                               // 662
                                                                                                                 // 663
        // First day of week                                                                                     // 664
        var day0 = this.clone().startOf("week");                                                                 // 665
                                                                                                                 // 666
        return day0.diff(week0, "weeks");                                                                        // 667
    };                                                                                                           // 668
                                                                                                                 // 669
    // Plugin for removing all time information from a given date                                                // 670
    moment.fn.dateOnly = function() {                                                                            // 671
        return this.hours(0).minutes(0).seconds(0).milliseconds(0);                                              // 672
    };                                                                                                           // 673
                                                                                                                 // 674
                                                                                                                 // 675
    return moment;                                                                                               // 676
}));                                                                                                             // 677
                                                                                                                 // 678
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 687
                                                                                                                       // 688
}).call(this);                                                                                                         // 689
                                                                                                                       // 690
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['adelq:moment-recur'] = {};

})();
