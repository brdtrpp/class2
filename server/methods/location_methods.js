Meteor.methods({
  search: function(doc) {
    var zipPatt = new RegExp(/^[0-9]{5}$/);
    var cityStatePatt = new RegExp(/[a-zA-ZáéíóúàèìòùãõâêôüçÁÉÍÓÚÀÈÌÒÙÂÊÔÃÕÜÇ\s]{1,32}[\s]*,[\s]*[A-Za-z]{2}/);
    var zip = zipPatt.test(doc.location);
    var events = [];
    if (zip) {
      var rad = Zipcodes.radius(doc.location, doc.radius);
      _.forEach(rad, function(item){
        var event = CalEvent.find({zip: item}).fetch();
        _.forEach(event, function(items){
          events.push(items);
        });
      });

    } else if (cityStatePatt){
      var strip = doc.location.trim();
      var comma = ',';
      var loc = strip.split(comma, 2);
      var c = loc[0].trim();
      var s = loc[1].trim();
      
      var l = Zipcodes.lookupByName(c, s);
      _.forEach(l, function(item){
        var rad = Zipcodes.radius(item.zip, doc.radius);
        _.forEach(rad, function(item){
          var event = CalEvent.find({zip: item}).fetch();
          _.forEach(event, function(items){
            events.push(items);
          });
        });
      });

      
      // console.log(l);
    }
    return events;
  }
});