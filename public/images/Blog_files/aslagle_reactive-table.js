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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var _ = Package.underscore._;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var i18n = Package['anti:i18n'].i18n;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/aslagle_reactive-table/packages/aslagle_reactive-table.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                              //     // 4
// packages/aslagle:reactive-table/lib/template.reactive_table.js                                               //     // 5
//                                                                                                              //     // 6
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                                //     // 8
                                                                                                                // 1   // 9
Template.__checkName("reactiveTable");                                                                          // 2   // 10
Template["reactiveTable"] = new Template("Template.reactiveTable", (function() {                                // 3   // 11
  var view = this;                                                                                              // 4   // 12
  return Spacebars.With(function() {                                                                            // 5   // 13
    return Spacebars.call(view.lookup("context"));                                                              // 6   // 14
  }, function() {                                                                                               // 7   // 15
    return [ "\n    ", HTML.DIV({                                                                               // 8   // 16
      "class": "clearfix"                                                                                       // 9   // 17
    }, "\n      ", HTML.DIV({                                                                                   // 10  // 18
      "class": "reactive-table-options col-sm-8 pull-right"                                                     // 11  // 19
    }, "\n        ", Blaze.If(function() {                                                                      // 12  // 20
      return Spacebars.call(view.lookup("showFilter"));                                                         // 13  // 21
    }, function() {                                                                                             // 14  // 22
      return [ "\n          ", HTML.DIV({                                                                       // 15  // 23
        "class": "form-group reactive-table-filter col-sm-8 pull-right"                                         // 16  // 24
      }, "\n            ", HTML.DIV({                                                                           // 17  // 25
        "class": "input-group"                                                                                  // 18  // 26
      }, "\n              ", HTML.SPAN({                                                                        // 19  // 27
        "class": "input-group-addon"                                                                            // 20  // 28
      }, "\n                ", Blaze.If(function() {                                                            // 21  // 29
        return Spacebars.call(view.lookup("useFontAwesome"));                                                   // 22  // 30
      }, function() {                                                                                           // 23  // 31
        return [ "\n                  ", HTML.I({                                                               // 24  // 32
          "class": "fa fa-filter"                                                                               // 25  // 33
        }), "\n                " ];                                                                             // 26  // 34
      }, function() {                                                                                           // 27  // 35
        return [ "\n                  ", Blaze.View(function() {                                                // 28  // 36
          return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.filter");                               // 29  // 37
        }), "\n                " ];                                                                             // 30  // 38
      }), "\n              "), "\n              ", Blaze.If(function() {                                        // 31  // 39
        return Spacebars.call(view.lookup("useFontAwesome"));                                                   // 32  // 40
      }, function() {                                                                                           // 33  // 41
        return [ "\n    	        ", HTML.INPUT({                                                                // 34  // 42
          "class": "reactive-table-input form-control",                                                         // 35  // 43
          type: "text",                                                                                         // 36  // 44
          value: function() {                                                                                   // 37  // 45
            return Spacebars.mustache(view.lookup("filter"));                                                   // 38  // 46
          },                                                                                                    // 39  // 47
          placeholder: function() {                                                                             // 40  // 48
            return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.filter");                             // 41  // 49
          }                                                                                                     // 42  // 50
        }), "\n              " ];                                                                               // 43  // 51
      }, function() {                                                                                           // 44  // 52
        return [ "\n    	        ", HTML.INPUT({                                                                // 45  // 53
          "class": "reactive-table-input form-control",                                                         // 46  // 54
          type: "text",                                                                                         // 47  // 55
          value: function() {                                                                                   // 48  // 56
            return Spacebars.mustache(view.lookup("filter"));                                                   // 49  // 57
          }                                                                                                     // 50  // 58
        }), "\n              " ];                                                                               // 51  // 59
      }), "\n            "), "\n          "), "\n        " ];                                                   // 52  // 60
    }), "\n        ", Blaze.If(function() {                                                                     // 53  // 61
      return Spacebars.call(view.lookup("showColumnToggles"));                                                  // 54  // 62
    }, function() {                                                                                             // 55  // 63
      return [ "\n          ", HTML.DIV({                                                                       // 56  // 64
        "class": "reactive-table-columns-dropdown col-sm-4 pull-right"                                          // 57  // 65
      }, "\n            ", HTML.BUTTON({                                                                        // 58  // 66
        "class": "btn btn-default dropdown-toggle",                                                             // 59  // 67
        id: function() {                                                                                        // 60  // 68
          return [ "reactive-table-add-column-", Spacebars.mustache(view.lookup("id")) ];                       // 61  // 69
        },                                                                                                      // 62  // 70
        "data-toggle": "dropdown"                                                                               // 63  // 71
      }, "\n              ", Blaze.View(function() {                                                            // 64  // 72
        return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.columns");                                // 65  // 73
      }), "\n            "), "\n            ", HTML.UL({                                                        // 66  // 74
        "class": "dropdown-menu dropdown-menu-right",                                                           // 67  // 75
        role: "menu",                                                                                           // 68  // 76
        "aria-labelledby": function() {                                                                         // 69  // 77
          return [ "reactive-table-add-column-", Spacebars.mustache(view.lookup("id")) ];                       // 70  // 78
        }                                                                                                       // 71  // 79
      }, "\n              ", Blaze.Each(function() {                                                            // 72  // 80
        return Spacebars.call(view.lookup("fields"));                                                           // 73  // 81
      }, function() {                                                                                           // 74  // 82
        return [ "\n                ", HTML.LI({                                                                // 75  // 83
          role: "presentation"                                                                                  // 76  // 84
        }, HTML.A({                                                                                             // 77  // 85
          role: "menuitem",                                                                                     // 78  // 86
          tabindex: "-1",                                                                                       // 79  // 87
          "data-target": "#"                                                                                    // 80  // 88
        }, "\n                  ", HTML.LABEL("\n                    ", Blaze.If(function() {                   // 81  // 89
          return Spacebars.call(view.lookup("isVisible"));                                                      // 82  // 90
        }, function() {                                                                                         // 83  // 91
          return [ "\n                      ", HTML.INPUT({                                                     // 84  // 92
            type: "checkbox",                                                                                   // 85  // 93
            checked: "",                                                                                        // 86  // 94
            index: function() {                                                                                 // 87  // 95
              return Spacebars.mustache(view.lookup("getFieldIndex"));                                          // 88  // 96
            }                                                                                                   // 89  // 97
          }), "\n                    " ];                                                                       // 90  // 98
        }, function() {                                                                                         // 91  // 99
          return [ "\n                      ", HTML.INPUT({                                                     // 92  // 100
            type: "checkbox",                                                                                   // 93  // 101
            index: function() {                                                                                 // 94  // 102
              return Spacebars.mustache(view.lookup("getFieldIndex"));                                          // 95  // 103
            }                                                                                                   // 96  // 104
          }), "\n                    " ];                                                                       // 97  // 105
        }), "\n                    ", Blaze.View(function() {                                                   // 98  // 106
          return Spacebars.mustache(view.lookup("getLabel"));                                                   // 99  // 107
        }), "\n                  "), "\n                ")), "\n              " ];                              // 100
      }), "\n            "), "\n          "), "\n        " ];                                                   // 101
    }), "\n      "), "\n    "), "\n    ", HTML.TABLE({                                                          // 102
      id: function() {                                                                                          // 103
        return Spacebars.mustache(view.lookup("id"));                                                           // 104
      },                                                                                                        // 105
      "class": function() {                                                                                     // 106
        return [ Spacebars.mustache(view.lookup("class")), " reactive-table" ];                                 // 107
      }                                                                                                         // 108
    }, "\n      ", HTML.THEAD("\n        ", HTML.TR("\n          ", Blaze.Each(function() {                     // 109
      return Spacebars.call(view.lookup("fields"));                                                             // 110
    }, function() {                                                                                             // 111
      return [ "\n            ", Blaze.If(function() {                                                          // 112
        return Spacebars.call(view.lookup("isVisible"));                                                        // 113
      }, function() {                                                                                           // 114
        return [ "\n              ", Blaze.If(function() {                                                      // 115
          return Spacebars.call(view.lookup("isSortKey"));                                                      // 116
        }, function() {                                                                                         // 117
          return [ "\n                ", HTML.TH({                                                              // 118
            "class": function() {                                                                               // 119
              return [ Spacebars.mustache(view.lookup("getKey")), " sortable" ];                                // 120
            },                                                                                                  // 121
            index: function() {                                                                                 // 122
              return Spacebars.mustache(view.lookup("getFieldIndex"));                                          // 123
            }                                                                                                   // 124
          }, "\n                  ", Blaze.View(function() {                                                    // 125
            return Spacebars.mustache(view.lookup("getLabel"));                                                 // 126
          }), HTML.CharRef({                                                                                    // 127
            html: "&nbsp;",                                                                                     // 128
            str: " "                                                                                            // 129
          }), HTML.CharRef({                                                                                    // 130
            html: "&nbsp;",                                                                                     // 131
            str: " "                                                                                            // 132
          }), "\n                  ", Blaze.If(function() {                                                     // 133
            return Spacebars.call(view.lookup("isAscending"));                                                  // 134
          }, function() {                                                                                       // 135
            return [ "\n                    ", Blaze.If(function() {                                            // 136
              return Spacebars.call(Spacebars.dot(view.lookup(".."), "useFontAwesome"));                        // 137
            }, function() {                                                                                     // 138
              return [ "\n                      ", HTML.I({                                                     // 139
                "class": "fa fa-sort-asc"                                                                       // 140
              }), "\n                    " ];                                                                   // 141
            }, function() {                                                                                     // 142
              return [ "\n                      ", HTML.CharRef({                                               // 143
                html: "&#x25BC;",                                                                               // 144
                str: "▼"                                                                                        // 145
              }), "\n                    " ];                                                                   // 146
            }), "\n                  " ];                                                                       // 147
          }, function() {                                                                                       // 148
            return [ "\n                    ", Blaze.If(function() {                                            // 149
              return Spacebars.call(Spacebars.dot(view.lookup(".."), "useFontAwesome"));                        // 150
            }, function() {                                                                                     // 151
              return [ "\n                      ", HTML.I({                                                     // 152
                "class": "fa fa-sort-desc"                                                                      // 153
              }), "\n                    " ];                                                                   // 154
            }, function() {                                                                                     // 155
              return [ "\n                      ", HTML.CharRef({                                               // 156
                html: "&#x25B2;",                                                                               // 157
                str: "▲"                                                                                        // 158
              }), "\n                    " ];                                                                   // 159
            }), "\n                  " ];                                                                       // 160
          }), "\n                "), "\n              " ];                                                      // 161
        }, function() {                                                                                         // 162
          return [ "\n                ", Blaze.If(function() {                                                  // 163
            return Spacebars.call(view.lookup("isSortable"));                                                   // 164
          }, function() {                                                                                       // 165
            return [ "\n                  ", HTML.TH({                                                          // 166
              "class": function() {                                                                             // 167
                return [ Spacebars.mustache(view.lookup("getKey")), " sortable" ];                              // 168
              },                                                                                                // 169
              index: function() {                                                                               // 170
                return Spacebars.mustache(view.lookup("getFieldIndex"));                                        // 171
              }                                                                                                 // 172
            }, Blaze.View(function() {                                                                          // 173
              return Spacebars.mustache(view.lookup("getLabel"));                                               // 174
            })), "\n                " ];                                                                        // 175
          }, function() {                                                                                       // 176
            return [ "\n                  ", HTML.TH({                                                          // 177
              "class": function() {                                                                             // 178
                return Spacebars.mustache(view.lookup("getKey"));                                               // 179
              },                                                                                                // 180
              index: function() {                                                                               // 181
                return Spacebars.mustache(view.lookup("getFieldIndex"));                                        // 182
              }                                                                                                 // 183
            }, Blaze.View(function() {                                                                          // 184
              return Spacebars.mustache(view.lookup("getLabel"));                                               // 185
            })), "\n                " ];                                                                        // 186
          }), "\n              " ];                                                                             // 187
        }), "\n            " ];                                                                                 // 188
      }), "\n          " ];                                                                                     // 189
    }), "\n        "), "\n      "), "\n      ", HTML.TBODY("\n        ", Blaze.Each(function() {                // 190
      return Spacebars.call(view.lookup("sortedRows"));                                                         // 191
    }, function() {                                                                                             // 192
      return [ "\n          ", HTML.TR({                                                                        // 193
        "class": function() {                                                                                   // 194
          return Spacebars.mustache(Spacebars.dot(view.lookup(".."), "rowClass"), view.lookup("."));            // 195
        }                                                                                                       // 196
      }, "\n            ", Blaze.Each(function() {                                                              // 197
        return Spacebars.call(Spacebars.dot(view.lookup(".."), "fields"));                                      // 198
      }, function() {                                                                                           // 199
        return [ "\n              ", Blaze.If(function() {                                                      // 200
          return Spacebars.call(view.lookup("isVisible"));                                                      // 201
        }, function() {                                                                                         // 202
          return [ "\n                ", HTML.TD({                                                              // 203
            "class": function() {                                                                               // 204
              return Spacebars.mustache(view.lookup("key"));                                                    // 205
            }                                                                                                   // 206
          }, Blaze.If(function() {                                                                              // 207
            return Spacebars.call(view.lookup("tmpl"));                                                         // 208
          }, function() {                                                                                       // 209
            return Spacebars.With(function() {                                                                  // 210
              return Spacebars.call(view.lookup(".."));                                                         // 211
            }, function() {                                                                                     // 212
              return Spacebars.include(function() {                                                             // 213
                return Spacebars.call(Spacebars.dot(view.lookup(".."), "tmpl"));                                // 214
              });                                                                                               // 215
            });                                                                                                 // 216
          }, function() {                                                                                       // 217
            return Blaze.View(function() {                                                                      // 218
              return Spacebars.mustache(view.lookup("getField"), view.lookup(".."));                            // 219
            });                                                                                                 // 220
          })), "\n              " ];                                                                            // 221
        }), "\n            " ];                                                                                 // 222
      }), "\n          "), "\n        " ];                                                                      // 223
    }), "\n      "), "\n    "), "\n    ", Blaze.If(function() {                                                 // 224
      return Spacebars.call(view.lookup("showNavigation"));                                                     // 225
    }, function() {                                                                                             // 226
      return [ "\n      ", HTML.DIV({                                                                           // 227
        "class": "reactive-table-navigation"                                                                    // 228
      }, "\n        ", Blaze.If(function() {                                                                    // 229
        return Spacebars.call(view.lookup("showNavigationRowsPerPage"));                                        // 230
      }, function() {                                                                                           // 231
        return [ "\n          ", HTML.DIV({                                                                     // 232
          "class": "form-inline form-group rows-per-page"                                                       // 233
        }, "\n            ", HTML.LABEL(Blaze.View(function() {                                                 // 234
          return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.show");                                 // 235
        }), HTML.CharRef({                                                                                      // 236
          html: "&nbsp;",                                                                                       // 237
          str: " "                                                                                              // 238
        }), HTML.INPUT({                                                                                        // 239
          "class": "form-control",                                                                              // 240
          type: "text",                                                                                         // 241
          value: function() {                                                                                   // 242
            return Spacebars.mustache(view.lookup("getRowsPerPage"));                                           // 243
          }                                                                                                     // 244
        }), HTML.CharRef({                                                                                      // 245
          html: "&nbsp;",                                                                                       // 246
          str: " "                                                                                              // 247
        }), Blaze.View(function() {                                                                             // 248
          return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.rowsPerPage");                          // 249
        })), "\n          "), "\n        " ];                                                                   // 250
      }), "\n        ", HTML.DIV({                                                                              // 251
        "class": "form-inline form-group page-number"                                                           // 252
      }, "\n          ", Blaze.If(function() {                                                                  // 253
        return Spacebars.call(view.lookup("isntFirstPage"));                                                    // 254
      }, function() {                                                                                           // 255
        return [ "\n            ", HTML.LABEL({                                                                 // 256
          "class": "previous-page"                                                                              // 257
        }, HTML.CharRef({                                                                                       // 258
          html: "&lt;",                                                                                         // 259
          str: "<"                                                                                              // 260
        })), HTML.CharRef({                                                                                     // 261
          html: "&nbsp;",                                                                                       // 262
          str: " "                                                                                              // 263
        }), HTML.CharRef({                                                                                      // 264
          html: "&nbsp;",                                                                                       // 265
          str: " "                                                                                              // 266
        }), "\n          " ];                                                                                   // 267
      }), "\n          ", HTML.LABEL(Blaze.View(function() {                                                    // 268
        return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.page");                                   // 269
      }), HTML.CharRef({                                                                                        // 270
        html: "&nbsp;",                                                                                         // 271
        str: " "                                                                                                // 272
      }), HTML.INPUT({                                                                                          // 273
        "class": "form-control",                                                                                // 274
        type: "text",                                                                                           // 275
        value: function() {                                                                                     // 276
          return Spacebars.mustache(view.lookup("getCurrentPage"));                                             // 277
        }                                                                                                       // 278
      }), HTML.CharRef({                                                                                        // 279
        html: "&nbsp;",                                                                                         // 280
        str: " "                                                                                                // 281
      }), Blaze.View(function() {                                                                               // 282
        return Spacebars.mustache(view.lookup("i18n"), "reactiveTable.of");                                     // 283
      }), " ", Blaze.View(function() {                                                                          // 284
        return Spacebars.mustache(view.lookup("getPageCount"));                                                 // 285
      })), "\n          ", Blaze.If(function() {                                                                // 286
        return Spacebars.call(view.lookup("isntLastPage"));                                                     // 287
      }, function() {                                                                                           // 288
        return [ "\n            ", HTML.LABEL({                                                                 // 289
          "class": "next-page"                                                                                  // 290
        }, HTML.CharRef({                                                                                       // 291
          html: "&nbsp;",                                                                                       // 292
          str: " "                                                                                              // 293
        }), HTML.CharRef({                                                                                      // 294
          html: "&nbsp;",                                                                                       // 295
          str: " "                                                                                              // 296
        }), HTML.CharRef({                                                                                      // 297
          html: "&gt;",                                                                                         // 298
          str: ">"                                                                                              // 299
        })), "\n          " ];                                                                                  // 300
      }), "\n        "), "\n      "), "\n    " ];                                                               // 301
    }), "\n  " ];                                                                                               // 302
  });                                                                                                           // 303
}));                                                                                                            // 304
                                                                                                                // 305
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 314
                                                                                                                       // 315
}).call(this);                                                                                                         // 316
                                                                                                                       // 317
                                                                                                                       // 318
                                                                                                                       // 319
                                                                                                                       // 320
                                                                                                                       // 321
                                                                                                                       // 322
