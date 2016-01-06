Search = new Mongo.Collection('search');

Search.attachSchema( new SimpleSchema ({ 
  keyword: {
    type: String,
    optional: true,
  },
  location: {
    type: String,
    optional: true,
  },
  radius: {
    type: Number,
    optional: true,
    defaultValue: 25, 
  }
}));