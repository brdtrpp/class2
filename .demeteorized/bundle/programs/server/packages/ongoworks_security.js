(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var _ = Package.underscore._;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var Random = Package.random.Random;
var EJSON = Package.ejson.EJSON;

/* Package-scope variables */
var rulesByCollection, addFuncForAll, ensureCreated, ensureDefaultAllow, getRulesForCollectionAndType, computeChangedFieldsFromModifier, getCollectionName, allRulesPass, ensureSecureDeny, Security;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/ongoworks_security/packages/ongoworks_security.js                                                     //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
(function(){                                                                                                      // 1
                                                                                                                  // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                         //     // 4
// packages/ongoworks_security/lib/server/security-util.js                                                 //     // 5
//                                                                                                         //     // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                           //     // 8
/* global _, rulesByCollection:true, addFuncForAll:true, ensureCreated:true, ensureDefaultAllow:true */    // 1   // 9
                                                                                                           // 2   // 10
rulesByCollection = {};                                                                                    // 3   // 11
                                                                                                           // 4   // 12
var created = {                                                                                            // 5   // 13
  allow: {                                                                                                 // 6   // 14
    insert: {},                                                                                            // 7   // 15
    update: {},                                                                                            // 8   // 16
    remove: {},                                                                                            // 9   // 17
    download: {} // for use with CollectionFS packages                                                     // 10  // 18
  },                                                                                                       // 11  // 19
  deny: {                                                                                                  // 12  // 20
    insert: {},                                                                                            // 13  // 21
    update: {},                                                                                            // 14  // 22
    remove: {},                                                                                            // 15  // 23
    download: {} // for use with CollectionFS packages                                                     // 16  // 24
  }                                                                                                        // 17  // 25
};                                                                                                         // 18  // 26
                                                                                                           // 19  // 27
/**                                                                                                        // 20  // 28
 * Adds the given function as an allow or deny function for all specified collections and types.           // 21  // 29
 * @param {Array(Mongo.Collection)} collections Array of Mongo.Collection instances                        // 22  // 30
 * @param {String}                  allowOrDeny "allow" or "deny"                                          // 23  // 31
 * @param {Array(String)}           types       Array of types ("insert", "update", "remove")              // 24  // 32
 * @param {Array(String)|null}      fetch       `fetch` property to use                                    // 25  // 33
 * @param {Function}                func        The function                                               // 26  // 34
 */                                                                                                        // 27  // 35
addFuncForAll = function addFuncForAll(collections, allowOrDeny, types, fetch, func) {                     // 28  // 36
  // We always disable transformation, but we transform for specific                                       // 29  // 37
  // rules upon running our deny function if requested.                                                    // 30  // 38
  var rules = {transform: null};                                                                           // 31  // 39
  if (_.isArray(fetch)) {                                                                                  // 32  // 40
    rules.fetch = fetch;                                                                                   // 33  // 41
  }                                                                                                        // 34  // 42
  _.each(types, function (t) {                                                                             // 35  // 43
    rules[t] = func;                                                                                       // 36  // 44
  });                                                                                                      // 37  // 45
  _.each(collections, function (c) {                                                                       // 38  // 46
    c[allowOrDeny](rules);                                                                                 // 39  // 47
  });                                                                                                      // 40  // 48
};                                                                                                         // 41  // 49
                                                                                                           // 42  // 50
/**                                                                                                        // 43  // 51
 * Creates the allow or deny function for the given collections if not already created. This ensures that this package only ever creates up to one allow and one deny per collection.
 * @param   {String}                  allowOrDeny "allow" or "deny"                                        // 45  // 53
 * @param   {Array(Mongo.Collection)} collections An array of collections                                  // 46  // 54
 * @param   {Array(String)}           types       An array of types ("insert", "update", "remove")         // 47  // 55
 * @param   {Array(String)|null}      fetch       `fetch` property to use                                  // 48  // 56
 * @param   {Function}                func        The function                                             // 49  // 57
 */                                                                                                        // 50  // 58
ensureCreated = function ensureCreated(allowOrDeny, collections, types, fetch, func) {                     // 51  // 59
  _.each(types, function (t) {                                                                             // 52  // 60
    collections = _.reject(collections, function (c) {                                                     // 53  // 61
      return _.has(created[allowOrDeny][t], getCollectionName(c));                                         // 54  // 62
    });                                                                                                    // 55  // 63
    addFuncForAll(collections, allowOrDeny, [t], null, func);                                              // 56  // 64
    // mark that we've defined function for collection-type combo                                          // 57  // 65
    _.each(collections, function (c) {                                                                     // 58  // 66
      created[allowOrDeny][t][getCollectionName(c)] = true;                                                // 59  // 67
    });                                                                                                    // 60  // 68
  });                                                                                                      // 61  // 69
};                                                                                                         // 62  // 70
                                                                                                           // 63  // 71
/**                                                                                                        // 64  // 72
 * Sets up default allow functions for the collections and types.                                          // 65  // 73
 * @param   {Array(Mongo.Collection)} collections Array of Mongo.Collection instances                      // 66  // 74
 * @param   {Array(String)}           types       Array of types ("insert", "update", "remove")            // 67  // 75
 */                                                                                                        // 68  // 76
ensureDefaultAllow = function ensureDefaultAllow(collections, types) {                                     // 69  // 77
  ensureCreated("allow", collections, types, [], function () {                                             // 70  // 78
    return true;                                                                                           // 71  // 79
  });                                                                                                      // 72  // 80
};                                                                                                         // 73  // 81
                                                                                                           // 74  // 82
/**                                                                                                        // 75  // 83
 * Return only those rules that apply to the given collection and operation type                           // 76  // 84
 */                                                                                                        // 77  // 85
getRulesForCollectionAndType = function getRulesForCollectionAndType(collectionName, type) {               // 78  // 86
  var rules = rulesByCollection[collectionName] || [];                                                     // 79  // 87
  return _.select(rules, function (rule) {                                                                 // 80  // 88
    return _.contains(rule._types, type);                                                                  // 81  // 89
  });                                                                                                      // 82  // 90
};                                                                                                         // 83  // 91
                                                                                                           // 84  // 92
computeChangedFieldsFromModifier = function computeChangedFieldsFromModifier(modifier) {                   // 85  // 93
  var fields = [];                                                                                         // 86  // 94
  // This is the same logic Meteor's mongo package uses in                                                 // 87  // 95
  // https://github.com/meteor/meteor/blob/devel/packages/mongo/collection.js                              // 88  // 96
  _.each(modifier, function (params) {                                                                     // 89  // 97
    _.each(_.keys(params), function (field) {                                                              // 90  // 98
      // treat dotted fields as if they are replacing their                                                // 91  // 99
      // top-level part                                                                                    // 92  // 100
      if (field.indexOf('.') !== -1)                                                                       // 93  // 101
        field = field.substring(0, field.indexOf('.'));                                                    // 94  // 102
                                                                                                           // 95  // 103
      // record the field we are trying to change                                                          // 96  // 104
      if (!_.contains(fields, field))                                                                      // 97  // 105
        fields.push(field);                                                                                // 98  // 106
    });                                                                                                    // 99  // 107
  });                                                                                                      // 100
  return fields;                                                                                           // 101
};                                                                                                         // 102
                                                                                                           // 103
getCollectionName = function getCollectionName(collection) {                                               // 104
  // CollectionFS has underlying collection on `files` property                                            // 105
  return collection._name || (collection.files && collection.files._name);                                 // 106
};                                                                                                         // 107
                                                                                                           // 108
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 117
                                                                                                                  // 118
}).call(this);                                                                                                    // 119
                                                                                                                  // 120
                                                                                                                  // 121
                                                                                                                  // 122
                                                                                                                  // 123
                                                                                                                  // 124
                                                                                                                  // 125
(function(){                                                                                                      // 126
                                                                                                                  // 127
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 128
//                                                                                                         //     // 129
// packages/ongoworks_security/lib/server/security-deny.js                                                 //     // 130
//                                                                                                         //     // 131
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 132
                                                                                                           //     // 133
/*                                                                                                         // 1   // 134
 * A single deny function runs all the deny functions registered by this package, allowing us to have      // 2   // 135
 * an OR relationship among multiple security rule chains.                                                 // 3   // 136
 */                                                                                                        // 4   // 137
                                                                                                           // 5   // 138
allRulesPass = function allRulesPass(collection, type, args) {                                             // 6   // 139
  // select only those rules that apply to this operation type                                             // 7   // 140
  var rules = getRulesForCollectionAndType(getCollectionName(collection), type);                           // 8   // 141
                                                                                                           // 9   // 142
  // Loop through all defined rules for this collection. There is an OR relationship among                 // 10  // 143
  // all rules for the collection, so if any do NOT return true, we allow.                                 // 11  // 144
  return !_.every(rules, function (rule) {                                                                 // 12  // 145
    return rule.deny(type, collection, args);                                                              // 13  // 146
  });                                                                                                      // 14  // 147
};                                                                                                         // 15  // 148
                                                                                                           // 16  // 149
ensureSecureDeny = function ensureSecureDeny(collections, types) {                                         // 17  // 150
  _.each(types, function (t) {                                                                             // 18  // 151
    _.each(collections, function (collection) {                                                            // 19  // 152
      ensureCreated("deny", [collection], [t], null, function () {                                         // 20  // 153
        return !allRulesPass(collection, t, _.toArray(arguments));                                         // 21  // 154
      });                                                                                                  // 22  // 155
    });                                                                                                    // 23  // 156
  });                                                                                                      // 24  // 157
};                                                                                                         // 25  // 158
                                                                                                           // 26  // 159
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 160
                                                                                                                  // 161
}).call(this);                                                                                                    // 162
                                                                                                                  // 163
                                                                                                                  // 164
                                                                                                                  // 165
                                                                                                                  // 166
                                                                                                                  // 167
                                                                                                                  // 168
(function(){                                                                                                      // 169
                                                                                                                  // 170
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 171
//                                                                                                         //     // 172
// packages/ongoworks_security/lib/server/security-api.js                                                  //     // 173
//                                                                                                         //     // 174
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 175
                                                                                                           //     // 176
// The `Security` object is exported and provides the package API                                          // 1   // 177
Security = {                                                                                               // 2   // 178
  // Putting these on the exported object allows package users to override if necessary                    // 3   // 179
  errorMessages: {                                                                                         // 4   // 180
    multipleCan: 'You may not combine more than one insert, update, or remove on a Security.can chain',    // 5   // 181
    notAllowed: 'Action not allowed',                                                                      // 6   // 182
    requiresDeny: 'Security.defineMethod requires a "deny" function',                                      // 7   // 183
    collectionsArg: 'The collections argument must be a Mongo.Collection instance or an array of them',    // 8   // 184
    noCollectionOrType: 'At a minimum, you must call permit and collections methods for a security rule.',        // 185
    updateArgs: 'The update method for Security.can requires two arguments, id and modifier'               // 10  // 186
  },                                                                                                       // 11  // 187
  Rule: function SecurityRuleConstructor(types) {                                                          // 12  // 188
    var self = this;                                                                                       // 13  // 189
                                                                                                           // 14  // 190
    if (!_.isArray(types)) {                                                                               // 15  // 191
      types = [types];                                                                                     // 16  // 192
    }                                                                                                      // 17  // 193
    self._types = types;                                                                                   // 18  // 194
    self._restrictions = [];                                                                               // 19  // 195
  },                                                                                                       // 20  // 196
  // the starting point of the chain                                                                       // 21  // 197
  permit: function permit(types) {                                                                         // 22  // 198
    return new Security.Rule(types);                                                                       // 23  // 199
  },                                                                                                       // 24  // 200
  Check: function SecurityCheckConstructor(userId) {                                                       // 25  // 201
    this.userId = userId || null;                                                                          // 26  // 202
  },                                                                                                       // 27  // 203
  can: function can(userId) {                                                                              // 28  // 204
    return new Security.Check(userId);                                                                     // 29  // 205
  },                                                                                                       // 30  // 206
  defineMethod: function securityDefineMethod(name, definition) {                                          // 31  // 207
    // Check whether a rule with the given name already exists; can't overwrite                            // 32  // 208
    if (Security.Rule.prototype[name]) {                                                                   // 33  // 209
      throw new Error('A security method with the name "' + name + '" has already been defined');          // 34  // 210
    }                                                                                                      // 35  // 211
    // Make sure the definition argument is an object that has a `deny` property                           // 36  // 212
    if (!definition || !definition.deny) {                                                                 // 37  // 213
      throw new Error(Security.errorMessages.requiresDeny);                                                // 38  // 214
    }                                                                                                      // 39  // 215
    // Wrap transform, if provided                                                                         // 40  // 216
    if (definition.transform) {                                                                            // 41  // 217
      definition.transform = LocalCollection.wrapTransform(definition.transform);                          // 42  // 218
    }                                                                                                      // 43  // 219
    Security.Rule.prototype[name] = function (arg) {                                                       // 44  // 220
      var self = this;                                                                                     // 45  // 221
      self._restrictions.push({                                                                            // 46  // 222
        definition: definition,                                                                            // 47  // 223
        arg: arg                                                                                           // 48  // 224
      });                                                                                                  // 49  // 225
      return self;                                                                                         // 50  // 226
    };                                                                                                     // 51  // 227
  }                                                                                                        // 52  // 228
};                                                                                                         // 53  // 229
                                                                                                           // 54  // 230
// Security.Rule prototypes                                                                                // 55  // 231
Security.Rule.prototype.collections = function (collections) {                                             // 56  // 232
  var self = this;                                                                                         // 57  // 233
  // Make sure the `collections` argument is either a `Mongo.Collection` instance or                       // 58  // 234
  // an array of them. If it's a single collection, convert it to a one-item array.                        // 59  // 235
  if (!_.isArray(collections)) collections = [collections];                                                // 60  // 236
                                                                                                           // 61  // 237
  // Keep list keyed by collection name                                                                    // 62  // 238
  _.each(collections, function (collection) {                                                              // 63  // 239
    if (!(collection instanceof Mongo.Collection) &&                                                       // 64  // 240
        // CollectionFS has underlying collection on `files` property                                      // 65  // 241
       !(collection.files instanceof Mongo.Collection)) {                                                  // 66  // 242
      throw new Error(Security.errorMessages.collectionsArg);                                              // 67  // 243
    }                                                                                                      // 68  // 244
    // CollectionFS has underlying collection on `files` property                                          // 69  // 245
    var n = getCollectionName(collection);                                                                 // 70  // 246
    rulesByCollection[n] = rulesByCollection[n] || [];                                                     // 71  // 247
    rulesByCollection[n].push(self);                                                                       // 72  // 248
  });                                                                                                      // 73  // 249
                                                                                                           // 74  // 250
  self._collections = collections;                                                                         // 75  // 251
                                                                                                           // 76  // 252
  return self;                                                                                             // 77  // 253
};                                                                                                         // 78  // 254
                                                                                                           // 79  // 255
Security.Rule.prototype.apply = function () {                                                              // 80  // 256
  var self = this;                                                                                         // 81  // 257
                                                                                                           // 82  // 258
  if (!self._collections || !self._types) {                                                                // 83  // 259
    throw new Error(Security.errorMessages.noCollectionOrType);                                            // 84  // 260
  }                                                                                                        // 85  // 261
                                                                                                           // 86  // 262
  // If we haven't yet done so, set up a default, permissive `allow` function for all of                   // 87  // 263
  // the given collections and types. We control all security through `deny` functions only, but           // 88  // 264
  // there must first be at least one `allow` function for each collection or all writes                   // 89  // 265
  // will be denied.                                                                                       // 90  // 266
  ensureDefaultAllow(self._collections, self._types);                                                      // 91  // 267
                                                                                                           // 92  // 268
  // We need a combined `fetch` array. The `fetch` is optional and can be either an array                  // 93  // 269
  // or a function that takes the argument passed to the restriction method and returns an array.          // 94  // 270
  // TODO for now we can't set fetch accurately; maybe need to adjust API so that we "apply" only          // 95  // 271
  // after we've defined all rules                                                                         // 96  // 272
  //var fetch = [];                                                                                        // 97  // 273
  //_.each(self._restrictions, function (restriction) {                                                    // 98  // 274
  //  if (_.isArray(restriction.definition.fetch)) {                                                       // 99  // 275
  //    fetch = fetch.concat(restriction.definition.fetch);                                                // 100
  //  } else if (typeof restriction.definition.fetch === "function") {                                     // 101
  //    fetch = fetch.concat(restriction.definition.fetch(restriction.arg));                               // 102
  //  }                                                                                                    // 103
  //});                                                                                                    // 104
                                                                                                           // 105
  ensureSecureDeny(self._collections, self._types);                                                        // 106
                                                                                                           // 107
};                                                                                                         // 108
                                                                                                           // 109
Security.Rule.prototype.deny = function (type, collection, args) {                                         // 110
  var self = this;                                                                                         // 111
  // Loop through all defined restrictions. Restrictions are additive for this chained                     // 112
  // rule, so if any deny function returns true, this function should return true.                         // 113
  return _.any(self._restrictions, function (restriction) {                                                // 114
    var doc, transform = restriction.definition.transform;                                                 // 115
                                                                                                           // 116
    // If transform is a function, apply that                                                              // 117
    if (typeof transform === 'function') {                                                                 // 118
      if (type === 'insert') {                                                                             // 119
        doc = EJSON.clone(args[1]);                                                                        // 120
        // The wrapped transform requires an _id, but we                                                   // 121
        // don't have access to the generatedId from Meteor API,                                           // 122
        // so we'll fudge one and then remove it.                                                          // 123
        doc._id = Random.id();                                                                             // 124
      } else {                                                                                             // 125
        doc = args[1];                                                                                     // 126
      }                                                                                                    // 127
      args[1] = transform(doc);                                                                            // 128
      if (type === 'insert') {                                                                             // 129
        delete args[1]._id;                                                                                // 130
      }                                                                                                    // 131
    }                                                                                                      // 132
                                                                                                           // 133
    // If not transform: null, apply the collection transform                                              // 134
    else if (transform !== null && typeof collection._transform === 'function') {                          // 135
      if (type === 'insert') {                                                                             // 136
        doc = EJSON.clone(args[1]);                                                                        // 137
        // The wrapped transform requires an _id, but we                                                   // 138
        // don't have access to the generatedId from Meteor API,                                           // 139
        // so we'll fudge one and then remove it.                                                          // 140
        doc._id = Random.id();                                                                             // 141
      } else {                                                                                             // 142
        doc = args[1];                                                                                     // 143
      }                                                                                                    // 144
      args[1] = collection._transform(doc);                                                                // 145
      if (type === 'insert') {                                                                             // 146
        delete args[1]._id;                                                                                // 147
      }                                                                                                    // 148
    }                                                                                                      // 149
                                                                                                           // 150
    return restriction.definition.deny.apply(this, [type, restriction.arg].concat(args));                  // 151
  });                                                                                                      // 152
};                                                                                                         // 153
                                                                                                           // 154
Mongo.Collection.prototype.permit = function (types) {                                                     // 155
  return Security.permit(types).collections(this);                                                         // 156
};                                                                                                         // 157
                                                                                                           // 158
// Security.Check prototypes                                                                               // 159
Security.Check.prototype.for = function (collection) {                                                     // 160
  var self = this;                                                                                         // 161
  self.collection = collection;                                                                            // 162
  return self;                                                                                             // 163
};                                                                                                         // 164
                                                                                                           // 165
['insert', 'update', 'remove'].forEach(function (type) {                                                   // 166
  Security.Check.prototype[type] = function () {                                                           // 167
    var self = this;                                                                                       // 168
    if (self.type) throw new Error(Security.errorMessages.multipleCan);                                    // 169
    self.type = type;                                                                                      // 170
    self.args = _.toArray(arguments);                                                                      // 171
    // Compute and add fields argument for update type                                                     // 172
    if (type === 'update') {                                                                               // 173
      if (self.args.length !== 2) throw new Error(Security.errorMessages.updateArgs);                      // 174
      self.args = [                                                                                        // 175
        self.args[0],                                                                                      // 176
        computeChangedFieldsFromModifier(self.args[1]),                                                    // 177
        self.args[1]                                                                                       // 178
      ];                                                                                                   // 179
    }                                                                                                      // 180
    return self;                                                                                           // 181
  };                                                                                                       // 182
});                                                                                                        // 183
                                                                                                           // 184
// Security.can(userId).insert(doc).for(MyCollection).check()                                              // 185
// Security.can(userId).update(id, modifier).for(MyCollection).check()                                     // 186
// Security.can(userId).remove(id).for(MyCollection).check()                                               // 187
Security.Check.prototype.check = function () {                                                             // 188
  var self = this;                                                                                         // 189
  return allRulesPass(self.collection, self.type, [self.userId].concat(self.args));                        // 190
};                                                                                                         // 191
                                                                                                           // 192
// Security.can(userId).insert(doc).for(MyCollection).throw()                                              // 193
// Security.can(userId).update(id, modifier).for(MyCollection).throw()                                     // 194
// Security.can(userId).remove(id).for(MyCollection).throw()                                               // 195
Security.Check.prototype.throw = function () {                                                             // 196
  if (!this.check()) throw new Meteor.Error('access-denied', Security.errorMessages.notAllowed);           // 197
};                                                                                                         // 198
                                                                                                           // 199
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 376
                                                                                                                  // 377
}).call(this);                                                                                                    // 378
                                                                                                                  // 379
                                                                                                                  // 380
                                                                                                                  // 381
                                                                                                                  // 382
                                                                                                                  // 383
                                                                                                                  // 384
(function(){                                                                                                      // 385
                                                                                                                  // 386
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 387
//                                                                                                         //     // 388
// packages/ongoworks_security/lib/security-rules.js                                                       //     // 389
//                                                                                                         //     // 390
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 391
                                                                                                           //     // 392
/*                                                                                                         // 1   // 393
 * This file defines built-in restriction methods                                                          // 2   // 394
 */                                                                                                        // 3   // 395
                                                                                                           // 4   // 396
/*                                                                                                         // 5   // 397
 * No one                                                                                                  // 6   // 398
 */                                                                                                        // 7   // 399
                                                                                                           // 8   // 400
Security.defineMethod("never", {                                                                           // 9   // 401
  fetch: [],                                                                                               // 10  // 402
  transform: null,                                                                                         // 11  // 403
  deny: function () {                                                                                      // 12  // 404
    return true;                                                                                           // 13  // 405
  }                                                                                                        // 14  // 406
});                                                                                                        // 15  // 407
                                                                                                           // 16  // 408
/*                                                                                                         // 17  // 409
 * Logged In                                                                                               // 18  // 410
 */                                                                                                        // 19  // 411
                                                                                                           // 20  // 412
Security.defineMethod("ifLoggedIn", {                                                                      // 21  // 413
  fetch: [],                                                                                               // 22  // 414
  transform: null,                                                                                         // 23  // 415
  deny: function (type, arg, userId) {                                                                     // 24  // 416
    return !userId;                                                                                        // 25  // 417
  }                                                                                                        // 26  // 418
});                                                                                                        // 27  // 419
                                                                                                           // 28  // 420
/*                                                                                                         // 29  // 421
 * Specific User ID                                                                                        // 30  // 422
 */                                                                                                        // 31  // 423
                                                                                                           // 32  // 424
Security.defineMethod("ifHasUserId", {                                                                     // 33  // 425
  fetch: [],                                                                                               // 34  // 426
  transform: null,                                                                                         // 35  // 427
  deny: function (type, arg, userId) {                                                                     // 36  // 428
    return userId !== arg;                                                                                 // 37  // 429
  }                                                                                                        // 38  // 430
});                                                                                                        // 39  // 431
                                                                                                           // 40  // 432
/*                                                                                                         // 41  // 433
 * Specific Roles                                                                                          // 42  // 434
 */                                                                                                        // 43  // 435
                                                                                                           // 44  // 436
/*                                                                                                         // 45  // 437
 * alanning:roles support                                                                                  // 46  // 438
 */                                                                                                        // 47  // 439
if (Package && Package["alanning:roles"]) {                                                                // 48  // 440
                                                                                                           // 49  // 441
  var Roles = Package["alanning:roles"].Roles;                                                             // 50  // 442
                                                                                                           // 51  // 443
  Security.defineMethod("ifHasRole", {                                                                     // 52  // 444
    fetch: [],                                                                                             // 53  // 445
    transform: null,                                                                                       // 54  // 446
    deny: function (type, arg, userId) {                                                                   // 55  // 447
      if (!arg) {                                                                                          // 56  // 448
        throw new Error('ifHasRole security rule method requires an argument');                            // 57  // 449
      }                                                                                                    // 58  // 450
      if (arg.role) {                                                                                      // 59  // 451
        return !Roles.userIsInRole(userId, arg.role, arg.group);                                           // 60  // 452
      } else {                                                                                             // 61  // 453
        return !Roles.userIsInRole(userId, arg);                                                           // 62  // 454
      }                                                                                                    // 63  // 455
    }                                                                                                      // 64  // 456
  });                                                                                                      // 65  // 457
                                                                                                           // 66  // 458
}                                                                                                          // 67  // 459
                                                                                                           // 68  // 460
/*                                                                                                         // 69  // 461
 * nicolaslopezj:roles support                                                                             // 70  // 462
 * Note: doesn't support groups                                                                            // 71  // 463
 */                                                                                                        // 72  // 464
if (Package && Package["nicolaslopezj:roles"]) {                                                           // 73  // 465
                                                                                                           // 74  // 466
  var Roles = Package["nicolaslopezj:roles"].Roles;                                                        // 75  // 467
                                                                                                           // 76  // 468
  Security.defineMethod("ifHasRole", {                                                                     // 77  // 469
    fetch: [],                                                                                             // 78  // 470
    transform: null,                                                                                       // 79  // 471
    deny: function (type, arg, userId) {                                                                   // 80  // 472
      if (!arg) {                                                                                          // 81  // 473
        throw new Error('ifHasRole security rule method requires an argument');                            // 82  // 474
      }                                                                                                    // 83  // 475
      return !Roles.userHasRole(userId, arg);                                                              // 84  // 476
    }                                                                                                      // 85  // 477
  });                                                                                                      // 86  // 478
                                                                                                           // 87  // 479
}                                                                                                          // 88  // 480
                                                                                                           // 89  // 481
/*                                                                                                         // 90  // 482
 * Specific Properties                                                                                     // 91  // 483
 */                                                                                                        // 92  // 484
                                                                                                           // 93  // 485
Security.defineMethod("onlyProps", {                                                                       // 94  // 486
  fetch: [],                                                                                               // 95  // 487
  transform: null,                                                                                         // 96  // 488
  deny: function (type, arg, userId, doc, fieldNames) {                                                    // 97  // 489
    if (!_.isArray(arg)) {                                                                                 // 98  // 490
      arg = [arg];                                                                                         // 99  // 491
    }                                                                                                      // 100
                                                                                                           // 101
    fieldNames = fieldNames || _.keys(doc);                                                                // 102
                                                                                                           // 103
    return !_.every(fieldNames, function (fieldName) {                                                     // 104
      return _.contains(arg, fieldName);                                                                   // 105
    });                                                                                                    // 106
  }                                                                                                        // 107
});                                                                                                        // 108
                                                                                                           // 109
Security.defineMethod("exceptProps", {                                                                     // 110
  fetch: [],                                                                                               // 111
  transform: null,                                                                                         // 112
  deny: function (type, arg, userId, doc, fieldNames) {                                                    // 113
    if (!_.isArray(arg)) {                                                                                 // 114
      arg = [arg];                                                                                         // 115
    }                                                                                                      // 116
                                                                                                           // 117
    fieldNames = fieldNames || _.keys(doc);                                                                // 118
                                                                                                           // 119
    return _.any(fieldNames, function (fieldName) {                                                        // 120
      return _.contains(arg, fieldName);                                                                   // 121
    });                                                                                                    // 122
  }                                                                                                        // 123
});                                                                                                        // 124
                                                                                                           // 125
/////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 518
                                                                                                                  // 519
}).call(this);                                                                                                    // 520
                                                                                                                  // 521
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['ongoworks:security'] = {
  Security: Security
};

})();

//# sourceMappingURL=ongoworks_security.js.map
