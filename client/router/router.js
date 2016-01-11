Router.configure({
  layoutTemplate: 'masterLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'four0',
  waitOn: function() {
    return [Meteor.subscribe('calevent'), Meteor.subscribe('attendee')];
  },
  onBeforeAction: function () {
    Session.set('page', Router.current().route.getName());
    this.next();
  }
});

var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
    } else {
    this.next();
  }
};

Router.route('/home/:id?', {
  name: 'home',
  onRun: function () {
    var id = this.params.id;
    console.log(id);
    this.next();
  },
});


Router.route('/calendar', {
  name: 'calendar',
  onBeforeAction: function () {
    Session.set('search', true);
    this.next();
  }
});

Router.route('/account', function () {
  this.render('account');
});

Router.route('/account-dashboard', {
  name: 'getPaid',
});
Router.route('/payment-method', {name: 'payout'});
Router.route('/user-profile', {name: 'profileEdit'});
Router.route('/my-classes', {
  name: 'myEvent',
});
Router.route('/my-attend', {name: 'myAttend'});
Router.route('/terms', {name: 'terms'});
Router.route('/classes', {
  name: 'eventSearch',
});
Router.route('/register', {name: 'register'});
Router.route('/new-class', {name: 'eventInsert'});
Router.route('/user/:username', {
  name: 'profile',
  data: function() {
    if (Meteor.user.find({username: this.params.id}).count() == 1) {
      return Meteor.users.find({username: this.params.id});
    } else {
      return Meteor.users.find({_id: this.params.id});
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


