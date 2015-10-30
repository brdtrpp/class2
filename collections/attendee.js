Attendee = new Mongo.Collection('attendee');

Attendee.attachSchema(new SimpleSchema({
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    },
    autoform: {
      omit: true
    }
  },
  eventId: {
    type: String,
    autoform: {
      omit: true
    }
  },
  owner: {
    type: String,
    autoValue: function() {
      var user = Meteor.user();
      return user._id;
    },
    autoform: {
      omit: true
    }
  },
  attendeeFirstName: {
    type: String,
    label: "Attendee's First Name",
    defaultValue: function() {
      var user = Meteor.user();
      return user.profile.firstName;
    }
  },
  attendeeLastName: {
    type: String,
    label: "Attendee's Last Name",
    defaultValue: function() {
      var user = Meteor.user();
      return user.profile.lastName;
    }
  },
  charge: {
    type: String,
    autoform: {
      omit: true
    },
    optional: true
  },
}));