CalEvent = new Mongo.Collection('calevent');
CalEvent.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  start: {
    type: Date,
    label: "Start",
    autoform: {
      afFieldInput: {
        type: "datetimepicker"
      }
    }
  },
  end: {
    type: Date,
    label: "End",
    autoform: {
      afFieldInput: {
        type: "datetimepicker"
      }
    }
  },
  owner: {
    type: String,
    label: "Host",
  }
}));