(function () {                                                                                                         // 323
                                                                                                                       // 324
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 325
//                                                                                                              //     // 326
// packages/aslagle:reactive-table/lib/reactive_table_i18n.js                                                   //     // 327
//                                                                                                              //     // 328
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 329
                                                                                                                //     // 330
i18n.map('en', {                                                                                                // 1   // 331
    reactiveTable: {                                                                                            // 2   // 332
        filter: 'Filter',                                                                                       // 3   // 333
        columns: 'Columns',                                                                                     // 4   // 334
        show: 'Show',                                                                                           // 5   // 335
        rowsPerPage: 'rows per page',                                                                           // 6   // 336
        page: 'Page',                                                                                           // 7   // 337
        of: 'of'                                                                                                // 8   // 338
    }                                                                                                           // 9   // 339
});                                                                                                             // 10  // 340
                                                                                                                // 11  // 341
i18n.map('fr', {                                                                                                // 12  // 342
    reactiveTable: {                                                                                            // 13  // 343
        filter: 'Filtre',                                                                                       // 14  // 344
        show: 'Voir',                                                                                           // 15  // 345
        rowsPerPage: 'lignes par page',                                                                         // 16  // 346
        page: 'page',                                                                                           // 17  // 347
        of: 'sur'                                                                                               // 18  // 348
    }                                                                                                           // 19  // 349
});                                                                                                             // 20  // 350
                                                                                                                // 21  // 351
i18n.map('ru', {                                                                                                // 22  // 352
    reactiveTable: {                                                                                            // 23  // 353
        filter: 'Фильтр',                                                                                       // 24  // 354
        show: 'Показать',                                                                                       // 25  // 355
        rowsPerPage: 'линий на странице',                                                                       // 26  // 356
        page: 'Страница',                                                                                       // 27  // 357
        of: 'из'                                                                                                // 28  // 358
    }                                                                                                           // 29  // 359
});                                                                                                             // 30  // 360
                                                                                                                // 31  // 361
i18n.map('es', {                                                                                                // 32  // 362
    reactiveTable: {                                                                                            // 33  // 363
        filter: 'Filtro',                                                                                       // 34  // 364
        show:   'Mostrar',                                                                                      // 35  // 365
        rowsPerPage: 'filas por página',                                                                        // 36  // 366
        page: 'Página',                                                                                         // 37  // 367
        of: 'de'                                                                                                // 38  // 368
    }                                                                                                           // 39  // 369
});                                                                                                             // 40  // 370
                                                                                                                // 41  // 371
i18n.map('nl', {                                                                                                // 42  // 372
    reactiveTable: {                                                                                            // 43  // 373
        filter: 'Filter',                                                                                       // 44  // 374
        show:   'Toon',                                                                                         // 45  // 375
        rowsPerPage: 'regels per pagina',                                                                       // 46  // 376
        page: 'Pagina',                                                                                         // 47  // 377
        of: 'van'                                                                                               // 48  // 378
    }                                                                                                           // 49  // 379
});                                                                                                             // 50  // 380
                                                                                                                // 51  // 381
i18n.map('pt-br', {                                                                                             // 52  // 382
    reactiveTable: {                                                                                            // 53  // 383
        filter: 'Filtro',                                                                                       // 54  // 384
        show: 'Mostrar',                                                                                        // 55  // 385
        rowsPerPage: 'linhas por página',                                                                       // 56  // 386
        page: 'Página',                                                                                         // 57  // 387
        of: 'de'                                                                                                // 58  // 388
    }                                                                                                           // 59  // 389
});                                                                                                             // 60  // 390
                                                                                                                // 61  // 391
i18n.map('it', {                                                                                                // 62  // 392
    reactiveTable: {                                                                                            // 63  // 393
        filter: 'Filtra',                                                                                       // 64  // 394
        show: 'Mostra',                                                                                         // 65  // 395
        rowsPerPage: 'righe per pagina',                                                                        // 66  // 396
        page: 'Pagina',                                                                                         // 67  // 397
        of: 'di'                                                                                                // 68  // 398
    }                                                                                                           // 69  // 399
});                                                                                                             // 70  // 400
                                                                                                                // 71  // 401
i18n.map('sv', {                                                                                                // 72  // 402
    reactiveTable: {                                                                                            // 73  // 403
        filter: 'Filter',                                                                                       // 74  // 404
        show: 'Visa',                                                                                           // 75  // 405
        rowsPerPage: 'rader per sida',                                                                          // 76  // 406
        page: 'Sida',                                                                                           // 77  // 407
        of: 'av'                                                                                                // 78  // 408
    }                                                                                                           // 79  // 409
});                                                                                                             // 80  // 410
                                                                                                                // 81  // 411
i18n.map('ua', {                                                                                                // 82  // 412
    reactiveTable: {                                                                                            // 83  // 413
        filter: 'Фільтр',                                                                                       // 84  // 414
        show: 'Показати',                                                                                       // 85  // 415
        rowsPerPage: 'линій на страниці',                                                                       // 86  // 416
        page: 'Страниця',                                                                                       // 87  // 417
        of: 'з'                                                                                                 // 88  // 418
    }                                                                                                           // 89  // 419
});                                                                                                             // 90  // 420
                                                                                                                // 91  // 421
i18n.map('tr', {                                                                                                // 92  // 422
    reactiveTable: {                                                                                            // 93  // 423
        filter: 'Filtrele',                                                                                     // 94  // 424
        show: 'Göster',                                                                                         // 95  // 425
        rowsPerPage: 'sayfa başı',                                                                              // 96  // 426
        page: 'Sayfa',                                                                                          // 97  // 427
        of: ' / '                                                                                               // 98  // 428
    }                                                                                                           // 99  // 429
});                                                                                                             // 100
                                                                                                                // 101
i18n.map('sk', {                                                                                                // 102
    reactiveTable: {                                                                                            // 103
        filter: 'Filter',                                                                                       // 104
        show: 'Zobraz',                                                                                         // 105
        rowsPerPage: 'riadkov na stranu',                                                                       // 106
        page: 'Strana',                                                                                         // 107
        of: 'z'                                                                                                 // 108
    }                                                                                                           // 109
});                                                                                                             // 110
                                                                                                                // 111
i18n.map('cs', {                                                                                                // 112
    reactiveTable: {                                                                                            // 113
        filter: 'Filter',                                                                                       // 114
        show: 'Zobraz',                                                                                         // 115
        rowsPerPage: 'řádků na stranu',                                                                         // 116
        page: 'Strana',                                                                                         // 117
        of: 'z'                                                                                                 // 118
    }                                                                                                           // 119
});                                                                                                             // 120
                                                                                                                // 121
i18n.map('he', {                                                                                                // 122
    reactiveTable: {                                                                                            // 123
        filter: 'פילטר',                                                                                        // 124
        show: 'הצג',                                                                                            // 125
        rowsPerPage: 'שורות לעמוד',                                                                             // 126
        page: 'עמוד',                                                                                           // 127
        of: 'מתוך'                                                                                              // 128
    }                                                                                                           // 129
});                                                                                                             // 130
                                                                                                                // 131
i18n.map('de', {                                                                                                // 132
    reactiveTable: {                                                                                            // 133
        filter: 'Filter',                                                                                       // 134
        show: 'Zeige',                                                                                          // 135
        rowsPerPage: 'Zeilen pro Seite',                                                                        // 136
        page: 'Seite',                                                                                          // 137
        of: 'von'                                                                                               // 138
    }                                                                                                           // 139
});                                                                                                             // 140
                                                                                                                // 141
i18n.map('fi', {                                                                                                // 142
    reactiveTable: {                                                                                            // 143
        filter: 'Suodata',                                                                                      // 144
        show: 'Näytä',                                                                                          // 145
        rowsPerPage: 'riviä sivulla',                                                                           // 146
        page: 'Sivu',                                                                                           // 147
        of: ' / '                                                                                               // 148
    }                                                                                                           // 149
});                                                                                                             // 150
                                                                                                                // 151
i18n.map('no', {                                                                                                // 152
    reactiveTable: {                                                                                            // 153
        filter: 'Filter',                                                                                       // 154
        show: 'Vis',                                                                                            // 155
        rowsPerPage: 'rader per side',                                                                          // 156
        page: 'Side',                                                                                           // 157
        of: 'av'                                                                                                // 158
    }                                                                                                           // 159
});                                                                                                             // 160
                                                                                                                // 161
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 492
                                                                                                                       // 493
}).call(this);                                                                                                         // 494
                                                                                                                       // 495
                                                                                                                       // 496
                                                                                                                       // 497
                                                                                                                       // 498
                                                                                                                       // 499
                                                                                                                       // 500
