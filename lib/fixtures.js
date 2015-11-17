if (Meteor.users.find().count() == 0) {
  Accounts.createUser({
    username: "brdtrpp",
    email: "trapp2357@gmail.com",
    password: "aspade",
    profile : {
      createdAt: new Date,
      firstName: "Bradley",
      lastName: "Trapp",
      birthday: "05/29/1985",
      gender: "Male",
      organization: "Class, Inc.",
      website: "joinclass.co",
      homeAddress: {
        stree: "1811 Stewart Rd",
        city: "Xenia",
        state: "OH",
        zip: "45385"
      },
      customerId: "cus_7MzBITTMqLvrBz",
      accountId: "acct_178FXhGlozRuoiCz",
      cardId: "card_178FEX2AoYRAwojXrz6Oak16"
    }
  });
}

// for (i = 0; i < 365; i++, date = JSON.stringify(moment(date).add(1, "days")._d)) {
// if (int.matches(date) == true) {
// CalEvent.insert({title: "Class " + i, start: date, end: date})
// } else {
// }}