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
var _s = Package['mrt:underscore-string-latest']._s;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var __coffeescriptShare;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/kaptron_minimongoid/lib/relation.coffee.js                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,                                                                                        //
  slice = [].slice;                                                                                                   //
                                                                                                                      //
this.Relation = (function(superClass) {                                                                               // 1
  extend(Relation, superClass);                                                                                       //
                                                                                                                      //
  function Relation() {                                                                                               //
    var args, klass;                                                                                                  // 3
    klass = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];                               //
    this.klass = klass;                                                                                               //
    this.elems = args;                                                                                                //
    this.selector = {};                                                                                               //
    this.push.apply(this, args);                                                                                      //
  }                                                                                                                   //
                                                                                                                      //
  Relation["new"] = function() {                                                                                      //
    var args, klass;                                                                                                  // 9
    klass = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];                               //
    return (function(func, args, ctor) {                                                                              //
      ctor.prototype = func.prototype;                                                                                //
      var child = new ctor, result = func.apply(child, args);                                                         //
      return Object(result) === result ? result : child;                                                              //
    })(this, [klass].concat(slice.call(args)), function(){});                                                         //
  };                                                                                                                  //
                                                                                                                      //
  Relation.prototype.toArray = function() {                                                                           //
    return this.elems;                                                                                                //
  };                                                                                                                  //
                                                                                                                      //
  Relation.prototype.relationClass = function() {                                                                     //
    return this.klass;                                                                                                //
  };                                                                                                                  //
                                                                                                                      //
  Relation.prototype.setQuery = function(selector) {                                                                  //
    if (selector == null) {                                                                                           //
      selector = {};                                                                                                  //
    }                                                                                                                 //
    return this.selector = selector;                                                                                  //
  };                                                                                                                  //
                                                                                                                      //
  Relation.prototype.create = function(attr) {                                                                        //
    this.selector || (this.selector = {});                                                                            //
    return this.klass.create(_.extend(this.selector, attr));                                                          //
  };                                                                                                                  //
                                                                                                                      //
  return Relation;                                                                                                    //
                                                                                                                      //
})(Array);                                                                                                            //
                                                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/kaptron_minimongoid/lib/has_many_relation.coffee.js                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,                                                                                        //
  slice = [].slice;                                                                                                   //
                                                                                                                      //
this.HasManyRelation = (function(superClass) {                                                                        // 1
  extend(HasManyRelation, superClass);                                                                                //
                                                                                                                      //
  function HasManyRelation() {                                                                                        //
    var args, foreign_key, id, klass;                                                                                 // 3
    klass = arguments[0], foreign_key = arguments[1], id = arguments[2], args = 4 <= arguments.length ? slice.call(arguments, 3) : [];
    this.link = {};                                                                                                   //
    this.link[foreign_key] = id;                                                                                      //
    this.foreign_key = foreign_key;                                                                                   //
    HasManyRelation.__super__.constructor.apply(this, [klass].concat(slice.call(args)));                              //
  }                                                                                                                   //
                                                                                                                      //
  HasManyRelation["new"] = function() {                                                                               //
    var args, foreign_key, id, klass;                                                                                 // 9
    klass = arguments[0], foreign_key = arguments[1], id = arguments[2], args = 4 <= arguments.length ? slice.call(arguments, 3) : [];
    return (function(func, args, ctor) {                                                                              //
      ctor.prototype = func.prototype;                                                                                //
      var child = new ctor, result = func.apply(child, args);                                                         //
      return Object(result) === result ? result : child;                                                              //
    })(this, [klass, foreign_key, id].concat(slice.call(args)), function(){});                                        //
  };                                                                                                                  //
                                                                                                                      //
  HasManyRelation.fromRelation = function(relation, foreign_key, id) {                                                //
    return (function(func, args, ctor) {                                                                              //
      ctor.prototype = func.prototype;                                                                                //
      var child = new ctor, result = func.apply(child, args);                                                         //
      return Object(result) === result ? result : child;                                                              //
    })(this, [relation.relationClass(), foreign_key, id].concat(slice.call(relation.toArray())), function(){});       //
  };                                                                                                                  //
                                                                                                                      //
  HasManyRelation.prototype.create = function(attr) {                                                                 //
    return HasManyRelation.__super__.create.call(this, _.extend(attr, this.link));                                    //
  };                                                                                                                  //
                                                                                                                      //
  return HasManyRelation;                                                                                             //
                                                                                                                      //
})(this.Relation);                                                                                                    //
                                                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/kaptron_minimongoid/lib/has_and_belongs_to_many_relation.coffee.js                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,                                                                                        //
  slice = [].slice;                                                                                                   //
                                                                                                                      //
