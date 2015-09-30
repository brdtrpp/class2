Router.configure({
  layoutTemplate: 'masterLayout'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/calendar', function () {
  this.render('calendar');
});