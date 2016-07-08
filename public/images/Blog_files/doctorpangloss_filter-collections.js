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
var _ = Package.underscore._;

/* Package-scope variables */
var FilterCollections;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/doctorpangloss_filter-collections/packages/doctorpanglos //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/doctorpangloss:filter-collections/filter-collections-client.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var collectionCache = {};                                                                                              // 1
                                                                                                                       // 2
FilterCollections = function (collection, settings) {                                                                  // 3
    if (!this instanceof FilterCollections) {                                                                          // 4
        return new FilterCollections(collection, settings);                                                            // 5
    }                                                                                                                  // 6
                                                                                                                       // 7
    var self = this;                                                                                                   // 8
                                                                                                                       // 9
    var _settings = settings || {};                                                                                    // 10
    var _initialized = false;                                                                                          // 11
    var _EJSONQuery = {};                                                                                              // 12
                                                                                                                       // 13
    self._collection = collection || {};                                                                               // 14
                                                                                                                       // 15
    self.name = (_settings.name) ? _settings.name : self._collection._name;                                            // 16
                                                                                                                       // 17
    var _subscriptionResultsId = 'fc-' + self.name + '-results';                                                       // 18
    var _subscriptionCountId = 'fc-' + self.name + '-count';                                                           // 19
                                                                                                                       // 20
    var collectionCountName = self.name + 'CountFC';                                                                   // 21
    if (collectionCache[collectionCountName] === undefined) {                                                          // 22
        collectionCache[collectionCountName] = self._collectionCount = new Mongo.Collection(collectionCountName);      // 23
    } else {                                                                                                           // 24
        self._collectionCount = collectionCache[collectionCountName];                                                  // 25
    }                                                                                                                  // 26
                                                                                                                       // 27
    var _deps = {                                                                                                      // 28
        initial_ready: new Tracker.Dependency(),                                                                       // 29
        query: new Tracker.Dependency(),                                                                               // 30
        sort: new Tracker.Dependency(),                                                                                // 31
        pager: new Tracker.Dependency(),                                                                               // 32
        filter: new Tracker.Dependency(),                                                                              // 33
        search: new Tracker.Dependency()                                                                               // 34
    };                                                                                                                 // 35
                                                                                                                       // 36
    var _callbacks = {                                                                                                 // 37
        beforeSubscribe: (_settings.callbacks && _settings.callbacks.beforeSubscribe) ? _settings.callbacks.beforeSubscribe : null,
        afterSubscribe: (_settings.callbacks && _settings.callbacks.afterSubscribe) ? _settings.callbacks.afterSubscribe : null,
        beforeSubscribeCount: (_settings.callbacks && _settings.callbacks.beforeSubscribeCount) ? _settings.callbacks.beforeSubscribeCount : null,
        afterSubscribeCount: (_settings.callbacks && _settings.callbacks.afterSubscribeCount) ? _settings.callbacks.afterSubscribeCount : null,
        beforeResults: (_settings.callbacks && _settings.callbacks.beforeResults) ? _settings.callbacks.beforeResults : null,
        afterResults: (_settings.callbacks && _settings.callbacks.afterResults) ? _settings.callbacks.afterResults : null,
        templateCreated: (_settings.callbacks && _settings.callbacks.templateCreated) ? _settings.callbacks.templateCreated : null,
        templateRendered: (_settings.callbacks && _settings.callbacks.templateRendered) ? _settings.callbacks.templateRendered : null,
        templateDestroyed: (_settings.callbacks && _settings.callbacks.templateDestroyed) ? _settings.callbacks.templateDestroyed : null
    };                                                                                                                 // 47
                                                                                                                       // 48
    var _template = _settings.template || {};                                                                          // 49
                                                                                                                       // 50
    var _sorts = (_settings.sort && _settings.sort.defaults) ? _settings.sort.defaults : [];                           // 51
    var _sortOrder = (_settings.sort && _settings.sort.order) ? _settings.sort.order : ['asc', 'desc'];                // 52
                                                                                                                       // 53
    var _pager = {                                                                                                     // 54
        totalItems: 0,                                                                                                 // 55
        defaultOptions: (_settings.pager && _settings.pager.options) ? _settings.pager.options : [10, 20, 30, 40, 50], // 56
        itemsPerPage: (_settings.pager && _settings.pager.itemsPerPage) ? parseInt(_settings.pager.itemsPerPage, 10) : 10,
        currentPage: (_settings.pager && _settings.pager.currentPage) ? parseInt(_settings.pager.currentPage, 10) : 1, // 58
        showPages: (_settings.pager && _settings.pager.showPages) ? parseInt(_settings.pager.showPages, 10) : 10       // 59
    };                                                                                                                 // 60
                                                                                                                       // 61
    var _filters = _settings.filters || {};                                                                            // 62
                                                                                                                       // 63
    var _subs = {                                                                                                      // 64
        results: {},                                                                                                   // 65
        count: {}                                                                                                      // 66
    };                                                                                                                 // 67
                                                                                                                       // 68
    var _query = {                                                                                                     // 69
        selector: {},                                                                                                  // 70
        options: {}                                                                                                    // 71
    };                                                                                                                 // 72
                                                                                                                       // 73
    var _autorun_handle;                                                                                               // 74
    // FilterCollections is ready from e.g. Iron Router perspective                                                    // 75
    var _initial_ready;                                                                                                // 76
                                                                                                                       // 77
    /**                                                                                                                // 78
     * [_autorun description]                                                                                          // 79
     * @return {[type]} [description]                                                                                  // 80
     */                                                                                                                // 81
    var _autorun = function () {                                                                                       // 82
        if (!_.isUndefined(_autorun_handle)) {                                                                         // 83
            return;                                                                                                    // 84
        }                                                                                                              // 85
        _autorun_handle = Tracker.autorun(function () {                                                                // 86
            if (!_initialized) {                                                                                       // 87
                self.sort.init(); // Set default query values for sorting.                                             // 88
                self.pager.init(); // Set defaul query values for paging.                                              // 89
                self.search.init(); // Set default searchable fields.                                                  // 90
                _initialized = true;                                                                                   // 91
            }                                                                                                          // 92
                                                                                                                       // 93
            var query = self.query.get();                                                                              // 94
                                                                                                                       // 95
            if (_.isFunction(_callbacks.beforeSubscribe)) {                                                            // 96
                query = _callbacks.beforeSubscribe(query) || query;                                                    // 97
            }                                                                                                          // 98
                                                                                                                       // 99
            _subs.results = Meteor.subscribe(_subscriptionResultsId, query, {                                          // 100
                onError: function (error) {                                                                            // 101
                    if (_.isFunction(_callbacks.afterSubscribe)) {                                                     // 102
                        _callbacks.afterSubscribe(error, this);                                                        // 103
                    }                                                                                                  // 104
                }                                                                                                      // 105
            });                                                                                                        // 106
                                                                                                                       // 107
            if (_subs.results.ready() && _.isFunction(_callbacks.afterSubscribe))                                      // 108
                _callbacks.afterSubscribe(null, this);                                                                 // 109
                                                                                                                       // 110
            if (_.isFunction(_callbacks.beforeSubscribeCount))                                                         // 111
                query = _callbacks.beforeSubscribeCount(query) || query;                                               // 112
                                                                                                                       // 113
            _subs.count = Meteor.subscribe(_subscriptionCountId, query, {                                              // 114
                onError: function (error) {                                                                            // 115
                    if (_.isFunction(_callbacks.afterSubscribeCount)) {                                                // 116
                        _callbacks.afterSubscribeCount(error, this);                                                   // 117
                    }                                                                                                  // 118
                }                                                                                                      // 119
            });                                                                                                        // 120
                                                                                                                       // 121
            if (_subs.count.ready()) {                                                                                 // 122
                if (_.isFunction(_callbacks.afterSubscribeCount)) {                                                    // 123
                    _callbacks.afterSubscribeCount(null, this);                                                        // 124
                }                                                                                                      // 125
                                                                                                                       // 126
                var res = self._collectionCount.findOne({});                                                           // 127
                self.pager.setTotals(res);                                                                             // 128
            }                                                                                                          // 129
                                                                                                                       // 130
            if (_subs.results.ready() && _subs.count.ready() && !_initial_ready) {                                     // 131
                _initial_ready = true;                                                                                 // 132
                _deps.initial_ready.changed();                                                                         // 133
            }                                                                                                          // 134
        });                                                                                                            // 135
    };                                                                                                                 // 136
                                                                                                                       // 137
    var FIELD_SPEC = 0;                                                                                                // 138
    var ORDER_SPEC = 1;                                                                                                // 139
                                                                                                                       // 140
    /**                                                                                                                // 141
     * [sort description]                                                                                              // 142
     * @type {Object}                                                                                                  // 143
     */                                                                                                                // 144
    self.sort = {                                                                                                      // 145
        init: function () {                                                                                            // 146
            this.run(false);                                                                                           // 147
        },                                                                                                             // 148
        get: function () {                                                                                             // 149
            _deps.sort.depend();                                                                                       // 150
                                                                                                                       // 151
            var sortSpecification = {};                                                                                // 152
            _.each(_sorts, function (sort) {                                                                           // 153
                                                                                                                       // 154
                for (var parts = sort[FIELD_SPEC].split('.'), i = 0, length = parts.length, cache = sortSpecification; i < length; i++) {
                    if (!cache[parts[i]]) {                                                                            // 156
                        cache[parts[i]] = {};                                                                          // 157
                    }                                                                                                  // 158
                                                                                                                       // 159
                    var lastElement = i === length - 1;                                                                // 160
                    if (lastElement) {                                                                                 // 161
                        cache[parts[i]][sort[ORDER_SPEC]] = true;                                                      // 162
                    }                                                                                                  // 163
                                                                                                                       // 164
                    cache = cache[parts[i]];                                                                           // 165
                }                                                                                                      // 166
            });                                                                                                        // 167
                                                                                                                       // 168
            return sortSpecification;                                                                                  // 169
        },                                                                                                             // 170
        set: function (field, order, triggerUpdate) {                                                                  // 171
            field = field || "";                                                                                       // 172
            order = order || _sortOrder[0];                                                                            // 173
            triggerUpdate = _.isUndefined(triggerUpdate) ? false : triggerUpdate;                                      // 174
                                                                                                                       // 175
            if (field) {                                                                                               // 176
                var isNew = true;                                                                                      // 177
                var isUpdate = false;                                                                                  // 178
                                                                                                                       // 179
                _.each(_sorts, function (sort, idx) {                                                                  // 180
                    var value = _.indexOf(_sortOrder, sort[ORDER_SPEC]);                                               // 181
                                                                                                                       // 182
                    if (sort[0] === field) {                                                                           // 183
                        value = value + 1;                                                                             // 184
                        order = _sortOrder[value];                                                                     // 185
                        sort[ORDER_SPEC] = undefined;                                                                  // 186
                        isNew = false;                                                                                 // 187
                        isUpdate = true;                                                                               // 188
                    }                                                                                                  // 189
                                                                                                                       // 190
                    if (!sort[1]) {                                                                                    // 191
                        _sorts.splice(idx, 1);                                                                         // 192
                    }                                                                                                  // 193
                                                                                                                       // 194
                });                                                                                                    // 195
                                                                                                                       // 196
                if (isNew) {                                                                                           // 197
                    _sorts.unshift([field, order]);                                                                    // 198
                }                                                                                                      // 199
                                                                                                                       // 200
                if (isUpdate && order) {                                                                               // 201
                    _sorts.unshift([field, order]);                                                                    // 202
                }                                                                                                      // 203
            }                                                                                                          // 204
                                                                                                                       // 205
            if (triggerUpdate) {                                                                                       // 206
                this.run();                                                                                            // 207
            }                                                                                                          // 208
                                                                                                                       // 209
            _deps.sort.changed();                                                                                      // 210
        },                                                                                                             // 211
        run: function () {                                                                                             // 212
            _query.options.sort = (!_.isEmpty(_sorts)) ? _sorts : [];                                                  // 213
            self.query.set(_query);                                                                                    // 214
        },                                                                                                             // 215
        clear: function (triggerUpdate) {                                                                              // 216
            _sorts = [];                                                                                               // 217
            _query.options.sort = [];                                                                                  // 218
                                                                                                                       // 219
            triggerUpdate = _.isUndefined(triggerUpdate) ? true : triggerUpdate;                                       // 220
                                                                                                                       // 221
            if (triggerUpdate) {                                                                                       // 222
                this.run();                                                                                            // 223
            }                                                                                                          // 224
        }                                                                                                              // 225
    };                                                                                                                 // 226
                                                                                                                       // 227
    /**                                                                                                                // 228
     * [pager description]                                                                                             // 229
     * @type {Object}                                                                                                  // 230
     */                                                                                                                // 231
    self.pager = {                                                                                                     // 232
        init: function () {                                                                                            // 233
            _query.options.skip = this.getOffsetStart();                                                               // 234
            _query.options.limit = _pager.itemsPerPage;                                                                // 235
                                                                                                                       // 236
            self.query.set(_query);                                                                                    // 237
        },                                                                                                             // 238
        get: function () {                                                                                             // 239
            _deps.pager.depend();                                                                                      // 240
            return _pager;                                                                                             // 241
        },                                                                                                             // 242
        set: function (triggerUpdate) {                                                                                // 243
            triggerUpdate = _.isUndefined(triggerUpdate) ? false : triggerUpdate;                                      // 244
                                                                                                                       // 245
            var pages = this.getPages();                                                                               // 246
            var options = this.getOptions();                                                                           // 247
            var offsetStart = this.getOffsetStart();                                                                   // 248
            var offsetEnd = this.getOffsetEnd();                                                                       // 249
                                                                                                                       // 250
            _pager = _.extend(_pager, {                                                                                // 251
                pages: pages,                                                                                          // 252
                options: options,                                                                                      // 253
                offsetStart: offsetStart,                                                                              // 254
                offsetEnd: offsetEnd                                                                                   // 255
            });                                                                                                        // 256
                                                                                                                       // 257
            if (triggerUpdate) {                                                                                       // 258
                this.run();                                                                                            // 259
            }                                                                                                          // 260
                                                                                                                       // 261
            _deps.pager.changed();                                                                                     // 262
        },                                                                                                             // 263
        run: function () {                                                                                             // 264
            _query.options.skip = _pager.offsetStart;                                                                  // 265
            _query.options.limit = _pager.itemsPerPage;                                                                // 266
            self.query.set(_query);                                                                                    // 267
        },                                                                                                             // 268
        setItemsPerPage: function (itemsPerPage, triggerUpdate) {                                                      // 269
            triggerUpdate = _.isUndefined(triggerUpdate) ? false : triggerUpdate;                                      // 270
                                                                                                                       // 271
            _pager.itemsPerPage = parseInt(itemsPerPage, 10);                                                          // 272
                                                                                                                       // 273
            if (triggerUpdate) {                                                                                       // 274
                this.set(true);                                                                                        // 275
            }                                                                                                          // 276
        },                                                                                                             // 277
        setCurrentPage: function (page, triggerUpdate) {                                                               // 278
            triggerUpdate = _.isUndefined(triggerUpdate) ? false : triggerUpdate;                                      // 279
                                                                                                                       // 280
            _pager.currentPage = parseInt(page, 10);                                                                   // 281
                                                                                                                       // 282
            if (triggerUpdate) {                                                                                       // 283
                this.set(true);                                                                                        // 284
            }                                                                                                          // 285
        },                                                                                                             // 286
        getOptions: function () {                                                                                      // 287
            var options = [];                                                                                          // 288
            var totalItems = _pager.totalItems;                                                                        // 289
            var appendLast = false;                                                                                    // 290
            var selected = false;                                                                                      // 291
                                                                                                                       // 292
            _.each(_pager.defaultOptions, function (value) {                                                           // 293
                if (totalItems >= value) {                                                                             // 294
                    selected = _pager.itemsPerPage === value;                                                          // 295
                    options.unshift({                                                                                  // 296
                        value: value,                                                                                  // 297
                        status: (selected) ? 'selected' : ''                                                           // 298
                    });                                                                                                // 299
                } else {                                                                                               // 300
                    appendLast = true;                                                                                 // 301
                }                                                                                                      // 302
            });                                                                                                        // 303
                                                                                                                       // 304
            if (appendLast) {                                                                                          // 305
                options.unshift({                                                                                      // 306
                    value: totalItems,                                                                                 // 307
                    status: (selected) ? 'selected' : ''                                                               // 308
                });                                                                                                    // 309
            }                                                                                                          // 310
                                                                                                                       // 311
            return options;                                                                                            // 312
        },                                                                                                             // 313
        getOffsetStart: function () {                                                                                  // 314
            return (_pager.currentPage - 1) * _pager.itemsPerPage;                                                     // 315
        },                                                                                                             // 316
        getOffsetEnd: function () {                                                                                    // 317
            var offsetEnd = this.getOffsetStart() + _pager.itemsPerPage;                                               // 318
            return (offsetEnd > _pager.totalItems) ? _pager.totalItems : offsetEnd;                                    // 319
        },                                                                                                             // 320
        getPages: function () {                                                                                        // 321
            var pages = [];                                                                                            // 322
                                                                                                                       // 323
            var totalPages = _pager.totalPages;                                                                        // 324
            var currentPage = _pager.currentPage;                                                                      // 325
            var showPages = _pager.showPages;                                                                          // 326
                                                                                                                       // 327
            var start = (currentPage - 1) - Math.floor(showPages / 2);                                                 // 328
            if (start < 0) {                                                                                           // 329
                start = 0;                                                                                             // 330
            }                                                                                                          // 331
            var end = start + showPages;                                                                               // 332
            if (end > totalPages) {                                                                                    // 333
                end = totalPages;                                                                                      // 334
                start = end - showPages;                                                                               // 335
                if (start < 0) {                                                                                       // 336
                    start = 0;                                                                                         // 337
                }                                                                                                      // 338
            }                                                                                                          // 339
                                                                                                                       // 340
            for (var i = start; i < end; i++) {                                                                        // 341
                var status = (currentPage === i + 1) ? 'active' : '';                                                  // 342
                pages.push({                                                                                           // 343
                    page: i + 1,                                                                                       // 344
                    status: status                                                                                     // 345
                });                                                                                                    // 346
            }                                                                                                          // 347
                                                                                                                       // 348
            return pages;                                                                                              // 349
        },                                                                                                             // 350
        setTotals: function (res) {                                                                                    // 351
            _pager.totalItems = res.count;                                                                             // 352
            _pager.totalPages = Math.ceil(_pager.totalItems / _pager.itemsPerPage);                                    // 353
            self.pager.set();                                                                                          // 354
        },                                                                                                             // 355
        hasPrevious: function () {                                                                                     // 356
            return (_pager.currentPage > 1);                                                                           // 357
        },                                                                                                             // 358
        hasNext: function () {                                                                                         // 359
            return (_pager.currentPage < _pager.totalPages);                                                           // 360
        },                                                                                                             // 361
        moveTo: function (page) {                                                                                      // 362
            if (_pager.currentPage !== page) {                                                                         // 363
                _pager.currentPage = page;                                                                             // 364
                self.pager.set(true);                                                                                  // 365
            }                                                                                                          // 366
        },                                                                                                             // 367
        movePrevious: function () {                                                                                    // 368
            if (this.hasPrevious()) {                                                                                  // 369
                _pager.currentPage--;                                                                                  // 370
                this.set(true);                                                                                        // 371
            }                                                                                                          // 372
        },                                                                                                             // 373
        moveFirst: function () {                                                                                       // 374
            if (this.hasPrevious()) {                                                                                  // 375
                _pager.currentPage = 1;                                                                                // 376
                this.set(true);                                                                                        // 377
            }                                                                                                          // 378
        },                                                                                                             // 379
        moveNext: function () {                                                                                        // 380
            if (this.hasNext()) {                                                                                      // 381
                _pager.currentPage++;                                                                                  // 382
                this.set(true);                                                                                        // 383
            }                                                                                                          // 384
        },                                                                                                             // 385
        moveLast: function () {                                                                                        // 386
            if (this.hasNext()) {                                                                                      // 387
                _pager.currentPage = _pager.totalPages;                                                                // 388
                this.set(true);                                                                                        // 389
            }                                                                                                          // 390
        }                                                                                                              // 391
    };                                                                                                                 // 392
                                                                                                                       // 393
    /**                                                                                                                // 394
     * [filter description]                                                                                            // 395
     * @type {Object}                                                                                                  // 396
     */                                                                                                                // 397
    self.filter = {                                                                                                    // 398
        get: function () {                                                                                             // 399
            _deps.filter.depend();                                                                                     // 400
            return EJSON.clone(_filters);                                                                              // 401
        },                                                                                                             // 402
        set: function (filterField, filterSettings, triggerUpdate) {                                                   // 403
            triggerUpdate = _.isUndefined(triggerUpdate) ? true : triggerUpdate;                                       // 404
                                                                                                                       // 405
            if (!_.has(_filters, filterField)) {                                                                       // 406
                throw new Error("Filter Collection Error: " + filterField + " is not a valid filter.");                // 407
            }                                                                                                          // 408
                                                                                                                       // 409
            _filters[filterField] = _.extend(_filters[filterField], filterSettings);                                   // 410
                                                                                                                       // 411
            // If a value is defined, this filter is active                                                            // 412
            _filters[filterField].active = !!_filters[filterField].value;                                              // 413
                                                                                                                       // 414
            if (triggerUpdate) {                                                                                       // 415
                this.run();                                                                                            // 416
            }                                                                                                          // 417
                                                                                                                       // 418
            _deps.filter.changed();                                                                                    // 419
        },                                                                                                             // 420
        getSelector: function () {                                                                                     // 421
            var selector = {};                                                                                         // 422
            var condition = {};                                                                                        // 423
                                                                                                                       // 424
            _.each(_filters, function (filter, key) {                                                                  // 425
                if (filter.value) {                                                                                    // 426
                    var segment = {};                                                                                  // 427
                    var value;                                                                                         // 428
                    segment[key] = {};                                                                                 // 429
                                                                                                                       // 430
                    if (filter.value && filter.transform && _.isFunction(filter.transform)) {                          // 431
                        value = filter.transform(filter.value);                                                        // 432
                    } else {                                                                                           // 433
                        value = filter.value;                                                                          // 434
                    }                                                                                                  // 435
                                                                                                                       // 436
                    if (filter.operator && filter.operator[0]) {                                                       // 437
                        segment[key][filter.operator[0]] = value;                                                      // 438
                        if (filter.operator[1]) {                                                                      // 439
                            segment[key].$options = filter.operator[1];                                                // 440
                        }                                                                                              // 441
                    } else {                                                                                           // 442
                        segment[key] = value;                                                                          // 443
                    }                                                                                                  // 444
                                                                                                                       // 445
                    if (!_.isEmpty(filter.condition)) {                                                                // 446
                        condition[filter.condition] = condition[filter.condition] || [];                               // 447
                        condition[filter.condition].push(segment);                                                     // 448
                    }                                                                                                  // 449
                                                                                                                       // 450
                    if (filter.sort && _.indexOf(_sortOrder, filter.sort) !== -1) {                                    // 451
                        self.sort.clear(true);                                                                         // 452
                        self.sort.set(key, filter.sort, true);                                                         // 453
                    }                                                                                                  // 454
                                                                                                                       // 455
                    var append = (!_.isEmpty(condition)) ? condition : segment;                                        // 456
                    selector = _.extend(selector, append);                                                             // 457
                }                                                                                                      // 458
            });                                                                                                        // 459
            return selector;                                                                                           // 460
        },                                                                                                             // 461
        getActive: function () {                                                                                       // 462
            var filters = [];                                                                                          // 463
                                                                                                                       // 464
            _.each(self.filter.get(), function (filter, key) {                                                         // 465
                if (filter.value)                                                                                      // 466
                    filters.push({                                                                                     // 467
                        title: filter.title,                                                                           // 468
                        operator: (filter.operator && filter.operator[0]) ? filter.operator[0] : 'match',              // 469
                        value: filter.value,                                                                           // 470
                        key: key                                                                                       // 471
                    });                                                                                                // 472
            });                                                                                                        // 473
                                                                                                                       // 474
            return filters;                                                                                            // 475
        },                                                                                                             // 476
        isActive: function (field, value, operator) {                                                                  // 477
            var filters = self.filter.get();                                                                           // 478
                                                                                                                       // 479
            if (_.has(filters, field)) {                                                                               // 480
                var check = filters[field];                                                                            // 481
                                                                                                                       // 482
                if (!check.value || check.value != value) {                                                            // 483
                    return false;                                                                                      // 484
                }                                                                                                      // 485
                                                                                                                       // 486
                if (check.operator && check.operator[0]) {                                                             // 487
                    if (check.operator[0] != operator) {                                                               // 488
                        return false;                                                                                  // 489
                    }                                                                                                  // 490
                }                                                                                                      // 491
                                                                                                                       // 492
                return true;                                                                                           // 493
            }                                                                                                          // 494
            return false;                                                                                              // 495
        },                                                                                                             // 496
        run: function () {                                                                                             // 497
            _query.selector = this.getSelector();                                                                      // 498
            self.query.set(_query);                                                                                    // 499
            self.pager.moveTo(1);                                                                                      // 500
        },                                                                                                             // 501
        clear: function (key, triggerUpdate) {                                                                         // 502
            triggerUpdate = _.isUndefined(triggerUpdate) ? true : triggerUpdate;                                       // 503
                                                                                                                       // 504
            if (key                                                                                                    // 505
                && _filters[key]                                                                                       // 506
                && _filters[key].value) {                                                                              // 507
                delete _filters[key].value;                                                                            // 508
                _filters[key].active = false;                                                                          // 509
            }                                                                                                          // 510
                                                                                                                       // 511
            if (triggerUpdate) {                                                                                       // 512
                this.run();                                                                                            // 513
            }                                                                                                          // 514
                                                                                                                       // 515
            _deps.filter.changed();                                                                                    // 516
        }                                                                                                              // 517
    };                                                                                                                 // 518
                                                                                                                       // 519
    /**                                                                                                                // 520
     * [search description]                                                                                            // 521
     * @type {Object}                                                                                                  // 522
     */                                                                                                                // 523
    self.search = {                                                                                                    // 524
        criteria: "",                                                                                                  // 525
        fields: [],                                                                                                    // 526
        required: [],                                                                                                  // 527
        init: function () {                                                                                            // 528
            this.setFields();                                                                                          // 529
        },                                                                                                             // 530
        getFields: function (full) {                                                                                   // 531
            _deps.search.depend();                                                                                     // 532
                                                                                                                       // 533
            full = _.isUndefined(full) ? false : full;                                                                 // 534
                                                                                                                       // 535
            if (full) {                                                                                                // 536
                return _.union(this.fields, this.required);                                                            // 537
            } else {                                                                                                   // 538
                return this.fields;                                                                                    // 539
                                                                                                                       // 540
            }                                                                                                          // 541
        },                                                                                                             // 542
        setFields: function () {                                                                                       // 543
            var activeSearch = [];                                                                                     // 544
            var requiredSearch = [];                                                                                   // 545
                                                                                                                       // 546
            _.each(_filters, function (field, key) {                                                                   // 547
                if (field.searchable                                                                                   // 548
                    && field.searchable === 'optional') {                                                              // 549
                    activeSearch.push({                                                                                // 550
                        field: key,                                                                                    // 551
                        title: field.title,                                                                            // 552
                        active: false                                                                                  // 553
                    });                                                                                                // 554
                }                                                                                                      // 555
                                                                                                                       // 556
                if (field.searchable                                                                                   // 557
                    && field.searchable === 'required') {                                                              // 558
                    requiredSearch.push({                                                                              // 559
                        field: key,                                                                                    // 560
                        title: field.title,                                                                            // 561
                        active: true                                                                                   // 562
                    });                                                                                                // 563
                }                                                                                                      // 564
            });                                                                                                        // 565
                                                                                                                       // 566
            this.fields = activeSearch;                                                                                // 567
            this.required = requiredSearch;                                                                            // 568
        },                                                                                                             // 569
        setField: function (key) {                                                                                     // 570
            var _this = this;                                                                                          // 571
            _.each(this.fields, function (field, idx) {                                                                // 572
                if (_this.fields[idx].field === key                                                                    // 573
                    && _filters[field.field]                                                                           // 574
                    && _filters[field.field].searchable !== 'required') {                                              // 575
                    _this.fields[idx].active = (_this.fields[idx].active !== true);                                    // 576
                }                                                                                                      // 577
                                                                                                                       // 578
            });                                                                                                        // 579
                                                                                                                       // 580
            _deps.search.changed();                                                                                    // 581
        },                                                                                                             // 582
        setCriteria: function (value, triggerUpdate) {                                                                 // 583
                                                                                                                       // 584
            triggerUpdate = triggerUpdate || false;                                                                    // 585
                                                                                                                       // 586
            var activeFields = this.getFields(true);                                                                   // 587
                                                                                                                       // 588
            if (value) {                                                                                               // 589
                this.criteria = value;                                                                                 // 590
                _.each(activeFields, function (field, key) {                                                           // 591
                    if (field.active) {                                                                                // 592
                        self.filter.set(field.field, {                                                                 // 593
                            value: value                                                                               // 594
                        });                                                                                            // 595
                    }                                                                                                  // 596
                });                                                                                                    // 597
                                                                                                                       // 598
                if (triggerUpdate) {                                                                                   // 599
                    this.run();                                                                                        // 600
                }                                                                                                      // 601
            }                                                                                                          // 602
        },                                                                                                             // 603
        getCriteria: function () {                                                                                     // 604
            return this.criteria;                                                                                      // 605
        },                                                                                                             // 606
        run: function () {                                                                                             // 607
            self.pager.moveTo(1);                                                                                      // 608
        },                                                                                                             // 609
        clear: function () {                                                                                           // 610
            this.criteria = '';                                                                                        // 611
            self.filter.clear();                                                                                       // 612
        }                                                                                                              // 613
    };                                                                                                                 // 614
                                                                                                                       // 615
    /**                                                                                                                // 616
     * [query description]                                                                                             // 617
     * @type {Object}                                                                                                  // 618
     */                                                                                                                // 619
    self.query = {                                                                                                     // 620
        get: function () {                                                                                             // 621
            _deps.query.depend();                                                                                      // 622
            return EJSON.parse(_EJSONQuery);                                                                           // 623
        },                                                                                                             // 624
        set: function (query) {                                                                                        // 625
            _EJSONQuery = EJSON.stringify(query);                                                                      // 626
            _deps.query.changed();                                                                                     // 627
        },                                                                                                             // 628
        updateResults: function () {                                                                                   // 629
            _query.force = new Date().getTime();                                                                       // 630
            this.set(_query);                                                                                          // 631
        },                                                                                                             // 632
        getResults: function () {                                                                                      // 633
            var temporaryQuery = EJSON.clone(_query);                                                                  // 634
            temporaryQuery.options = _.omit(temporaryQuery.options, 'skip', 'limit');                                  // 635
                                                                                                                       // 636
            if (_.isFunction(_callbacks.beforeResults)) {                                                              // 637
                temporaryQuery = _callbacks.beforeResults(temporaryQuery) || temporaryQuery;                           // 638
            }                                                                                                          // 639
                                                                                                                       // 640
            var cursor = self._collection.find({                                                                       // 641
                __filter: _subscriptionResultsId                                                                       // 642
            }, temporaryQuery.options);                                                                                // 643
                                                                                                                       // 644
            if (_.isFunction(_callbacks.afterResults)) {                                                               // 645
                cursor = _callbacks.afterResults(cursor) || cursor;                                                    // 646
            }                                                                                                          // 647
                                                                                                                       // 648
            return cursor;                                                                                             // 649
        }                                                                                                              // 650
    };                                                                                                                 // 651
                                                                                                                       // 652
    /**                                                                                                                // 653
     * For integration with e.g. Iron Router                                                                           // 654
     */                                                                                                                // 655
                                                                                                                       // 656
    self.ready = function ready() {                                                                                    // 657
        _autorun();                                                                                                    // 658
        _deps.initial_ready.depend();                                                                                  // 659
        return _initial_ready;                                                                                         // 660
    };                                                                                                                 // 661
                                                                                                                       // 662
    self.stop = function stop() {                                                                                      // 663
        if (_autorun_handle !== undefined) {                                                                           // 664
            _autorun_handle.stop();                                                                                    // 665
            _autorun_handle = undefined;                                                                               // 666
        }                                                                                                              // 667
        if (_subs.results.stop !== undefined) {                                                                        // 668
            _subs.results.stop();                                                                                      // 669
            _subs.results = {}                                                                                         // 670
        }                                                                                                              // 671
        if (_subs.count.stop !== undefined) {                                                                          // 672
            _subs.count.stop();                                                                                        // 673
            _subs.count = {}                                                                                           // 674
        }                                                                                                              // 675
    };                                                                                                                 // 676
                                                                                                                       // 677
    /**                                                                                                                // 678
     * Template extensions                                                                                             // 679
     */                                                                                                                // 680
                                                                                                                       // 681
    if (Template[_template]) {                                                                                         // 682
        Template[_template].created = function () {                                                                    // 683
            _autorun();                                                                                                // 684
                                                                                                                       // 685
            if (_.isFunction(_callbacks.templateCreated)) {                                                            // 686
                _callbacks.templateCreated(this);                                                                      // 687
            }                                                                                                          // 688
        };                                                                                                             // 689
                                                                                                                       // 690
        Template[_template].rendered = function () {                                                                   // 691
            if (_.isFunction(_callbacks.templateRendered)) {                                                           // 692
                _callbacks.templateRendered(this);                                                                     // 693
            }                                                                                                          // 694
        };                                                                                                             // 695
                                                                                                                       // 696
        /** Template cleanup. **/                                                                                      // 697
        Template[_template].destroyed = function () {                                                                  // 698
            _subs.results.stop();                                                                                      // 699
            _subs.count.stop();                                                                                        // 700
                                                                                                                       // 701
            if (_.isFunction(_callbacks.templateDestroyed)) {                                                          // 702
                _callbacks.templateDestroyed(this);                                                                    // 703
            }                                                                                                          // 704
        };                                                                                                             // 705
                                                                                                                       // 706
        Template[_template].helpers({                                                                                  // 707
            fcResults: function () {                                                                                   // 708
                return self.query.getResults();                                                                        // 709
            },                                                                                                         // 710
            fcSort: function () {                                                                                      // 711
                return self.sort.get();                                                                                // 712
            },                                                                                                         // 713
            fcPager: function () {                                                                                     // 714
                return self.pager.get();                                                                               // 715
            },                                                                                                         // 716
            fcFilter: function () {                                                                                    // 717
                return self.filter.get();                                                                              // 718
            },                                                                                                         // 719
            fcFilterActive: function () {                                                                              // 720
                return self.filter.getActive();                                                                        // 721
            },                                                                                                         // 722
            fcFilterSearchable: function () {                                                                          // 723
                return {                                                                                               // 724
                    available: self.search.getFields(),                                                                // 725
                    criteria: self.search.getCriteria()                                                                // 726
                };                                                                                                     // 727
            },                                                                                                         // 728
            fcFilterObj: function () {                                                                                 // 729
                return self.filter;                                                                                    // 730
            },                                                                                                         // 731
            fcPagerObj: function () {                                                                                  // 732
                return self.pager;                                                                                     // 733
            }                                                                                                          // 734
        });                                                                                                            // 735
                                                                                                                       // 736
        /** Template events. **/                                                                                       // 737
        Template[_template].events({                                                                                   // 738
            /** Filters **/                                                                                            // 739
            'click .fc-filter': function (event) {                                                                     // 740
                event.preventDefault();                                                                                // 741
                                                                                                                       // 742
                var field = event.currentTarget.getAttribute('data-fc-filter-field') || false;                         // 743
                var value = event.currentTarget.getAttribute('data-fc-filter-value') || false;                         // 744
                var operator = event.currentTarget.getAttribute('data-fc-filter-operator') || false;                   // 745
                var options = event.currentTarget.getAttribute('data-fc-filter-options') || false;                     // 746
                var sort = event.currentTarget.getAttribute('data-fc-filter-sort') || false;                           // 747
                                                                                                                       // 748
                var filter = {};                                                                                       // 749
                                                                                                                       // 750
                if (field && value) {                                                                                  // 751
                    filter['value'] = value;                                                                           // 752
                }                                                                                                      // 753
                                                                                                                       // 754
                if (operator) {                                                                                        // 755
                    filter['operator'] = [operator, options];                                                          // 756
                }                                                                                                      // 757
                                                                                                                       // 758
                if (sort) {                                                                                            // 759
                    filter['sort'] = sort;                                                                             // 760
                }                                                                                                      // 761
                                                                                                                       // 762
                self.filter.set(field, filter);                                                                        // 763
            },                                                                                                         // 764
            'click .fc-filter-clear': function (event) {                                                               // 765
                event.preventDefault();                                                                                // 766
                                                                                                                       // 767
                if (self.filter.getActive().length === 1) {                                                            // 768
                    self.search.clear();                                                                               // 769
                }                                                                                                      // 770
                                                                                                                       // 771
                if (_filters[this.key]) {                                                                              // 772
                    self.filter.clear(this.key);                                                                       // 773
                }                                                                                                      // 774
            },                                                                                                         // 775
            'click .fc-filter-reset': function (event) {                                                               // 776
                event.preventDefault();                                                                                // 777
                                                                                                                       // 778
                if (self.filter.getActive().length) {                                                                  // 779
                    self.search.clear();                                                                               // 780
                    self.filter.clear();                                                                               // 781
                }                                                                                                      // 782
            },                                                                                                         // 783
                                                                                                                       // 784
            /** Search **/                                                                                             // 785
            'click .fc-search-trigger': function (event, template) {                                                   // 786
                event.preventDefault();                                                                                // 787
                                                                                                                       // 788
                var target = event.currentTarget.getAttribute('data-fc-search-trigger');                               // 789
                var value = template.find('[data-fc-search-target="' + target + '"]').value || '';                     // 790
                self.search.setCriteria(value, true);                                                                  // 791
            },                                                                                                         // 792
            'click .fc-search-fields': function (event, template) {                                                    // 793
                event.preventDefault();                                                                                // 794
                self.search.setField(this.field);                                                                      // 795
            },                                                                                                         // 796
            'click .fc-search-clear': function (event, template) {                                                     // 797
                event.preventDefault();                                                                                // 798
                self.search.clear();                                                                                   // 799
            },                                                                                                         // 800
                                                                                                                       // 801
            /** Pager **/                                                                                              // 802
            'change .fc-pager-options': function (event) {                                                             // 803
                event.preventDefault();                                                                                // 804
                var itemsPerPage = parseInt(event.target.value, 10) || _pager.itemsPerPage;                            // 805
                self.pager.setItemsPerPage(itemsPerPage);                                                              // 806
                self.pager.setCurrentPage(1, true);                                                                    // 807
            },                                                                                                         // 808
            'click .fc-pager-option': function (event) {                                                               // 809
                event.preventDefault();                                                                                // 810
                var itemsPerPage = parseInt(event.currentTarget.getAttribute('data-fc-pager-page'), 10) || _pager.itemsPerPage;
                self.pager.setItemsPerPage(itemsPerPage);                                                              // 812
                self.pager.setCurrentPage(1, true);                                                                    // 813
            },                                                                                                         // 814
            'click .fc-pager-page': function (event) {                                                                 // 815
                event.preventDefault();                                                                                // 816
                var page = parseInt(event.currentTarget.getAttribute('data-fc-pager-page'), 10) || _pager.currentPage; // 817
                self.pager.moveTo(page);                                                                               // 818
            },                                                                                                         // 819
            'click .fc-pager-first': function (event) {                                                                // 820
                event.preventDefault();                                                                                // 821
                self.pager.moveFirst();                                                                                // 822
            },                                                                                                         // 823
            'click .fc-pager-previous': function (event) {                                                             // 824
                event.preventDefault();                                                                                // 825
                self.pager.movePrevious();                                                                             // 826
            },                                                                                                         // 827
            'click .fc-pager-next': function (event) {                                                                 // 828
                event.preventDefault();                                                                                // 829
                self.pager.moveNext();                                                                                 // 830
            },                                                                                                         // 831
            'click .fc-pager-last': function (event) {                                                                 // 832
                event.preventDefault();                                                                                // 833
                self.pager.moveLast();                                                                                 // 834
            },                                                                                                         // 835
                                                                                                                       // 836
            /** Sort **/                                                                                               // 837
            'click .fc-sort': function (event, template) {                                                             // 838
                event.preventDefault();                                                                                // 839
                var field = event.currentTarget.getAttribute('data-fc-sort');                                          // 840
                self.sort.set(field, null, true);                                                                      // 841
            },                                                                                                         // 842
            'click .fc-sort-clear': function (event, template) {                                                       // 843
                event.preventDefault();                                                                                // 844
                self.sort.clear();                                                                                     // 845
            }                                                                                                          // 846
        });                                                                                                            // 847
    } else {                                                                                                           // 848
        _autorun();                                                                                                    // 849
    }                                                                                                                  // 850
};                                                                                                                     // 851
                                                                                                                       // 852
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 862
}).call(this);                                                       // 863
                                                                     // 864
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['doctorpangloss:filter-collections'] = {}, {
  FilterCollections: FilterCollections
});

})();
