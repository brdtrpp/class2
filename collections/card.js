Card = new Mongo.Collection('card');

Card.attachSchema( new SimpleSchema ({
  creditCardNumber: {
    type: Number,
    label: "Credit Card Number"
  },
  
  cvc: {
    type: Number,
    label: "3 Digit CVC",
    max: 3,
    min: 3,
  },
  
  expMo: {
    type: Number,
    label: "Experation Month"
  },
  
  expYr: {
    type: Number,
    label: "ExperationYear"
  },
}));