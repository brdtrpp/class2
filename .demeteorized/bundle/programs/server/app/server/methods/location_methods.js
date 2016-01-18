(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/methods/location_methods.js                                  //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.methods({                                                       // 1
  search: function (doc) {                                             // 2
    var events = [];                                                   // 3
    var c = doc.city;                                                  // 4
    var s = doc.state;                                                 // 5
                                                                       //
    var l = Zipcodes.lookupByName(c, s);                               // 7
    if (l[0] === undefined) {                                          // 8
      throw new Meteor.Error("Check your location!");                  // 9
    } else {                                                           //
      var rad = Zipcodes.radius(l[0].zip, doc.radius);                 // 11
      _.forEach(rad, function (item) {                                 // 12
        var event = CalEvent.find({ zip: item }).fetch();              // 13
        _.forEach(event, function (items) {                            // 14
          if (_.findWhere(events, { _id: items._id }) === undefined) {
            events.push(items);                                        // 16
          }                                                            //
        });                                                            //
      });                                                              //
      return events;                                                   // 20
    }                                                                  //
  }                                                                    //
                                                                       //
  // var zipPatt = new RegExp(/^[0-9]{5}$/);                           //
  // var cityStatePatt = new RegExp(/[a-zA-ZáéíóúàèìòùãõâêôüçÁÉÍÓÚÀÈÌÒÙÂÊÔÃÕÜÇ\s]{1,32}[\s]*,[\s]*[A-Za-z]{2}/);
  // var zip = zipPatt.test(doc.location);                             //
                                                                       //
  // if (zip) {                                                        //
  //   var rad = Zipcodes.radius(doc.location, doc.radius);            //
  //   _.forEach(rad, function(item){                                  //
  //     var event = CalEvent.find({zip: item}).fetch();               //
  //     _.forEach(event, function(items){                             //
  //       events.push(items);                                         //
  //     });                                                           //
  //   });                                                             //
                                                                       //
  // } else if (cityStatePatt){                                        //
  //   var strip = doc.location.trim();                                //
  //   var comma = ',';                                                //
  //   var loc = strip.split(comma, 2);                                //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=location_methods.js.map
