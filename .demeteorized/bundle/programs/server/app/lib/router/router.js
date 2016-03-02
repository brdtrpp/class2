(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/router/router.js                                                //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Router.configure({                                                     // 1
  layoutTemplate: 'masterLayout',                                      // 2
  loadingTemplate: 'loading',                                          // 3
  notFoundTemplate: 'four0',                                           // 4
  waitOn: function () {                                                // 5
    return [Meteor.subscribe('calevent'), Meteor.subscribe('attendee')];
  },                                                                   //
  onBeforeAction: function () {                                        // 8
    Session.set('page', Router.current().route.getName());             // 9
    var id = Meteor.userId();                                          // 10
    Meteor.call('unselect', id);                                       // 11
    this.next();                                                       // 12
  }                                                                    //
});                                                                    //
                                                                       //
var requireLogin = function () {                                       // 16
  if (!Meteor.user()) {                                                // 17
    this.render('accessDenied');                                       // 18
  } else {                                                             //
    this.next();                                                       // 20
  }                                                                    //
};                                                                     //
                                                                       //
Router.route('/classes/:id', function () {                             // 24
  this.render("eventLink", {                                           // 25
    data: function () {                                                // 26
      var classes = CalEvent.find({ owner: this.params.id, canceled: false }).fetch();
      return classes;                                                  // 28
    }                                                                  //
  });                                                                  //
});                                                                    //
                                                                       //
Router.route('/', {                                                    // 33
  name: 'home'                                                         // 34
});                                                                    //
                                                                       //
Router.route('/resetPassword', { name: 'resetPassword' });             // 37
                                                                       //
Router.route('/calendar', {                                            // 39
  name: 'calendar'                                                     // 40
});                                                                    //
                                                                       //
Router.route('/account', {                                             // 43
  name: 'account'                                                      // 44
});                                                                    //
                                                                       //
Router.route('/account-dashboard', {                                   // 47
  name: 'getPaid'                                                      // 48
});                                                                    //
Router.route('/payment-method', { name: 'payout' });                   // 50
Router.route('/user-profile', { name: 'profileEdit' });                // 51
Router.route('/my-classes', {                                          // 52
  name: 'myEvent'                                                      // 53
});                                                                    //
Router.route('/my-attend', { name: 'myAttend' });                      // 55
Router.route('/terms', { name: 'terms' });                             // 56
Router.route('/classes', {                                             // 57
  name: 'eventSearch'                                                  // 58
});                                                                    //
Router.route('/company', { name: 'company' });                         // 60
Router.route('/affiliate', { name: 'affiliate' });                     // 61
Router.route('/register', { name: 'register' });                       // 62
Router.route('/crowded', { name: 'grading' });                         // 63
Router.route('/new-class', { name: 'eventInsert' });                   // 64
Router.route('/user/:username', {                                      // 65
  name: 'profile',                                                     // 66
  data: function () {                                                  // 67
    if (Meteor.user.find({ username: this.params.username }).count() == 1) {
      return Meteor.users({ username: this.params.username });         // 69
    } else {                                                           //
      return Meteor.users({ _id: this.params.username });              // 71
    }                                                                  //
  }                                                                    //
});                                                                    //
                                                                       //
Router.route('/class/:_id', {                                          // 76
  name: 'eventItem',                                                   // 77
  data: function () {                                                  // 78
    return CalEvent.findOne(this.params._id);                          // 79
  }                                                                    //
});                                                                    //
                                                                       //
Router.route('/a3:affiliate?', {                                       // 85
  onBeforeAction: function () {                                        // 86
    Session.set('affiliateId', this.params.affiliate);                 // 87
                                                                       //
    Router.go('/');                                                    // 89
    this.next();                                                       // 90
  }                                                                    //
});                                                                    //
                                                                       //
Router.onBeforeAction('dataNotFound', { only: 'eventItem' });          // 94
Router.onBeforeAction(requireLogin, { only: ['getPaid', 'payout', 'profileEdit', 'myEvent', 'myAttend', 'account'] });
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=router.js.map
