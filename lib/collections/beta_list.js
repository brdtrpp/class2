BetaList = new Mongo.Collection('betaList');
BetaList.attachSchema(new SimpleSchema({
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
  
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: 'Sign-Up for Beta Testing'
  }
}));