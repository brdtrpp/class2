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

Router.route('/user-profile', {name: 'profileEdit'});

Router.route('/classes', {name: 'myEvent'});

Router.route('/class/:_id', {  
  name: 'eventItem',
  data: function() {
    return CalEvent.findOne(this.params._id); 
  },
});

Router.route('/terms', {name: 'terms'});
Router.route('/stripeconnect', {name: 'stripeConnect'})