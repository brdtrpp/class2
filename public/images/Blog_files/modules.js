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
var meteorInstall = Package['modules-runtime'].meteorInstall;

/* Package-scope variables */
var Buffer, process;

var require = meteorInstall({"node_modules":{"meteor":{"modules":{"client.js":["./install-packages.js","./stubs.js","./buffer.js","./process.js","reify/lib/runtime","./css",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/modules/client.js                                                //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
require("./install-packages.js");                                            // 1
require("./stubs.js");                                                       // 2
require("./buffer.js");                                                      // 3
require("./process.js");                                                     // 4
require("reify/lib/runtime").enable(module.constructor);                     // 5
                                                                             // 6
exports.addStyles = require("./css").addStyles;                              // 7
                                                                             // 8
///////////////////////////////////////////////////////////////////////////////

}],"buffer.js":["buffer",function(require){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/modules/buffer.js                                                //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
try {                                                                        // 1
  Buffer = global.Buffer || require("buffer").Buffer;                        // 2
} catch (noBuffer) {}                                                        // 3
                                                                             // 4
///////////////////////////////////////////////////////////////////////////////

}],"css.js":function(require,exports){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/modules/css.js                                                   //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
var doc = document;                                                          // 1
var head = doc.getElementsByTagName("head").item(0);                         // 2
                                                                             // 3
exports.addStyles = function (css) {                                         // 4
  var style = doc.createElement("style");                                    // 5
                                                                             // 6
  style.setAttribute("type", "text/css");                                    // 7
                                                                             // 8
  // https://msdn.microsoft.com/en-us/library/ms535871(v=vs.85).aspx         // 9
  var internetExplorerSheetObject =                                          // 10
    style.sheet || // Edge/IE11.                                             // 11
    style.styleSheet; // Older IEs.                                          // 12
                                                                             // 13
  if (internetExplorerSheetObject) {                                         // 14
    internetExplorerSheetObject.cssText = css;                               // 15
  } else {                                                                   // 16
    style.appendChild(doc.createTextNode(css));                              // 17
  }                                                                          // 18
                                                                             // 19
  return head.appendChild(style);                                            // 20
};                                                                           // 21
                                                                             // 22
///////////////////////////////////////////////////////////////////////////////

},"install-packages.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/modules/install-packages.js                                      //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
function install(name, mainModule) {                                         // 1
  var meteorDir = {};                                                        // 2
                                                                             // 3
  // Given a package name <name>, install a stub module in the               // 4
  // /node_modules/meteor directory called <name>.js, so that                // 5
  // require.resolve("meteor/<name>") will always return                     // 6
  // /node_modules/meteor/<name>.js instead of something like                // 7
  // /node_modules/meteor/<name>/index.js, in the rare but possible event    // 8
  // that the package contains a file called index.js (#6590).               // 9
                                                                             // 10
  if (mainModule) {                                                          // 11
    meteorDir[name + ".js"] = [mainModule, function (require, e, module) {   // 12
      module.exports = require(mainModule);                                  // 13
    }];                                                                      // 14
  } else {                                                                   // 15
    // back compat with old Meteor packages                                  // 16
    meteorDir[name + ".js"] = function (r, e, module) {                      // 17
      module.exports = Package[name];                                        // 18
    };                                                                       // 19
  }                                                                          // 20
                                                                             // 21
  meteorInstall({                                                            // 22
    node_modules: {                                                          // 23
      meteor: meteorDir                                                      // 24
    }                                                                        // 25
  });                                                                        // 26
}                                                                            // 27
                                                                             // 28
// This file will be modified during computeJsOutputFilesMap to include      // 29
// install(<name>) calls for every Meteor package.                           // 30
                                                                             // 31
install("underscore");                                                       // 32
install("meteor");                                                           // 33
install("tracker");                                                          // 34
install("deps");                                                             // 35
install("modules-runtime");                                                  // 36
install("modules", "meteor/modules/client.js");                              // 37
install("jquery", "meteor/jquery/main.js");                                  // 38
install("base64");                                                           // 39
install("ejson");                                                            // 40
install("check", "meteor/check/match.js");                                   // 41
install("htmljs");                                                           // 42
install("id-map");                                                           // 43
install("promise", "meteor/promise/client.js");                              // 44
install("ecmascript-runtime", "meteor/ecmascript-runtime/runtime.js");       // 45
install("babel-compiler");                                                   // 46
install("ecmascript");                                                       // 47
install("babel-runtime");                                                    // 48
install("random");                                                           // 49
install("mongo-id");                                                         // 50
install("diff-sequence");                                                    // 51
install("observe-sequence");                                                 // 52
install("reactive-var");                                                     // 53
install("blaze");                                                            // 54
install("ui");                                                               // 55
install("spacebars");                                                        // 56
install("templating");                                                       // 57
install("iron:core");                                                        // 58
install("iron:dynamic-template");                                            // 59
install("iron:layout");                                                      // 60
install("iron:url");                                                         // 61
install("iron:middleware-stack");                                            // 62
install("iron:location");                                                    // 63
install("ordered-dict");                                                     // 64
install("geojson-utils", "meteor/geojson-utils/main.js");                    // 65
install("minimongo");                                                        // 66
install("retry");                                                            // 67
install("ddp-common");                                                       // 68
install("reload");                                                           // 69
install("ddp-client");                                                       // 70
install("ddp");                                                              // 71
install("ddp-server");                                                       // 72
install("allow-deny");                                                       // 73
install("mongo");                                                            // 74
install("reactive-dict");                                                    // 75
install("iron:controller");                                                  // 76
install("iron:router");                                                      // 77
install("npm-bcrypt");                                                       // 78
install("ddp-rate-limiter");                                                 // 79
install("localstorage");                                                     // 80
install("callback-hook");                                                    // 81
install("accounts-base", "meteor/accounts-base/client_main.js");             // 82
install("sha");                                                              // 83
install("srp");                                                              // 84
install("accounts-password");                                                // 85
install("mrgalaxy:stripe");                                                  // 86
install("session");                                                          // 87
install("stylus");                                                           // 88
install("anti:i18n");                                                        // 89
install("twbs:bootstrap");                                                   // 90
install("ian:accounts-ui-bootstrap-3");                                      // 91
install("aldeed:simple-schema");                                             // 92
install("livedata");                                                         // 93
install("momentjs:moment");                                                  // 94
install("mrt:moment");                                                       // 95
install("mrt:moment-timezone");                                              // 96
install("raix:eventemitter");                                                // 97
install("aldeed:collection2-core");                                          // 98
install("aldeed:schema-index");                                              // 99
install("aldeed:schema-deny");                                               // 100
install("aldeed:collection2");                                               // 101
install("aldeed:autoform");                                                  // 102
install("aldeed:autoform-bs-datetimepicker");                                // 103
install("less");                                                             // 104
install("coffeescript");                                                     // 105
install("raix:handlebar-helpers");                                           // 106
install("html-tools");                                                       // 107
install("blaze-tools");                                                      // 108
install("spacebars-compiler");                                               // 109
install("mpowaga:string-template");                                          // 110
install("yogiben:autoform-modals");                                          // 111
install("rzymek:fullcalendar");                                              // 112
install("alanning:roles");                                                   // 113
install("ongoworks:security");                                               // 114
install("useraccounts:core");                                                // 115
install("softwarerero:accounts-t9n");                                        // 116
install("useraccounts:iron-routing");                                        // 117
install("useraccounts:bootstrap");                                           // 118
install("aldeed:autoform-bs-button-group-input");                            // 119
install("service-configuration");                                            // 120
install("tsega:bootstrap3-datetimepicker");                                  // 121
install("aldeed:template-extension");                                        // 122
install("adelq:moment-recur");                                               // 123
install("meteor-base");                                                      // 124
install("mobile-experience");                                                // 125
install("blaze-html-templates");                                             // 126
install("logging");                                                          // 127
install("fourseven:scss");                                                   // 128
install("fortawesome:fontawesome");                                          // 129
install("themeteorchef:bert");                                               // 130
install("sacha:spin");                                                       // 131
install("aldeed:autoform-bs-datepicker");                                    // 132
install("rajit:bootstrap3-datepicker");                                      // 133
install("mdg:geolocation");                                                  // 134
install("doctorpangloss:filter-collections");                                // 135
install("easysearch:core");                                                  // 136
install("peerlibrary:assert");                                               // 137
install("peerlibrary:reactive-field");                                       // 138
install("peerlibrary:computed-field");                                       // 139
install("peerlibrary:base-component");                                       // 140
install("peerlibrary:data-lookup");                                          // 141
install("peerlibrary:blaze-components");                                     // 142
install("easysearch:components");                                            // 143
install("easy:search");                                                      // 144
install("url");                                                              // 145
install("http");                                                             // 146
install("mrt:zipcodes");                                                     // 147
install("email");                                                            // 148
install("velocityjs:velocityjs");                                            // 149
install("ccorcos:transitioner");                                             // 150
install("rcy:nouislider");                                                   // 151
install("elevatedevdesign:autoform-nouislider");                             // 152
install("aldeed:autoform-select2");                                          // 153
install("mrt:isolate-value");                                                // 154
install("gadicohen:reactive-window");                                        // 155
install("hybrid:assets");                                                    // 156
install("d3js:d3");                                                          // 157
install("percolate:synced-cron");                                            // 158
install("cunneen:mailgun");                                                  // 159
install("meteorhacks:npm");                                                  // 160
install("npm-container");                                                    // 161
install("webtempest:animate");                                               // 162
install("forwarder:autoform-wizard");                                        // 163
install("webapp");                                                           // 164
install("velocity:meteor-internals");                                        // 165
install("velocity:core");                                                    // 166
install("drewy:datetimepicker");                                             // 167
install("drewy:autoform-datetimepicker");                                    // 168
install("summernote:standalone");                                            // 169
install("mpowaga:autoform-summernote");                                      // 170
install("joshowens:timezone-picker");                                        // 171
install("djedi:sanitize-html");                                              // 172
install("meteorhacks:ssr");                                                  // 173
install("standard-app-packages");                                            // 174
install("autoupdate");                                                       // 175
install("meteor-platform");                                                  // 176
install("launch-screen");                                                    // 177
install("philip100:autoform-bs-country-field");                              // 178
install("maazalik:highcharts");                                              // 179
install("meteorhacks:kadira");                                               // 180
install("standard-minifier-css");                                            // 181
install("standard-minifier-js");                                             // 182
install("meteorhacks:async");                                                // 183
install("chriswessels:hammer");                                              // 184
install("mrt:underscore-string-latest");                                     // 185
install("kaptron:minimongoid");                                              // 186
install("meteorhacks:inject-data");                                          // 187
install("chuangbo:cookie");                                                  // 188
install("meteorhacks:fast-render");                                          // 189
install("meteorhacks:subs-manager");                                         // 190
install("cfs:standard-packages");                                            // 191
install("cfs:base-package");                                                 // 192
install("mongo-livedata");                                                   // 193
install("cfs:storage-adapter");                                              // 194
install("cfs:gridfs");                                                       // 195
install("cfs:s3");                                                           // 196
install("aslagle:reactive-table");                                           // 197
install("liberation:shareit");                                               // 198
install("flawless:meteor-toastr");                                           // 199
install("cfs:data-man");                                                     // 200
install("cfs:file");                                                         // 201
install("cfs:tempstore");                                                    // 202
install("cfs:http-methods");                                                 // 203
install("cfs:http-publish");                                                 // 204
install("cfs:access-point");                                                 // 205
install("cfs:reactive-property");                                            // 206
install("cfs:reactive-list");                                                // 207
install("cfs:power-queue");                                                  // 208
install("cfs:upload-http");                                                  // 209
install("cfs:collection");                                                   // 210
install("cfs:collection-filters");                                           // 211
install("cfs:worker");                                                       // 212
install("spiderable");                                                       // 213
install("ryw:blog");                                                         // 214
install("hot-code-push");                                                    // 215
install("mdg:validation-error");                                             // 216
                                                                             // 217
///////////////////////////////////////////////////////////////////////////////

},"process.js":["process",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/modules/process.js                                               //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
try {                                                                        // 1
  // The application can run `npm install process` to provide its own        // 2
  // process stub; otherwise this module will provide a partial stub.        // 3
  process = global.process || require("process");                            // 4
} catch (noProcess) {                                                        // 5
  process = {};                                                              // 6
}                                                                            // 7
                                                                             // 8
if (Meteor.isServer) {                                                       // 9
  // Make require("process") work on the server in all versions of Node.     // 10
  meteorInstall({                                                            // 11
    node_modules: {                                                          // 12
      "process.js": function (r, e, module) {                                // 13
        module.exports = process;                                            // 14
      }                                                                      // 15
    }                                                                        // 16
  });                                                                        // 17
} else {                                                                     // 18
  process.platform = "browser";                                              // 19
  process.nextTick = process.nextTick || Meteor._setImmediate;               // 20
}                                                                            // 21
                                                                             // 22
if (typeof process.env !== "object") {                                       // 23
  process.env = {};                                                          // 24
}                                                                            // 25
                                                                             // 26
_.extend(process.env, meteorEnv);                                            // 27
                                                                             // 28
///////////////////////////////////////////////////////////////////////////////

}],"stubs.js":["meteor-node-stubs",function(require){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// packages/modules/stubs.js                                                 //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
try {                                                                        // 1
  // When meteor-node-stubs is installed in the application's root           // 2
  // node_modules directory, requiring it here installs aliases for stubs    // 3
  // for all Node built-in modules, such as fs, util, and http.              // 4
  require("meteor-node-stubs");                                              // 5
} catch (noStubs) {}                                                         // 6
                                                                             // 7
///////////////////////////////////////////////////////////////////////////////

}],"node_modules":{"reify":{"lib":{"runtime.js":["./entry.js","./utils.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// node_modules/meteor/modules/node_modules/reify/lib/runtime.js             //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
var Entry = require("./entry.js").Entry;                                     // 1
var utils = require("./utils.js");                                           // 2
                                                                             // 3
exports.enable = function (Module) {                                         // 4
  var Mp = Module.prototype;                                                 // 5
                                                                             // 6
  if (typeof Mp.import === "function" &&                                     // 7
      typeof Mp.export === "function") {                                     // 8
    // If the Mp.{import,export} methods have already been                   // 9
    // defined, abandon reification immediately.                             // 10
    return Module;                                                           // 11
  }                                                                          // 12
                                                                             // 13
  // Platform-specific code should implement this method however             // 14
  // appropriate. Module.prototype.resolve(id) should return an absolute     // 15
  // version of the given module identifier, like require.resolve.           // 16
  Mp.resolve = Mp.resolve || function resolve(id) {                          // 17
    throw new Error("Module.prototype.resolve not implemented");             // 18
  };                                                                         // 19
                                                                             // 20
  // Platform-specific code should find a way to call this method whenever   // 21
  // the module system is about to return module.exports from require. This  // 22
  // might happen more than once per module, in case of dependency cycles,   // 23
  // so we want Module.prototype.runModuleSetters to run each time.          // 24
  Mp.runModuleSetters = function runModuleSetters(valueToPassThrough) {      // 25
    var entry = Entry.get(this.id);                                          // 26
    if (entry) {                                                             // 27
      entry.runModuleSetters(this);                                          // 28
    }                                                                        // 29
                                                                             // 30
    // Assignments to exported local variables get wrapped with calls to     // 31
    // module.runModuleSetters, so module.runModuleSetters returns the       // 32
    // valueToPassThrough parameter to allow the value of the original       // 33
    // expression to pass through. For example,                              // 34
    //                                                                       // 35
    //   export var a = 1;                                                   // 36
    //   console.log(a += 3);                                                // 37
    //                                                                       // 38
    // becomes                                                               // 39
    //                                                                       // 40
    //   module.export("a", () => a);                                        // 41
    //   var a = 1;                                                          // 42
    //   console.log(module.runModuleSetters(a += 3));                       // 43
    //                                                                       // 44
    // This ensures module.runModuleSetters runs immediately after the       // 45
    // assignment, and does not interfere with the larger computation.       // 46
    return valueToPassThrough;                                               // 47
  };                                                                         // 48
                                                                             // 49
  function setESModule(module) {                                             // 50
    var exports = module.exports;                                            // 51
    if (exports && typeof exports === "object") {                            // 52
      exports.__esModule = true;                                             // 53
    }                                                                        // 54
  }                                                                          // 55
                                                                             // 56
  Mp.import = function (id, setters) {                                       // 57
    var module = this;                                                       // 58
    setESModule(module);                                                     // 59
                                                                             // 60
    var absoluteId = module.resolve(id);                                     // 61
                                                                             // 62
    if (setters && typeof setters === "object") {                            // 63
      var entry = Entry.getOrCreate(absoluteId);                             // 64
      entry.addSetters(module, setters);                                     // 65
    }                                                                        // 66
                                                                             // 67
    var countBefore = entry && entry.runCount;                               // 68
    var exports = typeof module.require === "function"                       // 69
      ? module.require(absoluteId)                                           // 70
      : require(absoluteId);                                                 // 71
                                                                             // 72
    if (entry && entry.runCount === countBefore) {                           // 73
      // If require(absoluteId) didn't run any setters for this entry,       // 74
      // perhaps because it's not the first time this module has been        // 75
      // required, run the setters now using an object that passes as the    // 76
      // real module object.                                                 // 77
      entry.runModuleSetters({                                               // 78
        id: absoluteId,                                                      // 79
        exports: exports,                                                    // 80
        getExportByName: Mp.getExportByName                                  // 81
      });                                                                    // 82
    }                                                                        // 83
  };                                                                         // 84
                                                                             // 85
  // Register getter functions for local variables in the scope of an        // 86
  // export statement. The keys of the getters object are exported names,    // 87
  // and the values are functions that return local values.                  // 88
  Mp.export = function (getters) {                                           // 89
    var module = this;                                                       // 90
    setESModule(module);                                                     // 91
                                                                             // 92
    if (utils.isPlainObject(getters)) {                                      // 93
      Entry.getOrCreate(module.id).addGetters(getters);                      // 94
    }                                                                        // 95
                                                                             // 96
    if (module.loaded) {                                                     // 97
      // If the module has already been evaluated, then we need to trigger   // 98
      // another round of entry.runModuleSetters calls, which begins by      // 99
      // calling entry.runModuleGetters(module).                             // 100
      module.runModuleSetters();                                             // 101
    }                                                                        // 102
  };                                                                         // 103
                                                                             // 104
  // This method can be overridden by client code to implement custom export
  // naming logic. The current implementation works well with Babel's        // 106
  // __esModule convention.                                                  // 107
  Mp.getExportByName = function (name) {                                     // 108
    var exports = this.exports;                                              // 109
                                                                             // 110
    if (name === "*") {                                                      // 111
      return exports;                                                        // 112
    }                                                                        // 113
                                                                             // 114
    if (name === "default" &&                                                // 115
        ! (exports &&                                                        // 116
           typeof exports === "object" &&                                    // 117
           exports.__esModule &&                                             // 118
           "default" in exports)) {                                          // 119
      return exports;                                                        // 120
    }                                                                        // 121
                                                                             // 122
    return exports && exports[name];                                         // 123
  };                                                                         // 124
                                                                             // 125
  return Module;                                                             // 126
};                                                                           // 127
                                                                             // 128
///////////////////////////////////////////////////////////////////////////////

}],"entry.js":["./utils.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// node_modules/meteor/modules/node_modules/reify/lib/entry.js               //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
var hasOwn = Object.prototype.hasOwnProperty;                                // 1
var entryMap = Object.create(null);                                          // 2
var utils = require("./utils.js");                                           // 3
                                                                             // 4
function Entry(id) {                                                         // 5
  // Same as module.id for this module.                                      // 6
  this.id = id;                                                              // 7
  // The number of times this.runModuleSetters has been called.              // 8
  this.runCount = 0;                                                         // 9
  // Setters for assigning to local variables in parent modules.             // 10
  this.setters = Object.create(null);                                        // 11
  // Getters for local variables exported from this module.                  // 12
  this.getters = Object.create(null);                                        // 13
}                                                                            // 14
                                                                             // 15
var Ep = Entry.prototype;                                                    // 16
                                                                             // 17
Entry.get = function (id) {                                                  // 18
  return entryMap[id] || null;                                               // 19
};                                                                           // 20
                                                                             // 21
Entry.getOrCreate = function (id) {                                          // 22
  return entryMap[id] = entryMap[id] || new Entry(id);                       // 23
};                                                                           // 24
                                                                             // 25
Ep.addSetters = function (parent, setters) {                                 // 26
  var entry = this;                                                          // 27
                                                                             // 28
  Object.keys(setters).forEach(function (name) {                             // 29
    var setter = setters[name];                                              // 30
    if (typeof setter === "function" &&                                      // 31
        // Ignore any requests for the exports.__esModule property."         // 32
        name !== "__esModule") {                                             // 33
      setter.parent = parent;                                                // 34
      (entry.setters[name] =                                                 // 35
       entry.setters[name] || []                                             // 36
      ).push(setter);                                                        // 37
    }                                                                        // 38
  });                                                                        // 39
};                                                                           // 40
                                                                             // 41
Ep.addGetters = function (getters) {                                         // 42
  var entry = this;                                                          // 43
  Object.keys(getters).forEach(function (name) {                             // 44
    var getter = getters[name];                                              // 45
    if (typeof getter === "function" &&                                      // 46
        // Ignore any requests for the exports.__esModule property."         // 47
        name !== "__esModule") {                                             // 48
      // Should this throw if hasOwn.call(this.getters, name)?               // 49
      entry.getters[name] = getter;                                          // 50
    }                                                                        // 51
  });                                                                        // 52
};                                                                           // 53
                                                                             // 54
function runModuleSetters(module) {                                          // 55
  var entry = entryMap[module.id];                                           // 56
  if (entry) {                                                               // 57
    entry.runModuleSetters(module);                                          // 58
  }                                                                          // 59
}                                                                            // 60
                                                                             // 61
function runModuleGetters(module) {                                          // 62
  var entry = entryMap[module.id];                                           // 63
  return entry ? entry.runModuleGetters(module) : 0;                         // 64
}                                                                            // 65
                                                                             // 66
Ep.runModuleGetters = function (module) {                                    // 67
  var entry = this;                                                          // 68
  var changeCount = 0;                                                       // 69
                                                                             // 70
  Object.keys(entry.getters).forEach(function (name) {                       // 71
    if (entry.runGetter(module, name)) {                                     // 72
      ++changeCount;                                                         // 73
    }                                                                        // 74
  });                                                                        // 75
                                                                             // 76
  return changeCount;                                                        // 77
};                                                                           // 78
                                                                             // 79
// Returns true iff the getter updated module.exports with a new value.      // 80
Ep.runGetter = function (module, name) {                                     // 81
  if (! hasOwn.call(this.getters, name)) {                                   // 82
    return false;                                                            // 83
  }                                                                          // 84
                                                                             // 85
  var getter = this.getters[name];                                           // 86
  try {                                                                      // 87
    var value = getter.call(module);                                         // 88
  } catch (e) {}                                                             // 89
  var exports = module.exports;                                              // 90
                                                                             // 91
  if (! hasOwn.call(exports, name) ||                                        // 92
      exports[name] !== value) {                                             // 93
    // We update module.exports[name] with the current value so that         // 94
    // CommonJS require calls remain consistent with module.import.          // 95
    exports[name] = value;                                                   // 96
    return true;                                                             // 97
  }                                                                          // 98
                                                                             // 99
  return false;                                                              // 100
};                                                                           // 101
                                                                             // 102
// Called whenever module.exports might have changed, to trigger any         // 103
// setters associated with the newly exported values.                        // 104
Ep.runModuleSetters = function (module) {                                    // 105
  var entry = this;                                                          // 106
  var names = Object.keys(entry.setters);                                    // 107
                                                                             // 108
  // Make sure module.exports is up to date before we call                   // 109
  // module.getExportByName(name).                                           // 110
  entry.runModuleGetters(module);                                            // 111
                                                                             // 112
  // Invoke the given callback once for every (setter, value, name) triple   // 113
  // that needs to be called. Note that forEachSetter does not call any      // 114
  // setters itself, only the given callback.                                // 115
  function forEachSetter(callback, context) {                                // 116
    names.forEach(function (name) {                                          // 117
      entry.setters[name].forEach(function (setter) {                        // 118
        var value = module.getExportByName(name);                            // 119
        if (name === "*") {                                                  // 120
          Object.keys(value).forEach(function (name) {                       // 121
            call(setter, value[name], name);                                 // 122
          });                                                                // 123
        } else {                                                             // 124
          call(setter, value, name);                                         // 125
        }                                                                    // 126
      });                                                                    // 127
    });                                                                      // 128
                                                                             // 129
    function call(setter, value, name) {                                     // 130
      if (name === "__esModule") {                                           // 131
        // Ignore setters asking for module.exports.__esModule.              // 132
        return;                                                              // 133
      }                                                                      // 134
                                                                             // 135
      setter.last = setter.last || Object.create(null);                      // 136
                                                                             // 137
      if (! hasOwn.call(setter.last, name) ||                                // 138
          setter.last[name] !== value) {                                     // 139
        // Only invoke the callback if we have not called this setter        // 140
        // (with a value of this name) before, or the current value is       // 141
        // different from the last value we passed to this setter.           // 142
        return callback.apply(context, arguments);                           // 143
      }                                                                      // 144
    }                                                                        // 145
  }                                                                          // 146
                                                                             // 147
  // Every three elements of this list form a (setter, value, name) triple   // 148
  // that needs to be invoked.                                               // 149
  var settersToCall = [];                                                    // 150
                                                                             // 151
  // Lazily-initialized objects mapping parent module identifiers to         // 152
  // relevant parent module objects and snapshots of their exports.          // 153
  var relevantParents;                                                       // 154
  var parentSnapshots;                                                       // 155
                                                                             // 156
  // Take snapshots of setter.parent.exports for any setters that we are     // 157
  // planning to call, so that we can later determine if calling the         // 158
  // setters modified any of those exports objects.                          // 159
  forEachSetter(function (setter, value, name) {                             // 160
    var parent = setter.parent;                                              // 161
    parentSnapshots = parentSnapshots || Object.create(null);                // 162
    if (! hasOwn.call(parentSnapshots, parent.id)) {                         // 163
      relevantParents = relevantParents || Object.create(null);              // 164
      relevantParents[parent.id] = parent;                                   // 165
      if (utils.isPlainObject(parent.exports)) {                             // 166
        // If parent.exports is an object, make a shallow clone of it so     // 167
        // that we can see if it changes as a result of calling setters.     // 168
        parentSnapshots[parent.id] = utils.assign({}, parent.exports);       // 169
      } else {                                                               // 170
        // If parent.exports is not an object, the "snapshot" is just the    // 171
        // value of parent.exports.                                          // 172
        parentSnapshots[parent.id] = parent.exports;                         // 173
      }                                                                      // 174
    }                                                                        // 175
                                                                             // 176
    // Push three elements at a time to avoid creating wrapper arrays for    // 177
    // each (setter, value, name) triple. Note the i += 3 below.             // 178
    settersToCall.push(setter, value, name);                                 // 179
  });                                                                        // 180
                                                                             // 181
  // Now call all the setters that we decided we need to call.               // 182
  for (var i = 0; i < settersToCall.length; i += 3) {                        // 183
    var setter = settersToCall[i];                                           // 184
    var value = settersToCall[i + 1];                                        // 185
    var name = settersToCall[i + 2];                                         // 186
    setter.call(module, setter.last[name] = value, name);                    // 187
  }                                                                          // 188
                                                                             // 189
  ++entry.runCount;                                                          // 190
                                                                             // 191
  if (! relevantParents) {                                                   // 192
    // If we never called takeSnapshot, then we can avoid checking           // 193
    // relevantParents and parentSnapshots below.                            // 194
    return;                                                                  // 195
  }                                                                          // 196
                                                                             // 197
  // If any of the setters updated the module.exports of a parent module,    // 198
  // or updated local variables that are exported by that parent module,     // 199
  // then we must re-run any setters registered by that parent module.       // 200
  Object.keys(relevantParents).forEach(function (id) {                       // 201
    var parent = relevantParents[id];                                        // 202
                                                                             // 203
    if (runModuleGetters(parent) > 0) {                                      // 204
      return runModuleSetters(parent);                                       // 205
    }                                                                        // 206
                                                                             // 207
    var exports = parent.exports;                                            // 208
    var snapshot = parentSnapshots[parent.id];                               // 209
    if (utils.shallowObjEqual(exports, snapshot)) {                          // 210
      // If parent.exports have not changed since we took the snapshot,      // 211
      // then we do not need to run the parent's setters.                    // 212
      return;                                                                // 213
    }                                                                        // 214
                                                                             // 215
    runModuleSetters(parent);                                                // 216
  });                                                                        // 217
};                                                                           // 218
                                                                             // 219
exports.Entry = Entry;                                                       // 220
                                                                             // 221
///////////////////////////////////////////////////////////////////////////////

}],"utils.js":function(require,exports){

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// node_modules/meteor/modules/node_modules/reify/lib/utils.js               //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
                                                                             //
var hasOwn = Object.prototype.hasOwnProperty;                                // 1
var objToStr = Object.prototype.toString;                                    // 2
var objStr = objToStr.call({});                                              // 3
                                                                             // 4
function isPlainObject(value) {                                              // 5
  return objToStr.call(value) === objStr;                                    // 6
}                                                                            // 7
exports.isPlainObject = isPlainObject;                                       // 8
                                                                             // 9
exports.assign = Object.assign || function (obj) {                           // 10
  var argc = arguments.length;                                               // 11
  for (var i = 1; i < argc; ++i) {                                           // 12
    var arg = arguments[i];                                                  // 13
    if (arg && typeof arg === "object") {                                    // 14
      var keys = Object.keys(arg);                                           // 15
      for (var k = 0; k < keys.length; ++k) {                                // 16
        var key = keys[k];                                                   // 17
        obj[key] = arg[key];                                                 // 18
      }                                                                      // 19
    }                                                                        // 20
  }                                                                          // 21
  return obj;                                                                // 22
};                                                                           // 23
                                                                             // 24
exports.shallowObjEqual = function(a, b) {                                   // 25
  if (a === b) {                                                             // 26
    return true;                                                             // 27
  }                                                                          // 28
                                                                             // 29
  if (! isPlainObject(a) ||                                                  // 30
      ! isPlainObject(b)) {                                                  // 31
    return false;                                                            // 32
  }                                                                          // 33
                                                                             // 34
  var aKeys = Object.keys(a);                                                // 35
  var bKeys = Object.keys(b);                                                // 36
                                                                             // 37
  if (aKeys.length !== bKeys.length) {                                       // 38
    return false;                                                            // 39
  }                                                                          // 40
                                                                             // 41
  return aKeys.every(function (key) {                                        // 42
    return hasOwn.call(b, key) &&                                            // 43
      a[key] === b[key];                                                     // 44
  });                                                                        // 45
};                                                                           // 46
                                                                             // 47
///////////////////////////////////////////////////////////////////////////////

}}}}}}}},{"extensions":[".js",".json"]});
var exports = require("./node_modules/meteor/modules/client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package.modules = exports, {
  meteorInstall: meteorInstall,
  Buffer: Buffer,
  process: process
});

})();
