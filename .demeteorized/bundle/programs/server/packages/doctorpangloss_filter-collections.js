(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var _ = Package.underscore._;

/* Package-scope variables */
var FilterCollections;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/doctorpangloss_filter-collections/packages/doctorpangloss_filter-collections.js                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/doctorpangloss:filter-collections/filter-collections-server.js                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
FilterCollections = {};                                                                                             // 1
                                                                                                                    // 2
FilterCollections._extendedPublishCursor = function (cursor, sub, collection, name) {                               // 3
    var observeHandle = cursor.observeChanges({                                                                     // 4
        added: function (id, fields) {                                                                              // 5
            // Add the name of this filter collection                                                               // 6
            if (name) {                                                                                             // 7
                fields.__filter = name;                                                                             // 8
            }                                                                                                       // 9
            sub.added(collection, id, fields);                                                                      // 10
        },                                                                                                          // 11
        changed: function (id, fields) {                                                                            // 12
            if (name) {                                                                                             // 13
                fields.__filter = name;                                                                             // 14
            }                                                                                                       // 15
            sub.changed(collection, id, fields);                                                                    // 16
        },                                                                                                          // 17
        removed: function (id) {                                                                                    // 18
            sub.removed(collection, id);                                                                            // 19
        }                                                                                                           // 20
    });                                                                                                             // 21
                                                                                                                    // 22
    // We don't call sub.ready() here: it gets called in livedata_server, after                                     // 23
    // possibly calling _publishCursor on multiple returned cursors.                                                // 24
                                                                                                                    // 25
    // register stop callback (expects lambda w/ no args).                                                          // 26
    sub.onStop(function () {                                                                                        // 27
        observeHandle.stop();                                                                                       // 28
    });                                                                                                             // 29
};                                                                                                                  // 30
                                                                                                                    // 31
FilterCollections.publish = function (collection, options) {                                                        // 32
    var optionalFunction = Match.Optional(Function);                                                                // 33
                                                                                                                    // 34
    check(collection, Mongo.Collection);                                                                            // 35
    var optionalString = Match.Optional(String);                                                                    // 36
    check(options, Match.Optional({                                                                                 // 37
        name: optionalString,                                                                                       // 38
        callbacks: Match.Optional({                                                                                 // 39
            allow: optionalFunction,                                                                                // 40
            beforePublish: optionalFunction,                                                                        // 41
            afterPublish: optionalFunction                                                                          // 42
        })                                                                                                          // 43
    }));                                                                                                            // 44
    options = options || {};                                                                                        // 45
    var callbacks = options.callbacks || {};                                                                        // 46
                                                                                                                    // 47
    _.defaults(options, {                                                                                           // 48
        name: collection._name                                                                                      // 49
    });                                                                                                             // 50
                                                                                                                    // 51
    var publisherResultsCollectionName = options.name;                                                              // 52
    var publisherResultsId = 'fc-' + options.name + '-results';                                                     // 53
    var publisherCountId = 'fc-' + options.name + '-count';                                                         // 54
    var publisherCountCollectionName = options.name + 'CountFC';                                                    // 55
                                                                                                                    // 56
    /**                                                                                                             // 57
     * Publish query results.                                                                                       // 58
     */                                                                                                             // 59
                                                                                                                    // 60
    Meteor.publish(publisherResultsId, function (query) {                                                           // 61
        var self = this;                                                                                            // 62
        var allow = true;                                                                                           // 63
                                                                                                                    // 64
        // Check if this publish is allowed.                                                                        // 65
        if (callbacks.allow) {                                                                                      // 66
            allow = callbacks.allow(query, this);                                                                   // 67
        }                                                                                                           // 68
                                                                                                                    // 69
        if (!allow) {                                                                                               // 70
            throw new Meteor.Error(417, 'Not allowed');                                                             // 71
        }                                                                                                           // 72
                                                                                                                    // 73
        query = query || {};                                                                                        // 74
                                                                                                                    // 75
        _.defaults(query, {                                                                                         // 76
            selector: {},                                                                                           // 77
            options: {}                                                                                             // 78
        });                                                                                                         // 79
                                                                                                                    // 80
        _.defaults(query.options, {                                                                                 // 81
            sort: [],                                                                                               // 82
            skip: 0,                                                                                                // 83
            limit: 10                                                                                               // 84
        });                                                                                                         // 85
                                                                                                                    // 86
        if (callbacks.beforePublish) {                                                                              // 87
            query = callbacks.beforePublish(query, this) || query;                                                  // 88
        }                                                                                                           // 89
                                                                                                                    // 90
                                                                                                                    // 91
        var cursor = collection.find(query.selector, query.options);                                                // 92
                                                                                                                    // 93
        if (callbacks.afterPublish) {                                                                               // 94
            cursor = callbacks.afterPublish('results', cursor, this) || cursor;                                     // 95
        }                                                                                                           // 96
                                                                                                                    // 97
        FilterCollections._extendedPublishCursor(cursor, this, publisherResultsCollectionName, publisherResultsId); // 98
                                                                                                                    // 99
        // Call ready since the extended publish cursor, like the official publish cursor version, does not call    // 100
        // ready by itself.                                                                                         // 101
        self.ready();                                                                                               // 102
    });                                                                                                             // 103
                                                                                                                    // 104
    /**                                                                                                             // 105
     * Publish result count.                                                                                        // 106
     */                                                                                                             // 107
                                                                                                                    // 108
    Meteor.publish(publisherCountId, function (query) {                                                             // 109
        var self = this;                                                                                            // 110
        var allow = true;                                                                                           // 111
        var cursor = {};                                                                                            // 112
                                                                                                                    // 113
        if (callbacks.allow                                                                                         // 114
            && _.isFunction(callbacks.allow)) {                                                                     // 115
            allow = callbacks.allow(query, this);                                                                   // 116
        }                                                                                                           // 117
                                                                                                                    // 118
        if (!allow) {                                                                                               // 119
            throw new Meteor.Error(417, 'Not allowed');                                                             // 120
        }                                                                                                           // 121
                                                                                                                    // 122
        query = query || {};                                                                                        // 123
        _.defaults(query, {                                                                                         // 124
            selector: {}                                                                                            // 125
        });                                                                                                         // 126
                                                                                                                    // 127
        if (callbacks.beforePublish) {                                                                              // 128
            query = callbacks.beforePublish(query, this) || query;                                                  // 129
        }                                                                                                           // 130
                                                                                                                    // 131
        var count = collection.find(query.selector).count() || 0;                                                   // 132
                                                                                                                    // 133
        if (callbacks.afterPublish) {                                                                               // 134
            cursor = callbacks.afterPublish('count', cursor, this) || cursor;                                       // 135
        }                                                                                                           // 136
                                                                                                                    // 137
        self.added(publisherCountCollectionName, Meteor.uuid(), {                                                   // 138
            count: count,                                                                                           // 139
            query: query                                                                                            // 140
        });                                                                                                         // 141
                                                                                                                    // 142
        self.ready();                                                                                               // 143
    });                                                                                                             // 144
};                                                                                                                  // 145
                                                                                                                    // 146
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 156
}).call(this);                                                                                                         // 157
                                                                                                                       // 158
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['doctorpangloss:filter-collections'] = {
  FilterCollections: FilterCollections
};

})();

//# sourceMappingURL=doctorpangloss_filter-collections.js.map
