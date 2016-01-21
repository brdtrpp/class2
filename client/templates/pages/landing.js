Template.landing.helpers({
  userType: function() {
    if (Session.equals('userType', "student")) {
      return "Students";
    } else if (Session.equals('userType', "instructor")) {
      return "Instructors";
    } else if (Session.equals('userType', 'home')) {
      return "Home Schoolers";
    }
  },

  headline: function() {
    if (Session.equals('userType', 'student')) {
      return "Learn Something New";
    } else if (Session.equals('userType', "instructor")) {
      return "Start Teaching What You Know and Love";
    }
  },

  subtext: function() {
    if (Session.equals('userType', 'student')) {
      return "Find classes, lessons, camps, courses, tutors, or clinics in your local area. Easily find, register, and pay for classes that interest you.";
    } else if (Session.equals('userType', "instructor")) {
      return "Create and manage your classes. Start focusing less on the scheduling, registration, and adminstrative work and focus more on instructing and educating.";
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
  },
  'click .student': function() {
    Session.set('userType', 'student');
  },

  'click .instructor': function() {
    Session.set('userType', 'instructor');
  },

  'click .home': function() {
    Session.set('userType', 'home');
  }
});

Template.landing.onRendered(function(){
  Session.set('userType', 'student');
});