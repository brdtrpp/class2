Accounts.emailTemplates.siteName = "Class";
Accounts.emailTemplates.from = "Class Support <support@joinclass.co>";
Accounts.emailTemplates.enrollAccount.subject = function () {
    return "Welcome to Class";
};
Accounts.emailTemplates.enrollAccount.text = function (user, url) {
   return "You have been selected to participate in building a better future!"
     + " To activate your account, simply click the link below:\n\n"
     + url;
};