Router.configure({
  layoutTemplate: 'masterLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: '404',
  waitOn: function() {
    return [Meteor.subscribe('calevent'), Meteor.subscribe('attendee')];
  },
});

var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
    } else {
    this.next();
  }
};

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
Router.route('/classes', {name: 'eventSearch'});
Router.route('/register', {name: 'register'});
Router.route('/new-class', {name: 'eventInsert'});
Router.route('/user/:username', {
  name: 'profile',
  data: function() {
    if (Meteor.user({username: this.username}) != undefined) {
      return Meteor.users.find({username: this.username});
    } else {
      return Meteor.users.find({_id: this.params._id});
    }
  }
});

Router.route('/class/:_id', {
  name: 'eventItem',
  data: function() {
    return CalEvent.findOne(this.params._id);
  },
});

Router.onBeforeAction('dataNotFound', {only: 'eventItem'});
Router.onBeforeAction(requireLogin, {only: [
  'getPaid',
  'payout',
  'profileEdit',
  'myEvent',
  'myAttend',
  'account'
]});


