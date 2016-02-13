AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/login',
    layoutTemplate: 'masterLayout',
    redirect: '/user-profile',
});

AccountsTemplates.configure({
    termsUrl: '/terms',
    showForgotPasswordLink: true,
    sendVerificationEmail: true,
    overrideLoginErrors: false,
    enablePasswordChange: true,
    lowercaseUsername: true
});