Card = new Mongo.Collection('card');

Card.attachSchema( new SimpleSchema ({
  creditCardNumber: {
    type: Number,
    label: "Credit Card Number",
    min: 16,
    max: 16
  },

  cvc: {
    type: Number,
    label: "3 Digit CVC",
    max: 3,
    min: 3,
  },

  expMo: {
    type: Number,
    label: "Experation Month",
    min: 1,
    max: 12,
  },

  expYr: {
    type: Number,
    label: "ExperationYear"
  },
}));