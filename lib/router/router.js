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

Router.route('/classes/:id',  function () {
  this.render("eventLink", {
    data: function() {
      var classes = CalEvent.find({owner: this.params.id, canceled: false}).fetch();
      return classes;
    },
  });
});

Router.route('/', {
  name: 'home',
});

Router.route('/resetPassword', {name: 'resetPassword'});

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
Router.route('/company', {name: 'company'});
Router.route('/affiliate', {name: 'affiliate'});
Router.route('/register', {name: 'register'});
Router.route('/crowded', {name: 'grading'});
Router.route('/new-class', {name: 'eventInsert'});
Router.route('/user/:username', {
  name: 'profile',
  data: function() {
    if (Meteor.user.find({username: this.params.username}).count() == 1) {
      return Meteor.users({username: this.params.username});
    } else {
      return Meteor.users({_id: this.params.username});
    }
  }
});

Router.route('/class/:_id', {
  name: 'eventItem',
  data: function() {
    return CalEvent.findOne(this.params._id);
  },
});



Router.route('/a3:affiliate?', {
  onBeforeAction: function () {
    Session.set('affiliateId', this.params.affiliate);
    Router.go('/');
    this.next();
  },
});

Router.route('/admin', function () {
  if (Meteor.user().emails[0].address == 'bradley.trapp@joinclass.co') {
    this.render('adminPanel');
  } else {
    Router.go('/');
  }
});

Router.route('/surveyone', function() {
  this.render('surveyOne');
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

