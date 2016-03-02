(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// startup/security.js                                                 //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.startup(function () {                                           // 1
  Security.permit(['insert', 'update']).collections([Attendee]).ifLoggedIn().apply();
  Security.permit(['insert', 'update']).collections([Meteor.users]).apply();
  Security.permit(['insert', 'update']).collections([CalEvent]).ifLoggedIn().apply();
  Security.permit(['insert']).collections([Search]).apply();           // 5
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=security.js.map
