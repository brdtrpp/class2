(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// startup/startup.js                                                  //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.startup(function () {                                           // 1
  Security.permit(['insert', 'update']).collections([Attendee]).apply();
  Security.permit(['insert', 'update', 'remove']).collections([Meteor.users]).apply();
  Security.permit(['insert', 'update', 'remove']).collections([CalEvent]).apply();
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=startup.js.map