this.HasAndBelongsToManyRelation = (function(superClass) {                                                            // 1
  extend(HasAndBelongsToManyRelation, superClass);                                                                    //
                                                                                                                      //
  function HasAndBelongsToManyRelation() {                                                                            //
    var args, id, identifier, instance, inverse_identifier, klass;                                                    // 3
    instance = arguments[0], klass = arguments[1], identifier = arguments[2], inverse_identifier = arguments[3], id = arguments[4], args = 6 <= arguments.length ? slice.call(arguments, 5) : [];
    this.instance = instance;                                                                                         //
    this.inverse_identifier = inverse_identifier;                                                                     //
    this.link = {};                                                                                                   //
    this.link[identifier] = [id];                                                                                     //
    HasAndBelongsToManyRelation.__super__.constructor.apply(this, [klass].concat(slice.call(args)));                  //
  }                                                                                                                   //
                                                                                                                      //
  HasAndBelongsToManyRelation["new"] = function() {                                                                   //
    var args, id, identifier, instance, inverse_identifier, klass;                                                    // 10
    instance = arguments[0], klass = arguments[1], identifier = arguments[2], inverse_identifier = arguments[3], id = arguments[4], args = 6 <= arguments.length ? slice.call(arguments, 5) : [];
    return (function(func, args, ctor) {                                                                              //
      ctor.prototype = func.prototype;                                                                                //
      var child = new ctor, result = func.apply(child, args);                                                         //
      return Object(result) === result ? result : child;                                                              //
    })(this, [instance, klass, identifier, inverse_identifier, id].concat(slice.call(args)), function(){});           //
  };                                                                                                                  //
                                                                                                                      //
  HasAndBelongsToManyRelation.fromRelation = function(relation, instance, identifier, inverse_identifier, id) {       //
    return (function(func, args, ctor) {                                                                              //
      ctor.prototype = func.prototype;                                                                                //
      var child = new ctor, result = func.apply(child, args);                                                         //
      return Object(result) === result ? result : child;                                                              //
    })(this, [instance, relation.relationClass(), identifier, inverse_identifier, id].concat(slice.call(relation.toArray())), function(){});
  };                                                                                                                  //
                                                                                                                      //
  HasAndBelongsToManyRelation.prototype.create = function(attr) {                                                     //
    var obj;                                                                                                          // 16
    obj = HasAndBelongsToManyRelation.__super__.create.call(this, _.extend(attr, this.link));                         //
    attr = {};                                                                                                        //
    if (this.instance[this.inverse_identifier].length === 0) {                                                        //
      attr[this.inverse_identifier] = [obj.id];                                                                       //
      this.instance.update(attr);                                                                                     //
    } else {                                                                                                          //
      this.instance.push(attr);                                                                                       //
    }                                                                                                                 //
    return obj;                                                                                                       //
  };                                                                                                                  //
                                                                                                                      //
  return HasAndBelongsToManyRelation;                                                                                 //
                                                                                                                      //
})(this.Relation);                                                                                                    //
                                                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/kaptron_minimongoid/lib/minimongoid.coffee.js                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var global,                                                                                                           // 1
  hasProp = {}.hasOwnProperty,                                                                                        //
  slice = [].slice;                                                                                                   //
                                                                                                                      //
global = this;                                                                                                        // 1
                                                                                                                      //
