Router.configure({
  layoutTemplate: 'masterLayout'
});

Router.route('/', {name: 'home'});

Router.route('/calendar', function () {
  this.render('calendar');
});

Router.route('/account', function () {
  this.render('account');
});

Router.route('/profileEdit', {name: 'profileEdit'});

Router.route('/myclasses', {name: 'myEvent'});