Template.landing.helpers({
  userType: function() {
    if (Session.equals('userType', "student")) {
      return "Students";
    } else if (Session.equals('userType', "instructor")) {
      return "Instructors";
    }
  }
});

Template.landing.events({
  'click .userType': function() {
    if (Session.equals('userType', "student")) {
      Session.set('userType', 'instructor');
    } else {
      Session.set('userType', 'student');
    }
  }
});

Template.landing.onRendered(function(){
  Session.set('userType', 'student');
});