this.Minimongoid = (function() {                                                                                      // 3
  Minimongoid.prototype.id = void 0;                                                                                  //
                                                                                                                      //
  Minimongoid.prototype.errors = false;                                                                               //
                                                                                                                      //
  function Minimongoid(attr, parent, is_new) {                                                                        //
    if (attr == null) {                                                                                               //
      attr = {};                                                                                                      //
    }                                                                                                                 //
    if (parent == null) {                                                                                             //
      parent = null;                                                                                                  //
    }                                                                                                                 //
    if (is_new == null) {                                                                                             //
      is_new = true;                                                                                                  //
    }                                                                                                                 //
    this.__is_new = !!is_new;                                                                                         //
    if (attr._id) {                                                                                                   //
      if (this.constructor._object_id) {                                                                              //
        this.id = attr._id._str;                                                                                      //
      } else {                                                                                                        //
        this.id = attr._id;                                                                                           //
      }                                                                                                               //
      this._id = this.id;                                                                                             //
    }                                                                                                                 //
    this.initAttrsAndRelations(attr, parent);                                                                         //
  }                                                                                                                   //
                                                                                                                      //
  Minimongoid.prototype.initAttrsAndRelations = function(attr, parent) {                                              //
    var belongs_to, class_name, embeds_many, foreign_key, habtm, has_many, has_one, identifier, j, l, len, len1, len2, len3, len4, len5, m, n, name, name1, o, p, ref, ref1, ref2, ref3, ref4, ref5, ref6, relation, results, selector, self, val, value;
    if (attr == null) {                                                                                               //
      attr = {};                                                                                                      //
    }                                                                                                                 //
    if (parent == null) {                                                                                             //
      parent = null;                                                                                                  //
    }                                                                                                                 //
    ref = this.constructor.has_and_belongs_to_many;                                                                   // 24
    for (j = 0, len = ref.length; j < len; j++) {                                                                     // 24
      habtm = ref[j];                                                                                                 //
      identifier = (_.singularize(habtm.name)) + "_ids";                                                              //
      this[identifier] || (this[identifier] = []);                                                                    //
    }                                                                                                                 // 24
    ref1 = this.constructor.embeds_many;                                                                              // 29
    for (l = 0, len1 = ref1.length; l < len1; l++) {                                                                  // 29
      embeds_many = ref1[l];                                                                                          //
      this[name1 = embeds_many.name] || (this[name1] = []);                                                           //
    }                                                                                                                 // 29
    if (this.constructor.embedded_in && parent) {                                                                     //
      this[this.constructor.embedded_in] = parent;                                                                    //
    }                                                                                                                 //
    for (name in attr) {                                                                                              // 37
      value = attr[name];                                                                                             //
      if (name.match(/^_id/)) {                                                                                       //
        continue;                                                                                                     // 38
      }                                                                                                               //
      if (name.match(/_id$/) && (value instanceof Meteor.Collection.ObjectID)) {                                      //
        this[name] = value._str;                                                                                      //
      } else if ((embeds_many = _.findWhere(this.constructor.embeds_many, {                                           //
        name: name                                                                                                    //
      }))) {                                                                                                          //
        class_name = embeds_many.class_name || _.classify(_.singularize(name));                                       //
        this[name] = global[class_name].modelize(value, this);                                                        //
      } else {                                                                                                        //
        this[name] = value;                                                                                           //
      }                                                                                                               //
    }                                                                                                                 // 37
    ref2 = this.constructor.defaults;                                                                                 // 50
    for (attr in ref2) {                                                                                              // 50
      if (!hasProp.call(ref2, attr)) continue;                                                                        //
      val = ref2[attr];                                                                                               //
      if (typeof this[attr] === 'undefined') {                                                                        //
        this[attr] = val;                                                                                             //
      }                                                                                                               //
    }                                                                                                                 // 50
    self = this;                                                                                                      //
    ref3 = this.constructor.belongs_to;                                                                               // 57
    for (m = 0, len2 = ref3.length; m < len2; m++) {                                                                  // 57
      belongs_to = ref3[m];                                                                                           //
      relation = belongs_to.name;                                                                                     //
      identifier = belongs_to.identifier || (relation + "_id");                                                       //
      class_name = belongs_to.class_name || _.titleize(relation);                                                     //
      this[relation] = (function(relation, identifier, class_name) {                                                  //
        return function(options) {                                                                                    //
          if (options == null) {                                                                                      //
            options = {};                                                                                             //
          }                                                                                                           //
          if (global[class_name] && self[identifier]) {                                                               //
            return global[class_name].find(self[identifier], options);                                                // 67
          } else {                                                                                                    //
            return false;                                                                                             // 69
          }                                                                                                           //
        };                                                                                                            //
      })(relation, identifier, class_name);                                                                           //
    }                                                                                                                 // 57
    ref4 = this.constructor.has_many;                                                                                 // 73
    for (n = 0, len3 = ref4.length; n < len3; n++) {                                                                  // 73
      has_many = ref4[n];                                                                                             //
      relation = has_many.name;                                                                                       //
      selector = {};                                                                                                  //
      if (!(foreign_key = has_many.foreign_key)) {                                                                    //
        foreign_key = (_.singularize(this.constructor.to_s().toLowerCase())) + "_id";                                 //
      }                                                                                                               //
      if (this.constructor._object_id) {                                                                              //
        selector[foreign_key] = new Meteor.Collection.ObjectID(this.id);                                              //
      } else {                                                                                                        //
        selector[foreign_key] = this.id;                                                                              //
      }                                                                                                               //
      class_name = has_many.class_name || _.titleize(_.singularize(relation));                                        //
      this[relation] = (function(relation, selector, class_name) {                                                    //
        return function(mod_selector, options) {                                                                      //
          if (mod_selector == null) {                                                                                 //
            mod_selector = {};                                                                                        //
          }                                                                                                           //
          if (options == null) {                                                                                      //
            options = {};                                                                                             //
          }                                                                                                           //
          mod_selector = _.extend(mod_selector, selector);                                                            //
          if (global[class_name]) {                                                                                   //
            return HasManyRelation.fromRelation(global[class_name].where(mod_selector, options), foreign_key, this.id);
          }                                                                                                           //
        };                                                                                                            //
      })(relation, selector, class_name);                                                                             //
    }                                                                                                                 // 73
    ref5 = this.constructor.has_one;                                                                                  // 94
    for (o = 0, len4 = ref5.length; o < len4; o++) {                                                                  // 94
      has_one = ref5[o];                                                                                              //
      relation = has_one.name;                                                                                        //
      selector = {};                                                                                                  //
      if (!(foreign_key = has_one.foreign_key)) {                                                                     //
        foreign_key = (_.singularize(this.constructor.to_s().toLowerCase())) + "_id";                                 //
      }                                                                                                               //
      if (this.constructor._object_id) {                                                                              //
        selector[foreign_key] = new Meteor.Collection.ObjectID(this.id);                                              //
      } else {                                                                                                        //
        selector[foreign_key] = this.id;                                                                              //
      }                                                                                                               //
      class_name = has_one.class_name || _.titleize(relation);                                                        //
      this[relation] = (function(relation, selector, class_name) {                                                    //
        return function(mod_selector, options) {                                                                      //
          if (mod_selector == null) {                                                                                 //
            mod_selector = {};                                                                                        //
          }                                                                                                           //
          if (options == null) {                                                                                      //
            options = {};                                                                                             //
          }                                                                                                           //
          mod_selector = _.extend(mod_selector, selector);                                                            //
          if (global[class_name]) {                                                                                   //
            return global[class_name].first(mod_selector, options);                                                   //
          }                                                                                                           //
        };                                                                                                            //
      })(relation, selector, class_name);                                                                             //
    }                                                                                                                 // 94
    ref6 = this.constructor.has_and_belongs_to_many;                                                                  // 115
    results = [];                                                                                                     // 115
    for (p = 0, len5 = ref6.length; p < len5; p++) {                                                                  //
      habtm = ref6[p];                                                                                                //
      relation = habtm.name;                                                                                          //
      identifier = (_.singularize(relation)) + "_ids";                                                                //
      class_name = habtm.class_name || _.titleize(_.singularize(relation));                                           //
      results.push(this[relation] = (function(relation, identifier, class_name) {                                     //
        return function(mod_selector, options) {                                                                      //
          var filter, instance, inverse, inverse_identifier;                                                          // 122
          if (mod_selector == null) {                                                                                 //
            mod_selector = {};                                                                                        //
          }                                                                                                           //
          if (options == null) {                                                                                      //
            options = {};                                                                                             //
          }                                                                                                           //
          selector = {                                                                                                //
            _id: {                                                                                                    //
              $in: self[identifier]                                                                                   //
            }                                                                                                         //
          };                                                                                                          //
          mod_selector = _.extend(mod_selector, selector);                                                            //
          instance = global[class_name].init();                                                                       //
          filter = function(r) {                                                                                      //
            name = r.class_name || _.titleize(_.singularize(r.name));                                                 //
            return global[name] === this.constructor;                                                                 //
          };                                                                                                          //
          inverse = _.find(instance.constructor.has_and_belongs_to_many, filter, this);                               //
          inverse_identifier = (_.singularize(inverse.name)) + "_ids";                                                //
          if (global[class_name] && self[identifier] && self[identifier].length) {                                    //
            relation = global[class_name].where(mod_selector, options);                                               //
            return HasAndBelongsToManyRelation.fromRelation(relation, this, inverse_identifier, identifier, this.id);
          } else {                                                                                                    //
            return HasAndBelongsToManyRelation["new"](this, global[class_name], inverse_identifier, identifier, this.id);
          }                                                                                                           //
        };                                                                                                            //
      })(relation, identifier, class_name));                                                                          //
    }                                                                                                                 // 115
    return results;                                                                                                   //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid.prototype.r = function(relation) {                                                                      //
    return this.related(relation);                                                                                    //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid.prototype.related = function(relation, options) {                                                       //
    var belongs_to, foreign_key, habtm, has_many, identifier, j, l, len, len1, len2, m, ref, ref1, ref2, selector;    // 152
    if (options == null) {                                                                                            //
      options = {};                                                                                                   //
    }                                                                                                                 //
    ref = this.constructor.belongs_to;                                                                                // 152
    for (j = 0, len = ref.length; j < len; j++) {                                                                     // 152
      belongs_to = ref[j];                                                                                            //
      if (relation === belongs_to.name) {                                                                             //
        identifier = belongs_to.name + "_id";                                                                         //
        if (!belongs_to.class_name) {                                                                                 //
          belongs_to.class_name = _.titleize(belongs_to.name);                                                        //
        }                                                                                                             //
        if (this[identifier]) {                                                                                       //
          return global[belongs_to.class_name].find(this[identifier], options);                                       // 160
        } else {                                                                                                      //
          return false;                                                                                               // 162
        }                                                                                                             //
      }                                                                                                               //
    }                                                                                                                 // 152
    ref1 = this.constructor.has_many;                                                                                 // 164
    for (l = 0, len1 = ref1.length; l < len1; l++) {                                                                  // 164
      has_many = ref1[l];                                                                                             //
      if (relation === has_many.name) {                                                                               //
        selector = {};                                                                                                //
        if (!(foreign_key = has_many.foreign_key)) {                                                                  //
          foreign_key = (_.singularize(this.constructor.to_s().toLowerCase())) + "_id";                               //
        }                                                                                                             //
        if (this.constructor._object_id) {                                                                            //
          selector[foreign_key] = new Meteor.Collection.ObjectID(this.id);                                            //
        } else {                                                                                                      //
          selector[foreign_key] = this.id;                                                                            //
        }                                                                                                             //
        if (!has_many.class_name) {                                                                                   //
          has_many.class_name = _.titleize(_.singularize(has_many.name));                                             //
        }                                                                                                             //
        return global[has_many.class_name].where(selector, options);                                                  // 178
      }                                                                                                               //
    }                                                                                                                 // 164
    ref2 = this.constructor.has_and_belongs_to_many;                                                                  // 180
    for (m = 0, len2 = ref2.length; m < len2; m++) {                                                                  // 180
      habtm = ref2[m];                                                                                                //
      if (relation === habtm.name) {                                                                                  //
        identifier = (_.singularize(habtm.name)) + "_ids";                                                            //
        if (!habtm.class_name) {                                                                                      //
          habtm.class_name = _.titleize(_.singularize(habtm.name));                                                   //
        }                                                                                                             //
        if (this[identifier] && this[identifier].length) {                                                            //
          return global[habtm.class_name].where({                                                                     // 187
            _id: {                                                                                                    //
              $in: this[identifier]                                                                                   //
            }                                                                                                         //
          }, options);                                                                                                //
        } else {                                                                                                      //
          return [];                                                                                                  // 189
        }                                                                                                             //
      }                                                                                                               //
    }                                                                                                                 // 180
    return console.warn("Method " + relation + " does not exist for " + (this.constructor.to_s()) + ".");             //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid.prototype.error = function(field, message) {                                                            //
    var obj;                                                                                                          // 201
    this.errors || (this.errors = []);                                                                                //
    obj = {};                                                                                                         //
    obj[field] = message;                                                                                             //
    return this.errors.push(obj);                                                                                     //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid.prototype.isValid = function(attr) {                                                                    //
    if (attr == null) {                                                                                               //
      attr = {};                                                                                                      //
    }                                                                                                                 //
    this.validate();                                                                                                  //
    return !this.errors;                                                                                              //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid.prototype.validate = function() {                                                                       //
    return true;                                                                                                      //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid.prototype.is_new = function() {                                                                         //
    return this.isNew();                                                                                              //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid.prototype.isNew = function() {                                                                          //
    return this.__is_new;                                                                                             //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid.prototype.save = function(attr, callback) {                                                             //
    var k, v;                                                                                                         // 220
    if (attr == null) {                                                                                               //
      attr = {};                                                                                                      //
    }                                                                                                                 //
    if (callback == null) {                                                                                           //
      callback = void 0;                                                                                              //
    }                                                                                                                 //
    this.errors = false;                                                                                              //
    for (k in attr) {                                                                                                 // 222
      v = attr[k];                                                                                                    //
      this[k] = v;                                                                                                    //
    }                                                                                                                 // 222
    if (this.constructor.before_save) {                                                                               //
      attr = this.constructor.before_save(attr);                                                                      //
    }                                                                                                                 //
    if (!this.isValid()) {                                                                                            //
      return this;                                                                                                    // 227
    }                                                                                                                 //
    if (callback != null) {                                                                                           //
      if (this.isNew()) {                                                                                             //
        this.constructor._collection.insert(attr, ((function(_this) {                                                 //
          return function(error, result) {                                                                            //
            if (error == null) {                                                                                      //
              _this.id = _this._id = result;                                                                          //
              _this.__is_new = false;                                                                                 //
              if (_this.constructor.after_save) {                                                                     //
                _this.constructor.after_save(_this);                                                                  //
              }                                                                                                       //
            }                                                                                                         //
            return callback(error, result);                                                                           //
          };                                                                                                          //
        })(this)));                                                                                                   //
      } else {                                                                                                        //
        this.constructor._collection.update(this.id, {                                                                //
          $set: attr                                                                                                  //
        }, ((function(_this) {                                                                                        //
          return function(error, result) {                                                                            //
            if (error == null) {                                                                                      //
              if (_this.constructor.after_save) {                                                                     //
                _this.constructor.after_save(_this);                                                                  //
              }                                                                                                       //
            }                                                                                                         //
            return callback(error, result);                                                                           //
          };                                                                                                          //
        })(this)));                                                                                                   //
      }                                                                                                               //
      return null;                                                                                                    // 252
    } else {                                                                                                          //
      if (this.isNew()) {                                                                                             //
        this.id = this._id = this.constructor._collection.insert(attr);                                               //
        this.__is_new = false;                                                                                        //
      } else {                                                                                                        //
        this.constructor._collection.update(this.id, {                                                                //
          $set: attr                                                                                                  //
        });                                                                                                           //
      }                                                                                                               //
      if (this.constructor.after_save) {                                                                              //
        this.constructor.after_save(this);                                                                            //
      }                                                                                                               //
      return this;                                                                                                    // 264
    }                                                                                                                 //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid.prototype.update = function(attr, callback) {                                                           //
    if (callback == null) {                                                                                           //
      callback = void 0;                                                                                              //
    }                                                                                                                 //
    return this.save(attr, callback);                                                                                 //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid.prototype.push = function(data) {                                                                       //
    return this.constructor._collection.update(this.id, {                                                             //
      $addToSet: data                                                                                                 //
    });                                                                                                               //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid.prototype.pull = function(data) {                                                                       //
    return this.constructor._collection.update(this.id, {                                                             //
      $pull: data                                                                                                     //
    });                                                                                                               //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid.prototype.del = function(field) {                                                                       //
    var unset;                                                                                                        // 284
    unset = {};                                                                                                       //
    unset[field] = "";                                                                                                //
    return this.constructor._collection.update(this.id, {                                                             //
      $unset: unset                                                                                                   //
    });                                                                                                               //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid.prototype.destroy = function(callback) {                                                                //
    if (callback == null) {                                                                                           //
      callback = void 0;                                                                                              //
    }                                                                                                                 //
    if (this.id != null) {                                                                                            //
      this.constructor._collection.remove(this.id, callback);                                                         //
      return this.id = this._id = null;                                                                               //
    }                                                                                                                 //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid.prototype.reload = function() {                                                                         //
    if (this.id != null) {                                                                                            //
      return this.constructor.find(this.id);                                                                          //
    }                                                                                                                 //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid._object_id = false;                                                                                     //
                                                                                                                      //
  Minimongoid._collection = void 0;                                                                                   //
                                                                                                                      //
  Minimongoid._type = void 0;                                                                                         //
                                                                                                                      //
  Minimongoid._debug = false;                                                                                         //
                                                                                                                      //
  Minimongoid.defaults = [];                                                                                          //
                                                                                                                      //
  Minimongoid.belongs_to = [];                                                                                        //
                                                                                                                      //
  Minimongoid.has_many = [];                                                                                          //
                                                                                                                      //
  Minimongoid.has_one = [];                                                                                           //
                                                                                                                      //
  Minimongoid.has_and_belongs_to_many = [];                                                                           //
                                                                                                                      //
  Minimongoid.embedded_in = null;                                                                                     //
                                                                                                                      //
  Minimongoid.embeds_many = [];                                                                                       //
                                                                                                                      //
  Minimongoid.init = function(attr, parent, is_new) {                                                                 //
    if (parent == null) {                                                                                             //
      parent = null;                                                                                                  //
    }                                                                                                                 //
    if (is_new == null) {                                                                                             //
      is_new = false;                                                                                                 //
    }                                                                                                                 //
    return new this(attr, parent, is_new);                                                                            //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid.to_s = function() {                                                                                     //
    if (this._collection) {                                                                                           //
      return this._collection._name;                                                                                  //
    } else {                                                                                                          //
      return "embedded";                                                                                              //
    }                                                                                                                 //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid.create = function(attr, callback) {                                                                     //
    var doc;                                                                                                          // 327
    if (callback == null) {                                                                                           //
      callback = void 0;                                                                                              //
    }                                                                                                                 //
    attr.createdAt || (attr.createdAt = new Date());                                                                  //
    if (this.before_create) {                                                                                         //
      attr = this.before_create(attr);                                                                                //
    }                                                                                                                 //
    doc = this.init(attr, null, true);                                                                                //
    if (callback != null) {                                                                                           //
      doc.save(attr, callback);                                                                                       //
      return null;                                                                                                    //
    } else {                                                                                                          //
      doc = doc.save(attr);                                                                                           //
      doc.initAttrsAndRelations(attr);                                                                                //
      if (doc && this.after_create) {                                                                                 //
        return this.after_create(doc);                                                                                //
      } else {                                                                                                        //
        return doc;                                                                                                   //
      }                                                                                                               //
    }                                                                                                                 //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid.where = function(selector, options) {                                                                   //
    var result, self;                                                                                                 // 344
    if (selector == null) {                                                                                           //
      selector = {};                                                                                                  //
    }                                                                                                                 //
    if (options == null) {                                                                                            //
      options = {};                                                                                                   //
    }                                                                                                                 //
    self = this;                                                                                                      //
    if (this._debug) {                                                                                                //
      console.info(" --- WHERE ---");                                                                                 //
      console.info("  " + (_.singularize(_.classify(this.to_s()))) + ".where(" + (JSON.stringify(selector)) + (!_.isEmpty(options) ? ',' + JSON.stringify(options) : '') + ")");
    }                                                                                                                 //
    result = this.find(selector, options).fetch();                                                                    //
    result = Relation["new"].apply(Relation, [self].concat(slice.call(result)));                                      //
    result.setQuery(selector);                                                                                        //
    if (this._debug && result) {                                                                                      //
      console.info("  > found " + result.length);                                                                     //
    }                                                                                                                 //
    return result;                                                                                                    //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid.first = function(selector, options) {                                                                   //
    var doc;                                                                                                          // 355
    if (selector == null) {                                                                                           //
      selector = {};                                                                                                  //
    }                                                                                                                 //
    if (options == null) {                                                                                            //
      options = {};                                                                                                   //
    }                                                                                                                 //
    if (this._debug) {                                                                                                //
      console.info(" --- FIRST ---");                                                                                 //
      console.info("  " + (_.singularize(_.classify(this.to_s()))) + ".first(" + (JSON.stringify(selector)) + (!_.isEmpty(options) ? ',' + JSON.stringify(options) : '') + ")");
    }                                                                                                                 //
    if (doc = this._collection.findOne(selector, options)) {                                                          //
      return this.init(doc);                                                                                          //
    }                                                                                                                 //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid.last = function(selector, options) {                                                                    //
    var doc;                                                                                                          // 363
    if (selector == null) {                                                                                           //
      selector = {};                                                                                                  //
    }                                                                                                                 //
    if (options == null) {                                                                                            //
      options = {};                                                                                                   //
    }                                                                                                                 //
    options.sort = {                                                                                                  //
      createdAt: -1                                                                                                   //
    };                                                                                                                //
    if (doc = this._collection.findOne(selector, options)) {                                                          //
      return this.init(doc);                                                                                          //
    }                                                                                                                 //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid.all = function(options) {                                                                               //
    if (options == null) {                                                                                            //
      options = {};                                                                                                   //
    }                                                                                                                 //
    return this.where({}, options);                                                                                   //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid.find = function(selector, options) {                                                                    //
    var self;                                                                                                         // 372
    if (selector == null) {                                                                                           //
      selector = {};                                                                                                  //
    }                                                                                                                 //
    if (options == null) {                                                                                            //
      options = {};                                                                                                   //
    }                                                                                                                 //
    self = this;                                                                                                      //
    if (!options.transform) {                                                                                         //
      options.transform = function(doc) {                                                                             //
        return self.init(doc);                                                                                        //
      };                                                                                                              //
    }                                                                                                                 //
    if (typeof selector !== 'object') {                                                                               //
      if (this._object_id) {                                                                                          //
        selector = new Meteor.Collection.ObjectID(selector);                                                          //
      }                                                                                                               //
      return this.first({                                                                                             //
        _id: selector                                                                                                 //
      }, options);                                                                                                    //
    } else if (selector instanceof Meteor.Collection.ObjectID) {                                                      //
      return this.first({                                                                                             //
        _id: selector                                                                                                 //
      }, options);                                                                                                    //
    } else {                                                                                                          //
      if (this._object_id) {                                                                                          //
        if (selector && selector._id) {                                                                               //
          if (typeof selector._id === 'string') {                                                                     //
            selector._id = new Meteor.Collection.ObjectID(selector._id);                                              //
          } else if (selector._id['$in']) {                                                                           //
            selector._id['$in'] = _.map_object_id(selector._id['$in']);                                               //
          }                                                                                                           //
        }                                                                                                             //
        if (selector && selector._ids) {                                                                              //
          selector._ids = _.map(selector._ids, function(id) {                                                         //
            return new Meteor.Collection.ObjectID(id);                                                                //
          });                                                                                                         //
        }                                                                                                             //
      }                                                                                                               //
      return this._collection.find(selector, options);                                                                //
    }                                                                                                                 //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid.count = function(selector, options) {                                                                   //
    if (selector == null) {                                                                                           //
      selector = {};                                                                                                  //
    }                                                                                                                 //
    if (options == null) {                                                                                            //
      options = {};                                                                                                   //
    }                                                                                                                 //
    return this.find(selector, options).count();                                                                      //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid.destroyAll = function(selector) {                                                                       //
    if (selector == null) {                                                                                           //
      selector = {};                                                                                                  //
    }                                                                                                                 //
    return this._collection.remove(selector);                                                                         //
  };                                                                                                                  //
                                                                                                                      //
  Minimongoid.modelize = function(cursor, parent) {                                                                   //
    var models, self;                                                                                                 // 409
    if (parent == null) {                                                                                             //
      parent = null;                                                                                                  //
    }                                                                                                                 //
    self = this;                                                                                                      //
    models = cursor.map(function(i) {                                                                                 //
      return self.init(i, parent);                                                                                    //
    });                                                                                                               //
    return Relation["new"].apply(Relation, [self].concat(slice.call(models)));                                        //
  };                                                                                                                  //
                                                                                                                      //
  return Minimongoid;                                                                                                 //
                                                                                                                      //
})();                                                                                                                 //
                                                                                                                      //
_.singularize = function(s) {                                                                                         // 416
  return s = s.replace(/s$/, "");                                                                                     //
};                                                                                                                    // 416
                                                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['kaptron:minimongoid'] = {};

})();
