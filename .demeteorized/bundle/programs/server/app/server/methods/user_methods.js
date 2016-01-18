(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/methods/user_methods.js                                      //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.methods({                                                       // 1
    getIP: function () {                                               // 2
        var ip = this.connection.clientAddress;                        // 3
        return ip;                                                     // 4
    }                                                                  //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=user_methods.js.map
