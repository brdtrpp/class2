Account = new Mongo.Collection('account');

Account.attachSchema(new SimpleSchema({
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
  // externalAccount: {
  //   type: ExternalAccSchema,
  //   label: "Bank Account Information"
  // },
}));

// ExternalAccSchema = new SimpleSchema({
   
// });