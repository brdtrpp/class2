Attendee = new Mongo.Collection('attendee');

AttendanceSchema = new SimpleSchema({
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
    },

  },
  present: {
    type: Boolean,
    defaultValue: true,
    autoform: {
      omit: true
    },

  },
  owner: {
    type: String,
    autoValue: function () {
      return Meteor.userId();
    },
    autoform: {
      omit: true
    },
  },
  updatedAt: {
    type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true,
    autoform: {
      omit: true
    },
  },
});

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
  reEventId: {
    type: String,
    autoform: {
      omit: true
    },
    defaultValue: null,
    optional: true
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
  refund: {
    type: String,
    defaultValue: null,
    autoform: {
      omit: true
    },
    optional: true
  },
  courseId: {
    type: String,
    optional: true,
    autoform: {
      omit: true
    }
  },
  attendance: {
    type: AttendanceSchema,
    optional: true,
    autoform: {
      omit: true
    }
  }
}));