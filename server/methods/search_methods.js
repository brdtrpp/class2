Meteor.methods({
  'search': function(doc) {
    var craigslist = require('node-craigslist');
    var Nbrite = require('nbrite');
    var Meetup = require('meetup-api');

    var events = [];
    var cities = [];
    doc.owner = Meteor.userId();
    doc.createdAt = moment()._d;

    //set radial distant from zipcode
    var rad = Zipcodes.radius(doc.zip, doc.radius);
    _.forEach(rad, function(zip){
      // console.log(zip);

      var craigslistLoc = _.findWhere(zipcodeArray, {zip: zip});
      // var loc = Zipcodes.lookup(zip);

      // console.log(craigslistLoc);
      if (craigslistLoc != undefined) {
        if( _.findWhere(cities, {city: craigslistLoc.city}) === undefined) {
          cities.push({city: craigslistLoc.city});
        }
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

    // Craigslist functions
    _.forEach(cities, function(item) {

      var client = craigslist({});

      options = {
        city : item.city,
        category : 'cls'
      };

      client.search(options, doc.category , function (err, listings) {
        if (err) {
          // console.log(err);
        }
        if (listings != undefined) {
          var cutList = listings.slice(0, 14);
          _.forEach(cutList, function(item) {
            if (_.findWhere(events, {pid: item.pid}) === undefined) {
              item.url = item.url.replace(/(https?:\/\/)?([\da-zA-Z\.-]+)\.([a-z\.]{2,6})(\/\/)/g, 'https://');
              item.location = item.location.replace(/[^a-zA-Z0-9_-]+[a-z]{3}[^a-zA-Z0-9_-]>[^a-zA-Z0-9_-]/g, '');
              events.push(item);
            }
          });
        }
      });
    });
    // End Craigslist //

    // Start Eventbrite //
    var nbrite = new Nbrite({token: "RO5ULF6LWEEJKUGQZHYD"});

    var queryNbrite = {
      'q': doc.category + " class",
      'location.address': doc.zip,
      'location.within': doc.radius + 'mi',
      'search_type': 'class',
      'sort_by': 'best'
    };

    nbrite.events().search(queryNbrite, function (err, data) {
      var searchResult = data.events.slice(0, 25);

      searchResult.forEach(function(item, i, arr) {
        // console.log(item);
        events.push({
          description: item.description.html,
          start: item.start.utc,
          end: item.end.utc,
          location: item.start.timezone,
          pid: item.id,
          price: null,
          title: item.name.text,
          url: item.url,
          category: doc.category
        });
      });
    });
    // End Eventbrite //

    //Start Meetup //
    var meetup = new Meetup({
      key: "3d6a3e706f72216d3b71582a76495ee"
    });

    var queryMeetup = {
      text: doc.category + " class",
      zip: doc.zip,
      radius: doc.radius,
      page: 15
    };

    meetup.getOpenEvents(queryMeetup, function(err, data) {
      data.results.forEach(function(item, i, arr) {

        var city = item.venue ? item.venue.city : "";

        events.push({
          description: item.description,
          start: item.time,
          end: false,
          location: city,
          pid: item.id,
          price: null,
          title: item.name,
          url: item.event_url,
          category: doc.category
        });
      });
    });
    // //End Meetup //

    Search.insert(doc);

    var response = Async.runSync(function(done) {
      setTimeout(function() {
        done(null, 1001);
      }, 3000);
    });

    // console.log(response);
    if (events.length > 0 ) {
      return _.sortBy(events, 'start');
    } else {
      events.push({_id: "NoClass"});
      return events;
    }

  },
});
