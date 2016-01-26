Meteor.methods({
  search: function(doc) {
    var events = [];
    var c = doc.city;
    var s = doc.state;

    var l = Zipcodes.lookupByName(c, s);
    if (l[0] === undefined) {
      throw new Meteor.Error("Check your location!");
    } else {
    var rad = Zipcodes.radius(l[0].zip, doc.radius);
      _.forEach(rad, function(item){
        var event = CalEvent.find({zip: item, canceled: false}).fetch();
        _.forEach(event, function(items){
          if (_.findWhere(events, {_id: items._id}) === undefined) {
            events.push(items);
          }
        });
      });
    return events;
    }
  }



    // var zipPatt = new RegExp(/^[0-9]{5}$/);
    // var cityStatePatt = new RegExp(/[a-zA-ZáéíóúàèìòùãõâêôüçÁÉÍÓÚÀÈÌÒÙÂÊÔÃÕÜÇ\s]{1,32}[\s]*,[\s]*[A-Za-z]{2}/);
    // var zip = zipPatt.test(doc.location);

    // if (zip) {
    //   var rad = Zipcodes.radius(doc.location, doc.radius);
    //   _.forEach(rad, function(item){
    //     var event = CalEvent.find({zip: item}).fetch();
    //     _.forEach(event, function(items){
    //       events.push(items);
    //     });
    //   });

    // } else if (cityStatePatt){
    //   var strip = doc.location.trim();
    //   var comma = ',';
    //   var loc = strip.split(comma, 2);
});