Meteor.methods({
  getLocationByZipcode: function(zipcode){
    console.log("TOAST");
    console.log(zipcode);
    return Zipcodes.radius(zipcode, 50);
  },
});