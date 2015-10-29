Router.configure({
  layoutTemplate: 'masterLayout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return [Meteor.subscribe('calevent'), Meteor.subscribe('attendee')];
  },
});

Router.route('/', {name: 'home'});

Router.route('/calendar', function () {
  this.render('calendar');
});

Router.route('/account', function () {
  this.render('account');
});

Router.route('/account-dashboard', {name: 'getPaid'});
Router.route('/payment-method', {name: 'payout'});
Router.route('/user-profile', {name: 'profileEdit'});
Router.route('/my-classes', {name: 'myEvent'});
Router.route('/my-attend', {name: 'myAttend'});
Router.route('/terms', {name: 'terms'});

Router.route('/class/:_id', {
  name: 'eventItem',
  data: function() {
    return CalEvent.findOne(this.params._id);
  },
});


