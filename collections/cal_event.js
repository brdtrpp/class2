CalEvent = new Mongo.Collection('calevent');
CalEvent.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  start: {
    type: Date,
    label: "Start"
  },
  end: {
    type: Date,
    label: "End"
  },
  owner: {
    type: String,
    label: "Host",
  }
}));