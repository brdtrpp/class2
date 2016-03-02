(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/methods/search_methods.js                                    //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.methods({                                                       // 1
  search: function (doc) {                                             // 2
    var events = [];                                                   // 3
    doc.owner = Meteor.userId();                                       // 4
    doc.createdAt = moment()._d;                                       // 5
                                                                       //
    var rad = Zipcodes.radius(doc.zip, doc.radius);                    // 7
    _.forEach(rad, function (zip) {                                    // 8
      if (doc.keyword) {                                               // 9
        var event = CalEvent.find({ category: doc.category, zip: zip, canceled: false, $text: { $search: doc.keyword } }).fetch();
      } else {                                                         //
        var event = CalEvent.find({ category: doc.category, zip: zip, canceled: false }).fetch();
      }                                                                //
      _.forEach(event, function (items) {                              // 14
        if (_.findWhere(events, { _id: items._id }) === undefined) {   // 15
          events.push(items);                                          // 16
        }                                                              //
      });                                                              //
    });                                                                //
    return _.sortBy(events, 'start');                                  // 20
  },                                                                   //
                                                                       //
  'cSearch': function (doc) {                                          // 23
    console.log(doc);                                                  // 24
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=search_methods.js.map
