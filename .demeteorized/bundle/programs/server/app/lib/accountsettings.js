(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/accountsettings.js                                              //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
AccountsTemplates.configureRoute('signIn', {                           // 1
    name: 'signin',                                                    // 2
    path: '/login',                                                    // 3
    layoutTemplate: 'masterLayout',                                    // 4
    redirect: '/user-profile'                                          // 5
});                                                                    //
                                                                       //
AccountsTemplates.configure({                                          // 8
    termsUrl: '/terms',                                                // 9
    showForgotPasswordLink: true,                                      // 10
    sendVerificationEmail: true,                                       // 11
    overrideLoginErrors: false,                                        // 12
    enablePasswordChange: true,                                        // 13
    lowercaseUsername: true                                            // 14
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=accountsettings.js.map
