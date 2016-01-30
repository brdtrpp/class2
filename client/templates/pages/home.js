Template.home.helpers({
  ip: function() {
    var city = geoplugin_city();
    console.log(city);
    return city;
  },
  
  isCordova: function() {
    return Meteor.isCordova;
  }
});

