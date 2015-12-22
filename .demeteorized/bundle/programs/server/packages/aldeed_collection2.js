(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var _ = Package.underscore._;
var check = Package.check.check;
var Match = Package.check.Match;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var EJSON = Package.ejson.EJSON;

/* Package-scope variables */
var Mongo;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/aldeed_collection2/collection2.js                                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/* global Meteor, _, SimpleSchema, Mongo:true, Match, Package, EJSON */                                              // 1
                                                                                                                     // 2
// Extend the schema options allowed by SimpleSchema                                                                 // 3
SimpleSchema.extendOptions({                                                                                         // 4
  index: Match.Optional(Match.OneOf(Number, String, Boolean)),                                                       // 5
  unique: Match.Optional(Boolean),                                                                                   // 6
  sparse: Match.Optional(Boolean),                                                                                   // 7
  denyInsert: Match.Optional(Boolean),                                                                               // 8
  denyUpdate: Match.Optional(Boolean)                                                                                // 9
});                                                                                                                  // 10
                                                                                                                     // 11
// Define some extra validation error messages                                                                       // 12
SimpleSchema.messages({                                                                                              // 13
  notUnique: "[label] must be unique",                                                                               // 14
  insertNotAllowed: "[label] cannot be set during an insert",                                                        // 15
  updateNotAllowed: "[label] cannot be set during an update"                                                         // 16
});                                                                                                                  // 17
                                                                                                                     // 18
/*                                                                                                                   // 19
 * Public API                                                                                                        // 20
 */                                                                                                                  // 21
                                                                                                                     // 22
// backwards compatibility                                                                                           // 23
if (typeof Mongo === "undefined") {                                                                                  // 24
  Mongo = {};                                                                                                        // 25
  Mongo.Collection = Meteor.Collection;                                                                              // 26
}                                                                                                                    // 27
                                                                                                                     // 28
/**                                                                                                                  // 29
 * Mongo.Collection.prototype.attachSchema                                                                           // 30
 * @param {SimpleSchema|Object} ss - SimpleSchema instance or a schema definition object                             // 31
 *    from which to create a new SimpleSchema instance                                                               // 32
 * @param {Object} [options]                                                                                         // 33
 * @param {Boolean} [options.transform=false] Set to `true` if your document must be passed                          // 34
 *    through the collection's transform to properly validate.                                                       // 35
 * @param {Boolean} [options.replace=false] Set to `true` to replace any existing schema instead of combining        // 36
 * @return {undefined}                                                                                               // 37
 *                                                                                                                   // 38
 * Use this method to attach a schema to a collection created by another package,                                    // 39
 * such as Meteor.users. It is most likely unsafe to call this method more than                                      // 40
 * once for a single collection, or to call this for a collection that had a                                         // 41
 * schema object passed to its constructor.                                                                          // 42
 */                                                                                                                  // 43
Mongo.Collection.prototype.attachSchema = function c2AttachSchema(ss, options) {                                     // 44
  var self = this;                                                                                                   // 45
  options = options || {};                                                                                           // 46
                                                                                                                     // 47
  if (!(ss instanceof SimpleSchema)) {                                                                               // 48
    ss = new SimpleSchema(ss);                                                                                       // 49
  }                                                                                                                  // 50
                                                                                                                     // 51
  self._c2 = self._c2 || {};                                                                                         // 52
                                                                                                                     // 53
  // If we've already attached one schema, we combine both into a new schema unless options.replace is `true`        // 54
  if (self._c2._simpleSchema && options.replace !== true) {                                                          // 55
    ss = new SimpleSchema([self._c2._simpleSchema, ss]);                                                             // 56
  }                                                                                                                  // 57
                                                                                                                     // 58
  // Track the schema in the collection                                                                              // 59
  self._c2._simpleSchema = ss;                                                                                       // 60
                                                                                                                     // 61
  if (self._collection instanceof LocalCollection) {                                                                 // 62
    self._collection._c2 = self._collection._c2 || {};                                                               // 63
    self._collection._c2._simpleSchema = ss;                                                                         // 64
  }                                                                                                                  // 65
                                                                                                                     // 66
  function ensureIndex(c, index, indexName, unique, sparse) {                                                        // 67
    Meteor.startup(function () {                                                                                     // 68
      c._collection._ensureIndex(index, {                                                                            // 69
        background: true,                                                                                            // 70
        name: indexName,                                                                                             // 71
        unique: unique,                                                                                              // 72
        sparse: sparse                                                                                               // 73
      });                                                                                                            // 74
    });                                                                                                              // 75
  }                                                                                                                  // 76
                                                                                                                     // 77
  function dropIndex(c, indexName) {                                                                                 // 78
    Meteor.startup(function () {                                                                                     // 79
      try {                                                                                                          // 80
        c._collection._dropIndex(indexName);                                                                         // 81
      } catch (err) {                                                                                                // 82
        // no index with that name, which is what we want                                                            // 83
      }                                                                                                              // 84
    });                                                                                                              // 85
  }                                                                                                                  // 86
                                                                                                                     // 87
  // Loop over fields definitions and ensure collection indexes (server side only)                                   // 88
  if (Meteor.isServer) {                                                                                             // 89
    _.each(ss.schema(), function(definition, fieldName) {                                                            // 90
      if ('index' in definition || definition.unique === true) {                                                     // 91
        var index = {}, indexValue;                                                                                  // 92
        // If they specified `unique: true` but not `index`,                                                         // 93
        // we assume `index: 1` to set up the unique index in mongo                                                  // 94
        if ('index' in definition) {                                                                                 // 95
          indexValue = definition.index;                                                                             // 96
          if (indexValue === true) {                                                                                 // 97
            indexValue = 1;                                                                                          // 98
          }                                                                                                          // 99
        } else {                                                                                                     // 100
          indexValue = 1;                                                                                            // 101
        }                                                                                                            // 102
        var indexName = 'c2_' + fieldName;                                                                           // 103
        // In the index object, we want object array keys without the ".$" piece                                     // 104
        var idxFieldName = fieldName.replace(/\.\$\./g, ".");                                                        // 105
        index[idxFieldName] = indexValue;                                                                            // 106
        var unique = !!definition.unique && (indexValue === 1 || indexValue === -1);                                 // 107
        var sparse = definition.sparse || false;                                                                     // 108
                                                                                                                     // 109
        // If unique and optional, force sparse to prevent errors                                                    // 110
        if (!sparse && unique && definition.optional) {                                                              // 111
          sparse = true;                                                                                             // 112
        }                                                                                                            // 113
                                                                                                                     // 114
        if (indexValue === false) {                                                                                  // 115
          dropIndex(self, indexName);                                                                                // 116
        } else {                                                                                                     // 117
          ensureIndex(self, index, indexName, unique, sparse);                                                       // 118
        }                                                                                                            // 119
      }                                                                                                              // 120
    });                                                                                                              // 121
  }                                                                                                                  // 122
                                                                                                                     // 123
  // Set up additional checks                                                                                        // 124
  ss.validator(function() {                                                                                          // 125
    var def = this.definition;                                                                                       // 126
    var val = this.value;                                                                                            // 127
    var op = this.operator;                                                                                          // 128
                                                                                                                     // 129
    if (def.denyInsert && val !== void 0 && !op) {                                                                   // 130
      // This is an insert of a defined value into a field where denyInsert=true                                     // 131
      return "insertNotAllowed";                                                                                     // 132
    }                                                                                                                // 133
                                                                                                                     // 134
    if (def.denyUpdate && op) {                                                                                      // 135
      // This is an insert of a defined value into a field where denyUpdate=true                                     // 136
      if (op !== "$set" || (op === "$set" && val !== void 0)) {                                                      // 137
        return "updateNotAllowed";                                                                                   // 138
      }                                                                                                              // 139
    }                                                                                                                // 140
                                                                                                                     // 141
    return true;                                                                                                     // 142
  });                                                                                                                // 143
                                                                                                                     // 144
  defineDeny(self, options);                                                                                         // 145
  keepInsecure(self);                                                                                                // 146
};                                                                                                                   // 147
                                                                                                                     // 148
_.each([Mongo.Collection, LocalCollection], function (obj) {                                                         // 149
  obj.prototype.simpleSchema = function () {                                                                         // 150
    var self = this;                                                                                                 // 151
    return self._c2 ? self._c2._simpleSchema : null;                                                                 // 152
  };                                                                                                                 // 153
});                                                                                                                  // 154
                                                                                                                     // 155
// Wrap DB write operation methods                                                                                   // 156
_.each(['insert', 'update'], function(methodName) {                                                                  // 157
  var _super = Mongo.Collection.prototype[methodName];                                                               // 158
  Mongo.Collection.prototype[methodName] = function() {                                                              // 159
    var self = this, options,                                                                                        // 160
        args = _.toArray(arguments);                                                                                 // 161
                                                                                                                     // 162
    options = (methodName === "insert") ? args[1] : args[2];                                                         // 163
                                                                                                                     // 164
    // Support missing options arg                                                                                   // 165
    if (!options || typeof options === "function") {                                                                 // 166
      options = {};                                                                                                  // 167
    }                                                                                                                // 168
                                                                                                                     // 169
    if (self._c2 && options.bypassCollection2 !== true) {                                                            // 170
      var userId = null;                                                                                             // 171
      try { // https://github.com/aldeed/meteor-collection2/issues/175                                               // 172
        userId = Meteor.userId();                                                                                    // 173
      } catch (err) {}                                                                                               // 174
                                                                                                                     // 175
      args = doValidate.call(                                                                                        // 176
        self,                                                                                                        // 177
        methodName,                                                                                                  // 178
        args,                                                                                                        // 179
        true, // getAutoValues                                                                                       // 180
        userId,                                                                                                      // 181
        Meteor.isServer // isFromTrustedCode                                                                         // 182
      );                                                                                                             // 183
      if (!args) {                                                                                                   // 184
        // doValidate already called the callback or threw the error so we're done.                                  // 185
        // But insert should always return an ID to match core behavior.                                             // 186
        return methodName === "insert" ? self._makeNewID() : undefined;                                              // 187
      }                                                                                                              // 188
    }                                                                                                                // 189
    return _super.apply(self, args);                                                                                 // 190
  };                                                                                                                 // 191
});                                                                                                                  // 192
                                                                                                                     // 193
/*                                                                                                                   // 194
 * Private                                                                                                           // 195
 */                                                                                                                  // 196
                                                                                                                     // 197
function doValidate(type, args, getAutoValues, userId, isFromTrustedCode) {                                          // 198
  var self = this, doc, callback, error, options, isUpsert, selector, last, hasCallback;                             // 199
                                                                                                                     // 200
  var schema = self.simpleSchema();                                                                                  // 201
  var isLocalCollection = (self._connection === null);                                                               // 202
                                                                                                                     // 203
  if (!args.length) {                                                                                                // 204
    throw new Error(type + " requires an argument");                                                                 // 205
  }                                                                                                                  // 206
                                                                                                                     // 207
  // Gather arguments and cache the selector                                                                         // 208
  if (type === "insert") {                                                                                           // 209
    doc = args[0];                                                                                                   // 210
    options = args[1];                                                                                               // 211
    callback = args[2];                                                                                              // 212
                                                                                                                     // 213
    // The real insert doesn't take options                                                                          // 214
    if (typeof options === "function") {                                                                             // 215
      args = [doc, options];                                                                                         // 216
    } else if (typeof callback === "function") {                                                                     // 217
      args = [doc, callback];                                                                                        // 218
    } else {                                                                                                         // 219
      args = [doc];                                                                                                  // 220
    }                                                                                                                // 221
                                                                                                                     // 222
  } else if (type === "update") {                                                                                    // 223
    selector = args[0];                                                                                              // 224
    doc = args[1];                                                                                                   // 225
    options = args[2];                                                                                               // 226
    callback = args[3];                                                                                              // 227
  } else {                                                                                                           // 228
    throw new Error("invalid type argument");                                                                        // 229
  }                                                                                                                  // 230
                                                                                                                     // 231
  // Support missing options arg                                                                                     // 232
  if (!callback && typeof options === "function") {                                                                  // 233
    callback = options;                                                                                              // 234
    options = {};                                                                                                    // 235
  }                                                                                                                  // 236
  options = options || {};                                                                                           // 237
                                                                                                                     // 238
  last = args.length - 1;                                                                                            // 239
                                                                                                                     // 240
  hasCallback = (typeof args[last] === 'function');                                                                  // 241
                                                                                                                     // 242
  // If update was called with upsert:true, flag as an upsert                                                        // 243
  isUpsert = (type === "update" && options.upsert === true);                                                         // 244
                                                                                                                     // 245
  // On the server and for local collections, we allow passing `getAutoValues: false` to disable autoValue functions
  if ((Meteor.isServer || isLocalCollection) && options.getAutoValues === false) {                                   // 247
    getAutoValues = false;                                                                                           // 248
  }                                                                                                                  // 249
                                                                                                                     // 250
  // Determine validation context                                                                                    // 251
  var validationContext = options.validationContext;                                                                 // 252
  if (validationContext) {                                                                                           // 253
    if (typeof validationContext === 'string') {                                                                     // 254
      validationContext = schema.namedContext(validationContext);                                                    // 255
    }                                                                                                                // 256
  } else {                                                                                                           // 257
    validationContext = schema.namedContext();                                                                       // 258
  }                                                                                                                  // 259
                                                                                                                     // 260
  // Add a default callback function if we're on the client and no callback was given                                // 261
  if (Meteor.isClient && !callback) {                                                                                // 262
    // Client can't block, so it can't report errors by exception,                                                   // 263
    // only by callback. If they forget the callback, give them a                                                    // 264
    // default one that logs the error, so they aren't totally                                                       // 265
    // baffled if their writes don't work because their database is                                                  // 266
    // down.                                                                                                         // 267
    callback = function(err) {                                                                                       // 268
      if (err) {                                                                                                     // 269
        Meteor._debug(type + " failed: " + (err.reason || err.stack));                                               // 270
      }                                                                                                              // 271
    };                                                                                                               // 272
  }                                                                                                                  // 273
                                                                                                                     // 274
  // If client validation is fine or is skipped but then something                                                   // 275
  // is found to be invalid on the server, we get that error back                                                    // 276
  // as a special Meteor.Error that we need to parse.                                                                // 277
  if (Meteor.isClient && hasCallback) {                                                                              // 278
    callback = args[last] = wrapCallbackForParsingServerErrors(validationContext, callback);                         // 279
  }                                                                                                                  // 280
                                                                                                                     // 281
  // Get the docId for passing in the autoValue/custom context                                                       // 282
  var docId;                                                                                                         // 283
  if (type === 'insert') {                                                                                           // 284
    docId = doc._id; // might be undefined                                                                           // 285
  } else if (type === "update" && selector) {                                                                        // 286
    docId = typeof selector === 'string' || selector instanceof Mongo.ObjectID ? selector : selector._id;            // 287
  }                                                                                                                  // 288
                                                                                                                     // 289
  // If _id has already been added, remove it temporarily if it's                                                    // 290
  // not explicitly defined in the schema.                                                                           // 291
  var cachedId;                                                                                                      // 292
  if (doc._id && !schema.allowsKey("_id")) {                                                                         // 293
    cachedId = doc._id;                                                                                              // 294
    delete doc._id;                                                                                                  // 295
  }                                                                                                                  // 296
                                                                                                                     // 297
  function doClean(docToClean, getAutoValues, filter, autoConvert, removeEmptyStrings, trimStrings) {                // 298
    // Clean the doc/modifier in place                                                                               // 299
    schema.clean(docToClean, {                                                                                       // 300
      filter: filter,                                                                                                // 301
      autoConvert: autoConvert,                                                                                      // 302
      getAutoValues: getAutoValues,                                                                                  // 303
      isModifier: (type !== "insert"),                                                                               // 304
      removeEmptyStrings: removeEmptyStrings,                                                                        // 305
      trimStrings: trimStrings,                                                                                      // 306
      extendAutoValueContext: _.extend({                                                                             // 307
        isInsert: (type === "insert"),                                                                               // 308
        isUpdate: (type === "update" && options.upsert !== true),                                                    // 309
        isUpsert: isUpsert,                                                                                          // 310
        userId: userId,                                                                                              // 311
        isFromTrustedCode: isFromTrustedCode,                                                                        // 312
        docId: docId,                                                                                                // 313
        isLocalCollection: isLocalCollection                                                                         // 314
      }, options.extendAutoValueContext || {})                                                                       // 315
    });                                                                                                              // 316
  }                                                                                                                  // 317
                                                                                                                     // 318
  // Preliminary cleaning on both client and server. On the server and for local                                     // 319
  // collections, automatic values will also be set at this point.                                                   // 320
  doClean(                                                                                                           // 321
    doc,                                                                                                             // 322
    getAutoValues,                                                                                                   // 323
    options.filter !== false,                                                                                        // 324
    options.autoConvert !== false,                                                                                   // 325
    options.removeEmptyStrings !== false,                                                                            // 326
    options.trimStrings !== false                                                                                    // 327
  );                                                                                                                 // 328
                                                                                                                     // 329
  // We clone before validating because in some cases we need to adjust the                                          // 330
  // object a bit before validating it. If we adjusted `doc` itself, our                                             // 331
  // changes would persist into the database.                                                                        // 332
  var docToValidate = {};                                                                                            // 333
  for (var prop in doc) {                                                                                            // 334
    // We omit prototype properties when cloning because they will not be valid                                      // 335
    // and mongo omits them when saving to the database anyway.                                                      // 336
    if (doc.hasOwnProperty(prop)) {                                                                                  // 337
      docToValidate[prop] = doc[prop];                                                                               // 338
    }                                                                                                                // 339
  }                                                                                                                  // 340
                                                                                                                     // 341
  // On the server, upserts are possible; SimpleSchema handles upserts pretty                                        // 342
  // well by default, but it will not know about the fields in the selector,                                         // 343
  // which are also stored in the database if an insert is performed. So we                                          // 344
  // will allow these fields to be considered for validation by adding them                                          // 345
  // to the $set in the modifier. This is no doubt prone to errors, but there                                        // 346
  // probably isn't any better way right now.                                                                        // 347
  if (Meteor.isServer && isUpsert && _.isObject(selector)) {                                                         // 348
    var set = docToValidate.$set || {};                                                                              // 349
    docToValidate.$set = _.clone(selector);                                                                          // 350
    _.extend(docToValidate.$set, set);                                                                               // 351
  }                                                                                                                  // 352
                                                                                                                     // 353
  // Set automatic values for validation on the client.                                                              // 354
  // On the server, we already updated doc with auto values, but on the client,                                      // 355
  // we will add them to docToValidate for validation purposes only.                                                 // 356
  // This is because we want all actual values generated on the server.                                              // 357
  if (Meteor.isClient && !isLocalCollection) {                                                                       // 358
    doClean(docToValidate, true, false, false, false, false);                                                        // 359
  }                                                                                                                  // 360
                                                                                                                     // 361
  // Validate doc                                                                                                    // 362
  var isValid;                                                                                                       // 363
  if (options.validate === false) {                                                                                  // 364
    isValid = true;                                                                                                  // 365
  } else {                                                                                                           // 366
    isValid = validationContext.validate(docToValidate, {                                                            // 367
      modifier: (type === "update" || type === "upsert"),                                                            // 368
      upsert: isUpsert,                                                                                              // 369
      extendedCustomContext: _.extend({                                                                              // 370
        isInsert: (type === "insert"),                                                                               // 371
        isUpdate: (type === "update" && options.upsert !== true),                                                    // 372
        isUpsert: isUpsert,                                                                                          // 373
        userId: userId,                                                                                              // 374
        isFromTrustedCode: isFromTrustedCode,                                                                        // 375
        docId: docId,                                                                                                // 376
        isLocalCollection: isLocalCollection                                                                         // 377
      }, options.extendedCustomContext || {})                                                                        // 378
    });                                                                                                              // 379
  }                                                                                                                  // 380
                                                                                                                     // 381
  if (isValid) {                                                                                                     // 382
    // Add the ID back                                                                                               // 383
    if (cachedId) {                                                                                                  // 384
      doc._id = cachedId;                                                                                            // 385
    }                                                                                                                // 386
                                                                                                                     // 387
    // Update the args to reflect the cleaned doc                                                                    // 388
    // XXX not sure this is necessary since we mutate                                                                // 389
    if (type === "insert") {                                                                                         // 390
      args[0] = doc;                                                                                                 // 391
    } else {                                                                                                         // 392
      args[1] = doc;                                                                                                 // 393
    }                                                                                                                // 394
                                                                                                                     // 395
    // If callback, set invalidKey when we get a mongo unique error                                                  // 396
    if (Meteor.isServer && hasCallback) {                                                                            // 397
      args[last] = wrapCallbackForParsingMongoValidationErrors(validationContext, args[last]);                       // 398
    }                                                                                                                // 399
                                                                                                                     // 400
    return args;                                                                                                     // 401
  } else {                                                                                                           // 402
    error = getErrorObject(validationContext);                                                                       // 403
    if (callback) {                                                                                                  // 404
      // insert/update/upsert pass `false` when there's an error, so we do that                                      // 405
      callback(error, false);                                                                                        // 406
    } else {                                                                                                         // 407
      throw error;                                                                                                   // 408
    }                                                                                                                // 409
  }                                                                                                                  // 410
}                                                                                                                    // 411
                                                                                                                     // 412
function getErrorObject(context) {                                                                                   // 413
  var message, invalidKeys = context.invalidKeys();                                                                  // 414
  if (invalidKeys.length) {                                                                                          // 415
    message = context.keyErrorMessage(invalidKeys[0].name);                                                          // 416
  } else {                                                                                                           // 417
    message = "Failed validation";                                                                                   // 418
  }                                                                                                                  // 419
  var error = new Error(message);                                                                                    // 420
  error.invalidKeys = invalidKeys;                                                                                   // 421
  error.validationContext = context;                                                                                 // 422
  // If on the server, we add a sanitized error, too, in case we're                                                  // 423
  // called from a method.                                                                                           // 424
  if (Meteor.isServer) {                                                                                             // 425
    error.sanitizedError = new Meteor.Error(400, message, EJSON.stringify(error.invalidKeys));                       // 426
  }                                                                                                                  // 427
  return error;                                                                                                      // 428
}                                                                                                                    // 429
                                                                                                                     // 430
function addUniqueError(context, errorMessage) {                                                                     // 431
  var name = errorMessage.split('c2_')[1].split(' ')[0];                                                             // 432
  var val = errorMessage.split('dup key:')[1].split('"')[1];                                                         // 433
  context.addInvalidKeys([{                                                                                          // 434
    name: name,                                                                                                      // 435
    type: 'notUnique',                                                                                               // 436
    value: val                                                                                                       // 437
  }]);                                                                                                               // 438
}                                                                                                                    // 439
                                                                                                                     // 440
function wrapCallbackForParsingMongoValidationErrors(validationContext, cb) {                                        // 441
  return function wrappedCallbackForParsingMongoValidationErrors(error) {                                            // 442
    var args = _.toArray(arguments);                                                                                 // 443
    if (error &&                                                                                                     // 444
        ((error.name === "MongoError" && error.code === 11001) || error.message.indexOf('MongoError: E11000' !== -1)) &&
        error.message.indexOf('c2_') !== -1) {                                                                       // 446
      addUniqueError(validationContext, error.message);                                                              // 447
      args[0] = getErrorObject(validationContext);                                                                   // 448
    }                                                                                                                // 449
    return cb.apply(this, args);                                                                                     // 450
  };                                                                                                                 // 451
}                                                                                                                    // 452
                                                                                                                     // 453
function wrapCallbackForParsingServerErrors(validationContext, cb) {                                                 // 454
  return function wrappedCallbackForParsingServerErrors(error) {                                                     // 455
    var args = _.toArray(arguments);                                                                                 // 456
    // Handle our own validation errors                                                                              // 457
    if (error instanceof Meteor.Error &&                                                                             // 458
        error.error === 400 &&                                                                                       // 459
        error.reason === "INVALID" &&                                                                                // 460
        typeof error.details === "string") {                                                                         // 461
      var invalidKeysFromServer = EJSON.parse(error.details);                                                        // 462
      validationContext.addInvalidKeys(invalidKeysFromServer);                                                       // 463
      args[0] = getErrorObject(validationContext);                                                                   // 464
    }                                                                                                                // 465
    // Handle Mongo unique index errors, which are forwarded to the client as 409 errors                             // 466
    else if (error instanceof Meteor.Error &&                                                                        // 467
             error.error === 409 &&                                                                                  // 468
             error.reason &&                                                                                         // 469
             error.reason.indexOf('E11000') !== -1 &&                                                                // 470
             error.reason.indexOf('c2_') !== -1) {                                                                   // 471
      addUniqueError(validationContext, error.reason);                                                               // 472
      args[0] = getErrorObject(validationContext);                                                                   // 473
    }                                                                                                                // 474
    return cb.apply(this, args);                                                                                     // 475
  };                                                                                                                 // 476
}                                                                                                                    // 477
                                                                                                                     // 478
var alreadyInsecured = {};                                                                                           // 479
function keepInsecure(c) {                                                                                           // 480
  // If insecure package is in use, we need to add allow rules that return                                           // 481
  // true. Otherwise, it would seemingly turn off insecure mode.                                                     // 482
  if (Package && Package.insecure && !alreadyInsecured[c._name]) {                                                   // 483
    c.allow({                                                                                                        // 484
      insert: function() {                                                                                           // 485
        return true;                                                                                                 // 486
      },                                                                                                             // 487
      update: function() {                                                                                           // 488
        return true;                                                                                                 // 489
      },                                                                                                             // 490
      remove: function () {                                                                                          // 491
        return true;                                                                                                 // 492
      },                                                                                                             // 493
      fetch: [],                                                                                                     // 494
      transform: null                                                                                                // 495
    });                                                                                                              // 496
    alreadyInsecured[c._name] = true;                                                                                // 497
  }                                                                                                                  // 498
  // If insecure package is NOT in use, then adding the two deny functions                                           // 499
  // does not have any effect on the main app's security paradigm. The                                               // 500
  // user will still be required to add at least one allow function of her                                           // 501
  // own for each operation for this collection. And the user may still add                                          // 502
  // additional deny functions, but does not have to.                                                                // 503
}                                                                                                                    // 504
                                                                                                                     // 505
var alreadyDefined = {};                                                                                             // 506
function defineDeny(c, options) {                                                                                    // 507
  if (!alreadyDefined[c._name]) {                                                                                    // 508
                                                                                                                     // 509
    var isLocalCollection = (c._connection === null);                                                                // 510
                                                                                                                     // 511
    // First define deny functions to extend doc with the results of clean                                           // 512
    // and autovalues. This must be done with "transform: null" or we would be                                       // 513
    // extending a clone of doc and therefore have no effect.                                                        // 514
    c.deny({                                                                                                         // 515
      insert: function(userId, doc) {                                                                                // 516
        var ss = c.simpleSchema();                                                                                   // 517
        // If _id has already been added, remove it temporarily if it's                                              // 518
        // not explicitly defined in the schema.                                                                     // 519
        var id;                                                                                                      // 520
        if (Meteor.isServer && doc._id && !ss.allowsKey("_id")) {                                                    // 521
          id = doc._id;                                                                                              // 522
          delete doc._id;                                                                                            // 523
        }                                                                                                            // 524
                                                                                                                     // 525
        // Referenced doc is cleaned in place                                                                        // 526
        ss.clean(doc, {                                                                                              // 527
          isModifier: false,                                                                                         // 528
          // We don't do these here because they are done on the client if desired                                   // 529
          filter: false,                                                                                             // 530
          autoConvert: false,                                                                                        // 531
          removeEmptyStrings: false,                                                                                 // 532
          trimStrings: false,                                                                                        // 533
          extendAutoValueContext: {                                                                                  // 534
            isInsert: true,                                                                                          // 535
            isUpdate: false,                                                                                         // 536
            isUpsert: false,                                                                                         // 537
            userId: userId,                                                                                          // 538
            isFromTrustedCode: false,                                                                                // 539
            docId: id,                                                                                               // 540
            isLocalCollection: isLocalCollection                                                                     // 541
          }                                                                                                          // 542
        });                                                                                                          // 543
                                                                                                                     // 544
        // Add the ID back                                                                                           // 545
        if (id) {                                                                                                    // 546
          doc._id = id;                                                                                              // 547
        }                                                                                                            // 548
                                                                                                                     // 549
        return false;                                                                                                // 550
      },                                                                                                             // 551
      update: function(userId, doc, fields, modifier) {                                                              // 552
        var ss = c.simpleSchema();                                                                                   // 553
        // Referenced modifier is cleaned in place                                                                   // 554
        ss.clean(modifier, {                                                                                         // 555
          isModifier: true,                                                                                          // 556
          // We don't do these here because they are done on the client if desired                                   // 557
          filter: false,                                                                                             // 558
          autoConvert: false,                                                                                        // 559
          removeEmptyStrings: false,                                                                                 // 560
          trimStrings: false,                                                                                        // 561
          extendAutoValueContext: {                                                                                  // 562
            isInsert: false,                                                                                         // 563
            isUpdate: true,                                                                                          // 564
            isUpsert: false,                                                                                         // 565
            userId: userId,                                                                                          // 566
            isFromTrustedCode: false,                                                                                // 567
            docId: doc && doc._id,                                                                                   // 568
            isLocalCollection: isLocalCollection                                                                     // 569
          }                                                                                                          // 570
        });                                                                                                          // 571
                                                                                                                     // 572
        return false;                                                                                                // 573
      },                                                                                                             // 574
      fetch: ['_id'],                                                                                                // 575
      transform: null                                                                                                // 576
    });                                                                                                              // 577
                                                                                                                     // 578
    // Second define deny functions to validate again on the server                                                  // 579
    // for client-initiated inserts and updates. These should be                                                     // 580
    // called after the clean/autovalue functions since we're adding                                                 // 581
    // them after. These must *not* have "transform: null" if options.transform is true because                      // 582
    // we need to pass the doc through any transforms to be sure                                                     // 583
    // that custom types are properly recognized for type validation.                                                // 584
    c.deny(_.extend({                                                                                                // 585
      insert: function(userId, doc) {                                                                                // 586
        // We pass the false options because we will have done them on client if desired                             // 587
        doValidate.call(                                                                                             // 588
          c,                                                                                                         // 589
          "insert",                                                                                                  // 590
          [                                                                                                          // 591
            doc,                                                                                                     // 592
            {                                                                                                        // 593
              trimStrings: false,                                                                                    // 594
              removeEmptyStrings: false,                                                                             // 595
              filter: false,                                                                                         // 596
              autoConvert: false                                                                                     // 597
            },                                                                                                       // 598
            function(error) {                                                                                        // 599
              if (error) {                                                                                           // 600
                throw new Meteor.Error(400, 'INVALID', EJSON.stringify(error.invalidKeys));                          // 601
              }                                                                                                      // 602
            }                                                                                                        // 603
          ],                                                                                                         // 604
          false, // getAutoValues                                                                                    // 605
          userId,                                                                                                    // 606
          false // isFromTrustedCode                                                                                 // 607
        );                                                                                                           // 608
                                                                                                                     // 609
        return false;                                                                                                // 610
      },                                                                                                             // 611
      update: function(userId, doc, fields, modifier) {                                                              // 612
        // NOTE: This will never be an upsert because client-side upserts                                            // 613
        // are not allowed once you define allow/deny functions.                                                     // 614
        // We pass the false options because we will have done them on client if desired                             // 615
        doValidate.call(                                                                                             // 616
          c,                                                                                                         // 617
          "update",                                                                                                  // 618
          [                                                                                                          // 619
            {_id: doc && doc._id},                                                                                   // 620
            modifier,                                                                                                // 621
            {                                                                                                        // 622
              trimStrings: false,                                                                                    // 623
              removeEmptyStrings: false,                                                                             // 624
              filter: false,                                                                                         // 625
              autoConvert: false                                                                                     // 626
            },                                                                                                       // 627
            function(error) {                                                                                        // 628
              if (error) {                                                                                           // 629
                throw new Meteor.Error(400, 'INVALID', EJSON.stringify(error.invalidKeys));                          // 630
              }                                                                                                      // 631
            }                                                                                                        // 632
          ],                                                                                                         // 633
          false, // getAutoValues                                                                                    // 634
          userId,                                                                                                    // 635
          false // isFromTrustedCode                                                                                 // 636
        );                                                                                                           // 637
                                                                                                                     // 638
        return false;                                                                                                // 639
      },                                                                                                             // 640
      fetch: ['_id']                                                                                                 // 641
    }, options.transform === true ? {} : {transform: null}));                                                        // 642
                                                                                                                     // 643
    // note that we've already done this collection so that we don't do it again                                     // 644
    // if attachSchema is called again                                                                               // 645
    alreadyDefined[c._name] = true;                                                                                  // 646
  }                                                                                                                  // 647
}                                                                                                                    // 648
                                                                                                                     // 649
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['aldeed:collection2'] = {};

})();

//# sourceMappingURL=aldeed_collection2.js.map
