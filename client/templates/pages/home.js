Template.home.helpers({
  ip: function() {
    var city = geoplugin_city();
    console.log(city);
    return city;
  },
});

