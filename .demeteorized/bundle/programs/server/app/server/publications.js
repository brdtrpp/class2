(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/publications.js                                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.publish('calevent', function () {                               // 1
  return CalEvent.find();                                              // 2
});                                                                    //
                                                                       //
Meteor.publish('attendee', function () {                               // 5
  return Attendee.find();                                              // 6
});                                                                    //
                                                                       //
Meteor.publish('allUsers', function () {                               // 9
  return Meteor.users.find();                                          // 10
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=publications.js.map
