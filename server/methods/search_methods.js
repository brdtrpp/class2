Meteor.methods({
  'search': function(doc) {
    var events = [];
    var cities = [];
    doc.owner = Meteor.userId();
    doc.createdAt = moment()._d;

    //set radial distant from zipcode
    var rad = Zipcodes.radius(doc.zip, doc.radius);
    _.forEach(rad, function(zip){



      var loc = Zipcodes.lookup(zip);

      if(_.findWhere(cities, {city: loc.city, state: loc.state}) === undefined) {
        cities.push({city: loc.city, state: loc.state});
      }



      if (doc.keyword) {
        var event = CalEvent.find({category: doc.category, zip: zip, canceled: false, $text: { $search: doc.keyword }}).fetch();
      } else {
        var event = CalEvent.find({category: doc.category, zip: zip, canceled: false}).fetch();
      }

      _.forEach(event, function(items){
        if (_.findWhere(events, {_id: items._id}) === undefined) {
          events.push(items);
        }
      });
    });
      // Craigslist functions //

    var craigslist = require('node-craigslist');

    _.forEach(cities, function(item) {

      var client = craigslist({});

      options = {
        city : item.city,
        category : 'cls'
      };

      client.search(options, ' ' , function (err, listings) {
        if (err) {
          // console.log(err);
        }
        if (listings != undefined) {
          var cutList = listings.slice(0, 14);
          _.forEach(cutList, function(item) {
            if (_.findWhere(events, {pid: item.pid}) === undefined) {
              events.push(item);
            }
          });
        }
      });
    });

    Search.insert(doc);

    var response = Async.runSync(function(done) {
      setTimeout(function() {
        done(null, 1001);
      }, 1500);
    });

    console.log(response);
    return _.sortBy(events, 'start');
  },
});