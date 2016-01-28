Template.landing.helpers({
  userType: function() {
    if (Session.equals('userType', "student")) {
      return "Students";
    } else if (Session.equals('userType', "instructor")) {
      return "Instructors";
    } else if (Session.equals('userType', 'home')) {
      return "Homeschoolers";
    }
  },

  headline: function() {
    if (Session.equals('userType', 'student')) {
      return "Learn Something New";
    } else if (Session.equals('userType', "instructor")) {
      return "Start Teaching What You Know and Love";
    } else if (Session.equals('userType', 'home')) {
      return "An Improved Homeschool Experience";
    }
  },

  step1: function() {
    if (Session.equals('userType', 'student')) {
      return "Find";
    } else if (Session.equals('userType', "instructor")) {
      return "create";
    } else if (Session.equals('userType', 'home')) {
      return "Find";
    }
  },

  step2: function() {
    if (Session.equals('userType', 'student')) {
      return "register";
    } else if (Session.equals('userType', "instructor")) {
      return "accept";
    } else if (Session.equals('userType', 'home')) {
      return "register";
    }
  },

  step3: function() {
    if (Session.equals('userType', 'student')) {
      return "attend";
    } else if (Session.equals('userType', "instructor")) {
      return "instruct";
    } else if (Session.equals('userType', 'home')) {
      return "gather";
    }
  },

  subtext: function() {
    if (Session.equals('userType', 'student')) {
      return "Find classes, lessons, camps, courses, tutors, or clinics in your local area. Easily find, register, and pay for classes that interest you.";
    } else if (Session.equals('userType', "instructor")) {
      return "Create and manage your classes. Start focusing less on the scheduling, registration, and adminstrative work and focus more on instructing and educating.";
    } else if (Session.equals('userType', 'home')) {
      return "Easily organize with local coops and groups, create field trips. Find what interests your children and get the best experts to teach them.";
    }
  },

  subtext2: function() {
    if (Session.equals('userType', 'student')) {
      return "Find classes, lessons, camps, courses, tutors, or clinics in your local area. Easily find, register, and pay for classes that interest you.";
    } else if (Session.equals('userType', "instructor")) {
      return "Create and manage your classes. Start focusing less on the scheduling, registration, and adminstrative work and focus more on instructing and educating.";
    } else if (Session.equals('userType', 'home')) {
      return "Find free and cheap expereinces for you or your kids. Expand educational expereinces, learn something new and explore the world around you one class at a time.";
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