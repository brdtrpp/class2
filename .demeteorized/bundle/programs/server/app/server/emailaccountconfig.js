(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/emailaccountconfig.js                                        //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Accounts.emailTemplates.siteName = "Class";                            // 1
Accounts.emailTemplates.from = "Class Support <support@joinclass.co>";
Accounts.emailTemplates.enrollAccount.subject = function () {          // 3
    return "Welcome to Class";                                         // 4
};                                                                     //
Accounts.emailTemplates.enrollAccount.text = function (user, url) {    // 6
    return "You have been selected to participate in building a better future!" + " To activate your account, simply click the link below:\n\n" + url;
};                                                                     //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=emailaccountconfig.js.map
