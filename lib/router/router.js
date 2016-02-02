Router.configure({
  layoutTemplate: 'masterLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'four0',
  waitOn: function() {
    return [Meteor.subscribe('calevent'), Meteor.subscribe('attendee')];
  },
  onBeforeAction: function () {
    Session.set('page', Router.current().route.getName());
    var id = Meteor.userId();
    Meteor.call('unselect', id);
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

Router.route('/calendar', {
  name: 'calendar',
});

Router.route('/account', {
  name: 'account'
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
    if (Meteor.user.find({username: this.params.username}).count() == 1) {
      return Meteor.users.find({username: this.params.username});
    } else {
      return Meteor.users.find({_id: this.params.username});
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

Router.route('/', {
  name: 'home',
  onRun: function () {
    if (Meteor.user()) {
      if (!Meteor.user().profile.affiliateId) {
        Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.affiliateId': affiliateId}});
      }
    }
    this.next();
  }
});

Router.route('/afl:affiliate?', {
  onRun: function () {
    affiliateId = this.params.affiliate;
    console.log(affiliateId);
    // Session.set('affiliate', id);
    Router.go('/');
    this.next();
  },
});