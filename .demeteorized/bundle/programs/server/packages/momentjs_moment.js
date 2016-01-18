(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/momentjs_moment/moment.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
//! moment.js                                                                                                          // 1
//! version : 2.11.0                                                                                                   // 2
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors                                                         // 3
//! license : MIT                                                                                                      // 4
//! momentjs.com                                                                                                       // 5
                                                                                                                       // 6
;(function (global, factory) {                                                                                         // 7
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :                        // 8
    typeof define === 'function' && define.amd ? define(factory) :                                                     // 9
    global.moment = factory()                                                                                          // 10
}(this, function () { 'use strict';                                                                                    // 11
                                                                                                                       // 12
    var hookCallback;                                                                                                  // 13
                                                                                                                       // 14
    function utils_hooks__hooks () {                                                                                   // 15
        return hookCallback.apply(null, arguments);                                                                    // 16
    }                                                                                                                  // 17
                                                                                                                       // 18
    // This is done to register the method called with moment()                                                        // 19
    // without creating circular dependencies.                                                                         // 20
    function setHookCallback (callback) {                                                                              // 21
        hookCallback = callback;                                                                                       // 22
    }                                                                                                                  // 23
                                                                                                                       // 24
    function isArray(input) {                                                                                          // 25
        return Object.prototype.toString.call(input) === '[object Array]';                                             // 26
    }                                                                                                                  // 27
                                                                                                                       // 28
    function isDate(input) {                                                                                           // 29
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';                     // 30
    }                                                                                                                  // 31
                                                                                                                       // 32
    function map(arr, fn) {                                                                                            // 33
        var res = [], i;                                                                                               // 34
        for (i = 0; i < arr.length; ++i) {                                                                             // 35
            res.push(fn(arr[i], i));                                                                                   // 36
        }                                                                                                              // 37
        return res;                                                                                                    // 38
    }                                                                                                                  // 39
                                                                                                                       // 40
    function hasOwnProp(a, b) {                                                                                        // 41
        return Object.prototype.hasOwnProperty.call(a, b);                                                             // 42
    }                                                                                                                  // 43
                                                                                                                       // 44
    function extend(a, b) {                                                                                            // 45
        for (var i in b) {                                                                                             // 46
            if (hasOwnProp(b, i)) {                                                                                    // 47
                a[i] = b[i];                                                                                           // 48
            }                                                                                                          // 49
        }                                                                                                              // 50
                                                                                                                       // 51
        if (hasOwnProp(b, 'toString')) {                                                                               // 52
            a.toString = b.toString;                                                                                   // 53
        }                                                                                                              // 54
                                                                                                                       // 55
        if (hasOwnProp(b, 'valueOf')) {                                                                                // 56
            a.valueOf = b.valueOf;                                                                                     // 57
        }                                                                                                              // 58
                                                                                                                       // 59
        return a;                                                                                                      // 60
    }                                                                                                                  // 61
                                                                                                                       // 62
    function create_utc__createUTC (input, format, locale, strict) {                                                   // 63
        return createLocalOrUTC(input, format, locale, strict, true).utc();                                            // 64
    }                                                                                                                  // 65
                                                                                                                       // 66
    function defaultParsingFlags() {                                                                                   // 67
        // We need to deep clone this object.                                                                          // 68
        return {                                                                                                       // 69
            empty           : false,                                                                                   // 70
            unusedTokens    : [],                                                                                      // 71
            unusedInput     : [],                                                                                      // 72
            overflow        : -2,                                                                                      // 73
            charsLeftOver   : 0,                                                                                       // 74
            nullInput       : false,                                                                                   // 75
            invalidMonth    : null,                                                                                    // 76
            invalidFormat   : false,                                                                                   // 77
            userInvalidated : false,                                                                                   // 78
            iso             : false                                                                                    // 79
        };                                                                                                             // 80
    }                                                                                                                  // 81
                                                                                                                       // 82
    function getParsingFlags(m) {                                                                                      // 83
        if (m._pf == null) {                                                                                           // 84
            m._pf = defaultParsingFlags();                                                                             // 85
        }                                                                                                              // 86
        return m._pf;                                                                                                  // 87
    }                                                                                                                  // 88
                                                                                                                       // 89
    function valid__isValid(m) {                                                                                       // 90
        if (m._isValid == null) {                                                                                      // 91
            var flags = getParsingFlags(m);                                                                            // 92
            m._isValid = !isNaN(m._d.getTime()) &&                                                                     // 93
                flags.overflow < 0 &&                                                                                  // 94
                !flags.empty &&                                                                                        // 95
                !flags.invalidMonth &&                                                                                 // 96
                !flags.invalidWeekday &&                                                                               // 97
                !flags.nullInput &&                                                                                    // 98
                !flags.invalidFormat &&                                                                                // 99
                !flags.userInvalidated;                                                                                // 100
                                                                                                                       // 101
            if (m._strict) {                                                                                           // 102
                m._isValid = m._isValid &&                                                                             // 103
                    flags.charsLeftOver === 0 &&                                                                       // 104
                    flags.unusedTokens.length === 0 &&                                                                 // 105
                    flags.bigHour === undefined;                                                                       // 106
            }                                                                                                          // 107
        }                                                                                                              // 108
        return m._isValid;                                                                                             // 109
    }                                                                                                                  // 110
                                                                                                                       // 111
    function valid__createInvalid (flags) {                                                                            // 112
        var m = create_utc__createUTC(NaN);                                                                            // 113
        if (flags != null) {                                                                                           // 114
            extend(getParsingFlags(m), flags);                                                                         // 115
        }                                                                                                              // 116
        else {                                                                                                         // 117
            getParsingFlags(m).userInvalidated = true;                                                                 // 118
        }                                                                                                              // 119
                                                                                                                       // 120
        return m;                                                                                                      // 121
    }                                                                                                                  // 122
                                                                                                                       // 123
    function isUndefined(input) {                                                                                      // 124
        return input === void 0;                                                                                       // 125
    }                                                                                                                  // 126
                                                                                                                       // 127
    // Plugins that add properties should also add the key here (null value),                                          // 128
    // so we can properly clone ourselves.                                                                             // 129
    var momentProperties = utils_hooks__hooks.momentProperties = [];                                                   // 130
                                                                                                                       // 131
    function copyConfig(to, from) {                                                                                    // 132
        var i, prop, val;                                                                                              // 133
                                                                                                                       // 134
        if (!isUndefined(from._isAMomentObject)) {                                                                     // 135
            to._isAMomentObject = from._isAMomentObject;                                                               // 136
        }                                                                                                              // 137
        if (!isUndefined(from._i)) {                                                                                   // 138
            to._i = from._i;                                                                                           // 139
        }                                                                                                              // 140
        if (!isUndefined(from._f)) {                                                                                   // 141
            to._f = from._f;                                                                                           // 142
        }                                                                                                              // 143
        if (!isUndefined(from._l)) {                                                                                   // 144
            to._l = from._l;                                                                                           // 145
        }                                                                                                              // 146
        if (!isUndefined(from._strict)) {                                                                              // 147
            to._strict = from._strict;                                                                                 // 148
        }                                                                                                              // 149
        if (!isUndefined(from._tzm)) {                                                                                 // 150
            to._tzm = from._tzm;                                                                                       // 151
        }                                                                                                              // 152
        if (!isUndefined(from._isUTC)) {                                                                               // 153
            to._isUTC = from._isUTC;                                                                                   // 154
        }                                                                                                              // 155
        if (!isUndefined(from._offset)) {                                                                              // 156
            to._offset = from._offset;                                                                                 // 157
        }                                                                                                              // 158
        if (!isUndefined(from._pf)) {                                                                                  // 159
            to._pf = getParsingFlags(from);                                                                            // 160
        }                                                                                                              // 161
        if (!isUndefined(from._locale)) {                                                                              // 162
            to._locale = from._locale;                                                                                 // 163
        }                                                                                                              // 164
                                                                                                                       // 165
        if (momentProperties.length > 0) {                                                                             // 166
            for (i in momentProperties) {                                                                              // 167
                prop = momentProperties[i];                                                                            // 168
                val = from[prop];                                                                                      // 169
                if (!isUndefined(val)) {                                                                               // 170
                    to[prop] = val;                                                                                    // 171
                }                                                                                                      // 172
            }                                                                                                          // 173
        }                                                                                                              // 174
                                                                                                                       // 175
        return to;                                                                                                     // 176
    }                                                                                                                  // 177
                                                                                                                       // 178
    var updateInProgress = false;                                                                                      // 179
                                                                                                                       // 180
    // Moment prototype object                                                                                         // 181
    function Moment(config) {                                                                                          // 182
        copyConfig(this, config);                                                                                      // 183
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);                                             // 184
        // Prevent infinite loop in case updateOffset creates new moment                                               // 185
        // objects.                                                                                                    // 186
        if (updateInProgress === false) {                                                                              // 187
            updateInProgress = true;                                                                                   // 188
            utils_hooks__hooks.updateOffset(this);                                                                     // 189
            updateInProgress = false;                                                                                  // 190
        }                                                                                                              // 191
    }                                                                                                                  // 192
                                                                                                                       // 193
    function isMoment (obj) {                                                                                          // 194
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);                                 // 195
    }                                                                                                                  // 196
                                                                                                                       // 197
    function absFloor (number) {                                                                                       // 198
        if (number < 0) {                                                                                              // 199
            return Math.ceil(number);                                                                                  // 200
        } else {                                                                                                       // 201
            return Math.floor(number);                                                                                 // 202
        }                                                                                                              // 203
    }                                                                                                                  // 204
                                                                                                                       // 205
    function toInt(argumentForCoercion) {                                                                              // 206
        var coercedNumber = +argumentForCoercion,                                                                      // 207
            value = 0;                                                                                                 // 208
                                                                                                                       // 209
        if (coercedNumber !== 0 && isFinite(coercedNumber)) {                                                          // 210
            value = absFloor(coercedNumber);                                                                           // 211
        }                                                                                                              // 212
                                                                                                                       // 213
        return value;                                                                                                  // 214
    }                                                                                                                  // 215
                                                                                                                       // 216
    // compare two arrays, return the number of differences                                                            // 217
    function compareArrays(array1, array2, dontConvert) {                                                              // 218
        var len = Math.min(array1.length, array2.length),                                                              // 219
            lengthDiff = Math.abs(array1.length - array2.length),                                                      // 220
            diffs = 0,                                                                                                 // 221
            i;                                                                                                         // 222
        for (i = 0; i < len; i++) {                                                                                    // 223
            if ((dontConvert && array1[i] !== array2[i]) ||                                                            // 224
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {                                             // 225
                diffs++;                                                                                               // 226
            }                                                                                                          // 227
        }                                                                                                              // 228
        return diffs + lengthDiff;                                                                                     // 229
    }                                                                                                                  // 230
                                                                                                                       // 231
    function Locale() {                                                                                                // 232
    }                                                                                                                  // 233
                                                                                                                       // 234
    // internal storage for locale config files                                                                        // 235
    var locales = {};                                                                                                  // 236
    var globalLocale;                                                                                                  // 237
                                                                                                                       // 238
    function normalizeLocale(key) {                                                                                    // 239
        return key ? key.toLowerCase().replace('_', '-') : key;                                                        // 240
    }                                                                                                                  // 241
                                                                                                                       // 242
    // pick the locale from the array                                                                                  // 243
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each                       // 244
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {                                                                                     // 246
        var i = 0, j, next, locale, split;                                                                             // 247
                                                                                                                       // 248
        while (i < names.length) {                                                                                     // 249
            split = normalizeLocale(names[i]).split('-');                                                              // 250
            j = split.length;                                                                                          // 251
            next = normalizeLocale(names[i + 1]);                                                                      // 252
            next = next ? next.split('-') : null;                                                                      // 253
            while (j > 0) {                                                                                            // 254
                locale = loadLocale(split.slice(0, j).join('-'));                                                      // 255
                if (locale) {                                                                                          // 256
                    return locale;                                                                                     // 257
                }                                                                                                      // 258
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {                           // 259
                    //the next array item is better than a shallower substring of this one                             // 260
                    break;                                                                                             // 261
                }                                                                                                      // 262
                j--;                                                                                                   // 263
            }                                                                                                          // 264
            i++;                                                                                                       // 265
        }                                                                                                              // 266
        return null;                                                                                                   // 267
    }                                                                                                                  // 268
                                                                                                                       // 269
    function loadLocale(name) {                                                                                        // 270
        var oldLocale = null;                                                                                          // 271
        // TODO: Find a better way to register and load all the locales in Node                                        // 272
        if (!locales[name] && !isUndefined(module) &&                                                                  // 273
                module && module.exports) {                                                                            // 274
            try {                                                                                                      // 275
                oldLocale = globalLocale._abbr;                                                                        // 276
                require('./locale/' + name);                                                                           // 277
                // because defineLocale currently also sets the global locale, we                                      // 278
                // want to undo that for lazy loaded locales                                                           // 279
                locale_locales__getSetGlobalLocale(oldLocale);                                                         // 280
            } catch (e) { }                                                                                            // 281
        }                                                                                                              // 282
        return locales[name];                                                                                          // 283
    }                                                                                                                  // 284
                                                                                                                       // 285
    // This function will load locale and then set the global locale.  If                                              // 286
    // no arguments are passed in, it will simply return the current global                                            // 287
    // locale key.                                                                                                     // 288
    function locale_locales__getSetGlobalLocale (key, values) {                                                        // 289
        var data;                                                                                                      // 290
        if (key) {                                                                                                     // 291
            if (isUndefined(values)) {                                                                                 // 292
                data = locale_locales__getLocale(key);                                                                 // 293
            }                                                                                                          // 294
            else {                                                                                                     // 295
                data = defineLocale(key, values);                                                                      // 296
            }                                                                                                          // 297
                                                                                                                       // 298
            if (data) {                                                                                                // 299
                // moment.duration._locale = moment._locale = data;                                                    // 300
                globalLocale = data;                                                                                   // 301
            }                                                                                                          // 302
        }                                                                                                              // 303
                                                                                                                       // 304
        return globalLocale._abbr;                                                                                     // 305
    }                                                                                                                  // 306
                                                                                                                       // 307
    function defineLocale (name, values) {                                                                             // 308
        if (values !== null) {                                                                                         // 309
            values.abbr = name;                                                                                        // 310
            locales[name] = locales[name] || new Locale();                                                             // 311
            locales[name].set(values);                                                                                 // 312
                                                                                                                       // 313
            // backwards compat for now: also set the locale                                                           // 314
            locale_locales__getSetGlobalLocale(name);                                                                  // 315
                                                                                                                       // 316
            return locales[name];                                                                                      // 317
        } else {                                                                                                       // 318
            // useful for testing                                                                                      // 319
            delete locales[name];                                                                                      // 320
            return null;                                                                                               // 321
        }                                                                                                              // 322
    }                                                                                                                  // 323
                                                                                                                       // 324
    // returns locale data                                                                                             // 325
    function locale_locales__getLocale (key) {                                                                         // 326
        var locale;                                                                                                    // 327
                                                                                                                       // 328
        if (key && key._locale && key._locale._abbr) {                                                                 // 329
            key = key._locale._abbr;                                                                                   // 330
        }                                                                                                              // 331
                                                                                                                       // 332
        if (!key) {                                                                                                    // 333
            return globalLocale;                                                                                       // 334
        }                                                                                                              // 335
                                                                                                                       // 336
        if (!isArray(key)) {                                                                                           // 337
            //short-circuit everything else                                                                            // 338
            locale = loadLocale(key);                                                                                  // 339
            if (locale) {                                                                                              // 340
                return locale;                                                                                         // 341
            }                                                                                                          // 342
            key = [key];                                                                                               // 343
        }                                                                                                              // 344
                                                                                                                       // 345
        return chooseLocale(key);                                                                                      // 346
    }                                                                                                                  // 347
                                                                                                                       // 348
    var aliases = {};                                                                                                  // 349
                                                                                                                       // 350
    function addUnitAlias (unit, shorthand) {                                                                          // 351
        var lowerCase = unit.toLowerCase();                                                                            // 352
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;                                     // 353
    }                                                                                                                  // 354
                                                                                                                       // 355
    function normalizeUnits(units) {                                                                                   // 356
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;                 // 357
    }                                                                                                                  // 358
                                                                                                                       // 359
    function normalizeObjectUnits(inputObject) {                                                                       // 360
        var normalizedInput = {},                                                                                      // 361
            normalizedProp,                                                                                            // 362
            prop;                                                                                                      // 363
                                                                                                                       // 364
        for (prop in inputObject) {                                                                                    // 365
            if (hasOwnProp(inputObject, prop)) {                                                                       // 366
                normalizedProp = normalizeUnits(prop);                                                                 // 367
                if (normalizedProp) {                                                                                  // 368
                    normalizedInput[normalizedProp] = inputObject[prop];                                               // 369
                }                                                                                                      // 370
            }                                                                                                          // 371
        }                                                                                                              // 372
                                                                                                                       // 373
        return normalizedInput;                                                                                        // 374
    }                                                                                                                  // 375
                                                                                                                       // 376
    function isFunction(input) {                                                                                       // 377
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';             // 378
    }                                                                                                                  // 379
                                                                                                                       // 380
    function makeGetSet (unit, keepTime) {                                                                             // 381
        return function (value) {                                                                                      // 382
            if (value != null) {                                                                                       // 383
                get_set__set(this, unit, value);                                                                       // 384
                utils_hooks__hooks.updateOffset(this, keepTime);                                                       // 385
                return this;                                                                                           // 386
            } else {                                                                                                   // 387
                return get_set__get(this, unit);                                                                       // 388
            }                                                                                                          // 389
        };                                                                                                             // 390
    }                                                                                                                  // 391
                                                                                                                       // 392
    function get_set__get (mom, unit) {                                                                                // 393
        return mom.isValid() ?                                                                                         // 394
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;                                                  // 395
    }                                                                                                                  // 396
                                                                                                                       // 397
    function get_set__set (mom, unit, value) {                                                                         // 398
        if (mom.isValid()) {                                                                                           // 399
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);                                                   // 400
        }                                                                                                              // 401
    }                                                                                                                  // 402
                                                                                                                       // 403
    // MOMENTS                                                                                                         // 404
                                                                                                                       // 405
    function getSet (units, value) {                                                                                   // 406
        var unit;                                                                                                      // 407
        if (typeof units === 'object') {                                                                               // 408
            for (unit in units) {                                                                                      // 409
                this.set(unit, units[unit]);                                                                           // 410
            }                                                                                                          // 411
        } else {                                                                                                       // 412
            units = normalizeUnits(units);                                                                             // 413
            if (isFunction(this[units])) {                                                                             // 414
                return this[units](value);                                                                             // 415
            }                                                                                                          // 416
        }                                                                                                              // 417
        return this;                                                                                                   // 418
    }                                                                                                                  // 419
                                                                                                                       // 420
    function zeroFill(number, targetLength, forceSign) {                                                               // 421
        var absNumber = '' + Math.abs(number),                                                                         // 422
            zerosToFill = targetLength - absNumber.length,                                                             // 423
            sign = number >= 0;                                                                                        // 424
        return (sign ? (forceSign ? '+' : '') : '-') +                                                                 // 425
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;                                   // 426
    }                                                                                                                  // 427
                                                                                                                       // 428
    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
                                                                                                                       // 430
    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;                                          // 431
                                                                                                                       // 432
    var formatFunctions = {};                                                                                          // 433
                                                                                                                       // 434
    var formatTokenFunctions = {};                                                                                     // 435
                                                                                                                       // 436
    // token:    'M'                                                                                                   // 437
    // padded:   ['MM', 2]                                                                                             // 438
    // ordinal:  'Mo'                                                                                                  // 439
    // callback: function () { this.month() + 1 }                                                                      // 440
    function addFormatToken (token, padded, ordinal, callback) {                                                       // 441
        var func = callback;                                                                                           // 442
        if (typeof callback === 'string') {                                                                            // 443
            func = function () {                                                                                       // 444
                return this[callback]();                                                                               // 445
            };                                                                                                         // 446
        }                                                                                                              // 447
        if (token) {                                                                                                   // 448
            formatTokenFunctions[token] = func;                                                                        // 449
        }                                                                                                              // 450
        if (padded) {                                                                                                  // 451
            formatTokenFunctions[padded[0]] = function () {                                                            // 452
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);                                    // 453
            };                                                                                                         // 454
        }                                                                                                              // 455
        if (ordinal) {                                                                                                 // 456
            formatTokenFunctions[ordinal] = function () {                                                              // 457
                return this.localeData().ordinal(func.apply(this, arguments), token);                                  // 458
            };                                                                                                         // 459
        }                                                                                                              // 460
    }                                                                                                                  // 461
                                                                                                                       // 462
    function removeFormattingTokens(input) {                                                                           // 463
        if (input.match(/\[[\s\S]/)) {                                                                                 // 464
            return input.replace(/^\[|\]$/g, '');                                                                      // 465
        }                                                                                                              // 466
        return input.replace(/\\/g, '');                                                                               // 467
    }                                                                                                                  // 468
                                                                                                                       // 469
    function makeFormatFunction(format) {                                                                              // 470
        var array = format.match(formattingTokens), i, length;                                                         // 471
                                                                                                                       // 472
        for (i = 0, length = array.length; i < length; i++) {                                                          // 473
            if (formatTokenFunctions[array[i]]) {                                                                      // 474
                array[i] = formatTokenFunctions[array[i]];                                                             // 475
            } else {                                                                                                   // 476
                array[i] = removeFormattingTokens(array[i]);                                                           // 477
            }                                                                                                          // 478
        }                                                                                                              // 479
                                                                                                                       // 480
        return function (mom) {                                                                                        // 481
            var output = '';                                                                                           // 482
            for (i = 0; i < length; i++) {                                                                             // 483
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];                        // 484
            }                                                                                                          // 485
            return output;                                                                                             // 486
        };                                                                                                             // 487
    }                                                                                                                  // 488
                                                                                                                       // 489
    // format date using native date object                                                                            // 490
    function formatMoment(m, format) {                                                                                 // 491
        if (!m.isValid()) {                                                                                            // 492
            return m.localeData().invalidDate();                                                                       // 493
        }                                                                                                              // 494
                                                                                                                       // 495
        format = expandFormat(format, m.localeData());                                                                 // 496
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);                               // 497
                                                                                                                       // 498
        return formatFunctions[format](m);                                                                             // 499
    }                                                                                                                  // 500
                                                                                                                       // 501
    function expandFormat(format, locale) {                                                                            // 502
        var i = 5;                                                                                                     // 503
                                                                                                                       // 504
        function replaceLongDateFormatTokens(input) {                                                                  // 505
            return locale.longDateFormat(input) || input;                                                              // 506
        }                                                                                                              // 507
                                                                                                                       // 508
        localFormattingTokens.lastIndex = 0;                                                                           // 509
        while (i >= 0 && localFormattingTokens.test(format)) {                                                         // 510
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);                               // 511
            localFormattingTokens.lastIndex = 0;                                                                       // 512
            i -= 1;                                                                                                    // 513
        }                                                                                                              // 514
                                                                                                                       // 515
        return format;                                                                                                 // 516
    }                                                                                                                  // 517
                                                                                                                       // 518
    var match1         = /\d/;            //       0 - 9                                                               // 519
    var match2         = /\d\d/;          //      00 - 99                                                              // 520
    var match3         = /\d{3}/;         //     000 - 999                                                             // 521
    var match4         = /\d{4}/;         //    0000 - 9999                                                            // 522
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999                                                          // 523
    var match1to2      = /\d\d?/;         //       0 - 99                                                              // 524
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999                                                            // 525
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999                                                          // 526
    var match1to3      = /\d{1,3}/;       //       0 - 999                                                             // 527
    var match1to4      = /\d{1,4}/;       //       0 - 9999                                                            // 528
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999                                                          // 529
                                                                                                                       // 530
    var matchUnsigned  = /\d+/;           //       0 - inf                                                             // 531
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf                                                             // 532
                                                                                                                       // 533
    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z                                       // 534
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z                        // 535
                                                                                                                       // 536
    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123                                            // 537
                                                                                                                       // 538
    // any word (or two) characters or numbers including two/three word month in arabic.                               // 539
    // includes scottish gaelic two word and hyphenated months                                                         // 540
    var matchWord = /[0-9]*(a[mn]\s?)?['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\-]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
                                                                                                                       // 542
                                                                                                                       // 543
    var regexes = {};                                                                                                  // 544
                                                                                                                       // 545
    function addRegexToken (token, regex, strictRegex) {                                                               // 546
        regexes[token] = isFunction(regex) ? regex : function (isStrict) {                                             // 547
            return (isStrict && strictRegex) ? strictRegex : regex;                                                    // 548
        };                                                                                                             // 549
    }                                                                                                                  // 550
                                                                                                                       // 551
    function getParseRegexForToken (token, config) {                                                                   // 552
        if (!hasOwnProp(regexes, token)) {                                                                             // 553
            return new RegExp(unescapeFormat(token));                                                                  // 554
        }                                                                                                              // 555
                                                                                                                       // 556
        return regexes[token](config._strict, config._locale);                                                         // 557
    }                                                                                                                  // 558
                                                                                                                       // 559
    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript            // 560
    function unescapeFormat(s) {                                                                                       // 561
        return s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;                                                                               // 563
        }).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');                                                                  // 564
    }                                                                                                                  // 565
                                                                                                                       // 566
    var tokens = {};                                                                                                   // 567
                                                                                                                       // 568
    function addParseToken (token, callback) {                                                                         // 569
        var i, func = callback;                                                                                        // 570
        if (typeof token === 'string') {                                                                               // 571
            token = [token];                                                                                           // 572
        }                                                                                                              // 573
        if (typeof callback === 'number') {                                                                            // 574
            func = function (input, array) {                                                                           // 575
                array[callback] = toInt(input);                                                                        // 576
            };                                                                                                         // 577
        }                                                                                                              // 578
        for (i = 0; i < token.length; i++) {                                                                           // 579
            tokens[token[i]] = func;                                                                                   // 580
        }                                                                                                              // 581
    }                                                                                                                  // 582
                                                                                                                       // 583
    function addWeekParseToken (token, callback) {                                                                     // 584
        addParseToken(token, function (input, array, config, token) {                                                  // 585
            config._w = config._w || {};                                                                               // 586
            callback(input, config._w, config, token);                                                                 // 587
        });                                                                                                            // 588
    }                                                                                                                  // 589
                                                                                                                       // 590
    function addTimeToArrayFromToken(token, input, config) {                                                           // 591
        if (input != null && hasOwnProp(tokens, token)) {                                                              // 592
            tokens[token](input, config._a, config, token);                                                            // 593
        }                                                                                                              // 594
    }                                                                                                                  // 595
                                                                                                                       // 596
    var YEAR = 0;                                                                                                      // 597
    var MONTH = 1;                                                                                                     // 598
    var DATE = 2;                                                                                                      // 599
    var HOUR = 3;                                                                                                      // 600
    var MINUTE = 4;                                                                                                    // 601
    var SECOND = 5;                                                                                                    // 602
    var MILLISECOND = 6;                                                                                               // 603
    var WEEK = 7;                                                                                                      // 604
    var WEEKDAY = 8;                                                                                                   // 605
                                                                                                                       // 606
    function daysInMonth(year, month) {                                                                                // 607
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();                                                    // 608
    }                                                                                                                  // 609
                                                                                                                       // 610
    // FORMATTING                                                                                                      // 611
                                                                                                                       // 612
    addFormatToken('M', ['MM', 2], 'Mo', function () {                                                                 // 613
        return this.month() + 1;                                                                                       // 614
    });                                                                                                                // 615
                                                                                                                       // 616
    addFormatToken('MMM', 0, 0, function (format) {                                                                    // 617
        return this.localeData().monthsShort(this, format);                                                            // 618
    });                                                                                                                // 619
                                                                                                                       // 620
    addFormatToken('MMMM', 0, 0, function (format) {                                                                   // 621
        return this.localeData().months(this, format);                                                                 // 622
    });                                                                                                                // 623
                                                                                                                       // 624
    // ALIASES                                                                                                         // 625
                                                                                                                       // 626
    addUnitAlias('month', 'M');                                                                                        // 627
                                                                                                                       // 628
    // PARSING                                                                                                         // 629
                                                                                                                       // 630
    addRegexToken('M',    match1to2);                                                                                  // 631
    addRegexToken('MM',   match1to2, match2);                                                                          // 632
    addRegexToken('MMM',  matchWord);                                                                                  // 633
    addRegexToken('MMMM', matchWord);                                                                                  // 634
                                                                                                                       // 635
    addParseToken(['M', 'MM'], function (input, array) {                                                               // 636
        array[MONTH] = toInt(input) - 1;                                                                               // 637
    });                                                                                                                // 638
                                                                                                                       // 639
    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {                                            // 640
        var month = config._locale.monthsParse(input, token, config._strict);                                          // 641
        // if we didn't find a month name, mark the date as invalid.                                                   // 642
        if (month != null) {                                                                                           // 643
            array[MONTH] = month;                                                                                      // 644
        } else {                                                                                                       // 645
            getParsingFlags(config).invalidMonth = input;                                                              // 646
        }                                                                                                              // 647
    });                                                                                                                // 648
                                                                                                                       // 649
    // LOCALES                                                                                                         // 650
                                                                                                                       // 651
    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;                                                           // 652
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {                                                                                // 654
        return isArray(this._months) ? this._months[m.month()] :                                                       // 655
            this._months[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];                          // 656
    }                                                                                                                  // 657
                                                                                                                       // 658
    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sept_Oct_Nov_Dec'.split('_');                      // 659
    function localeMonthsShort (m, format) {                                                                           // 660
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :                                             // 661
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];                     // 662
    }                                                                                                                  // 663
                                                                                                                       // 664
    function localeMonthsParse (monthName, format, strict) {                                                           // 665
        var i, mom, regex;                                                                                             // 666
                                                                                                                       // 667
        if (!this._monthsParse) {                                                                                      // 668
            this._monthsParse = [];                                                                                    // 669
            this._longMonthsParse = [];                                                                                // 670
            this._shortMonthsParse = [];                                                                               // 671
        }                                                                                                              // 672
                                                                                                                       // 673
        for (i = 0; i < 12; i++) {                                                                                     // 674
            // make the regex if we don't have it already                                                              // 675
            mom = create_utc__createUTC([2000, i]);                                                                    // 676
            if (strict && !this._longMonthsParse[i]) {                                                                 // 677
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');         // 678
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');   // 679
            }                                                                                                          // 680
            if (!strict && !this._monthsParse[i]) {                                                                    // 681
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');                                 // 682
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');                                        // 683
            }                                                                                                          // 684
            // test the regex                                                                                          // 685
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {                             // 686
                return i;                                                                                              // 687
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {                      // 688
                return i;                                                                                              // 689
            } else if (!strict && this._monthsParse[i].test(monthName)) {                                              // 690
                return i;                                                                                              // 691
            }                                                                                                          // 692
        }                                                                                                              // 693
    }                                                                                                                  // 694
                                                                                                                       // 695
    // MOMENTS                                                                                                         // 696
                                                                                                                       // 697
    function setMonth (mom, value) {                                                                                   // 698
        var dayOfMonth;                                                                                                // 699
                                                                                                                       // 700
        if (!mom.isValid()) {                                                                                          // 701
            // No op                                                                                                   // 702
            return mom;                                                                                                // 703
        }                                                                                                              // 704
                                                                                                                       // 705
        // TODO: Move this out of here!                                                                                // 706
        if (typeof value === 'string') {                                                                               // 707
            value = mom.localeData().monthsParse(value);                                                               // 708
            // TODO: Another silent failure?                                                                           // 709
            if (typeof value !== 'number') {                                                                           // 710
                return mom;                                                                                            // 711
            }                                                                                                          // 712
        }                                                                                                              // 713
                                                                                                                       // 714
        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));                                             // 715
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);                                        // 716
        return mom;                                                                                                    // 717
    }                                                                                                                  // 718
                                                                                                                       // 719
    function getSetMonth (value) {                                                                                     // 720
        if (value != null) {                                                                                           // 721
            setMonth(this, value);                                                                                     // 722
            utils_hooks__hooks.updateOffset(this, true);                                                               // 723
            return this;                                                                                               // 724
        } else {                                                                                                       // 725
            return get_set__get(this, 'Month');                                                                        // 726
        }                                                                                                              // 727
    }                                                                                                                  // 728
                                                                                                                       // 729
    function getDaysInMonth () {                                                                                       // 730
        return daysInMonth(this.year(), this.month());                                                                 // 731
    }                                                                                                                  // 732
                                                                                                                       // 733
    function checkOverflow (m) {                                                                                       // 734
        var overflow;                                                                                                  // 735
        var a = m._a;                                                                                                  // 736
                                                                                                                       // 737
        if (a && getParsingFlags(m).overflow === -2) {                                                                 // 738
            overflow =                                                                                                 // 739
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :                                                   // 740
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :                         // 741
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :                                                  // 743
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :                                                  // 744
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :                                             // 745
                -1;                                                                                                    // 746
                                                                                                                       // 747
            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {                       // 748
                overflow = DATE;                                                                                       // 749
            }                                                                                                          // 750
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {                                                // 751
                overflow = WEEK;                                                                                       // 752
            }                                                                                                          // 753
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {                                              // 754
                overflow = WEEKDAY;                                                                                    // 755
            }                                                                                                          // 756
                                                                                                                       // 757
            getParsingFlags(m).overflow = overflow;                                                                    // 758
        }                                                                                                              // 759
                                                                                                                       // 760
        return m;                                                                                                      // 761
    }                                                                                                                  // 762
                                                                                                                       // 763
    function warn(msg) {                                                                                               // 764
        if (utils_hooks__hooks.suppressDeprecationWarnings === false && !isUndefined(console) && console.warn) {       // 765
            console.warn('Deprecation warning: ' + msg);                                                               // 766
        }                                                                                                              // 767
    }                                                                                                                  // 768
                                                                                                                       // 769
    function deprecate(msg, fn) {                                                                                      // 770
        var firstTime = true;                                                                                          // 771
                                                                                                                       // 772
        return extend(function () {                                                                                    // 773
            if (firstTime) {                                                                                           // 774
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(arguments).join(', ') + '\n' + (new Error()).stack);
                firstTime = false;                                                                                     // 776
            }                                                                                                          // 777
            return fn.apply(this, arguments);                                                                          // 778
        }, fn);                                                                                                        // 779
    }                                                                                                                  // 780
                                                                                                                       // 781
    var deprecations = {};                                                                                             // 782
                                                                                                                       // 783
    function deprecateSimple(name, msg) {                                                                              // 784
        if (!deprecations[name]) {                                                                                     // 785
            warn(msg);                                                                                                 // 786
            deprecations[name] = true;                                                                                 // 787
        }                                                                                                              // 788
    }                                                                                                                  // 789
                                                                                                                       // 790
    utils_hooks__hooks.suppressDeprecationWarnings = false;                                                            // 791
                                                                                                                       // 792
    // iso 8601 regex                                                                                                  // 793
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)       // 794
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
                                                                                                                       // 797
    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;                                                                             // 798
                                                                                                                       // 799
    var isoDates = [                                                                                                   // 800
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],                                                                       // 801
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],                                                                             // 802
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],                                                                            // 803
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],                                                                          // 804
        ['YYYY-DDD', /\d{4}-\d{3}/],                                                                                   // 805
        ['YYYY-MM', /\d{4}-\d\d/, false],                                                                              // 806
        ['YYYYYYMMDD', /[+-]\d{10}/],                                                                                  // 807
        ['YYYYMMDD', /\d{8}/],                                                                                         // 808
        // YYYYMM is NOT allowed by the standard                                                                       // 809
        ['GGGG[W]WWE', /\d{4}W\d{3}/],                                                                                 // 810
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],                                                                           // 811
        ['YYYYDDD', /\d{7}/]                                                                                           // 812
    ];                                                                                                                 // 813
                                                                                                                       // 814
    // iso time formats and regexes                                                                                    // 815
    var isoTimes = [                                                                                                   // 816
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],                                                                      // 817
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],                                                                       // 818
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],                                                                                // 819
        ['HH:mm', /\d\d:\d\d/],                                                                                        // 820
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],                                                                          // 821
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],                                                                           // 822
        ['HHmmss', /\d\d\d\d\d\d/],                                                                                    // 823
        ['HHmm', /\d\d\d\d/],                                                                                          // 824
        ['HH', /\d\d/]                                                                                                 // 825
    ];                                                                                                                 // 826
                                                                                                                       // 827
    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;                                                                       // 828
                                                                                                                       // 829
    // date from iso format                                                                                            // 830
    function configFromISO(config) {                                                                                   // 831
        var i, l,                                                                                                      // 832
            string = config._i,                                                                                        // 833
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),                                       // 834
            allowTime, dateFormat, timeFormat, tzFormat;                                                               // 835
                                                                                                                       // 836
        if (match) {                                                                                                   // 837
            getParsingFlags(config).iso = true;                                                                        // 838
                                                                                                                       // 839
            for (i = 0, l = isoDates.length; i < l; i++) {                                                             // 840
                if (isoDates[i][1].exec(match[1])) {                                                                   // 841
                    dateFormat = isoDates[i][0];                                                                       // 842
                    allowTime = isoDates[i][2] !== false;                                                              // 843
                    break;                                                                                             // 844
                }                                                                                                      // 845
            }                                                                                                          // 846
            if (dateFormat == null) {                                                                                  // 847
                config._isValid = false;                                                                               // 848
                return;                                                                                                // 849
            }                                                                                                          // 850
            if (match[3]) {                                                                                            // 851
                for (i = 0, l = isoTimes.length; i < l; i++) {                                                         // 852
                    if (isoTimes[i][1].exec(match[3])) {                                                               // 853
                        // match[2] should be 'T' or space                                                             // 854
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];                                               // 855
                        break;                                                                                         // 856
                    }                                                                                                  // 857
                }                                                                                                      // 858
                if (timeFormat == null) {                                                                              // 859
                    config._isValid = false;                                                                           // 860
                    return;                                                                                            // 861
                }                                                                                                      // 862
            }                                                                                                          // 863
            if (!allowTime && timeFormat != null) {                                                                    // 864
                config._isValid = false;                                                                               // 865
                return;                                                                                                // 866
            }                                                                                                          // 867
            if (match[4]) {                                                                                            // 868
                if (tzRegex.exec(match[4])) {                                                                          // 869
                    tzFormat = 'Z';                                                                                    // 870
                } else {                                                                                               // 871
                    config._isValid = false;                                                                           // 872
                    return;                                                                                            // 873
                }                                                                                                      // 874
            }                                                                                                          // 875
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');                                            // 876
            configFromStringAndFormat(config);                                                                         // 877
        } else {                                                                                                       // 878
            config._isValid = false;                                                                                   // 879
        }                                                                                                              // 880
    }                                                                                                                  // 881
                                                                                                                       // 882
    // date from iso format or fallback                                                                                // 883
    function configFromString(config) {                                                                                // 884
        var matched = aspNetJsonRegex.exec(config._i);                                                                 // 885
                                                                                                                       // 886
        if (matched !== null) {                                                                                        // 887
            config._d = new Date(+matched[1]);                                                                         // 888
            return;                                                                                                    // 889
        }                                                                                                              // 890
                                                                                                                       // 891
        configFromISO(config);                                                                                         // 892
        if (config._isValid === false) {                                                                               // 893
            delete config._isValid;                                                                                    // 894
            utils_hooks__hooks.createFromInputFallback(config);                                                        // 895
        }                                                                                                              // 896
    }                                                                                                                  // 897
                                                                                                                       // 898
    utils_hooks__hooks.createFromInputFallback = deprecate(                                                            // 899
        'moment construction falls back to js Date. This is ' +                                                        // 900
        'discouraged and will be removed in upcoming major ' +                                                         // 901
        'release. Please refer to ' +                                                                                  // 902
        'https://github.com/moment/moment/issues/1407 for more info.',                                                 // 903
        function (config) {                                                                                            // 904
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));                                          // 905
        }                                                                                                              // 906
    );                                                                                                                 // 907
                                                                                                                       // 908
    function createDate (y, m, d, h, M, s, ms) {                                                                       // 909
        //can't just apply() to create a date:                                                                         // 910
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);                                                                     // 912
                                                                                                                       // 913
        //the date constructor remaps years 0-99 to 1900-1999                                                          // 914
        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {                                                       // 915
            date.setFullYear(y);                                                                                       // 916
        }                                                                                                              // 917
        return date;                                                                                                   // 918
    }                                                                                                                  // 919
                                                                                                                       // 920
    function createUTCDate (y) {                                                                                       // 921
        var date = new Date(Date.UTC.apply(null, arguments));                                                          // 922
                                                                                                                       // 923
        //the Date.UTC function remaps years 0-99 to 1900-1999                                                         // 924
        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {                                                    // 925
            date.setUTCFullYear(y);                                                                                    // 926
        }                                                                                                              // 927
        return date;                                                                                                   // 928
    }                                                                                                                  // 929
                                                                                                                       // 930
    // FORMATTING                                                                                                      // 931
                                                                                                                       // 932
    addFormatToken(0, ['YY', 2], 0, function () {                                                                      // 933
        return this.year() % 100;                                                                                      // 934
    });                                                                                                                // 935
                                                                                                                       // 936
    addFormatToken(0, ['YYYY',   4],       0, 'year');                                                                 // 937
    addFormatToken(0, ['YYYYY',  5],       0, 'year');                                                                 // 938
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');                                                                 // 939
                                                                                                                       // 940
    // ALIASES                                                                                                         // 941
                                                                                                                       // 942
    addUnitAlias('year', 'y');                                                                                         // 943
                                                                                                                       // 944
    // PARSING                                                                                                         // 945
                                                                                                                       // 946
    addRegexToken('Y',      matchSigned);                                                                              // 947
    addRegexToken('YY',     match1to2, match2);                                                                        // 948
    addRegexToken('YYYY',   match1to4, match4);                                                                        // 949
    addRegexToken('YYYYY',  match1to6, match6);                                                                        // 950
    addRegexToken('YYYYYY', match1to6, match6);                                                                        // 951
                                                                                                                       // 952
    addParseToken(['YYYYY', 'YYYYYY'], YEAR);                                                                          // 953
    addParseToken('YYYY', function (input, array) {                                                                    // 954
        array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);                 // 955
    });                                                                                                                // 956
    addParseToken('YY', function (input, array) {                                                                      // 957
        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);                                                     // 958
    });                                                                                                                // 959
                                                                                                                       // 960
    // HELPERS                                                                                                         // 961
                                                                                                                       // 962
    function daysInYear(year) {                                                                                        // 963
        return isLeapYear(year) ? 366 : 365;                                                                           // 964
    }                                                                                                                  // 965
                                                                                                                       // 966
    function isLeapYear(year) {                                                                                        // 967
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;                                               // 968
    }                                                                                                                  // 969
                                                                                                                       // 970
    // HOOKS                                                                                                           // 971
                                                                                                                       // 972
    utils_hooks__hooks.parseTwoDigitYear = function (input) {                                                          // 973
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);                                                       // 974
    };                                                                                                                 // 975
                                                                                                                       // 976
    // MOMENTS                                                                                                         // 977
                                                                                                                       // 978
    var getSetYear = makeGetSet('FullYear', false);                                                                    // 979
                                                                                                                       // 980
    function getIsLeapYear () {                                                                                        // 981
        return isLeapYear(this.year());                                                                                // 982
    }                                                                                                                  // 983
                                                                                                                       // 984
    // start-of-first-week - start-of-year                                                                             // 985
    function firstWeekOffset(year, dow, doy) {                                                                         // 986
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)                    // 987
            fwd = 7 + dow - doy,                                                                                       // 988
            // first-week day local weekday -- which local weekday is fwd                                              // 989
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;                                           // 990
                                                                                                                       // 991
        return -fwdlw + fwd - 1;                                                                                       // 992
    }                                                                                                                  // 993
                                                                                                                       // 994
    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday          // 995
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {                                                       // 996
        var localWeekday = (7 + weekday - dow) % 7,                                                                    // 997
            weekOffset = firstWeekOffset(year, dow, doy),                                                              // 998
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,                                                // 999
            resYear, resDayOfYear;                                                                                     // 1000
                                                                                                                       // 1001
        if (dayOfYear <= 0) {                                                                                          // 1002
            resYear = year - 1;                                                                                        // 1003
            resDayOfYear = daysInYear(resYear) + dayOfYear;                                                            // 1004
        } else if (dayOfYear > daysInYear(year)) {                                                                     // 1005
            resYear = year + 1;                                                                                        // 1006
            resDayOfYear = dayOfYear - daysInYear(year);                                                               // 1007
        } else {                                                                                                       // 1008
            resYear = year;                                                                                            // 1009
            resDayOfYear = dayOfYear;                                                                                  // 1010
        }                                                                                                              // 1011
                                                                                                                       // 1012
        return {                                                                                                       // 1013
            year: resYear,                                                                                             // 1014
            dayOfYear: resDayOfYear                                                                                    // 1015
        };                                                                                                             // 1016
    }                                                                                                                  // 1017
                                                                                                                       // 1018
    function weekOfYear(mom, dow, doy) {                                                                               // 1019
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),                                                        // 1020
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,                                             // 1021
            resWeek, resYear;                                                                                          // 1022
                                                                                                                       // 1023
        if (week < 1) {                                                                                                // 1024
            resYear = mom.year() - 1;                                                                                  // 1025
            resWeek = week + weeksInYear(resYear, dow, doy);                                                           // 1026
        } else if (week > weeksInYear(mom.year(), dow, doy)) {                                                         // 1027
            resWeek = week - weeksInYear(mom.year(), dow, doy);                                                        // 1028
            resYear = mom.year() + 1;                                                                                  // 1029
        } else {                                                                                                       // 1030
            resYear = mom.year();                                                                                      // 1031
            resWeek = week;                                                                                            // 1032
        }                                                                                                              // 1033
                                                                                                                       // 1034
        return {                                                                                                       // 1035
            week: resWeek,                                                                                             // 1036
            year: resYear                                                                                              // 1037
        };                                                                                                             // 1038
    }                                                                                                                  // 1039
                                                                                                                       // 1040
    function weeksInYear(year, dow, doy) {                                                                             // 1041
        var weekOffset = firstWeekOffset(year, dow, doy),                                                              // 1042
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);                                                      // 1043
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;                                                   // 1044
    }                                                                                                                  // 1045
                                                                                                                       // 1046
    // Pick the first defined of two or three arguments.                                                               // 1047
    function defaults(a, b, c) {                                                                                       // 1048
        if (a != null) {                                                                                               // 1049
            return a;                                                                                                  // 1050
        }                                                                                                              // 1051
        if (b != null) {                                                                                               // 1052
            return b;                                                                                                  // 1053
        }                                                                                                              // 1054
        return c;                                                                                                      // 1055
    }                                                                                                                  // 1056
                                                                                                                       // 1057
    function currentDateArray(config) {                                                                                // 1058
        // hooks is actually the exported moment object                                                                // 1059
        var nowValue = new Date(utils_hooks__hooks.now());                                                             // 1060
        if (config._useUTC) {                                                                                          // 1061
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];                         // 1062
        }                                                                                                              // 1063
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];                                      // 1064
    }                                                                                                                  // 1065
                                                                                                                       // 1066
    // convert an array to a date.                                                                                     // 1067
    // the array should mirror the parameters below                                                                    // 1068
    // note: all values past the year are optional and will default to the lowest possible value.                      // 1069
    // [year, month, day , hour, minute, second, millisecond]                                                          // 1070
    function configFromArray (config) {                                                                                // 1071
        var i, date, input = [], currentDate, yearToUse;                                                               // 1072
                                                                                                                       // 1073
        if (config._d) {                                                                                               // 1074
            return;                                                                                                    // 1075
        }                                                                                                              // 1076
                                                                                                                       // 1077
        currentDate = currentDateArray(config);                                                                        // 1078
                                                                                                                       // 1079
        //compute day of the year from weeks and weekdays                                                              // 1080
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {                                        // 1081
            dayOfYearFromWeekInfo(config);                                                                             // 1082
        }                                                                                                              // 1083
                                                                                                                       // 1084
        //if the day of the year is set, figure out what it is                                                         // 1085
        if (config._dayOfYear) {                                                                                       // 1086
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);                                                  // 1087
                                                                                                                       // 1088
            if (config._dayOfYear > daysInYear(yearToUse)) {                                                           // 1089
                getParsingFlags(config)._overflowDayOfYear = true;                                                     // 1090
            }                                                                                                          // 1091
                                                                                                                       // 1092
            date = createUTCDate(yearToUse, 0, config._dayOfYear);                                                     // 1093
            config._a[MONTH] = date.getUTCMonth();                                                                     // 1094
            config._a[DATE] = date.getUTCDate();                                                                       // 1095
        }                                                                                                              // 1096
                                                                                                                       // 1097
        // Default to current date.                                                                                    // 1098
        // * if no year, month, day of month are given, default to today                                               // 1099
        // * if day of month is given, default month and year                                                          // 1100
        // * if month is given, default only year                                                                      // 1101
        // * if year is given, don't default anything                                                                  // 1102
        for (i = 0; i < 3 && config._a[i] == null; ++i) {                                                              // 1103
            config._a[i] = input[i] = currentDate[i];                                                                  // 1104
        }                                                                                                              // 1105
                                                                                                                       // 1106
        // Zero out whatever was not defaulted, including time                                                         // 1107
        for (; i < 7; i++) {                                                                                           // 1108
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];                       // 1109
        }                                                                                                              // 1110
                                                                                                                       // 1111
        // Check for 24:00:00.000                                                                                      // 1112
        if (config._a[HOUR] === 24 &&                                                                                  // 1113
                config._a[MINUTE] === 0 &&                                                                             // 1114
                config._a[SECOND] === 0 &&                                                                             // 1115
                config._a[MILLISECOND] === 0) {                                                                        // 1116
            config._nextDay = true;                                                                                    // 1117
            config._a[HOUR] = 0;                                                                                       // 1118
        }                                                                                                              // 1119
                                                                                                                       // 1120
        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);                                  // 1121
        // Apply timezone offset from input. The actual utcOffset can be changed                                       // 1122
        // with parseZone.                                                                                             // 1123
        if (config._tzm != null) {                                                                                     // 1124
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);                                          // 1125
        }                                                                                                              // 1126
                                                                                                                       // 1127
        if (config._nextDay) {                                                                                         // 1128
            config._a[HOUR] = 24;                                                                                      // 1129
        }                                                                                                              // 1130
    }                                                                                                                  // 1131
                                                                                                                       // 1132
    function dayOfYearFromWeekInfo(config) {                                                                           // 1133
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;                                               // 1134
                                                                                                                       // 1135
        w = config._w;                                                                                                 // 1136
        if (w.GG != null || w.W != null || w.E != null) {                                                              // 1137
            dow = 1;                                                                                                   // 1138
            doy = 4;                                                                                                   // 1139
                                                                                                                       // 1140
            // TODO: We need to take the current isoWeekYear, but that depends on                                      // 1141
            // how we interpret now (local, utc, fixed offset). So create                                              // 1142
            // a now version of current config (take local/utc/offset flags, and                                       // 1143
            // create now).                                                                                            // 1144
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);                   // 1145
            week = defaults(w.W, 1);                                                                                   // 1146
            weekday = defaults(w.E, 1);                                                                                // 1147
            if (weekday < 1 || weekday > 7) {                                                                          // 1148
                weekdayOverflow = true;                                                                                // 1149
            }                                                                                                          // 1150
        } else {                                                                                                       // 1151
            dow = config._locale._week.dow;                                                                            // 1152
            doy = config._locale._week.doy;                                                                            // 1153
                                                                                                                       // 1154
            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);               // 1155
            week = defaults(w.w, 1);                                                                                   // 1156
                                                                                                                       // 1157
            if (w.d != null) {                                                                                         // 1158
                // weekday -- low day numbers are considered next week                                                 // 1159
                weekday = w.d;                                                                                         // 1160
                if (weekday < 0 || weekday > 6) {                                                                      // 1161
                    weekdayOverflow = true;                                                                            // 1162
                }                                                                                                      // 1163
            } else if (w.e != null) {                                                                                  // 1164
                // local weekday -- counting starts from begining of week                                              // 1165
                weekday = w.e + dow;                                                                                   // 1166
                if (w.e < 0 || w.e > 6) {                                                                              // 1167
                    weekdayOverflow = true;                                                                            // 1168
                }                                                                                                      // 1169
            } else {                                                                                                   // 1170
                // default to begining of week                                                                         // 1171
                weekday = dow;                                                                                         // 1172
            }                                                                                                          // 1173
        }                                                                                                              // 1174
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {                                                      // 1175
            getParsingFlags(config)._overflowWeeks = true;                                                             // 1176
        } else if (weekdayOverflow != null) {                                                                          // 1177
            getParsingFlags(config)._overflowWeekday = true;                                                           // 1178
        } else {                                                                                                       // 1179
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);                                              // 1180
            config._a[YEAR] = temp.year;                                                                               // 1181
            config._dayOfYear = temp.dayOfYear;                                                                        // 1182
        }                                                                                                              // 1183
    }                                                                                                                  // 1184
                                                                                                                       // 1185
    // constant that refers to the ISO standard                                                                        // 1186
    utils_hooks__hooks.ISO_8601 = function () {};                                                                      // 1187
                                                                                                                       // 1188
    // date from string and format string                                                                              // 1189
    function configFromStringAndFormat(config) {                                                                       // 1190
        // TODO: Move this to another part of the creation flow to prevent circular deps                               // 1191
        if (config._f === utils_hooks__hooks.ISO_8601) {                                                               // 1192
            configFromISO(config);                                                                                     // 1193
            return;                                                                                                    // 1194
        }                                                                                                              // 1195
                                                                                                                       // 1196
        config._a = [];                                                                                                // 1197
        getParsingFlags(config).empty = true;                                                                          // 1198
                                                                                                                       // 1199
        // This array is used to make a Date, either with `new Date` or `Date.UTC`                                     // 1200
        var string = '' + config._i,                                                                                   // 1201
            i, parsedInput, tokens, token, skipped,                                                                    // 1202
            stringLength = string.length,                                                                              // 1203
            totalParsedInputLength = 0;                                                                                // 1204
                                                                                                                       // 1205
        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];                                // 1206
                                                                                                                       // 1207
        for (i = 0; i < tokens.length; i++) {                                                                          // 1208
            token = tokens[i];                                                                                         // 1209
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];                               // 1210
            if (parsedInput) {                                                                                         // 1211
                skipped = string.substr(0, string.indexOf(parsedInput));                                               // 1212
                if (skipped.length > 0) {                                                                              // 1213
                    getParsingFlags(config).unusedInput.push(skipped);                                                 // 1214
                }                                                                                                      // 1215
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);                               // 1216
                totalParsedInputLength += parsedInput.length;                                                          // 1217
            }                                                                                                          // 1218
            // don't parse if it's not a known token                                                                   // 1219
            if (formatTokenFunctions[token]) {                                                                         // 1220
                if (parsedInput) {                                                                                     // 1221
                    getParsingFlags(config).empty = false;                                                             // 1222
                }                                                                                                      // 1223
                else {                                                                                                 // 1224
                    getParsingFlags(config).unusedTokens.push(token);                                                  // 1225
                }                                                                                                      // 1226
                addTimeToArrayFromToken(token, parsedInput, config);                                                   // 1227
            }                                                                                                          // 1228
            else if (config._strict && !parsedInput) {                                                                 // 1229
                getParsingFlags(config).unusedTokens.push(token);                                                      // 1230
            }                                                                                                          // 1231
        }                                                                                                              // 1232
                                                                                                                       // 1233
        // add remaining unparsed input length to the string                                                           // 1234
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;                                 // 1235
        if (string.length > 0) {                                                                                       // 1236
            getParsingFlags(config).unusedInput.push(string);                                                          // 1237
        }                                                                                                              // 1238
                                                                                                                       // 1239
        // clear _12h flag if hour is <= 12                                                                            // 1240
        if (getParsingFlags(config).bigHour === true &&                                                                // 1241
                config._a[HOUR] <= 12 &&                                                                               // 1242
                config._a[HOUR] > 0) {                                                                                 // 1243
            getParsingFlags(config).bigHour = undefined;                                                               // 1244
        }                                                                                                              // 1245
        // handle meridiem                                                                                             // 1246
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);                          // 1247
                                                                                                                       // 1248
        configFromArray(config);                                                                                       // 1249
        checkOverflow(config);                                                                                         // 1250
    }                                                                                                                  // 1251
                                                                                                                       // 1252
                                                                                                                       // 1253
    function meridiemFixWrap (locale, hour, meridiem) {                                                                // 1254
        var isPm;                                                                                                      // 1255
                                                                                                                       // 1256
        if (meridiem == null) {                                                                                        // 1257
            // nothing to do                                                                                           // 1258
            return hour;                                                                                               // 1259
        }                                                                                                              // 1260
        if (locale.meridiemHour != null) {                                                                             // 1261
            return locale.meridiemHour(hour, meridiem);                                                                // 1262
        } else if (locale.isPM != null) {                                                                              // 1263
            // Fallback                                                                                                // 1264
            isPm = locale.isPM(meridiem);                                                                              // 1265
            if (isPm && hour < 12) {                                                                                   // 1266
                hour += 12;                                                                                            // 1267
            }                                                                                                          // 1268
            if (!isPm && hour === 12) {                                                                                // 1269
                hour = 0;                                                                                              // 1270
            }                                                                                                          // 1271
            return hour;                                                                                               // 1272
        } else {                                                                                                       // 1273
            // this is not supposed to happen                                                                          // 1274
            return hour;                                                                                               // 1275
        }                                                                                                              // 1276
    }                                                                                                                  // 1277
                                                                                                                       // 1278
    // date from string and array of format strings                                                                    // 1279
    function configFromStringAndArray(config) {                                                                        // 1280
        var tempConfig,                                                                                                // 1281
            bestMoment,                                                                                                // 1282
                                                                                                                       // 1283
            scoreToBeat,                                                                                               // 1284
            i,                                                                                                         // 1285
            currentScore;                                                                                              // 1286
                                                                                                                       // 1287
        if (config._f.length === 0) {                                                                                  // 1288
            getParsingFlags(config).invalidFormat = true;                                                              // 1289
            config._d = new Date(NaN);                                                                                 // 1290
            return;                                                                                                    // 1291
        }                                                                                                              // 1292
                                                                                                                       // 1293
        for (i = 0; i < config._f.length; i++) {                                                                       // 1294
            currentScore = 0;                                                                                          // 1295
            tempConfig = copyConfig({}, config);                                                                       // 1296
            if (config._useUTC != null) {                                                                              // 1297
                tempConfig._useUTC = config._useUTC;                                                                   // 1298
            }                                                                                                          // 1299
            tempConfig._f = config._f[i];                                                                              // 1300
            configFromStringAndFormat(tempConfig);                                                                     // 1301
                                                                                                                       // 1302
            if (!valid__isValid(tempConfig)) {                                                                         // 1303
                continue;                                                                                              // 1304
            }                                                                                                          // 1305
                                                                                                                       // 1306
            // if there is any input that was not parsed add a penalty for that format                                 // 1307
            currentScore += getParsingFlags(tempConfig).charsLeftOver;                                                 // 1308
                                                                                                                       // 1309
            //or tokens                                                                                                // 1310
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;                                      // 1311
                                                                                                                       // 1312
            getParsingFlags(tempConfig).score = currentScore;                                                          // 1313
                                                                                                                       // 1314
            if (scoreToBeat == null || currentScore < scoreToBeat) {                                                   // 1315
                scoreToBeat = currentScore;                                                                            // 1316
                bestMoment = tempConfig;                                                                               // 1317
            }                                                                                                          // 1318
        }                                                                                                              // 1319
                                                                                                                       // 1320
        extend(config, bestMoment || tempConfig);                                                                      // 1321
    }                                                                                                                  // 1322
                                                                                                                       // 1323
    function configFromObject(config) {                                                                                // 1324
        if (config._d) {                                                                                               // 1325
            return;                                                                                                    // 1326
        }                                                                                                              // 1327
                                                                                                                       // 1328
        var i = normalizeObjectUnits(config._i);                                                                       // 1329
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);                                                                           // 1331
        });                                                                                                            // 1332
                                                                                                                       // 1333
        configFromArray(config);                                                                                       // 1334
    }                                                                                                                  // 1335
                                                                                                                       // 1336
    function createFromConfig (config) {                                                                               // 1337
        var res = new Moment(checkOverflow(prepareConfig(config)));                                                    // 1338
        if (res._nextDay) {                                                                                            // 1339
            // Adding is smart enough around DST                                                                       // 1340
            res.add(1, 'd');                                                                                           // 1341
            res._nextDay = undefined;                                                                                  // 1342
        }                                                                                                              // 1343
                                                                                                                       // 1344
        return res;                                                                                                    // 1345
    }                                                                                                                  // 1346
                                                                                                                       // 1347
    function prepareConfig (config) {                                                                                  // 1348
        var input = config._i,                                                                                         // 1349
            format = config._f;                                                                                        // 1350
                                                                                                                       // 1351
        config._locale = config._locale || locale_locales__getLocale(config._l);                                       // 1352
                                                                                                                       // 1353
        if (input === null || (format === undefined && input === '')) {                                                // 1354
            return valid__createInvalid({nullInput: true});                                                            // 1355
        }                                                                                                              // 1356
                                                                                                                       // 1357
        if (typeof input === 'string') {                                                                               // 1358
            config._i = input = config._locale.preparse(input);                                                        // 1359
        }                                                                                                              // 1360
                                                                                                                       // 1361
        if (isMoment(input)) {                                                                                         // 1362
            return new Moment(checkOverflow(input));                                                                   // 1363
        } else if (isArray(format)) {                                                                                  // 1364
            configFromStringAndArray(config);                                                                          // 1365
        } else if (format) {                                                                                           // 1366
            configFromStringAndFormat(config);                                                                         // 1367
        } else if (isDate(input)) {                                                                                    // 1368
            config._d = input;                                                                                         // 1369
        } else {                                                                                                       // 1370
            configFromInput(config);                                                                                   // 1371
        }                                                                                                              // 1372
                                                                                                                       // 1373
        if (!valid__isValid(config)) {                                                                                 // 1374
            config._d = null;                                                                                          // 1375
        }                                                                                                              // 1376
                                                                                                                       // 1377
        return config;                                                                                                 // 1378
    }                                                                                                                  // 1379
                                                                                                                       // 1380
    function configFromInput(config) {                                                                                 // 1381
        var input = config._i;                                                                                         // 1382
        if (input === undefined) {                                                                                     // 1383
            config._d = new Date(utils_hooks__hooks.now());                                                            // 1384
        } else if (isDate(input)) {                                                                                    // 1385
            config._d = new Date(+input);                                                                              // 1386
        } else if (typeof input === 'string') {                                                                        // 1387
            configFromString(config);                                                                                  // 1388
        } else if (isArray(input)) {                                                                                   // 1389
            config._a = map(input.slice(0), function (obj) {                                                           // 1390
                return parseInt(obj, 10);                                                                              // 1391
            });                                                                                                        // 1392
            configFromArray(config);                                                                                   // 1393
        } else if (typeof(input) === 'object') {                                                                       // 1394
            configFromObject(config);                                                                                  // 1395
        } else if (typeof(input) === 'number') {                                                                       // 1396
            // from milliseconds                                                                                       // 1397
            config._d = new Date(input);                                                                               // 1398
        } else {                                                                                                       // 1399
            utils_hooks__hooks.createFromInputFallback(config);                                                        // 1400
        }                                                                                                              // 1401
    }                                                                                                                  // 1402
                                                                                                                       // 1403
    function createLocalOrUTC (input, format, locale, strict, isUTC) {                                                 // 1404
        var c = {};                                                                                                    // 1405
                                                                                                                       // 1406
        if (typeof(locale) === 'boolean') {                                                                            // 1407
            strict = locale;                                                                                           // 1408
            locale = undefined;                                                                                        // 1409
        }                                                                                                              // 1410
        // object construction must be done this way.                                                                  // 1411
        // https://github.com/moment/moment/issues/1423                                                                // 1412
        c._isAMomentObject = true;                                                                                     // 1413
        c._useUTC = c._isUTC = isUTC;                                                                                  // 1414
        c._l = locale;                                                                                                 // 1415
        c._i = input;                                                                                                  // 1416
        c._f = format;                                                                                                 // 1417
        c._strict = strict;                                                                                            // 1418
                                                                                                                       // 1419
        return createFromConfig(c);                                                                                    // 1420
    }                                                                                                                  // 1421
                                                                                                                       // 1422
    function local__createLocal (input, format, locale, strict) {                                                      // 1423
        return createLocalOrUTC(input, format, locale, strict, false);                                                 // 1424
    }                                                                                                                  // 1425
                                                                                                                       // 1426
    var prototypeMin = deprecate(                                                                                      // 1427
         'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',           // 1428
         function () {                                                                                                 // 1429
             var other = local__createLocal.apply(null, arguments);                                                    // 1430
             if (this.isValid() && other.isValid()) {                                                                  // 1431
                 return other < this ? this : other;                                                                   // 1432
             } else {                                                                                                  // 1433
                 return valid__createInvalid();                                                                        // 1434
             }                                                                                                         // 1435
         }                                                                                                             // 1436
     );                                                                                                                // 1437
                                                                                                                       // 1438
    var prototypeMax = deprecate(                                                                                      // 1439
        'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',            // 1440
        function () {                                                                                                  // 1441
            var other = local__createLocal.apply(null, arguments);                                                     // 1442
            if (this.isValid() && other.isValid()) {                                                                   // 1443
                return other > this ? this : other;                                                                    // 1444
            } else {                                                                                                   // 1445
                return valid__createInvalid();                                                                         // 1446
            }                                                                                                          // 1447
        }                                                                                                              // 1448
    );                                                                                                                 // 1449
                                                                                                                       // 1450
    // Pick a moment m from moments so that m[fn](other) is true for all                                               // 1451
    // other. This relies on the function fn to be transitive.                                                         // 1452
    //                                                                                                                 // 1453
    // moments should either be an array of moment objects or an array, whose                                          // 1454
    // first element is an array of moment objects.                                                                    // 1455
    function pickBy(fn, moments) {                                                                                     // 1456
        var res, i;                                                                                                    // 1457
        if (moments.length === 1 && isArray(moments[0])) {                                                             // 1458
            moments = moments[0];                                                                                      // 1459
        }                                                                                                              // 1460
        if (!moments.length) {                                                                                         // 1461
            return local__createLocal();                                                                               // 1462
        }                                                                                                              // 1463
        res = moments[0];                                                                                              // 1464
        for (i = 1; i < moments.length; ++i) {                                                                         // 1465
            if (!moments[i].isValid() || moments[i][fn](res)) {                                                        // 1466
                res = moments[i];                                                                                      // 1467
            }                                                                                                          // 1468
        }                                                                                                              // 1469
        return res;                                                                                                    // 1470
    }                                                                                                                  // 1471
                                                                                                                       // 1472
    // TODO: Use [].sort instead?                                                                                      // 1473
    function min () {                                                                                                  // 1474
        var args = [].slice.call(arguments, 0);                                                                        // 1475
                                                                                                                       // 1476
        return pickBy('isBefore', args);                                                                               // 1477
    }                                                                                                                  // 1478
                                                                                                                       // 1479
    function max () {                                                                                                  // 1480
        var args = [].slice.call(arguments, 0);                                                                        // 1481
                                                                                                                       // 1482
        return pickBy('isAfter', args);                                                                                // 1483
    }                                                                                                                  // 1484
                                                                                                                       // 1485
    var now = Date.now || function () {                                                                                // 1486
        return +(new Date());                                                                                          // 1487
    };                                                                                                                 // 1488
                                                                                                                       // 1489
    function Duration (duration) {                                                                                     // 1490
        var normalizedInput = normalizeObjectUnits(duration),                                                          // 1491
            years = normalizedInput.year || 0,                                                                         // 1492
            quarters = normalizedInput.quarter || 0,                                                                   // 1493
            months = normalizedInput.month || 0,                                                                       // 1494
            weeks = normalizedInput.week || 0,                                                                         // 1495
            days = normalizedInput.day || 0,                                                                           // 1496
            hours = normalizedInput.hour || 0,                                                                         // 1497
            minutes = normalizedInput.minute || 0,                                                                     // 1498
            seconds = normalizedInput.second || 0,                                                                     // 1499
            milliseconds = normalizedInput.millisecond || 0;                                                           // 1500
                                                                                                                       // 1501
        // representation for dateAddRemove                                                                            // 1502
        this._milliseconds = +milliseconds +                                                                           // 1503
            seconds * 1e3 + // 1000                                                                                    // 1504
            minutes * 6e4 + // 1000 * 60                                                                               // 1505
            hours * 36e5; // 1000 * 60 * 60                                                                            // 1506
        // Because of dateAddRemove treats 24 hours as different from a                                                // 1507
        // day when working around DST, we need to store them separately                                               // 1508
        this._days = +days +                                                                                           // 1509
            weeks * 7;                                                                                                 // 1510
        // It is impossible translate months into days without knowing                                                 // 1511
        // which months you are are talking about, so we have to store                                                 // 1512
        // it separately.                                                                                              // 1513
        this._months = +months +                                                                                       // 1514
            quarters * 3 +                                                                                             // 1515
            years * 12;                                                                                                // 1516
                                                                                                                       // 1517
        this._data = {};                                                                                               // 1518
                                                                                                                       // 1519
        this._locale = locale_locales__getLocale();                                                                    // 1520
                                                                                                                       // 1521
        this._bubble();                                                                                                // 1522
    }                                                                                                                  // 1523
                                                                                                                       // 1524
    function isDuration (obj) {                                                                                        // 1525
        return obj instanceof Duration;                                                                                // 1526
    }                                                                                                                  // 1527
                                                                                                                       // 1528
    // FORMATTING                                                                                                      // 1529
                                                                                                                       // 1530
    function offset (token, separator) {                                                                               // 1531
        addFormatToken(token, 0, 0, function () {                                                                      // 1532
            var offset = this.utcOffset();                                                                             // 1533
            var sign = '+';                                                                                            // 1534
            if (offset < 0) {                                                                                          // 1535
                offset = -offset;                                                                                      // 1536
                sign = '-';                                                                                            // 1537
            }                                                                                                          // 1538
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);                     // 1539
        });                                                                                                            // 1540
    }                                                                                                                  // 1541
                                                                                                                       // 1542
    offset('Z', ':');                                                                                                  // 1543
    offset('ZZ', '');                                                                                                  // 1544
                                                                                                                       // 1545
    // PARSING                                                                                                         // 1546
                                                                                                                       // 1547
    addRegexToken('Z',  matchShortOffset);                                                                             // 1548
    addRegexToken('ZZ', matchShortOffset);                                                                             // 1549
    addParseToken(['Z', 'ZZ'], function (input, array, config) {                                                       // 1550
        config._useUTC = true;                                                                                         // 1551
        config._tzm = offsetFromString(matchShortOffset, input);                                                       // 1552
    });                                                                                                                // 1553
                                                                                                                       // 1554
    // HELPERS                                                                                                         // 1555
                                                                                                                       // 1556
    // timezone chunker                                                                                                // 1557
    // '+10:00' > ['10',  '00']                                                                                        // 1558
    // '-1530'  > ['-15', '30']                                                                                        // 1559
    var chunkOffset = /([\+\-]|\d\d)/gi;                                                                               // 1560
                                                                                                                       // 1561
    function offsetFromString(matcher, string) {                                                                       // 1562
        var matches = ((string || '').match(matcher) || []);                                                           // 1563
        var chunk   = matches[matches.length - 1] || [];                                                               // 1564
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];                                                  // 1565
        var minutes = +(parts[1] * 60) + toInt(parts[2]);                                                              // 1566
                                                                                                                       // 1567
        return parts[0] === '+' ? minutes : -minutes;                                                                  // 1568
    }                                                                                                                  // 1569
                                                                                                                       // 1570
    // Return a moment from input, that is local/utc/zone equivalent to model.                                         // 1571
    function cloneWithOffset(input, model) {                                                                           // 1572
        var res, diff;                                                                                                 // 1573
        if (model._isUTC) {                                                                                            // 1574
            res = model.clone();                                                                                       // 1575
            diff = (isMoment(input) || isDate(input) ? +input : +local__createLocal(input)) - (+res);                  // 1576
            // Use low-level api, because this fn is low-level api.                                                    // 1577
            res._d.setTime(+res._d + diff);                                                                            // 1578
            utils_hooks__hooks.updateOffset(res, false);                                                               // 1579
            return res;                                                                                                // 1580
        } else {                                                                                                       // 1581
            return local__createLocal(input).local();                                                                  // 1582
        }                                                                                                              // 1583
    }                                                                                                                  // 1584
                                                                                                                       // 1585
    function getDateOffset (m) {                                                                                       // 1586
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.                                              // 1587
        // https://github.com/moment/moment/pull/1871                                                                  // 1588
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;                                                        // 1589
    }                                                                                                                  // 1590
                                                                                                                       // 1591
    // HOOKS                                                                                                           // 1592
                                                                                                                       // 1593
    // This function will be called whenever a moment is mutated.                                                      // 1594
    // It is intended to keep the offset in sync with the timezone.                                                    // 1595
    utils_hooks__hooks.updateOffset = function () {};                                                                  // 1596
                                                                                                                       // 1597
    // MOMENTS                                                                                                         // 1598
                                                                                                                       // 1599
    // keepLocalTime = true means only change the timezone, without                                                    // 1600
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->                                            // 1601
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset                                             // 1602
    // +0200, so we adjust the time as needed, to be valid.                                                            // 1603
    //                                                                                                                 // 1604
    // Keeping the time actually adds/subtracts (one hour)                                                             // 1605
    // from the actual represented time. That is why we call updateOffset                                              // 1606
    // a second time. In case it wants us to change the offset again                                                   // 1607
    // _changeInProgress == true case, then we have to adjust, because                                                 // 1608
    // there is no such time in the given timezone.                                                                    // 1609
    function getSetOffset (input, keepLocalTime) {                                                                     // 1610
        var offset = this._offset || 0,                                                                                // 1611
            localAdjust;                                                                                               // 1612
        if (!this.isValid()) {                                                                                         // 1613
            return input != null ? this : NaN;                                                                         // 1614
        }                                                                                                              // 1615
        if (input != null) {                                                                                           // 1616
            if (typeof input === 'string') {                                                                           // 1617
                input = offsetFromString(matchShortOffset, input);                                                     // 1618
            } else if (Math.abs(input) < 16) {                                                                         // 1619
                input = input * 60;                                                                                    // 1620
            }                                                                                                          // 1621
            if (!this._isUTC && keepLocalTime) {                                                                       // 1622
                localAdjust = getDateOffset(this);                                                                     // 1623
            }                                                                                                          // 1624
            this._offset = input;                                                                                      // 1625
            this._isUTC = true;                                                                                        // 1626
            if (localAdjust != null) {                                                                                 // 1627
                this.add(localAdjust, 'm');                                                                            // 1628
            }                                                                                                          // 1629
            if (offset !== input) {                                                                                    // 1630
                if (!keepLocalTime || this._changeInProgress) {                                                        // 1631
                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);            // 1632
                } else if (!this._changeInProgress) {                                                                  // 1633
                    this._changeInProgress = true;                                                                     // 1634
                    utils_hooks__hooks.updateOffset(this, true);                                                       // 1635
                    this._changeInProgress = null;                                                                     // 1636
                }                                                                                                      // 1637
            }                                                                                                          // 1638
            return this;                                                                                               // 1639
        } else {                                                                                                       // 1640
            return this._isUTC ? offset : getDateOffset(this);                                                         // 1641
        }                                                                                                              // 1642
    }                                                                                                                  // 1643
                                                                                                                       // 1644
    function getSetZone (input, keepLocalTime) {                                                                       // 1645
        if (input != null) {                                                                                           // 1646
            if (typeof input !== 'string') {                                                                           // 1647
                input = -input;                                                                                        // 1648
            }                                                                                                          // 1649
                                                                                                                       // 1650
            this.utcOffset(input, keepLocalTime);                                                                      // 1651
                                                                                                                       // 1652
            return this;                                                                                               // 1653
        } else {                                                                                                       // 1654
            return -this.utcOffset();                                                                                  // 1655
        }                                                                                                              // 1656
    }                                                                                                                  // 1657
                                                                                                                       // 1658
    function setOffsetToUTC (keepLocalTime) {                                                                          // 1659
        return this.utcOffset(0, keepLocalTime);                                                                       // 1660
    }                                                                                                                  // 1661
                                                                                                                       // 1662
    function setOffsetToLocal (keepLocalTime) {                                                                        // 1663
        if (this._isUTC) {                                                                                             // 1664
            this.utcOffset(0, keepLocalTime);                                                                          // 1665
            this._isUTC = false;                                                                                       // 1666
                                                                                                                       // 1667
            if (keepLocalTime) {                                                                                       // 1668
                this.subtract(getDateOffset(this), 'm');                                                               // 1669
            }                                                                                                          // 1670
        }                                                                                                              // 1671
        return this;                                                                                                   // 1672
    }                                                                                                                  // 1673
                                                                                                                       // 1674
    function setOffsetToParsedOffset () {                                                                              // 1675
        if (this._tzm) {                                                                                               // 1676
            this.utcOffset(this._tzm);                                                                                 // 1677
        } else if (typeof this._i === 'string') {                                                                      // 1678
            this.utcOffset(offsetFromString(matchOffset, this._i));                                                    // 1679
        }                                                                                                              // 1680
        return this;                                                                                                   // 1681
    }                                                                                                                  // 1682
                                                                                                                       // 1683
    function hasAlignedHourOffset (input) {                                                                            // 1684
        if (!this.isValid()) {                                                                                         // 1685
            return false;                                                                                              // 1686
        }                                                                                                              // 1687
        input = input ? local__createLocal(input).utcOffset() : 0;                                                     // 1688
                                                                                                                       // 1689
        return (this.utcOffset() - input) % 60 === 0;                                                                  // 1690
    }                                                                                                                  // 1691
                                                                                                                       // 1692
    function isDaylightSavingTime () {                                                                                 // 1693
        return (                                                                                                       // 1694
            this.utcOffset() > this.clone().month(0).utcOffset() ||                                                    // 1695
            this.utcOffset() > this.clone().month(5).utcOffset()                                                       // 1696
        );                                                                                                             // 1697
    }                                                                                                                  // 1698
                                                                                                                       // 1699
    function isDaylightSavingTimeShifted () {                                                                          // 1700
        if (!isUndefined(this._isDSTShifted)) {                                                                        // 1701
            return this._isDSTShifted;                                                                                 // 1702
        }                                                                                                              // 1703
                                                                                                                       // 1704
        var c = {};                                                                                                    // 1705
                                                                                                                       // 1706
        copyConfig(c, this);                                                                                           // 1707
        c = prepareConfig(c);                                                                                          // 1708
                                                                                                                       // 1709
        if (c._a) {                                                                                                    // 1710
            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);                             // 1711
            this._isDSTShifted = this.isValid() &&                                                                     // 1712
                compareArrays(c._a, other.toArray()) > 0;                                                              // 1713
        } else {                                                                                                       // 1714
            this._isDSTShifted = false;                                                                                // 1715
        }                                                                                                              // 1716
                                                                                                                       // 1717
        return this._isDSTShifted;                                                                                     // 1718
    }                                                                                                                  // 1719
                                                                                                                       // 1720
    function isLocal () {                                                                                              // 1721
        return this.isValid() ? !this._isUTC : false;                                                                  // 1722
    }                                                                                                                  // 1723
                                                                                                                       // 1724
    function isUtcOffset () {                                                                                          // 1725
        return this.isValid() ? this._isUTC : false;                                                                   // 1726
    }                                                                                                                  // 1727
                                                                                                                       // 1728
    function isUtc () {                                                                                                // 1729
        return this.isValid() ? this._isUTC && this._offset === 0 : false;                                             // 1730
    }                                                                                                                  // 1731
                                                                                                                       // 1732
    // ASP.NET json date format regex                                                                                  // 1733
    var aspNetRegex = /(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/;                                        // 1734
                                                                                                                       // 1735
    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html                       // 1736
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere                                       // 1737
    var isoRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
                                                                                                                       // 1739
    function create__createDuration (input, key) {                                                                     // 1740
        var duration = input,                                                                                          // 1741
            // matching against regexp is expensive, do it on demand                                                   // 1742
            match = null,                                                                                              // 1743
            sign,                                                                                                      // 1744
            ret,                                                                                                       // 1745
            diffRes;                                                                                                   // 1746
                                                                                                                       // 1747
        if (isDuration(input)) {                                                                                       // 1748
            duration = {                                                                                               // 1749
                ms : input._milliseconds,                                                                              // 1750
                d  : input._days,                                                                                      // 1751
                M  : input._months                                                                                     // 1752
            };                                                                                                         // 1753
        } else if (typeof input === 'number') {                                                                        // 1754
            duration = {};                                                                                             // 1755
            if (key) {                                                                                                 // 1756
                duration[key] = input;                                                                                 // 1757
            } else {                                                                                                   // 1758
                duration.milliseconds = input;                                                                         // 1759
            }                                                                                                          // 1760
        } else if (!!(match = aspNetRegex.exec(input))) {                                                              // 1761
            sign = (match[1] === '-') ? -1 : 1;                                                                        // 1762
            duration = {                                                                                               // 1763
                y  : 0,                                                                                                // 1764
                d  : toInt(match[DATE])        * sign,                                                                 // 1765
                h  : toInt(match[HOUR])        * sign,                                                                 // 1766
                m  : toInt(match[MINUTE])      * sign,                                                                 // 1767
                s  : toInt(match[SECOND])      * sign,                                                                 // 1768
                ms : toInt(match[MILLISECOND]) * sign                                                                  // 1769
            };                                                                                                         // 1770
        } else if (!!(match = isoRegex.exec(input))) {                                                                 // 1771
            sign = (match[1] === '-') ? -1 : 1;                                                                        // 1772
            duration = {                                                                                               // 1773
                y : parseIso(match[2], sign),                                                                          // 1774
                M : parseIso(match[3], sign),                                                                          // 1775
                d : parseIso(match[4], sign),                                                                          // 1776
                h : parseIso(match[5], sign),                                                                          // 1777
                m : parseIso(match[6], sign),                                                                          // 1778
                s : parseIso(match[7], sign),                                                                          // 1779
                w : parseIso(match[8], sign)                                                                           // 1780
            };                                                                                                         // 1781
        } else if (duration == null) {// checks for null or undefined                                                  // 1782
            duration = {};                                                                                             // 1783
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {                         // 1784
            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));           // 1785
                                                                                                                       // 1786
            duration = {};                                                                                             // 1787
            duration.ms = diffRes.milliseconds;                                                                        // 1788
            duration.M = diffRes.months;                                                                               // 1789
        }                                                                                                              // 1790
                                                                                                                       // 1791
        ret = new Duration(duration);                                                                                  // 1792
                                                                                                                       // 1793
        if (isDuration(input) && hasOwnProp(input, '_locale')) {                                                       // 1794
            ret._locale = input._locale;                                                                               // 1795
        }                                                                                                              // 1796
                                                                                                                       // 1797
        return ret;                                                                                                    // 1798
    }                                                                                                                  // 1799
                                                                                                                       // 1800
    create__createDuration.fn = Duration.prototype;                                                                    // 1801
                                                                                                                       // 1802
    function parseIso (inp, sign) {                                                                                    // 1803
        // We'd normally use ~~inp for this, but unfortunately it also                                                 // 1804
        // converts floats to ints.                                                                                    // 1805
        // inp may be undefined, so careful calling replace on it.                                                     // 1806
        var res = inp && parseFloat(inp.replace(',', '.'));                                                            // 1807
        // apply sign while we're at it                                                                                // 1808
        return (isNaN(res) ? 0 : res) * sign;                                                                          // 1809
    }                                                                                                                  // 1810
                                                                                                                       // 1811
    function positiveMomentsDifference(base, other) {                                                                  // 1812
        var res = {milliseconds: 0, months: 0};                                                                        // 1813
                                                                                                                       // 1814
        res.months = other.month() - base.month() +                                                                    // 1815
            (other.year() - base.year()) * 12;                                                                         // 1816
        if (base.clone().add(res.months, 'M').isAfter(other)) {                                                        // 1817
            --res.months;                                                                                              // 1818
        }                                                                                                              // 1819
                                                                                                                       // 1820
        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));                                              // 1821
                                                                                                                       // 1822
        return res;                                                                                                    // 1823
    }                                                                                                                  // 1824
                                                                                                                       // 1825
    function momentsDifference(base, other) {                                                                          // 1826
        var res;                                                                                                       // 1827
        if (!(base.isValid() && other.isValid())) {                                                                    // 1828
            return {milliseconds: 0, months: 0};                                                                       // 1829
        }                                                                                                              // 1830
                                                                                                                       // 1831
        other = cloneWithOffset(other, base);                                                                          // 1832
        if (base.isBefore(other)) {                                                                                    // 1833
            res = positiveMomentsDifference(base, other);                                                              // 1834
        } else {                                                                                                       // 1835
            res = positiveMomentsDifference(other, base);                                                              // 1836
            res.milliseconds = -res.milliseconds;                                                                      // 1837
            res.months = -res.months;                                                                                  // 1838
        }                                                                                                              // 1839
                                                                                                                       // 1840
        return res;                                                                                                    // 1841
    }                                                                                                                  // 1842
                                                                                                                       // 1843
    // TODO: remove 'name' arg after deprecation is removed                                                            // 1844
    function createAdder(direction, name) {                                                                            // 1845
        return function (val, period) {                                                                                // 1846
            var dur, tmp;                                                                                              // 1847
            //invert the arguments, but complain about it                                                              // 1848
            if (period !== null && !isNaN(+period)) {                                                                  // 1849
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
                tmp = val; val = period; period = tmp;                                                                 // 1851
            }                                                                                                          // 1852
                                                                                                                       // 1853
            val = typeof val === 'string' ? +val : val;                                                                // 1854
            dur = create__createDuration(val, period);                                                                 // 1855
            add_subtract__addSubtract(this, dur, direction);                                                           // 1856
            return this;                                                                                               // 1857
        };                                                                                                             // 1858
    }                                                                                                                  // 1859
                                                                                                                       // 1860
    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {                                       // 1861
        var milliseconds = duration._milliseconds,                                                                     // 1862
            days = duration._days,                                                                                     // 1863
            months = duration._months;                                                                                 // 1864
                                                                                                                       // 1865
        if (!mom.isValid()) {                                                                                          // 1866
            // No op                                                                                                   // 1867
            return;                                                                                                    // 1868
        }                                                                                                              // 1869
                                                                                                                       // 1870
        updateOffset = updateOffset == null ? true : updateOffset;                                                     // 1871
                                                                                                                       // 1872
        if (milliseconds) {                                                                                            // 1873
            mom._d.setTime(+mom._d + milliseconds * isAdding);                                                         // 1874
        }                                                                                                              // 1875
        if (days) {                                                                                                    // 1876
            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);                                    // 1877
        }                                                                                                              // 1878
        if (months) {                                                                                                  // 1879
            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);                                             // 1880
        }                                                                                                              // 1881
        if (updateOffset) {                                                                                            // 1882
            utils_hooks__hooks.updateOffset(mom, days || months);                                                      // 1883
        }                                                                                                              // 1884
    }                                                                                                                  // 1885
                                                                                                                       // 1886
    var add_subtract__add      = createAdder(1, 'add');                                                                // 1887
    var add_subtract__subtract = createAdder(-1, 'subtract');                                                          // 1888
                                                                                                                       // 1889
    function moment_calendar__calendar (time, formats) {                                                               // 1890
        // We want to compare the start of today, vs this.                                                             // 1891
        // Getting start-of-today depends on whether we're local/utc/offset or not.                                    // 1892
        var now = time || local__createLocal(),                                                                        // 1893
            sod = cloneWithOffset(now, this).startOf('day'),                                                           // 1894
            diff = this.diff(sod, 'days', true),                                                                       // 1895
            format = diff < -6 ? 'sameElse' :                                                                          // 1896
                diff < -1 ? 'lastWeek' :                                                                               // 1897
                diff < 0 ? 'lastDay' :                                                                                 // 1898
                diff < 1 ? 'sameDay' :                                                                                 // 1899
                diff < 2 ? 'nextDay' :                                                                                 // 1900
                diff < 7 ? 'nextWeek' : 'sameElse';                                                                    // 1901
                                                                                                                       // 1902
        var output = formats && (isFunction(formats[format]) ? formats[format]() : formats[format]);                   // 1903
                                                                                                                       // 1904
        return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));               // 1905
    }                                                                                                                  // 1906
                                                                                                                       // 1907
    function clone () {                                                                                                // 1908
        return new Moment(this);                                                                                       // 1909
    }                                                                                                                  // 1910
                                                                                                                       // 1911
    function isAfter (input, units) {                                                                                  // 1912
        var localInput = isMoment(input) ? input : local__createLocal(input);                                          // 1913
        if (!(this.isValid() && localInput.isValid())) {                                                               // 1914
            return false;                                                                                              // 1915
        }                                                                                                              // 1916
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');                                           // 1917
        if (units === 'millisecond') {                                                                                 // 1918
            return +this > +localInput;                                                                                // 1919
        } else {                                                                                                       // 1920
            return +localInput < +this.clone().startOf(units);                                                         // 1921
        }                                                                                                              // 1922
    }                                                                                                                  // 1923
                                                                                                                       // 1924
    function isBefore (input, units) {                                                                                 // 1925
        var localInput = isMoment(input) ? input : local__createLocal(input);                                          // 1926
        if (!(this.isValid() && localInput.isValid())) {                                                               // 1927
            return false;                                                                                              // 1928
        }                                                                                                              // 1929
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');                                           // 1930
        if (units === 'millisecond') {                                                                                 // 1931
            return +this < +localInput;                                                                                // 1932
        } else {                                                                                                       // 1933
            return +this.clone().endOf(units) < +localInput;                                                           // 1934
        }                                                                                                              // 1935
    }                                                                                                                  // 1936
                                                                                                                       // 1937
    function isBetween (from, to, units) {                                                                             // 1938
        return this.isAfter(from, units) && this.isBefore(to, units);                                                  // 1939
    }                                                                                                                  // 1940
                                                                                                                       // 1941
    function isSame (input, units) {                                                                                   // 1942
        var localInput = isMoment(input) ? input : local__createLocal(input),                                          // 1943
            inputMs;                                                                                                   // 1944
        if (!(this.isValid() && localInput.isValid())) {                                                               // 1945
            return false;                                                                                              // 1946
        }                                                                                                              // 1947
        units = normalizeUnits(units || 'millisecond');                                                                // 1948
        if (units === 'millisecond') {                                                                                 // 1949
            return +this === +localInput;                                                                              // 1950
        } else {                                                                                                       // 1951
            inputMs = +localInput;                                                                                     // 1952
            return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));               // 1953
        }                                                                                                              // 1954
    }                                                                                                                  // 1955
                                                                                                                       // 1956
    function isSameOrAfter (input, units) {                                                                            // 1957
        return this.isSame(input, units) || this.isAfter(input,units);                                                 // 1958
    }                                                                                                                  // 1959
                                                                                                                       // 1960
    function isSameOrBefore (input, units) {                                                                           // 1961
        return this.isSame(input, units) || this.isBefore(input,units);                                                // 1962
    }                                                                                                                  // 1963
                                                                                                                       // 1964
    function diff (input, units, asFloat) {                                                                            // 1965
        var that,                                                                                                      // 1966
            zoneDelta,                                                                                                 // 1967
            delta, output;                                                                                             // 1968
                                                                                                                       // 1969
        if (!this.isValid()) {                                                                                         // 1970
            return NaN;                                                                                                // 1971
        }                                                                                                              // 1972
                                                                                                                       // 1973
        that = cloneWithOffset(input, this);                                                                           // 1974
                                                                                                                       // 1975
        if (!that.isValid()) {                                                                                         // 1976
            return NaN;                                                                                                // 1977
        }                                                                                                              // 1978
                                                                                                                       // 1979
        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;                                                       // 1980
                                                                                                                       // 1981
        units = normalizeUnits(units);                                                                                 // 1982
                                                                                                                       // 1983
        if (units === 'year' || units === 'month' || units === 'quarter') {                                            // 1984
            output = monthDiff(this, that);                                                                            // 1985
            if (units === 'quarter') {                                                                                 // 1986
                output = output / 3;                                                                                   // 1987
            } else if (units === 'year') {                                                                             // 1988
                output = output / 12;                                                                                  // 1989
            }                                                                                                          // 1990
        } else {                                                                                                       // 1991
            delta = this - that;                                                                                       // 1992
            output = units === 'second' ? delta / 1e3 : // 1000                                                        // 1993
                units === 'minute' ? delta / 6e4 : // 1000 * 60                                                        // 1994
                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60                                                    // 1995
                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst                     // 1996
                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst               // 1997
                delta;                                                                                                 // 1998
        }                                                                                                              // 1999
        return asFloat ? output : absFloor(output);                                                                    // 2000
    }                                                                                                                  // 2001
                                                                                                                       // 2002
    function monthDiff (a, b) {                                                                                        // 2003
        // difference in months                                                                                        // 2004
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),                                   // 2005
            // b is in (anchor - 1 month, anchor + 1 month)                                                            // 2006
            anchor = a.clone().add(wholeMonthDiff, 'months'),                                                          // 2007
            anchor2, adjust;                                                                                           // 2008
                                                                                                                       // 2009
        if (b - anchor < 0) {                                                                                          // 2010
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');                                                     // 2011
            // linear across the month                                                                                 // 2012
            adjust = (b - anchor) / (anchor - anchor2);                                                                // 2013
        } else {                                                                                                       // 2014
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');                                                     // 2015
            // linear across the month                                                                                 // 2016
            adjust = (b - anchor) / (anchor2 - anchor);                                                                // 2017
        }                                                                                                              // 2018
                                                                                                                       // 2019
        return -(wholeMonthDiff + adjust);                                                                             // 2020
    }                                                                                                                  // 2021
                                                                                                                       // 2022
    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';                                                         // 2023
                                                                                                                       // 2024
    function toString () {                                                                                             // 2025
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');                                   // 2026
    }                                                                                                                  // 2027
                                                                                                                       // 2028
    function moment_format__toISOString () {                                                                           // 2029
        var m = this.clone().utc();                                                                                    // 2030
        if (0 < m.year() && m.year() <= 9999) {                                                                        // 2031
            if (isFunction(Date.prototype.toISOString)) {                                                              // 2032
                // native implementation is ~50x faster, use it when we can                                            // 2033
                return this.toDate().toISOString();                                                                    // 2034
            } else {                                                                                                   // 2035
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');                                                // 2036
            }                                                                                                          // 2037
        } else {                                                                                                       // 2038
            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');                                                  // 2039
        }                                                                                                              // 2040
    }                                                                                                                  // 2041
                                                                                                                       // 2042
    function format (inputString) {                                                                                    // 2043
        var output = formatMoment(this, inputString || utils_hooks__hooks.defaultFormat);                              // 2044
        return this.localeData().postformat(output);                                                                   // 2045
    }                                                                                                                  // 2046
                                                                                                                       // 2047
    function from (time, withoutSuffix) {                                                                              // 2048
        if (this.isValid() &&                                                                                          // 2049
                ((isMoment(time) && time.isValid()) ||                                                                 // 2050
                 local__createLocal(time).isValid())) {                                                                // 2051
            return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);      // 2052
        } else {                                                                                                       // 2053
            return this.localeData().invalidDate();                                                                    // 2054
        }                                                                                                              // 2055
    }                                                                                                                  // 2056
                                                                                                                       // 2057
    function fromNow (withoutSuffix) {                                                                                 // 2058
        return this.from(local__createLocal(), withoutSuffix);                                                         // 2059
    }                                                                                                                  // 2060
                                                                                                                       // 2061
    function to (time, withoutSuffix) {                                                                                // 2062
        if (this.isValid() &&                                                                                          // 2063
                ((isMoment(time) && time.isValid()) ||                                                                 // 2064
                 local__createLocal(time).isValid())) {                                                                // 2065
            return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);      // 2066
        } else {                                                                                                       // 2067
            return this.localeData().invalidDate();                                                                    // 2068
        }                                                                                                              // 2069
    }                                                                                                                  // 2070
                                                                                                                       // 2071
    function toNow (withoutSuffix) {                                                                                   // 2072
        return this.to(local__createLocal(), withoutSuffix);                                                           // 2073
    }                                                                                                                  // 2074
                                                                                                                       // 2075
    // If passed a locale key, it will set the locale for this                                                         // 2076
    // instance.  Otherwise, it will return the locale configuration                                                   // 2077
    // variables for this instance.                                                                                    // 2078
    function locale (key) {                                                                                            // 2079
        var newLocaleData;                                                                                             // 2080
                                                                                                                       // 2081
        if (key === undefined) {                                                                                       // 2082
            return this._locale._abbr;                                                                                 // 2083
        } else {                                                                                                       // 2084
            newLocaleData = locale_locales__getLocale(key);                                                            // 2085
            if (newLocaleData != null) {                                                                               // 2086
                this._locale = newLocaleData;                                                                          // 2087
            }                                                                                                          // 2088
            return this;                                                                                               // 2089
        }                                                                                                              // 2090
    }                                                                                                                  // 2091
                                                                                                                       // 2092
    var lang = deprecate(                                                                                              // 2093
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {                                                                                               // 2095
            if (key === undefined) {                                                                                   // 2096
                return this.localeData();                                                                              // 2097
            } else {                                                                                                   // 2098
                return this.locale(key);                                                                               // 2099
            }                                                                                                          // 2100
        }                                                                                                              // 2101
    );                                                                                                                 // 2102
                                                                                                                       // 2103
    function localeData () {                                                                                           // 2104
        return this._locale;                                                                                           // 2105
    }                                                                                                                  // 2106
                                                                                                                       // 2107
    function startOf (units) {                                                                                         // 2108
        units = normalizeUnits(units);                                                                                 // 2109
        // the following switch intentionally omits break keywords                                                     // 2110
        // to utilize falling through the cases.                                                                       // 2111
        switch (units) {                                                                                               // 2112
        case 'year':                                                                                                   // 2113
            this.month(0);                                                                                             // 2114
            /* falls through */                                                                                        // 2115
        case 'quarter':                                                                                                // 2116
        case 'month':                                                                                                  // 2117
            this.date(1);                                                                                              // 2118
            /* falls through */                                                                                        // 2119
        case 'week':                                                                                                   // 2120
        case 'isoWeek':                                                                                                // 2121
        case 'day':                                                                                                    // 2122
            this.hours(0);                                                                                             // 2123
            /* falls through */                                                                                        // 2124
        case 'hour':                                                                                                   // 2125
            this.minutes(0);                                                                                           // 2126
            /* falls through */                                                                                        // 2127
        case 'minute':                                                                                                 // 2128
            this.seconds(0);                                                                                           // 2129
            /* falls through */                                                                                        // 2130
        case 'second':                                                                                                 // 2131
            this.milliseconds(0);                                                                                      // 2132
        }                                                                                                              // 2133
                                                                                                                       // 2134
        // weeks are a special case                                                                                    // 2135
        if (units === 'week') {                                                                                        // 2136
            this.weekday(0);                                                                                           // 2137
        }                                                                                                              // 2138
        if (units === 'isoWeek') {                                                                                     // 2139
            this.isoWeekday(1);                                                                                        // 2140
        }                                                                                                              // 2141
                                                                                                                       // 2142
        // quarters are also special                                                                                   // 2143
        if (units === 'quarter') {                                                                                     // 2144
            this.month(Math.floor(this.month() / 3) * 3);                                                              // 2145
        }                                                                                                              // 2146
                                                                                                                       // 2147
        return this;                                                                                                   // 2148
    }                                                                                                                  // 2149
                                                                                                                       // 2150
    function endOf (units) {                                                                                           // 2151
        units = normalizeUnits(units);                                                                                 // 2152
        if (units === undefined || units === 'millisecond') {                                                          // 2153
            return this;                                                                                               // 2154
        }                                                                                                              // 2155
        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');                   // 2156
    }                                                                                                                  // 2157
                                                                                                                       // 2158
    function to_type__valueOf () {                                                                                     // 2159
        return +this._d - ((this._offset || 0) * 60000);                                                               // 2160
    }                                                                                                                  // 2161
                                                                                                                       // 2162
    function unix () {                                                                                                 // 2163
        return Math.floor(+this / 1000);                                                                               // 2164
    }                                                                                                                  // 2165
                                                                                                                       // 2166
    function toDate () {                                                                                               // 2167
        return this._offset ? new Date(+this) : this._d;                                                               // 2168
    }                                                                                                                  // 2169
                                                                                                                       // 2170
    function toArray () {                                                                                              // 2171
        var m = this;                                                                                                  // 2172
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];                     // 2173
    }                                                                                                                  // 2174
                                                                                                                       // 2175
    function toObject () {                                                                                             // 2176
        var m = this;                                                                                                  // 2177
        return {                                                                                                       // 2178
            years: m.year(),                                                                                           // 2179
            months: m.month(),                                                                                         // 2180
            date: m.date(),                                                                                            // 2181
            hours: m.hours(),                                                                                          // 2182
            minutes: m.minutes(),                                                                                      // 2183
            seconds: m.seconds(),                                                                                      // 2184
            milliseconds: m.milliseconds()                                                                             // 2185
        };                                                                                                             // 2186
    }                                                                                                                  // 2187
                                                                                                                       // 2188
    function toJSON () {                                                                                               // 2189
        // JSON.stringify(new Date(NaN)) === 'null'                                                                    // 2190
        return this.isValid() ? this.toISOString() : 'null';                                                           // 2191
    }                                                                                                                  // 2192
                                                                                                                       // 2193
    function moment_valid__isValid () {                                                                                // 2194
        return valid__isValid(this);                                                                                   // 2195
    }                                                                                                                  // 2196
                                                                                                                       // 2197
    function parsingFlags () {                                                                                         // 2198
        return extend({}, getParsingFlags(this));                                                                      // 2199
    }                                                                                                                  // 2200
                                                                                                                       // 2201
    function invalidAt () {                                                                                            // 2202
        return getParsingFlags(this).overflow;                                                                         // 2203
    }                                                                                                                  // 2204
                                                                                                                       // 2205
    function creationData() {                                                                                          // 2206
        return {                                                                                                       // 2207
            input: this._i,                                                                                            // 2208
            format: this._f,                                                                                           // 2209
            locale: this._locale,                                                                                      // 2210
            isUTC: this._isUTC,                                                                                        // 2211
            strict: this._strict                                                                                       // 2212
        };                                                                                                             // 2213
    }                                                                                                                  // 2214
                                                                                                                       // 2215
    // FORMATTING                                                                                                      // 2216
                                                                                                                       // 2217
    addFormatToken(0, ['gg', 2], 0, function () {                                                                      // 2218
        return this.weekYear() % 100;                                                                                  // 2219
    });                                                                                                                // 2220
                                                                                                                       // 2221
    addFormatToken(0, ['GG', 2], 0, function () {                                                                      // 2222
        return this.isoWeekYear() % 100;                                                                               // 2223
    });                                                                                                                // 2224
                                                                                                                       // 2225
    function addWeekYearFormatToken (token, getter) {                                                                  // 2226
        addFormatToken(0, [token, token.length], 0, getter);                                                           // 2227
    }                                                                                                                  // 2228
                                                                                                                       // 2229
    addWeekYearFormatToken('gggg',     'weekYear');                                                                    // 2230
    addWeekYearFormatToken('ggggg',    'weekYear');                                                                    // 2231
    addWeekYearFormatToken('GGGG',  'isoWeekYear');                                                                    // 2232
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');                                                                    // 2233
                                                                                                                       // 2234
    // ALIASES                                                                                                         // 2235
                                                                                                                       // 2236
    addUnitAlias('weekYear', 'gg');                                                                                    // 2237
    addUnitAlias('isoWeekYear', 'GG');                                                                                 // 2238
                                                                                                                       // 2239
    // PARSING                                                                                                         // 2240
                                                                                                                       // 2241
    addRegexToken('G',      matchSigned);                                                                              // 2242
    addRegexToken('g',      matchSigned);                                                                              // 2243
    addRegexToken('GG',     match1to2, match2);                                                                        // 2244
    addRegexToken('gg',     match1to2, match2);                                                                        // 2245
    addRegexToken('GGGG',   match1to4, match4);                                                                        // 2246
    addRegexToken('gggg',   match1to4, match4);                                                                        // 2247
    addRegexToken('GGGGG',  match1to6, match6);                                                                        // 2248
    addRegexToken('ggggg',  match1to6, match6);                                                                        // 2249
                                                                                                                       // 2250
    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {                      // 2251
        week[token.substr(0, 2)] = toInt(input);                                                                       // 2252
    });                                                                                                                // 2253
                                                                                                                       // 2254
    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {                                            // 2255
        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);                                                     // 2256
    });                                                                                                                // 2257
                                                                                                                       // 2258
    // MOMENTS                                                                                                         // 2259
                                                                                                                       // 2260
    function getSetWeekYear (input) {                                                                                  // 2261
        return getSetWeekYearHelper.call(this,                                                                         // 2262
                input,                                                                                                 // 2263
                this.week(),                                                                                           // 2264
                this.weekday(),                                                                                        // 2265
                this.localeData()._week.dow,                                                                           // 2266
                this.localeData()._week.doy);                                                                          // 2267
    }                                                                                                                  // 2268
                                                                                                                       // 2269
    function getSetISOWeekYear (input) {                                                                               // 2270
        return getSetWeekYearHelper.call(this,                                                                         // 2271
                input, this.isoWeek(), this.isoWeekday(), 1, 4);                                                       // 2272
    }                                                                                                                  // 2273
                                                                                                                       // 2274
    function getISOWeeksInYear () {                                                                                    // 2275
        return weeksInYear(this.year(), 1, 4);                                                                         // 2276
    }                                                                                                                  // 2277
                                                                                                                       // 2278
    function getWeeksInYear () {                                                                                       // 2279
        var weekInfo = this.localeData()._week;                                                                        // 2280
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);                                                   // 2281
    }                                                                                                                  // 2282
                                                                                                                       // 2283
    function getSetWeekYearHelper(input, week, weekday, dow, doy) {                                                    // 2284
        var weeksTarget;                                                                                               // 2285
        if (input == null) {                                                                                           // 2286
            return weekOfYear(this, dow, doy).year;                                                                    // 2287
        } else {                                                                                                       // 2288
            weeksTarget = weeksInYear(input, dow, doy);                                                                // 2289
            if (week > weeksTarget) {                                                                                  // 2290
                week = weeksTarget;                                                                                    // 2291
            }                                                                                                          // 2292
            return setWeekAll.call(this, input, week, weekday, dow, doy);                                              // 2293
        }                                                                                                              // 2294
    }                                                                                                                  // 2295
                                                                                                                       // 2296
    function setWeekAll(weekYear, week, weekday, dow, doy) {                                                           // 2297
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),                                     // 2298
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);                                      // 2299
                                                                                                                       // 2300
        // console.log("got", weekYear, week, weekday, "set", date.toISOString());                                     // 2301
        this.year(date.getUTCFullYear());                                                                              // 2302
        this.month(date.getUTCMonth());                                                                                // 2303
        this.date(date.getUTCDate());                                                                                  // 2304
        return this;                                                                                                   // 2305
    }                                                                                                                  // 2306
                                                                                                                       // 2307
    // FORMATTING                                                                                                      // 2308
                                                                                                                       // 2309
    addFormatToken('Q', 0, 'Qo', 'quarter');                                                                           // 2310
                                                                                                                       // 2311
    // ALIASES                                                                                                         // 2312
                                                                                                                       // 2313
    addUnitAlias('quarter', 'Q');                                                                                      // 2314
                                                                                                                       // 2315
    // PARSING                                                                                                         // 2316
                                                                                                                       // 2317
    addRegexToken('Q', match1);                                                                                        // 2318
    addParseToken('Q', function (input, array) {                                                                       // 2319
        array[MONTH] = (toInt(input) - 1) * 3;                                                                         // 2320
    });                                                                                                                // 2321
                                                                                                                       // 2322
    // MOMENTS                                                                                                         // 2323
                                                                                                                       // 2324
    function getSetQuarter (input) {                                                                                   // 2325
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);     // 2326
    }                                                                                                                  // 2327
                                                                                                                       // 2328
    // FORMATTING                                                                                                      // 2329
                                                                                                                       // 2330
    addFormatToken('w', ['ww', 2], 'wo', 'week');                                                                      // 2331
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');                                                                   // 2332
                                                                                                                       // 2333
    // ALIASES                                                                                                         // 2334
                                                                                                                       // 2335
    addUnitAlias('week', 'w');                                                                                         // 2336
    addUnitAlias('isoWeek', 'W');                                                                                      // 2337
                                                                                                                       // 2338
    // PARSING                                                                                                         // 2339
                                                                                                                       // 2340
    addRegexToken('w',  match1to2);                                                                                    // 2341
    addRegexToken('ww', match1to2, match2);                                                                            // 2342
    addRegexToken('W',  match1to2);                                                                                    // 2343
    addRegexToken('WW', match1to2, match2);                                                                            // 2344
                                                                                                                       // 2345
    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {                                  // 2346
        week[token.substr(0, 1)] = toInt(input);                                                                       // 2347
    });                                                                                                                // 2348
                                                                                                                       // 2349
    // HELPERS                                                                                                         // 2350
                                                                                                                       // 2351
    // LOCALES                                                                                                         // 2352
                                                                                                                       // 2353
    function localeWeek (mom) {                                                                                        // 2354
        return weekOfYear(mom, this._week.dow, this._week.doy).week;                                                   // 2355
    }                                                                                                                  // 2356
                                                                                                                       // 2357
    var defaultLocaleWeek = {                                                                                          // 2358
        dow : 0, // Sunday is the first day of the week.                                                               // 2359
        doy : 6  // The week that contains Jan 1st is the first week of the year.                                      // 2360
    };                                                                                                                 // 2361
                                                                                                                       // 2362
    function localeFirstDayOfWeek () {                                                                                 // 2363
        return this._week.dow;                                                                                         // 2364
    }                                                                                                                  // 2365
                                                                                                                       // 2366
    function localeFirstDayOfYear () {                                                                                 // 2367
        return this._week.doy;                                                                                         // 2368
    }                                                                                                                  // 2369
                                                                                                                       // 2370
    // MOMENTS                                                                                                         // 2371
                                                                                                                       // 2372
    function getSetWeek (input) {                                                                                      // 2373
        var week = this.localeData().week(this);                                                                       // 2374
        return input == null ? week : this.add((input - week) * 7, 'd');                                               // 2375
    }                                                                                                                  // 2376
                                                                                                                       // 2377
    function getSetISOWeek (input) {                                                                                   // 2378
        var week = weekOfYear(this, 1, 4).week;                                                                        // 2379
        return input == null ? week : this.add((input - week) * 7, 'd');                                               // 2380
    }                                                                                                                  // 2381
                                                                                                                       // 2382
    // FORMATTING                                                                                                      // 2383
                                                                                                                       // 2384
    addFormatToken('D', ['DD', 2], 'Do', 'date');                                                                      // 2385
                                                                                                                       // 2386
    // ALIASES                                                                                                         // 2387
                                                                                                                       // 2388
    addUnitAlias('date', 'D');                                                                                         // 2389
                                                                                                                       // 2390
    // PARSING                                                                                                         // 2391
                                                                                                                       // 2392
    addRegexToken('D',  match1to2);                                                                                    // 2393
    addRegexToken('DD', match1to2, match2);                                                                            // 2394
    addRegexToken('Do', function (isStrict, locale) {                                                                  // 2395
        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;                                          // 2396
    });                                                                                                                // 2397
                                                                                                                       // 2398
    addParseToken(['D', 'DD'], DATE);                                                                                  // 2399
    addParseToken('Do', function (input, array) {                                                                      // 2400
        array[DATE] = toInt(input.match(match1to2)[0], 10);                                                            // 2401
    });                                                                                                                // 2402
                                                                                                                       // 2403
    // MOMENTS                                                                                                         // 2404
                                                                                                                       // 2405
    var getSetDayOfMonth = makeGetSet('Date', true);                                                                   // 2406
                                                                                                                       // 2407
    // FORMATTING                                                                                                      // 2408
                                                                                                                       // 2409
    addFormatToken('d', 0, 'do', 'day');                                                                               // 2410
                                                                                                                       // 2411
    addFormatToken('dd', 0, 0, function (format) {                                                                     // 2412
        return this.localeData().weekdaysMin(this, format);                                                            // 2413
    });                                                                                                                // 2414
                                                                                                                       // 2415
    addFormatToken('ddd', 0, 0, function (format) {                                                                    // 2416
        return this.localeData().weekdaysShort(this, format);                                                          // 2417
    });                                                                                                                // 2418
                                                                                                                       // 2419
    addFormatToken('dddd', 0, 0, function (format) {                                                                   // 2420
        return this.localeData().weekdays(this, format);                                                               // 2421
    });                                                                                                                // 2422
                                                                                                                       // 2423
    addFormatToken('e', 0, 0, 'weekday');                                                                              // 2424
    addFormatToken('E', 0, 0, 'isoWeekday');                                                                           // 2425
                                                                                                                       // 2426
    // ALIASES                                                                                                         // 2427
                                                                                                                       // 2428
    addUnitAlias('day', 'd');                                                                                          // 2429
    addUnitAlias('weekday', 'e');                                                                                      // 2430
    addUnitAlias('isoWeekday', 'E');                                                                                   // 2431
                                                                                                                       // 2432
    // PARSING                                                                                                         // 2433
                                                                                                                       // 2434
    addRegexToken('d',    match1to2);                                                                                  // 2435
    addRegexToken('e',    match1to2);                                                                                  // 2436
    addRegexToken('E',    match1to2);                                                                                  // 2437
    addRegexToken('dd',   matchWord);                                                                                  // 2438
    addRegexToken('ddd',  matchWord);                                                                                  // 2439
    addRegexToken('dddd', matchWord);                                                                                  // 2440
                                                                                                                       // 2441
    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {                                   // 2442
        var weekday = config._locale.weekdaysParse(input, token, config._strict);                                      // 2443
        // if we didn't get a weekday name, mark the date as invalid                                                   // 2444
        if (weekday != null) {                                                                                         // 2445
            week.d = weekday;                                                                                          // 2446
        } else {                                                                                                       // 2447
            getParsingFlags(config).invalidWeekday = input;                                                            // 2448
        }                                                                                                              // 2449
    });                                                                                                                // 2450
                                                                                                                       // 2451
    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {                                         // 2452
        week[token] = toInt(input);                                                                                    // 2453
    });                                                                                                                // 2454
                                                                                                                       // 2455
    // HELPERS                                                                                                         // 2456
                                                                                                                       // 2457
    function parseWeekday(input, locale) {                                                                             // 2458
        if (typeof input !== 'string') {                                                                               // 2459
            return input;                                                                                              // 2460
        }                                                                                                              // 2461
                                                                                                                       // 2462
        if (!isNaN(input)) {                                                                                           // 2463
            return parseInt(input, 10);                                                                                // 2464
        }                                                                                                              // 2465
                                                                                                                       // 2466
        input = locale.weekdaysParse(input);                                                                           // 2467
        if (typeof input === 'number') {                                                                               // 2468
            return input;                                                                                              // 2469
        }                                                                                                              // 2470
                                                                                                                       // 2471
        return null;                                                                                                   // 2472
    }                                                                                                                  // 2473
                                                                                                                       // 2474
    // LOCALES                                                                                                         // 2475
                                                                                                                       // 2476
    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');                 // 2477
    function localeWeekdays (m, format) {                                                                              // 2478
        return isArray(this._weekdays) ? this._weekdays[m.day()] :                                                     // 2479
            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];                   // 2480
    }                                                                                                                  // 2481
                                                                                                                       // 2482
    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');                                         // 2483
    function localeWeekdaysShort (m) {                                                                                 // 2484
        return this._weekdaysShort[m.day()];                                                                           // 2485
    }                                                                                                                  // 2486
                                                                                                                       // 2487
    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');                                                  // 2488
    function localeWeekdaysMin (m) {                                                                                   // 2489
        return this._weekdaysMin[m.day()];                                                                             // 2490
    }                                                                                                                  // 2491
                                                                                                                       // 2492
    function localeWeekdaysParse (weekdayName, format, strict) {                                                       // 2493
        var i, mom, regex;                                                                                             // 2494
                                                                                                                       // 2495
        if (!this._weekdaysParse) {                                                                                    // 2496
            this._weekdaysParse = [];                                                                                  // 2497
            this._minWeekdaysParse = [];                                                                               // 2498
            this._shortWeekdaysParse = [];                                                                             // 2499
            this._fullWeekdaysParse = [];                                                                              // 2500
        }                                                                                                              // 2501
                                                                                                                       // 2502
        for (i = 0; i < 7; i++) {                                                                                      // 2503
            // make the regex if we don't have it already                                                              // 2504
                                                                                                                       // 2505
            mom = local__createLocal([2000, 1]).day(i);                                                                // 2506
            if (strict && !this._fullWeekdaysParse[i]) {                                                               // 2507
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');  // 2508
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
            }                                                                                                          // 2511
            if (!this._weekdaysParse[i]) {                                                                             // 2512
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');                                      // 2514
            }                                                                                                          // 2515
            // test the regex                                                                                          // 2516
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {                         // 2517
                return i;                                                                                              // 2518
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {                  // 2519
                return i;                                                                                              // 2520
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {                     // 2521
                return i;                                                                                              // 2522
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {                                          // 2523
                return i;                                                                                              // 2524
            }                                                                                                          // 2525
        }                                                                                                              // 2526
    }                                                                                                                  // 2527
                                                                                                                       // 2528
    // MOMENTS                                                                                                         // 2529
                                                                                                                       // 2530
    function getSetDayOfWeek (input) {                                                                                 // 2531
        if (!this.isValid()) {                                                                                         // 2532
            return input != null ? this : NaN;                                                                         // 2533
        }                                                                                                              // 2534
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();                                                // 2535
        if (input != null) {                                                                                           // 2536
            input = parseWeekday(input, this.localeData());                                                            // 2537
            return this.add(input - day, 'd');                                                                         // 2538
        } else {                                                                                                       // 2539
            return day;                                                                                                // 2540
        }                                                                                                              // 2541
    }                                                                                                                  // 2542
                                                                                                                       // 2543
    function getSetLocaleDayOfWeek (input) {                                                                           // 2544
        if (!this.isValid()) {                                                                                         // 2545
            return input != null ? this : NaN;                                                                         // 2546
        }                                                                                                              // 2547
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;                                              // 2548
        return input == null ? weekday : this.add(input - weekday, 'd');                                               // 2549
    }                                                                                                                  // 2550
                                                                                                                       // 2551
    function getSetISODayOfWeek (input) {                                                                              // 2552
        if (!this.isValid()) {                                                                                         // 2553
            return input != null ? this : NaN;                                                                         // 2554
        }                                                                                                              // 2555
        // behaves the same as moment#day except                                                                       // 2556
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)                                              // 2557
        // as a setter, sunday should belong to the previous week.                                                     // 2558
        return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);                         // 2559
    }                                                                                                                  // 2560
                                                                                                                       // 2561
    // FORMATTING                                                                                                      // 2562
                                                                                                                       // 2563
    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');                                                           // 2564
                                                                                                                       // 2565
    // ALIASES                                                                                                         // 2566
                                                                                                                       // 2567
    addUnitAlias('dayOfYear', 'DDD');                                                                                  // 2568
                                                                                                                       // 2569
    // PARSING                                                                                                         // 2570
                                                                                                                       // 2571
    addRegexToken('DDD',  match1to3);                                                                                  // 2572
    addRegexToken('DDDD', match3);                                                                                     // 2573
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {                                                   // 2574
        config._dayOfYear = toInt(input);                                                                              // 2575
    });                                                                                                                // 2576
                                                                                                                       // 2577
    // HELPERS                                                                                                         // 2578
                                                                                                                       // 2579
    // MOMENTS                                                                                                         // 2580
                                                                                                                       // 2581
    function getSetDayOfYear (input) {                                                                                 // 2582
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;          // 2583
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');                                         // 2584
    }                                                                                                                  // 2585
                                                                                                                       // 2586
    // FORMATTING                                                                                                      // 2587
                                                                                                                       // 2588
    function hFormat() {                                                                                               // 2589
        return this.hours() % 12 || 12;                                                                                // 2590
    }                                                                                                                  // 2591
                                                                                                                       // 2592
    addFormatToken('H', ['HH', 2], 0, 'hour');                                                                         // 2593
    addFormatToken('h', ['hh', 2], 0, hFormat);                                                                        // 2594
                                                                                                                       // 2595
    addFormatToken('hmm', 0, 0, function () {                                                                          // 2596
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);                                                 // 2597
    });                                                                                                                // 2598
                                                                                                                       // 2599
    addFormatToken('hmmss', 0, 0, function () {                                                                        // 2600
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +                                                // 2601
            zeroFill(this.seconds(), 2);                                                                               // 2602
    });                                                                                                                // 2603
                                                                                                                       // 2604
    addFormatToken('Hmm', 0, 0, function () {                                                                          // 2605
        return '' + this.hours() + zeroFill(this.minutes(), 2);                                                        // 2606
    });                                                                                                                // 2607
                                                                                                                       // 2608
    addFormatToken('Hmmss', 0, 0, function () {                                                                        // 2609
        return '' + this.hours() + zeroFill(this.minutes(), 2) +                                                       // 2610
            zeroFill(this.seconds(), 2);                                                                               // 2611
    });                                                                                                                // 2612
                                                                                                                       // 2613
    function meridiem (token, lowercase) {                                                                             // 2614
        addFormatToken(token, 0, 0, function () {                                                                      // 2615
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);                                // 2616
        });                                                                                                            // 2617
    }                                                                                                                  // 2618
                                                                                                                       // 2619
    meridiem('a', true);                                                                                               // 2620
    meridiem('A', false);                                                                                              // 2621
                                                                                                                       // 2622
    // ALIASES                                                                                                         // 2623
                                                                                                                       // 2624
    addUnitAlias('hour', 'h');                                                                                         // 2625
                                                                                                                       // 2626
    // PARSING                                                                                                         // 2627
                                                                                                                       // 2628
    function matchMeridiem (isStrict, locale) {                                                                        // 2629
        return locale._meridiemParse;                                                                                  // 2630
    }                                                                                                                  // 2631
                                                                                                                       // 2632
    addRegexToken('a',  matchMeridiem);                                                                                // 2633
    addRegexToken('A',  matchMeridiem);                                                                                // 2634
    addRegexToken('H',  match1to2);                                                                                    // 2635
    addRegexToken('h',  match1to2);                                                                                    // 2636
    addRegexToken('HH', match1to2, match2);                                                                            // 2637
    addRegexToken('hh', match1to2, match2);                                                                            // 2638
                                                                                                                       // 2639
    addRegexToken('hmm', match3to4);                                                                                   // 2640
    addRegexToken('hmmss', match5to6);                                                                                 // 2641
    addRegexToken('Hmm', match3to4);                                                                                   // 2642
    addRegexToken('Hmmss', match5to6);                                                                                 // 2643
                                                                                                                       // 2644
    addParseToken(['H', 'HH'], HOUR);                                                                                  // 2645
    addParseToken(['a', 'A'], function (input, array, config) {                                                        // 2646
        config._isPm = config._locale.isPM(input);                                                                     // 2647
        config._meridiem = input;                                                                                      // 2648
    });                                                                                                                // 2649
    addParseToken(['h', 'hh'], function (input, array, config) {                                                       // 2650
        array[HOUR] = toInt(input);                                                                                    // 2651
        getParsingFlags(config).bigHour = true;                                                                        // 2652
    });                                                                                                                // 2653
    addParseToken('hmm', function (input, array, config) {                                                             // 2654
        var pos = input.length - 2;                                                                                    // 2655
        array[HOUR] = toInt(input.substr(0, pos));                                                                     // 2656
        array[MINUTE] = toInt(input.substr(pos));                                                                      // 2657
        getParsingFlags(config).bigHour = true;                                                                        // 2658
    });                                                                                                                // 2659
    addParseToken('hmmss', function (input, array, config) {                                                           // 2660
        var pos1 = input.length - 4;                                                                                   // 2661
        var pos2 = input.length - 2;                                                                                   // 2662
        array[HOUR] = toInt(input.substr(0, pos1));                                                                    // 2663
        array[MINUTE] = toInt(input.substr(pos1, 2));                                                                  // 2664
        array[SECOND] = toInt(input.substr(pos2));                                                                     // 2665
        getParsingFlags(config).bigHour = true;                                                                        // 2666
    });                                                                                                                // 2667
    addParseToken('Hmm', function (input, array, config) {                                                             // 2668
        var pos = input.length - 2;                                                                                    // 2669
        array[HOUR] = toInt(input.substr(0, pos));                                                                     // 2670
        array[MINUTE] = toInt(input.substr(pos));                                                                      // 2671
    });                                                                                                                // 2672
    addParseToken('Hmmss', function (input, array, config) {                                                           // 2673
        var pos1 = input.length - 4;                                                                                   // 2674
        var pos2 = input.length - 2;                                                                                   // 2675
        array[HOUR] = toInt(input.substr(0, pos1));                                                                    // 2676
        array[MINUTE] = toInt(input.substr(pos1, 2));                                                                  // 2677
        array[SECOND] = toInt(input.substr(pos2));                                                                     // 2678
    });                                                                                                                // 2679
                                                                                                                       // 2680
    // LOCALES                                                                                                         // 2681
                                                                                                                       // 2682
    function localeIsPM (input) {                                                                                      // 2683
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays                             // 2684
        // Using charAt should be more compatible.                                                                     // 2685
        return ((input + '').toLowerCase().charAt(0) === 'p');                                                         // 2686
    }                                                                                                                  // 2687
                                                                                                                       // 2688
    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;                                                                  // 2689
    function localeMeridiem (hours, minutes, isLower) {                                                                // 2690
        if (hours > 11) {                                                                                              // 2691
            return isLower ? 'pm' : 'PM';                                                                              // 2692
        } else {                                                                                                       // 2693
            return isLower ? 'am' : 'AM';                                                                              // 2694
        }                                                                                                              // 2695
    }                                                                                                                  // 2696
                                                                                                                       // 2697
                                                                                                                       // 2698
    // MOMENTS                                                                                                         // 2699
                                                                                                                       // 2700
    // Setting the hour should keep the time, because the user explicitly                                              // 2701
    // specified which hour he wants. So trying to maintain the same hour (in                                          // 2702
    // a new timezone) makes sense. Adding/subtracting hours does not follow                                           // 2703
    // this rule.                                                                                                      // 2704
    var getSetHour = makeGetSet('Hours', true);                                                                        // 2705
                                                                                                                       // 2706
    // FORMATTING                                                                                                      // 2707
                                                                                                                       // 2708
    addFormatToken('m', ['mm', 2], 0, 'minute');                                                                       // 2709
                                                                                                                       // 2710
    // ALIASES                                                                                                         // 2711
                                                                                                                       // 2712
    addUnitAlias('minute', 'm');                                                                                       // 2713
                                                                                                                       // 2714
    // PARSING                                                                                                         // 2715
                                                                                                                       // 2716
    addRegexToken('m',  match1to2);                                                                                    // 2717
    addRegexToken('mm', match1to2, match2);                                                                            // 2718
    addParseToken(['m', 'mm'], MINUTE);                                                                                // 2719
                                                                                                                       // 2720
    // MOMENTS                                                                                                         // 2721
                                                                                                                       // 2722
    var getSetMinute = makeGetSet('Minutes', false);                                                                   // 2723
                                                                                                                       // 2724
    // FORMATTING                                                                                                      // 2725
                                                                                                                       // 2726
    addFormatToken('s', ['ss', 2], 0, 'second');                                                                       // 2727
                                                                                                                       // 2728
    // ALIASES                                                                                                         // 2729
                                                                                                                       // 2730
    addUnitAlias('second', 's');                                                                                       // 2731
                                                                                                                       // 2732
    // PARSING                                                                                                         // 2733
                                                                                                                       // 2734
    addRegexToken('s',  match1to2);                                                                                    // 2735
    addRegexToken('ss', match1to2, match2);                                                                            // 2736
    addParseToken(['s', 'ss'], SECOND);                                                                                // 2737
                                                                                                                       // 2738
    // MOMENTS                                                                                                         // 2739
                                                                                                                       // 2740
    var getSetSecond = makeGetSet('Seconds', false);                                                                   // 2741
                                                                                                                       // 2742
    // FORMATTING                                                                                                      // 2743
                                                                                                                       // 2744
    addFormatToken('S', 0, 0, function () {                                                                            // 2745
        return ~~(this.millisecond() / 100);                                                                           // 2746
    });                                                                                                                // 2747
                                                                                                                       // 2748
    addFormatToken(0, ['SS', 2], 0, function () {                                                                      // 2749
        return ~~(this.millisecond() / 10);                                                                            // 2750
    });                                                                                                                // 2751
                                                                                                                       // 2752
    addFormatToken(0, ['SSS', 3], 0, 'millisecond');                                                                   // 2753
    addFormatToken(0, ['SSSS', 4], 0, function () {                                                                    // 2754
        return this.millisecond() * 10;                                                                                // 2755
    });                                                                                                                // 2756
    addFormatToken(0, ['SSSSS', 5], 0, function () {                                                                   // 2757
        return this.millisecond() * 100;                                                                               // 2758
    });                                                                                                                // 2759
    addFormatToken(0, ['SSSSSS', 6], 0, function () {                                                                  // 2760
        return this.millisecond() * 1000;                                                                              // 2761
    });                                                                                                                // 2762
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {                                                                 // 2763
        return this.millisecond() * 10000;                                                                             // 2764
    });                                                                                                                // 2765
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {                                                                // 2766
        return this.millisecond() * 100000;                                                                            // 2767
    });                                                                                                                // 2768
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {                                                               // 2769
        return this.millisecond() * 1000000;                                                                           // 2770
    });                                                                                                                // 2771
                                                                                                                       // 2772
                                                                                                                       // 2773
    // ALIASES                                                                                                         // 2774
                                                                                                                       // 2775
    addUnitAlias('millisecond', 'ms');                                                                                 // 2776
                                                                                                                       // 2777
    // PARSING                                                                                                         // 2778
                                                                                                                       // 2779
    addRegexToken('S',    match1to3, match1);                                                                          // 2780
    addRegexToken('SS',   match1to3, match2);                                                                          // 2781
    addRegexToken('SSS',  match1to3, match3);                                                                          // 2782
                                                                                                                       // 2783
    var token;                                                                                                         // 2784
    for (token = 'SSSS'; token.length <= 9; token += 'S') {                                                            // 2785
        addRegexToken(token, matchUnsigned);                                                                           // 2786
    }                                                                                                                  // 2787
                                                                                                                       // 2788
    function parseMs(input, array) {                                                                                   // 2789
        array[MILLISECOND] = toInt(('0.' + input) * 1000);                                                             // 2790
    }                                                                                                                  // 2791
                                                                                                                       // 2792
    for (token = 'S'; token.length <= 9; token += 'S') {                                                               // 2793
        addParseToken(token, parseMs);                                                                                 // 2794
    }                                                                                                                  // 2795
    // MOMENTS                                                                                                         // 2796
                                                                                                                       // 2797
    var getSetMillisecond = makeGetSet('Milliseconds', false);                                                         // 2798
                                                                                                                       // 2799
    // FORMATTING                                                                                                      // 2800
                                                                                                                       // 2801
    addFormatToken('z',  0, 0, 'zoneAbbr');                                                                            // 2802
    addFormatToken('zz', 0, 0, 'zoneName');                                                                            // 2803
                                                                                                                       // 2804
    // MOMENTS                                                                                                         // 2805
                                                                                                                       // 2806
    function getZoneAbbr () {                                                                                          // 2807
        return this._isUTC ? 'UTC' : '';                                                                               // 2808
    }                                                                                                                  // 2809
                                                                                                                       // 2810
    function getZoneName () {                                                                                          // 2811
        return this._isUTC ? 'Coordinated Universal Time' : '';                                                        // 2812
    }                                                                                                                  // 2813
                                                                                                                       // 2814
    var momentPrototype__proto = Moment.prototype;                                                                     // 2815
                                                                                                                       // 2816
    momentPrototype__proto.add               = add_subtract__add;                                                      // 2817
    momentPrototype__proto.calendar          = moment_calendar__calendar;                                              // 2818
    momentPrototype__proto.clone             = clone;                                                                  // 2819
    momentPrototype__proto.diff              = diff;                                                                   // 2820
    momentPrototype__proto.endOf             = endOf;                                                                  // 2821
    momentPrototype__proto.format            = format;                                                                 // 2822
    momentPrototype__proto.from              = from;                                                                   // 2823
    momentPrototype__proto.fromNow           = fromNow;                                                                // 2824
    momentPrototype__proto.to                = to;                                                                     // 2825
    momentPrototype__proto.toNow             = toNow;                                                                  // 2826
    momentPrototype__proto.get               = getSet;                                                                 // 2827
    momentPrototype__proto.invalidAt         = invalidAt;                                                              // 2828
    momentPrototype__proto.isAfter           = isAfter;                                                                // 2829
    momentPrototype__proto.isBefore          = isBefore;                                                               // 2830
    momentPrototype__proto.isBetween         = isBetween;                                                              // 2831
    momentPrototype__proto.isSame            = isSame;                                                                 // 2832
    momentPrototype__proto.isSameOrAfter     = isSameOrAfter;                                                          // 2833
    momentPrototype__proto.isSameOrBefore    = isSameOrBefore;                                                         // 2834
    momentPrototype__proto.isValid           = moment_valid__isValid;                                                  // 2835
    momentPrototype__proto.lang              = lang;                                                                   // 2836
    momentPrototype__proto.locale            = locale;                                                                 // 2837
    momentPrototype__proto.localeData        = localeData;                                                             // 2838
    momentPrototype__proto.max               = prototypeMax;                                                           // 2839
    momentPrototype__proto.min               = prototypeMin;                                                           // 2840
    momentPrototype__proto.parsingFlags      = parsingFlags;                                                           // 2841
    momentPrototype__proto.set               = getSet;                                                                 // 2842
    momentPrototype__proto.startOf           = startOf;                                                                // 2843
    momentPrototype__proto.subtract          = add_subtract__subtract;                                                 // 2844
    momentPrototype__proto.toArray           = toArray;                                                                // 2845
    momentPrototype__proto.toObject          = toObject;                                                               // 2846
    momentPrototype__proto.toDate            = toDate;                                                                 // 2847
    momentPrototype__proto.toISOString       = moment_format__toISOString;                                             // 2848
    momentPrototype__proto.toJSON            = toJSON;                                                                 // 2849
    momentPrototype__proto.toString          = toString;                                                               // 2850
    momentPrototype__proto.unix              = unix;                                                                   // 2851
    momentPrototype__proto.valueOf           = to_type__valueOf;                                                       // 2852
    momentPrototype__proto.creationData      = creationData;                                                           // 2853
                                                                                                                       // 2854
    // Year                                                                                                            // 2855
    momentPrototype__proto.year       = getSetYear;                                                                    // 2856
    momentPrototype__proto.isLeapYear = getIsLeapYear;                                                                 // 2857
                                                                                                                       // 2858
    // Week Year                                                                                                       // 2859
    momentPrototype__proto.weekYear    = getSetWeekYear;                                                               // 2860
    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;                                                            // 2861
                                                                                                                       // 2862
    // Quarter                                                                                                         // 2863
    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;                                  // 2864
                                                                                                                       // 2865
    // Month                                                                                                           // 2866
    momentPrototype__proto.month       = getSetMonth;                                                                  // 2867
    momentPrototype__proto.daysInMonth = getDaysInMonth;                                                               // 2868
                                                                                                                       // 2869
    // Week                                                                                                            // 2870
    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;                          // 2871
    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;                       // 2872
    momentPrototype__proto.weeksInYear    = getWeeksInYear;                                                            // 2873
    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;                                                         // 2874
                                                                                                                       // 2875
    // Day                                                                                                             // 2876
    momentPrototype__proto.date       = getSetDayOfMonth;                                                              // 2877
    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;                     // 2878
    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;                                                         // 2879
    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;                                                            // 2880
    momentPrototype__proto.dayOfYear  = getSetDayOfYear;                                                               // 2881
                                                                                                                       // 2882
    // Hour                                                                                                            // 2883
    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;                                           // 2884
                                                                                                                       // 2885
    // Minute                                                                                                          // 2886
    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;                                     // 2887
                                                                                                                       // 2888
    // Second                                                                                                          // 2889
    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;                                     // 2890
                                                                                                                       // 2891
    // Millisecond                                                                                                     // 2892
    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;                      // 2893
                                                                                                                       // 2894
    // Offset                                                                                                          // 2895
    momentPrototype__proto.utcOffset            = getSetOffset;                                                        // 2896
    momentPrototype__proto.utc                  = setOffsetToUTC;                                                      // 2897
    momentPrototype__proto.local                = setOffsetToLocal;                                                    // 2898
    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;                                             // 2899
    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;                                                // 2900
    momentPrototype__proto.isDST                = isDaylightSavingTime;                                                // 2901
    momentPrototype__proto.isDSTShifted         = isDaylightSavingTimeShifted;                                         // 2902
    momentPrototype__proto.isLocal              = isLocal;                                                             // 2903
    momentPrototype__proto.isUtcOffset          = isUtcOffset;                                                         // 2904
    momentPrototype__proto.isUtc                = isUtc;                                                               // 2905
    momentPrototype__proto.isUTC                = isUtc;                                                               // 2906
                                                                                                                       // 2907
    // Timezone                                                                                                        // 2908
    momentPrototype__proto.zoneAbbr = getZoneAbbr;                                                                     // 2909
    momentPrototype__proto.zoneName = getZoneName;                                                                     // 2910
                                                                                                                       // 2911
    // Deprecations                                                                                                    // 2912
    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);    // 2913
    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);        // 2914
    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);           // 2915
    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);
                                                                                                                       // 2917
    var momentPrototype = momentPrototype__proto;                                                                      // 2918
                                                                                                                       // 2919
    function moment__createUnix (input) {                                                                              // 2920
        return local__createLocal(input * 1000);                                                                       // 2921
    }                                                                                                                  // 2922
                                                                                                                       // 2923
    function moment__createInZone () {                                                                                 // 2924
        return local__createLocal.apply(null, arguments).parseZone();                                                  // 2925
    }                                                                                                                  // 2926
                                                                                                                       // 2927
    var defaultCalendar = {                                                                                            // 2928
        sameDay : '[Today at] LT',                                                                                     // 2929
        nextDay : '[Tomorrow at] LT',                                                                                  // 2930
        nextWeek : 'dddd [at] LT',                                                                                     // 2931
        lastDay : '[Yesterday at] LT',                                                                                 // 2932
        lastWeek : '[Last] dddd [at] LT',                                                                              // 2933
        sameElse : 'L'                                                                                                 // 2934
    };                                                                                                                 // 2935
                                                                                                                       // 2936
    function locale_calendar__calendar (key, mom, now) {                                                               // 2937
        var output = this._calendar[key];                                                                              // 2938
        return isFunction(output) ? output.call(mom, now) : output;                                                    // 2939
    }                                                                                                                  // 2940
                                                                                                                       // 2941
    var defaultLongDateFormat = {                                                                                      // 2942
        LTS  : 'h:mm:ss A',                                                                                            // 2943
        LT   : 'h:mm A',                                                                                               // 2944
        L    : 'MM/DD/YYYY',                                                                                           // 2945
        LL   : 'MMMM D, YYYY',                                                                                         // 2946
        LLL  : 'MMMM D, YYYY h:mm A',                                                                                  // 2947
        LLLL : 'dddd, MMMM D, YYYY h:mm A'                                                                             // 2948
    };                                                                                                                 // 2949
                                                                                                                       // 2950
    function longDateFormat (key) {                                                                                    // 2951
        var format = this._longDateFormat[key],                                                                        // 2952
            formatUpper = this._longDateFormat[key.toUpperCase()];                                                     // 2953
                                                                                                                       // 2954
        if (format || !formatUpper) {                                                                                  // 2955
            return format;                                                                                             // 2956
        }                                                                                                              // 2957
                                                                                                                       // 2958
        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {                           // 2959
            return val.slice(1);                                                                                       // 2960
        });                                                                                                            // 2961
                                                                                                                       // 2962
        return this._longDateFormat[key];                                                                              // 2963
    }                                                                                                                  // 2964
                                                                                                                       // 2965
    var defaultInvalidDate = 'Invalid date';                                                                           // 2966
                                                                                                                       // 2967
    function invalidDate () {                                                                                          // 2968
        return this._invalidDate;                                                                                      // 2969
    }                                                                                                                  // 2970
                                                                                                                       // 2971
    var defaultOrdinal = '%d';                                                                                         // 2972
    var defaultOrdinalParse = /\d{1,2}/;                                                                               // 2973
                                                                                                                       // 2974
    function ordinal (number) {                                                                                        // 2975
        return this._ordinal.replace('%d', number);                                                                    // 2976
    }                                                                                                                  // 2977
                                                                                                                       // 2978
    function preParsePostFormat (string) {                                                                             // 2979
        return string;                                                                                                 // 2980
    }                                                                                                                  // 2981
                                                                                                                       // 2982
    var defaultRelativeTime = {                                                                                        // 2983
        future : 'in %s',                                                                                              // 2984
        past   : '%s ago',                                                                                             // 2985
        s  : 'a few seconds',                                                                                          // 2986
        m  : 'a minute',                                                                                               // 2987
        mm : '%d minutes',                                                                                             // 2988
        h  : 'an hour',                                                                                                // 2989
        hh : '%d hours',                                                                                               // 2990
        d  : 'a day',                                                                                                  // 2991
        dd : '%d days',                                                                                                // 2992
        M  : 'a month',                                                                                                // 2993
        MM : '%d months',                                                                                              // 2994
        y  : 'a year',                                                                                                 // 2995
        yy : '%d years'                                                                                                // 2996
    };                                                                                                                 // 2997
                                                                                                                       // 2998
    function relative__relativeTime (number, withoutSuffix, string, isFuture) {                                        // 2999
        var output = this._relativeTime[string];                                                                       // 3000
        return (isFunction(output)) ?                                                                                  // 3001
            output(number, withoutSuffix, string, isFuture) :                                                          // 3002
            output.replace(/%d/i, number);                                                                             // 3003
    }                                                                                                                  // 3004
                                                                                                                       // 3005
    function pastFuture (diff, output) {                                                                               // 3006
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];                                                 // 3007
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);                                    // 3008
    }                                                                                                                  // 3009
                                                                                                                       // 3010
    function locale_set__set (config) {                                                                                // 3011
        var prop, i;                                                                                                   // 3012
        for (i in config) {                                                                                            // 3013
            prop = config[i];                                                                                          // 3014
            if (isFunction(prop)) {                                                                                    // 3015
                this[i] = prop;                                                                                        // 3016
            } else {                                                                                                   // 3017
                this['_' + i] = prop;                                                                                  // 3018
            }                                                                                                          // 3019
        }                                                                                                              // 3020
        // Lenient ordinal parsing accepts just a number in addition to                                                // 3021
        // number + (possibly) stuff coming from _ordinalParseLenient.                                                 // 3022
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);                  // 3023
    }                                                                                                                  // 3024
                                                                                                                       // 3025
    var prototype__proto = Locale.prototype;                                                                           // 3026
                                                                                                                       // 3027
    prototype__proto._calendar       = defaultCalendar;                                                                // 3028
    prototype__proto.calendar        = locale_calendar__calendar;                                                      // 3029
    prototype__proto._longDateFormat = defaultLongDateFormat;                                                          // 3030
    prototype__proto.longDateFormat  = longDateFormat;                                                                 // 3031
    prototype__proto._invalidDate    = defaultInvalidDate;                                                             // 3032
    prototype__proto.invalidDate     = invalidDate;                                                                    // 3033
    prototype__proto._ordinal        = defaultOrdinal;                                                                 // 3034
    prototype__proto.ordinal         = ordinal;                                                                        // 3035
    prototype__proto._ordinalParse   = defaultOrdinalParse;                                                            // 3036
    prototype__proto.preparse        = preParsePostFormat;                                                             // 3037
    prototype__proto.postformat      = preParsePostFormat;                                                             // 3038
    prototype__proto._relativeTime   = defaultRelativeTime;                                                            // 3039
    prototype__proto.relativeTime    = relative__relativeTime;                                                         // 3040
    prototype__proto.pastFuture      = pastFuture;                                                                     // 3041
    prototype__proto.set             = locale_set__set;                                                                // 3042
                                                                                                                       // 3043
    // Month                                                                                                           // 3044
    prototype__proto.months       =        localeMonths;                                                               // 3045
    prototype__proto._months      = defaultLocaleMonths;                                                               // 3046
    prototype__proto.monthsShort  =        localeMonthsShort;                                                          // 3047
    prototype__proto._monthsShort = defaultLocaleMonthsShort;                                                          // 3048
    prototype__proto.monthsParse  =        localeMonthsParse;                                                          // 3049
                                                                                                                       // 3050
    // Week                                                                                                            // 3051
    prototype__proto.week = localeWeek;                                                                                // 3052
    prototype__proto._week = defaultLocaleWeek;                                                                        // 3053
    prototype__proto.firstDayOfYear = localeFirstDayOfYear;                                                            // 3054
    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;                                                            // 3055
                                                                                                                       // 3056
    // Day of Week                                                                                                     // 3057
    prototype__proto.weekdays       =        localeWeekdays;                                                           // 3058
    prototype__proto._weekdays      = defaultLocaleWeekdays;                                                           // 3059
    prototype__proto.weekdaysMin    =        localeWeekdaysMin;                                                        // 3060
    prototype__proto._weekdaysMin   = defaultLocaleWeekdaysMin;                                                        // 3061
    prototype__proto.weekdaysShort  =        localeWeekdaysShort;                                                      // 3062
    prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;                                                      // 3063
    prototype__proto.weekdaysParse  =        localeWeekdaysParse;                                                      // 3064
                                                                                                                       // 3065
    // Hours                                                                                                           // 3066
    prototype__proto.isPM = localeIsPM;                                                                                // 3067
    prototype__proto._meridiemParse = defaultLocaleMeridiemParse;                                                      // 3068
    prototype__proto.meridiem = localeMeridiem;                                                                        // 3069
                                                                                                                       // 3070
    function lists__get (format, index, field, setter) {                                                               // 3071
        var locale = locale_locales__getLocale();                                                                      // 3072
        var utc = create_utc__createUTC().set(setter, index);                                                          // 3073
        return locale[field](utc, format);                                                                             // 3074
    }                                                                                                                  // 3075
                                                                                                                       // 3076
    function list (format, index, field, count, setter) {                                                              // 3077
        if (typeof format === 'number') {                                                                              // 3078
            index = format;                                                                                            // 3079
            format = undefined;                                                                                        // 3080
        }                                                                                                              // 3081
                                                                                                                       // 3082
        format = format || '';                                                                                         // 3083
                                                                                                                       // 3084
        if (index != null) {                                                                                           // 3085
            return lists__get(format, index, field, setter);                                                           // 3086
        }                                                                                                              // 3087
                                                                                                                       // 3088
        var i;                                                                                                         // 3089
        var out = [];                                                                                                  // 3090
        for (i = 0; i < count; i++) {                                                                                  // 3091
            out[i] = lists__get(format, i, field, setter);                                                             // 3092
        }                                                                                                              // 3093
        return out;                                                                                                    // 3094
    }                                                                                                                  // 3095
                                                                                                                       // 3096
    function lists__listMonths (format, index) {                                                                       // 3097
        return list(format, index, 'months', 12, 'month');                                                             // 3098
    }                                                                                                                  // 3099
                                                                                                                       // 3100
    function lists__listMonthsShort (format, index) {                                                                  // 3101
        return list(format, index, 'monthsShort', 12, 'month');                                                        // 3102
    }                                                                                                                  // 3103
                                                                                                                       // 3104
    function lists__listWeekdays (format, index) {                                                                     // 3105
        return list(format, index, 'weekdays', 7, 'day');                                                              // 3106
    }                                                                                                                  // 3107
                                                                                                                       // 3108
    function lists__listWeekdaysShort (format, index) {                                                                // 3109
        return list(format, index, 'weekdaysShort', 7, 'day');                                                         // 3110
    }                                                                                                                  // 3111
                                                                                                                       // 3112
    function lists__listWeekdaysMin (format, index) {                                                                  // 3113
        return list(format, index, 'weekdaysMin', 7, 'day');                                                           // 3114
    }                                                                                                                  // 3115
                                                                                                                       // 3116
    locale_locales__getSetGlobalLocale('en', {                                                                         // 3117
        monthsParse : [/^jan/i, /^feb/i, /^mar/i, /^apr/i, /^may/i, /^jun/i, /^jul/i, /^aug/i, /^sep/i, /^oct/i, /^nov/i, /^dec/i],
        longMonthsParse : [/^january$/i, /^february$/i, /^march$/i, /^april$/i, /^may$/i, /^june$/i, /^july$/i, /^august$/i, /^september$/i, /^october$/i, /^november$/i, /^december$/i],
        shortMonthsParse : [/^jan$/i, /^feb$/i, /^mar$/i, /^apr$/i, /^may$/i, /^jun$/i, /^jul$/i, /^aug/i, /^sept?$/i, /^oct$/i, /^nov$/i, /^dec$/i],
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,                                                                          // 3121
        ordinal : function (number) {                                                                                  // 3122
            var b = number % 10,                                                                                       // 3123
                output = (toInt(number % 100 / 10) === 1) ? 'th' :                                                     // 3124
                (b === 1) ? 'st' :                                                                                     // 3125
                (b === 2) ? 'nd' :                                                                                     // 3126
                (b === 3) ? 'rd' : 'th';                                                                               // 3127
            return number + output;                                                                                    // 3128
        }                                                                                                              // 3129
    });                                                                                                                // 3130
                                                                                                                       // 3131
    // Side effect imports                                                                                             // 3132
    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);
                                                                                                                       // 3135
    var mathAbs = Math.abs;                                                                                            // 3136
                                                                                                                       // 3137
    function duration_abs__abs () {                                                                                    // 3138
        var data           = this._data;                                                                               // 3139
                                                                                                                       // 3140
        this._milliseconds = mathAbs(this._milliseconds);                                                              // 3141
        this._days         = mathAbs(this._days);                                                                      // 3142
        this._months       = mathAbs(this._months);                                                                    // 3143
                                                                                                                       // 3144
        data.milliseconds  = mathAbs(data.milliseconds);                                                               // 3145
        data.seconds       = mathAbs(data.seconds);                                                                    // 3146
        data.minutes       = mathAbs(data.minutes);                                                                    // 3147
        data.hours         = mathAbs(data.hours);                                                                      // 3148
        data.months        = mathAbs(data.months);                                                                     // 3149
        data.years         = mathAbs(data.years);                                                                      // 3150
                                                                                                                       // 3151
        return this;                                                                                                   // 3152
    }                                                                                                                  // 3153
                                                                                                                       // 3154
    function duration_add_subtract__addSubtract (duration, input, value, direction) {                                  // 3155
        var other = create__createDuration(input, value);                                                              // 3156
                                                                                                                       // 3157
        duration._milliseconds += direction * other._milliseconds;                                                     // 3158
        duration._days         += direction * other._days;                                                             // 3159
        duration._months       += direction * other._months;                                                           // 3160
                                                                                                                       // 3161
        return duration._bubble();                                                                                     // 3162
    }                                                                                                                  // 3163
                                                                                                                       // 3164
    // supports only 2.0-style add(1, 's') or add(duration)                                                            // 3165
    function duration_add_subtract__add (input, value) {                                                               // 3166
        return duration_add_subtract__addSubtract(this, input, value, 1);                                              // 3167
    }                                                                                                                  // 3168
                                                                                                                       // 3169
    // supports only 2.0-style subtract(1, 's') or subtract(duration)                                                  // 3170
    function duration_add_subtract__subtract (input, value) {                                                          // 3171
        return duration_add_subtract__addSubtract(this, input, value, -1);                                             // 3172
    }                                                                                                                  // 3173
                                                                                                                       // 3174
    function absCeil (number) {                                                                                        // 3175
        if (number < 0) {                                                                                              // 3176
            return Math.floor(number);                                                                                 // 3177
        } else {                                                                                                       // 3178
            return Math.ceil(number);                                                                                  // 3179
        }                                                                                                              // 3180
    }                                                                                                                  // 3181
                                                                                                                       // 3182
    function bubble () {                                                                                               // 3183
        var milliseconds = this._milliseconds;                                                                         // 3184
        var days         = this._days;                                                                                 // 3185
        var months       = this._months;                                                                               // 3186
        var data         = this._data;                                                                                 // 3187
        var seconds, minutes, hours, years, monthsFromDays;                                                            // 3188
                                                                                                                       // 3189
        // if we have a mix of positive and negative values, bubble down first                                         // 3190
        // check: https://github.com/moment/moment/issues/2166                                                         // 3191
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||                                                       // 3192
                (milliseconds <= 0 && days <= 0 && months <= 0))) {                                                    // 3193
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;                                              // 3194
            days = 0;                                                                                                  // 3195
            months = 0;                                                                                                // 3196
        }                                                                                                              // 3197
                                                                                                                       // 3198
        // The following code bubbles up values, see the tests for                                                     // 3199
        // examples of what that means.                                                                                // 3200
        data.milliseconds = milliseconds % 1000;                                                                       // 3201
                                                                                                                       // 3202
        seconds           = absFloor(milliseconds / 1000);                                                             // 3203
        data.seconds      = seconds % 60;                                                                              // 3204
                                                                                                                       // 3205
        minutes           = absFloor(seconds / 60);                                                                    // 3206
        data.minutes      = minutes % 60;                                                                              // 3207
                                                                                                                       // 3208
        hours             = absFloor(minutes / 60);                                                                    // 3209
        data.hours        = hours % 24;                                                                                // 3210
                                                                                                                       // 3211
        days += absFloor(hours / 24);                                                                                  // 3212
                                                                                                                       // 3213
        // convert days to months                                                                                      // 3214
        monthsFromDays = absFloor(daysToMonths(days));                                                                 // 3215
        months += monthsFromDays;                                                                                      // 3216
        days -= absCeil(monthsToDays(monthsFromDays));                                                                 // 3217
                                                                                                                       // 3218
        // 12 months -> 1 year                                                                                         // 3219
        years = absFloor(months / 12);                                                                                 // 3220
        months %= 12;                                                                                                  // 3221
                                                                                                                       // 3222
        data.days   = days;                                                                                            // 3223
        data.months = months;                                                                                          // 3224
        data.years  = years;                                                                                           // 3225
                                                                                                                       // 3226
        return this;                                                                                                   // 3227
    }                                                                                                                  // 3228
                                                                                                                       // 3229
    function daysToMonths (days) {                                                                                     // 3230
        // 400 years have 146097 days (taking into account leap year rules)                                            // 3231
        // 400 years have 12 months === 4800                                                                           // 3232
        return days * 4800 / 146097;                                                                                   // 3233
    }                                                                                                                  // 3234
                                                                                                                       // 3235
    function monthsToDays (months) {                                                                                   // 3236
        // the reverse of daysToMonths                                                                                 // 3237
        return months * 146097 / 4800;                                                                                 // 3238
    }                                                                                                                  // 3239
                                                                                                                       // 3240
    function as (units) {                                                                                              // 3241
        var days;                                                                                                      // 3242
        var months;                                                                                                    // 3243
        var milliseconds = this._milliseconds;                                                                         // 3244
                                                                                                                       // 3245
        units = normalizeUnits(units);                                                                                 // 3246
                                                                                                                       // 3247
        if (units === 'month' || units === 'year') {                                                                   // 3248
            days   = this._days   + milliseconds / 864e5;                                                              // 3249
            months = this._months + daysToMonths(days);                                                                // 3250
            return units === 'month' ? months : months / 12;                                                           // 3251
        } else {                                                                                                       // 3252
            // handle milliseconds separately because of floating point math errors (issue #1867)                      // 3253
            days = this._days + Math.round(monthsToDays(this._months));                                                // 3254
            switch (units) {                                                                                           // 3255
                case 'week'   : return days / 7     + milliseconds / 6048e5;                                           // 3256
                case 'day'    : return days         + milliseconds / 864e5;                                            // 3257
                case 'hour'   : return days * 24    + milliseconds / 36e5;                                             // 3258
                case 'minute' : return days * 1440  + milliseconds / 6e4;                                              // 3259
                case 'second' : return days * 86400 + milliseconds / 1000;                                             // 3260
                // Math.floor prevents floating point math errors here                                                 // 3261
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;                                    // 3262
                default: throw new Error('Unknown unit ' + units);                                                     // 3263
            }                                                                                                          // 3264
        }                                                                                                              // 3265
    }                                                                                                                  // 3266
                                                                                                                       // 3267
    // TODO: Use this.as('ms')?                                                                                        // 3268
    function duration_as__valueOf () {                                                                                 // 3269
        return (                                                                                                       // 3270
            this._milliseconds +                                                                                       // 3271
            this._days * 864e5 +                                                                                       // 3272
            (this._months % 12) * 2592e6 +                                                                             // 3273
            toInt(this._months / 12) * 31536e6                                                                         // 3274
        );                                                                                                             // 3275
    }                                                                                                                  // 3276
                                                                                                                       // 3277
    function makeAs (alias) {                                                                                          // 3278
        return function () {                                                                                           // 3279
            return this.as(alias);                                                                                     // 3280
        };                                                                                                             // 3281
    }                                                                                                                  // 3282
                                                                                                                       // 3283
    var asMilliseconds = makeAs('ms');                                                                                 // 3284
    var asSeconds      = makeAs('s');                                                                                  // 3285
    var asMinutes      = makeAs('m');                                                                                  // 3286
    var asHours        = makeAs('h');                                                                                  // 3287
    var asDays         = makeAs('d');                                                                                  // 3288
    var asWeeks        = makeAs('w');                                                                                  // 3289
    var asMonths       = makeAs('M');                                                                                  // 3290
    var asYears        = makeAs('y');                                                                                  // 3291
                                                                                                                       // 3292
    function duration_get__get (units) {                                                                               // 3293
        units = normalizeUnits(units);                                                                                 // 3294
        return this[units + 's']();                                                                                    // 3295
    }                                                                                                                  // 3296
                                                                                                                       // 3297
    function makeGetter(name) {                                                                                        // 3298
        return function () {                                                                                           // 3299
            return this._data[name];                                                                                   // 3300
        };                                                                                                             // 3301
    }                                                                                                                  // 3302
                                                                                                                       // 3303
    var milliseconds = makeGetter('milliseconds');                                                                     // 3304
    var seconds      = makeGetter('seconds');                                                                          // 3305
    var minutes      = makeGetter('minutes');                                                                          // 3306
    var hours        = makeGetter('hours');                                                                            // 3307
    var days         = makeGetter('days');                                                                             // 3308
    var months       = makeGetter('months');                                                                           // 3309
    var years        = makeGetter('years');                                                                            // 3310
                                                                                                                       // 3311
    function weeks () {                                                                                                // 3312
        return absFloor(this.days() / 7);                                                                              // 3313
    }                                                                                                                  // 3314
                                                                                                                       // 3315
    var round = Math.round;                                                                                            // 3316
    var thresholds = {                                                                                                 // 3317
        s: 45,  // seconds to minute                                                                                   // 3318
        m: 45,  // minutes to hour                                                                                     // 3319
        h: 22,  // hours to day                                                                                        // 3320
        d: 26,  // days to month                                                                                       // 3321
        M: 11   // months to year                                                                                      // 3322
    };                                                                                                                 // 3323
                                                                                                                       // 3324
    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize                          // 3325
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {                                      // 3326
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);                                    // 3327
    }                                                                                                                  // 3328
                                                                                                                       // 3329
    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {                                 // 3330
        var duration = create__createDuration(posNegDuration).abs();                                                   // 3331
        var seconds  = round(duration.as('s'));                                                                        // 3332
        var minutes  = round(duration.as('m'));                                                                        // 3333
        var hours    = round(duration.as('h'));                                                                        // 3334
        var days     = round(duration.as('d'));                                                                        // 3335
        var months   = round(duration.as('M'));                                                                        // 3336
        var years    = round(duration.as('y'));                                                                        // 3337
                                                                                                                       // 3338
        var a = seconds < thresholds.s && ['s', seconds]  ||                                                           // 3339
                minutes <= 1           && ['m']           ||                                                           // 3340
                minutes < thresholds.m && ['mm', minutes] ||                                                           // 3341
                hours   <= 1           && ['h']           ||                                                           // 3342
                hours   < thresholds.h && ['hh', hours]   ||                                                           // 3343
                days    <= 1           && ['d']           ||                                                           // 3344
                days    < thresholds.d && ['dd', days]    ||                                                           // 3345
                months  <= 1           && ['M']           ||                                                           // 3346
                months  < thresholds.M && ['MM', months]  ||                                                           // 3347
                years   <= 1           && ['y']           || ['yy', years];                                            // 3348
                                                                                                                       // 3349
        a[2] = withoutSuffix;                                                                                          // 3350
        a[3] = +posNegDuration > 0;                                                                                    // 3351
        a[4] = locale;                                                                                                 // 3352
        return substituteTimeAgo.apply(null, a);                                                                       // 3353
    }                                                                                                                  // 3354
                                                                                                                       // 3355
    // This function allows you to set a threshold for relative time strings                                           // 3356
    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {                                       // 3357
        if (thresholds[threshold] === undefined) {                                                                     // 3358
            return false;                                                                                              // 3359
        }                                                                                                              // 3360
        if (limit === undefined) {                                                                                     // 3361
            return thresholds[threshold];                                                                              // 3362
        }                                                                                                              // 3363
        thresholds[threshold] = limit;                                                                                 // 3364
        return true;                                                                                                   // 3365
    }                                                                                                                  // 3366
                                                                                                                       // 3367
    function humanize (withSuffix) {                                                                                   // 3368
        var locale = this.localeData();                                                                                // 3369
        var output = duration_humanize__relativeTime(this, !withSuffix, locale);                                       // 3370
                                                                                                                       // 3371
        if (withSuffix) {                                                                                              // 3372
            output = locale.pastFuture(+this, output);                                                                 // 3373
        }                                                                                                              // 3374
                                                                                                                       // 3375
        return locale.postformat(output);                                                                              // 3376
    }                                                                                                                  // 3377
                                                                                                                       // 3378
    var iso_string__abs = Math.abs;                                                                                    // 3379
                                                                                                                       // 3380
    function iso_string__toISOString() {                                                                               // 3381
        // for ISO strings we do not use the normal bubbling rules:                                                    // 3382
        //  * milliseconds bubble up until they become hours                                                           // 3383
        //  * days do not bubble at all                                                                                // 3384
        //  * months bubble up until they become years                                                                 // 3385
        // This is because there is no context-free conversion between hours and days                                  // 3386
        // (think of clock changes)                                                                                    // 3387
        // and also not between days and months (28-31 days per month)                                                 // 3388
        var seconds = iso_string__abs(this._milliseconds) / 1000;                                                      // 3389
        var days         = iso_string__abs(this._days);                                                                // 3390
        var months       = iso_string__abs(this._months);                                                              // 3391
        var minutes, hours, years;                                                                                     // 3392
                                                                                                                       // 3393
        // 3600 seconds -> 60 minutes -> 1 hour                                                                        // 3394
        minutes           = absFloor(seconds / 60);                                                                    // 3395
        hours             = absFloor(minutes / 60);                                                                    // 3396
        seconds %= 60;                                                                                                 // 3397
        minutes %= 60;                                                                                                 // 3398
                                                                                                                       // 3399
        // 12 months -> 1 year                                                                                         // 3400
        years  = absFloor(months / 12);                                                                                // 3401
        months %= 12;                                                                                                  // 3402
                                                                                                                       // 3403
                                                                                                                       // 3404
        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js                // 3405
        var Y = years;                                                                                                 // 3406
        var M = months;                                                                                                // 3407
        var D = days;                                                                                                  // 3408
        var h = hours;                                                                                                 // 3409
        var m = minutes;                                                                                               // 3410
        var s = seconds;                                                                                               // 3411
        var total = this.asSeconds();                                                                                  // 3412
                                                                                                                       // 3413
        if (!total) {                                                                                                  // 3414
            // this is the same as C#'s (Noda) and python (isodate)...                                                 // 3415
            // but not other JS (goog.date)                                                                            // 3416
            return 'P0D';                                                                                              // 3417
        }                                                                                                              // 3418
                                                                                                                       // 3419
        return (total < 0 ? '-' : '') +                                                                                // 3420
            'P' +                                                                                                      // 3421
            (Y ? Y + 'Y' : '') +                                                                                       // 3422
            (M ? M + 'M' : '') +                                                                                       // 3423
            (D ? D + 'D' : '') +                                                                                       // 3424
            ((h || m || s) ? 'T' : '') +                                                                               // 3425
            (h ? h + 'H' : '') +                                                                                       // 3426
            (m ? m + 'M' : '') +                                                                                       // 3427
            (s ? s + 'S' : '');                                                                                        // 3428
    }                                                                                                                  // 3429
                                                                                                                       // 3430
    var duration_prototype__proto = Duration.prototype;                                                                // 3431
                                                                                                                       // 3432
    duration_prototype__proto.abs            = duration_abs__abs;                                                      // 3433
    duration_prototype__proto.add            = duration_add_subtract__add;                                             // 3434
    duration_prototype__proto.subtract       = duration_add_subtract__subtract;                                        // 3435
    duration_prototype__proto.as             = as;                                                                     // 3436
    duration_prototype__proto.asMilliseconds = asMilliseconds;                                                         // 3437
    duration_prototype__proto.asSeconds      = asSeconds;                                                              // 3438
    duration_prototype__proto.asMinutes      = asMinutes;                                                              // 3439
    duration_prototype__proto.asHours        = asHours;                                                                // 3440
    duration_prototype__proto.asDays         = asDays;                                                                 // 3441
    duration_prototype__proto.asWeeks        = asWeeks;                                                                // 3442
    duration_prototype__proto.asMonths       = asMonths;                                                               // 3443
    duration_prototype__proto.asYears        = asYears;                                                                // 3444
    duration_prototype__proto.valueOf        = duration_as__valueOf;                                                   // 3445
    duration_prototype__proto._bubble        = bubble;                                                                 // 3446
    duration_prototype__proto.get            = duration_get__get;                                                      // 3447
    duration_prototype__proto.milliseconds   = milliseconds;                                                           // 3448
    duration_prototype__proto.seconds        = seconds;                                                                // 3449
    duration_prototype__proto.minutes        = minutes;                                                                // 3450
    duration_prototype__proto.hours          = hours;                                                                  // 3451
    duration_prototype__proto.days           = days;                                                                   // 3452
    duration_prototype__proto.weeks          = weeks;                                                                  // 3453
    duration_prototype__proto.months         = months;                                                                 // 3454
    duration_prototype__proto.years          = years;                                                                  // 3455
    duration_prototype__proto.humanize       = humanize;                                                               // 3456
    duration_prototype__proto.toISOString    = iso_string__toISOString;                                                // 3457
    duration_prototype__proto.toString       = iso_string__toISOString;                                                // 3458
    duration_prototype__proto.toJSON         = iso_string__toISOString;                                                // 3459
    duration_prototype__proto.locale         = locale;                                                                 // 3460
    duration_prototype__proto.localeData     = localeData;                                                             // 3461
                                                                                                                       // 3462
    // Deprecations                                                                                                    // 3463
    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
    duration_prototype__proto.lang = lang;                                                                             // 3465
                                                                                                                       // 3466
    // Side effect imports                                                                                             // 3467
                                                                                                                       // 3468
    // FORMATTING                                                                                                      // 3469
                                                                                                                       // 3470
    addFormatToken('X', 0, 0, 'unix');                                                                                 // 3471
    addFormatToken('x', 0, 0, 'valueOf');                                                                              // 3472
                                                                                                                       // 3473
    // PARSING                                                                                                         // 3474
                                                                                                                       // 3475
    addRegexToken('x', matchSigned);                                                                                   // 3476
    addRegexToken('X', matchTimestamp);                                                                                // 3477
    addParseToken('X', function (input, array, config) {                                                               // 3478
        config._d = new Date(parseFloat(input, 10) * 1000);                                                            // 3479
    });                                                                                                                // 3480
    addParseToken('x', function (input, array, config) {                                                               // 3481
        config._d = new Date(toInt(input));                                                                            // 3482
    });                                                                                                                // 3483
                                                                                                                       // 3484
    // Side effect imports                                                                                             // 3485
                                                                                                                       // 3486
                                                                                                                       // 3487
    utils_hooks__hooks.version = '2.11.0';                                                                             // 3488
                                                                                                                       // 3489
    setHookCallback(local__createLocal);                                                                               // 3490
                                                                                                                       // 3491
    utils_hooks__hooks.fn                    = momentPrototype;                                                        // 3492
    utils_hooks__hooks.min                   = min;                                                                    // 3493
    utils_hooks__hooks.max                   = max;                                                                    // 3494
    utils_hooks__hooks.now                   = now;                                                                    // 3495
    utils_hooks__hooks.utc                   = create_utc__createUTC;                                                  // 3496
    utils_hooks__hooks.unix                  = moment__createUnix;                                                     // 3497
    utils_hooks__hooks.months                = lists__listMonths;                                                      // 3498
    utils_hooks__hooks.isDate                = isDate;                                                                 // 3499
    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;                                     // 3500
    utils_hooks__hooks.invalid               = valid__createInvalid;                                                   // 3501
    utils_hooks__hooks.duration              = create__createDuration;                                                 // 3502
    utils_hooks__hooks.isMoment              = isMoment;                                                               // 3503
    utils_hooks__hooks.weekdays              = lists__listWeekdays;                                                    // 3504
    utils_hooks__hooks.parseZone             = moment__createInZone;                                                   // 3505
    utils_hooks__hooks.localeData            = locale_locales__getLocale;                                              // 3506
    utils_hooks__hooks.isDuration            = isDuration;                                                             // 3507
    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;                                                 // 3508
    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;                                                 // 3509
    utils_hooks__hooks.defineLocale          = defineLocale;                                                           // 3510
    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;                                               // 3511
    utils_hooks__hooks.normalizeUnits        = normalizeUnits;                                                         // 3512
    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;                         // 3513
    utils_hooks__hooks.prototype             = momentPrototype;                                                        // 3514
                                                                                                                       // 3515
    var _moment = utils_hooks__hooks;                                                                                  // 3516
                                                                                                                       // 3517
    return _moment;                                                                                                    // 3518
                                                                                                                       // 3519
}));                                                                                                                   // 3520
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/momentjs_moment/meteor/export.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// moment.js makes `moment` global on the window (or global) object, while Meteor expects a file-scoped global variable
moment = this.moment;                                                                                                  // 2
try {                                                                                                                  // 3
    delete this.moment;                                                                                                // 4
} catch (e) {                                                                                                          // 5
}                                                                                                                      // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['momentjs:moment'] = {
  moment: moment
};

})();

//# sourceMappingURL=momentjs_moment.js.map