(function () {                                                                                                         // 501
                                                                                                                       // 502
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 503
//                                                                                                              //     // 504
// packages/aslagle:reactive-table/lib/reactive_table.js                                                        //     // 505
//                                                                                                              //     // 506
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 507
                                                                                                                //     // 508
var get = function(obj, field) {                                                                                // 1   // 509
  var keys = field.split('.');                                                                                  // 2   // 510
  var value = obj;                                                                                              // 3   // 511
                                                                                                                // 4   // 512
  _.each(keys, function (key) {                                                                                 // 5   // 513
      if (_.isObject(value) && _.isFunction(value[key])) {                                                      // 6   // 514
          value = value[key]();                                                                                 // 7   // 515
      } else if (_.isObject(value) && !_.isUndefined(value[key])) {                                             // 8   // 516
          value = value[key];                                                                                   // 9   // 517
      } else {                                                                                                  // 10  // 518
          value = null;                                                                                         // 11  // 519
      }                                                                                                         // 12  // 520
  });                                                                                                           // 13  // 521
                                                                                                                // 14  // 522
  return value;                                                                                                 // 15  // 523
};                                                                                                              // 16  // 524
                                                                                                                // 17  // 525
                                                                                                                // 18  // 526
var parseFilterString = function (filterString) {                                                               // 19  // 527
    var startQuoteRegExp = /^[\'\"]/;                                                                           // 20  // 528
    var endQuoteRegExp = /[\'\"]$/;                                                                             // 21  // 529
    var filters = [];                                                                                           // 22  // 530
    var words = filterString.split(' ');                                                                        // 23  // 531
                                                                                                                // 24  // 532
    var inQuote = false;                                                                                        // 25  // 533
    var quotedWord = '';                                                                                        // 26  // 534
    _.each(words, function (word) {                                                                             // 27  // 535
        if (inQuote) {                                                                                          // 28  // 536
            if (endQuoteRegExp.test(word)) {                                                                    // 29  // 537
                filters.push(quotedWord + ' ' + word.slice(0, word.length - 1));                                // 30  // 538
                inQuote = false;                                                                                // 31  // 539
                quotedWord = '';                                                                                // 32  // 540
            } else {                                                                                            // 33  // 541
                quotedWord = quotedWord + ' ' + word;                                                           // 34  // 542
            }                                                                                                   // 35  // 543
        } else if (startQuoteRegExp.test(word)) {                                                               // 36  // 544
            if (endQuoteRegExp.test(word)) {                                                                    // 37  // 545
                filters.push(word.slice(1, word.length - 1));                                                   // 38  // 546
            } else {                                                                                            // 39  // 547
                inQuote = true;                                                                                 // 40  // 548
                quotedWord = word.slice(1, word.length);                                                        // 41  // 549
            }                                                                                                   // 42  // 550
        } else {                                                                                                // 43  // 551
            filters.push(word);                                                                                 // 44  // 552
        }                                                                                                       // 45  // 553
    });                                                                                                         // 46  // 554
    return filters;                                                                                             // 47  // 555
};                                                                                                              // 48  // 556
                                                                                                                // 49  // 557
var getFilterQuery = function (filter, fields) {                                                                // 50  // 558
    var numberRegExp = /^\d+$/;                                                                                 // 51  // 559
    var queryList = [];                                                                                         // 52  // 560
    if (filter) {                                                                                               // 53  // 561
        var filters = parseFilterString(filter);                                                                // 54  // 562
        _.each(filters, function (filterWord) {                                                                 // 55  // 563
            var filterQueryList = [];                                                                           // 56  // 564
            _.each(fields, function (field) {                                                                   // 57  // 565
                var filterRegExp = new RegExp(filterWord, 'i');                                                 // 58  // 566
                var query = {};                                                                                 // 59  // 567
                query[field.key || field] = filterRegExp;                                                       // 60  // 568
                filterQueryList.push(query);                                                                    // 61  // 569
                                                                                                                // 62  // 570
                if (numberRegExp.test(filterWord)) {                                                            // 63  // 571
                    var numberQuery = {};                                                                       // 64  // 572
                    numberQuery[field.key || field] = parseInt(filterWord, 10);                                 // 65  // 573
                    filterQueryList.push(numberQuery)                                                           // 66  // 574
                }                                                                                               // 67  // 575
            });                                                                                                 // 68  // 576
            if (filterQueryList.length) {                                                                       // 69  // 577
                var filterQuery = {'$or': filterQueryList};                                                     // 70  // 578
                queryList.push(filterQuery);                                                                    // 71  // 579
            }                                                                                                   // 72  // 580
        });                                                                                                     // 73  // 581
    }                                                                                                           // 74  // 582
    return queryList.length ? {'$and': queryList} : {};                                                         // 75  // 583
};                                                                                                              // 76  // 584
                                                                                                                // 77  // 585
var updateFilter = _.debounce(function (template, filterText) {                                                 // 78  // 586
    template.context.filter.set(filterText);                                                                    // 79  // 587
    template.context.currentPage.set(0);                                                                        // 80  // 588
}, 200);                                                                                                        // 81  // 589
                                                                                                                // 82  // 590
                                                                                                                // 83  // 591
var getDefaultFalseSetting = function (key, templateData) {                                                     // 84  // 592
    if (!_.isUndefined(templateData[key]) &&                                                                    // 85  // 593
        templateData[key]) {                                                                                    // 86  // 594
        return true;                                                                                            // 87  // 595
    }                                                                                                           // 88  // 596
    if (!_.isUndefined(templateData.settings) &&                                                                // 89  // 597
        !_.isUndefined(templateData.settings[key]) &&                                                           // 90  // 598
        templateData.settings[key]) {                                                                           // 91  // 599
        return true;                                                                                            // 92  // 600
    }                                                                                                           // 93  // 601
    return false;                                                                                               // 94  // 602
};                                                                                                              // 95  // 603
                                                                                                                // 96  // 604
var getDefaultTrueSetting = function (key, templateData) {                                                      // 97  // 605
    if (!_.isUndefined(templateData[key]) &&                                                                    // 98  // 606
        !templateData[key]) {                                                                                   // 99  // 607
        return false;                                                                                           // 100
    }                                                                                                           // 101
    if (!_.isUndefined(templateData.settings) &&                                                                // 102
        !_.isUndefined(templateData.settings[key]) &&                                                           // 103
        !templateData.settings[key]) {                                                                          // 104
        return false;                                                                                           // 105
    }                                                                                                           // 106
    return true;                                                                                                // 107
};                                                                                                              // 108
                                                                                                                // 109
                                                                                                                // 110
                                                                                                                // 111
var setup = function () {                                                                                       // 112
    var context = {};                                                                                           // 113
    var oldContext = this.context || {};                                                                        // 114
    context.templateData = this.data;                                                                           // 115
    this.data.settings = this.data.settings || {};                                                              // 116
    var collection = this.data.collection || this.data.settings.collection || this.data;                        // 117
                                                                                                                // 118
    if (!(collection instanceof Meteor.Collection)) {                                                           // 119
        if (_.isArray(collection)) {                                                                            // 120
            // collection is an array                                                                           // 121
            // create a new collection from the data                                                            // 122
            var data = collection;                                                                              // 123
            collection = new Meteor.Collection(null);                                                           // 124
            _.each(data, function (doc) {                                                                       // 125
                collection.insert(doc);                                                                         // 126
            });                                                                                                 // 127
        } else if (_.isFunction(collection.fetch)) {                                                            // 128
            // collection is a cursor                                                                           // 129
            // create a new collection that will reactively update                                              // 130
            var cursor = collection;                                                                            // 131
            collection = new Meteor.Collection(null);                                                           // 132
                                                                                                                // 133
            // copy over transforms from collection-helper package                                              // 134
            collection._transform = cursor._transform;                                                          // 135
            collection._name = cursor.collection._name;                                                         // 136
                                                                                                                // 137
            var addedCallback = function (doc) {                                                                // 138
                collection.insert(doc);                                                                         // 139
            };                                                                                                  // 140
            var changedCallback = function (doc, oldDoc) {                                                      // 141
                collection.update(oldDoc._id, doc);                                                             // 142
            };                                                                                                  // 143
            var removedCallback = function (oldDoc) {                                                           // 144
                collection.remove(oldDoc._id);                                                                  // 145
            };                                                                                                  // 146
            cursor.observe({added: addedCallback, changed: changedCallback, removed: removedCallback});         // 147
        } else {                                                                                                // 148
            console.log("reactiveTable error: argument is not an instance of Meteor.Collection, a cursor, or an array");
            collection = new Meteor.Collection(null);                                                           // 150
        }                                                                                                       // 151
    }                                                                                                           // 152
    context.collection = collection;                                                                            // 153
                                                                                                                // 154
    var fields = this.data.fields || this.data.settings.fields || {};                                           // 155
    if (_.keys(fields).length < 1 ||                                                                            // 156
        (_.keys(fields).length === 1 &&                                                                         // 157
         _.keys(fields)[0] === 'hash')) {                                                                       // 158
        fields = _.without(_.keys(collection.findOne() || {}), '_id');                                          // 159
    }                                                                                                           // 160
                                                                                                                // 161
    var sortKey = 0;                                                                                            // 162
    var sortDirection = 1;                                                                                      // 163
                                                                                                                // 164
    var normalizeField = function (field) {                                                                     // 165
        if (typeof field === 'string') {                                                                        // 166
            return {key: field, label: field};                                                                  // 167
        } else {                                                                                                // 168
            return field;                                                                                       // 169
        }                                                                                                       // 170
    };                                                                                                          // 171
                                                                                                                // 172
    var parseField = function (field, i) {                                                                      // 173
        if (field.sort) {                                                                                       // 174
            sortKey = i;                                                                                        // 175
            if (field.sort === 'desc' || field.sort === 'descending'  || field.sort === -1) {                   // 176
                sortDirection = -1;                                                                             // 177
            }                                                                                                   // 178
        }                                                                                                       // 179
        return normalizeField(field);                                                                           // 180
    };                                                                                                          // 181
                                                                                                                // 182
    fields = _.map(fields, parseField);                                                                         // 183
    context.fields = fields;                                                                                    // 184
    context.sortKey = !_.isUndefined(oldContext.sortKey) ? oldContext.sortKey : new ReactiveVar(sortKey);       // 185
    context.sortDirection = !_.isUndefined(oldContext.sortDirection) ? oldContext.sortDirection : new ReactiveVar(sortDirection);
                                                                                                                // 187
    var visibleFields = [];                                                                                     // 188
    _.each(fields, function (field, i) {                                                                        // 189
        if (!field.hidden || (_.isFunction(field.hidden) && !field.hidden())) {                                 // 190
          visibleFields.push(i);                                                                                // 191
        }                                                                                                       // 192
    });                                                                                                         // 193
    context.visibleFields = (!_.isUndefined(oldContext.visibleFields) && !_.isEmpty(oldContext.visibleFields)) ? oldContext.visibleFields : new ReactiveVar(visibleFields);
                                                                                                                // 195
                                                                                                                // 196
    var rowClass = this.data.rowClass || this.data.settings.rowClass || function() {return ''};                 // 197
    if (typeof rowClass === 'string') {                                                                         // 198
        var tmp = rowClass;                                                                                     // 199
        rowClass = function(obj) { return tmp; };                                                               // 200
    }                                                                                                           // 201
    context.rowClass = rowClass;                                                                                // 202
                                                                                                                // 203
    context.class = this.data.class || this.data.settings.class || 'table table-striped table-hover col-sm-12'; // 204
    context.id = this.data.id || this.data.settings.id || _.uniqueId('reactive-table-');                        // 205
                                                                                                                // 206
    context.showNavigation = this.data.showNavigation || this.data.settings.showNavigation || 'always';         // 207
    context.showNavigationRowsPerPage = getDefaultTrueSetting('showNavigationRowsPerPage', this.data);          // 208
    context.rowsPerPage =  !_.isUndefined(oldContext.rowsPerPage) ? oldContext.rowsPerPage : new ReactiveVar(this.data.rowsPerPage || this.data.settings.rowsPerPage || 10);
    context.currentPage = !_.isUndefined(oldContext.currentPage) ? oldContext.currentPage : new ReactiveVar(0); // 210
                                                                                                                // 211
    context.filter = !_.isUndefined(oldContext.filter) ? oldContext.filter : new ReactiveVar(null);             // 212
    context.showFilter = getDefaultTrueSetting('showFilter', this.data);                                        // 213
                                                                                                                // 214
    context.showColumnToggles = getDefaultFalseSetting('showColumnToggles', this.data);                         // 215
                                                                                                                // 216
    if (_.isUndefined(this.data.useFontAwesome)) {                                                              // 217
        if (!_.isUndefined(this.data.settings.useFontAwesome)) {                                                // 218
            context.useFontAwesome = this.data.settings.useFontAwesome;                                         // 219
        } else if (!_.isUndefined(Package['fortawesome:fontawesome'])) {                                        // 220
            context.useFontAwesome = true;                                                                      // 221
        } else {                                                                                                // 222
            context.useFontAwesome = false;                                                                     // 223
        }                                                                                                       // 224
    } else {                                                                                                    // 225
        context.useFontAwesome = this.data.useFontAwesome;                                                      // 226
    }                                                                                                           // 227
    context.reactiveTableSetup = true;                                                                          // 228
                                                                                                                // 229
    this.context = context;                                                                                     // 230
};                                                                                                              // 231
                                                                                                                // 232
                                                                                                                // 233
var getPageCount = function () {                                                                                // 234
    var rowsPerPage = this.rowsPerPage.get();                                                                   // 235
    var filterQuery = getFilterQuery(this.filter.get(), this.fields);                                           // 236
    var count = this.collection.find(filterQuery).count();                                                      // 237
    return Math.ceil(count / rowsPerPage);                                                                      // 238
};                                                                                                              // 239
                                                                                                                // 240
                                                                                                                // 241
Template.reactiveTable.helpers({                                                                                // 242
                                                                                                                // 243
    'context': function () {                                                                                    // 244
        if (!Template.instance().context ||                                                                     // 245
            !_.isEqual(this, Template.instance().context.templateData)) {                                       // 246
            setup.call(Template.instance());                                                                    // 247
        }                                                                                                       // 248
        return Template.instance().context;                                                                     // 249
    },                                                                                                          // 250
                                                                                                                // 251
    'getField': function (object) {                                                                             // 252
        var fn = this.fn || function (value) { return value; };                                                 // 253
        var key = this.key || this;                                                                             // 254
        var value = get(object, key);                                                                           // 255
        return fn(value, object);                                                                               // 256
    },                                                                                                          // 257
                                                                                                                // 258
    'getFieldIndex': function () {                                                                              // 259
        return _.indexOf(Template.parentData(1).fields, this);                                                  // 260
    },                                                                                                          // 261
                                                                                                                // 262
    'getKey': function () {                                                                                     // 263
        return this.key || this;                                                                                // 264
    },                                                                                                          // 265
                                                                                                                // 266
    'getLabel': function () {                                                                                   // 267
        return _.isString(this.label) ? this.label : this.label();                                              // 268
    },                                                                                                          // 269
                                                                                                                // 270
    'isSortKey': function () {                                                                                  // 271
        var parentData = Template.parentData(1);                                                                // 272
        return parentData.sortKey.get() == _.indexOf(parentData.fields, this);                                  // 273
    },                                                                                                          // 274
                                                                                                                // 275
    'isSortable': function () {                                                                                 // 276
        return (this.sortable == undefined) ? true : this.sortable;                                             // 277
    },                                                                                                          // 278
                                                                                                                // 279
    'isVisible': function () {                                                                                  // 280
        var topLevelData;                                                                                       // 281
        if (Template.parentData(2) && Template.parentData(2).reactiveTableSetup) {                              // 282
          topLevelData = Template.parentData(2);                                                                // 283
        } else {                                                                                                // 284
          topLevelData = Template.parentData(1);                                                                // 285
        }                                                                                                       // 286
        var visibleFields = topLevelData.visibleFields;                                                         // 287
        var fields = topLevelData.fields;                                                                       // 288
        return _.include(visibleFields.get(), _.indexOf(fields, this));                                         // 289
    },                                                                                                          // 290
                                                                                                                // 291
    'isAscending' : function () {                                                                               // 292
        var sortDirection = Template.parentData(1).sortDirection.get();                                         // 293
        return (sortDirection === 1);                                                                           // 294
    },                                                                                                          // 295
                                                                                                                // 296
    'sortedRows': function () {                                                                                 // 297
        var sortDirection = this.sortDirection.get();                                                           // 298
        var sortKeyIndex = this.sortKey.get();                                                                  // 299
        var sortKeyField = this.fields[sortKeyIndex] || {};                                                     // 300
                                                                                                                // 301
        var limit = this.rowsPerPage.get();                                                                     // 302
        var currentPage = this.currentPage.get();                                                               // 303
        var skip = currentPage * limit;                                                                         // 304
        var filterQuery = getFilterQuery(this.filter.get(), this.fields);                                       // 305
                                                                                                                // 306
        if (sortKeyField.fn && !sortKeyField.sortByValue) {                                                     // 307
            var data = this.collection.find(filterQuery).fetch();                                               // 308
            var sorted =_.sortBy(data, function (object) {                                                      // 309
                return sortKeyField.fn(object[sortKeyField.key], object);                                       // 310
            });                                                                                                 // 311
            if (sortDirection === -1) {                                                                         // 312
                sorted = sorted.reverse();                                                                      // 313
            }                                                                                                   // 314
            return sorted.slice(skip, skip + limit);                                                            // 315
        } else {                                                                                                // 316
            var sortKey = sortKeyField.key || sortKeyField;                                                     // 317
            var sortQuery = {};                                                                                 // 318
            sortQuery[sortKey] = sortDirection;                                                                 // 319
                                                                                                                // 320
            return this.collection.find(filterQuery, {                                                          // 321
                sort: sortQuery,                                                                                // 322
                skip: skip,                                                                                     // 323
                limit: limit                                                                                    // 324
            });                                                                                                 // 325
        }                                                                                                       // 326
    },                                                                                                          // 327
                                                                                                                // 328
    'filter' : function () {                                                                                    // 329
        return this.filter.get() || '';                                                                         // 330
    },                                                                                                          // 331
                                                                                                                // 332
    'getPageCount' : getPageCount,                                                                              // 333
                                                                                                                // 334
    'getRowsPerPage' : function () {                                                                            // 335
        return this.rowsPerPage.get();                                                                          // 336
    },                                                                                                          // 337
                                                                                                                // 338
    'getCurrentPage' : function () {                                                                            // 339
        return 1 + this.currentPage.get();                                                                      // 340
    },                                                                                                          // 341
                                                                                                                // 342
    'isntFirstPage' : function () {                                                                             // 343
        return this.currentPage.get() > 0;                                                                      // 344
    },                                                                                                          // 345
                                                                                                                // 346
    'isntLastPage' : function () {                                                                              // 347
        var currentPage = 1 + this.currentPage.get();                                                           // 348
        var rowsPerPage = this.rowsPerPage.get();                                                               // 349
        var filterQuery = getFilterQuery(this.filter.get(), this.fields);                                       // 350
        var count = this.collection.find(filterQuery).count();                                                  // 351
        return currentPage < Math.ceil(count / rowsPerPage);                                                    // 352
    },                                                                                                          // 353
                                                                                                                // 354
    'showNavigation' : function () {                                                                            // 355
        if (this.showNavigation === 'always') return true;                                                      // 356
        if (this.showNavigation === 'never') return false;                                                      // 357
        return getPageCount.call(this) > 1;                                                                     // 358
    }                                                                                                           // 359
});                                                                                                             // 360
                                                                                                                // 361
Template.reactiveTable.events({                                                                                 // 362
    'click .reactive-table .sortable': function (event) {                                                       // 363
        var template = Template.instance();                                                                     // 364
        var target = $(event.target).is('i') ? $(event.target).parent() : $(event.target);                      // 365
        var sortIndex = parseInt(target.attr('index'), 10);                                                     // 366
        var currentSortIndex = template.context.sortKey.get();                                                  // 367
        if (currentSortIndex === sortIndex) {                                                                   // 368
            var sortDirection = -1 * template.context.sortDirection.get();                                      // 369
            template.context.sortDirection.set(sortDirection);                                                  // 370
        } else {                                                                                                // 371
            template.context.sortKey.set(sortIndex);                                                            // 372
        }                                                                                                       // 373
    },                                                                                                          // 374
                                                                                                                // 375
    'change .reactive-table-columns-dropdown input': function (event) {                                         // 376
        var template = Template.instance();                                                                     // 377
        var target = $(event.target);                                                                           // 378
        var index = parseInt(target.attr('index'), 10);                                                         // 379
        var currentVisibleFields = template.context.visibleFields.get()                                         // 380
        if (_.include(currentVisibleFields, index)) {                                                           // 381
            template.context.visibleFields.set(_.without(currentVisibleFields, index));                         // 382
        } else {                                                                                                // 383
            template.context.visibleFields.set(currentVisibleFields.concat(index));                             // 384
        }                                                                                                       // 385
    },                                                                                                          // 386
                                                                                                                // 387
    'keyup .reactive-table-filter .reactive-table-input, input .reactive-table-filter .reactive-table-input': function (event) {
        var template = Template.instance();                                                                     // 389
        var filterText = $(event.target).val();                                                                 // 390
        updateFilter(template, filterText);                                                                     // 391
    },                                                                                                          // 392
                                                                                                                // 393
    'change .reactive-table-navigation .rows-per-page input': function (event) {                                // 394
        var rowsPerPage = Math.max(~~$(event.target).val(), 1);                                                 // 395
        Template.instance().context.rowsPerPage.set(rowsPerPage);                                               // 396
        $(event.target).val(rowsPerPage);                                                                       // 397
    },                                                                                                          // 398
                                                                                                                // 399
    'change .reactive-table-navigation .page-number input': function (event) {                                  // 400
        var currentPage = Math.max(~~$(event.target).val(), 1);                                                 // 401
        var pageCount = getPageCount.call(this);                                                                // 402
        if (currentPage > pageCount) {                                                                          // 403
          currentPage = pageCount;                                                                              // 404
        }                                                                                                       // 405
        if (currentPage < 0) {                                                                                  // 406
          currentPage = 1;                                                                                      // 407
        }                                                                                                       // 408
        Template.instance().context.currentPage.set(currentPage - 1);                                           // 409
        $(event.target).val(currentPage);                                                                       // 410
    },                                                                                                          // 411
                                                                                                                // 412
    'click .reactive-table-navigation .previous-page': function (event) {                                       // 413
        var template = Template.instance();                                                                     // 414
        var currentPage = template.context.currentPage.get();                                                   // 415
        template.context.currentPage.set(currentPage - 1);                                                      // 416
    },                                                                                                          // 417
                                                                                                                // 418
    'click .reactive-table-navigation .next-page': function (event) {                                           // 419
        var template = Template.instance();                                                                     // 420
        var currentPage = template.context.currentPage.get();                                                   // 421
        template.context.currentPage.set(currentPage + 1);                                                      // 422
    }                                                                                                           // 423
});                                                                                                             // 424
                                                                                                                // 425
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////     // 934
                                                                                                                       // 935
}).call(this);                                                                                                         // 936
                                                                                                                       // 937
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['aslagle:reactive-table'] = {};

})();
