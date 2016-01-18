(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/methods/calevent_methods.js                                  //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.methods({                                                       // 1
  removeCal: function (doc) {                                          // 2
    //refund to antendees                                              //
    if (doc.owner === Meteor.userId()) {                               // 4
      if (moment(moment(doc.start).toISOString()).isBefore(moment())) {
        console.log(Meteor.userId() + " tried to delete event after current date");
      } else {                                                         //
        if (CalEvent.findOne({ _id: doc._id }).owner === Meteor.userId()) {
          Meteor.call('refundEvent', doc);                             // 9
          CalEvent.remove({ _id: doc._id });                           // 10
          Router.route('/my-classes');                                 // 11
        }                                                              //
      }                                                                //
    }                                                                  //
  },                                                                   //
                                                                       //
  removeCourse: function (doc) {                                       // 17
    var course = CalEvent.find({ courseId: doc.courseId }).fetch();    // 18
    _.forEach(course, function (item) {                                // 19
      var doc = item;                                                  // 20
      Meteor.call("removeCal", doc);                                   // 21
    });                                                                //
  },                                                                   //
                                                                       //
  edit: function (doc) {                                               // 25
    console.log("editing " + doc._id);                                 // 26
  },                                                                   //
                                                                       //
  recur: function (doc) {                                              // 29
    var startTime = moment(doc.start).format("hh:mm a [GMT] ZZ");      // 30
    var recur = moment(doc.start).recur().every(doc.recur.intervalNumber, doc.recur.intervalType);
    var dates = recur.next(doc.recur.intervalStop - 1, "L");           // 32
    var dur = moment(doc.end).diff(moment(doc.start));                 // 33
    var courseId = Random.id();                                        // 34
                                                                       //
    //Recurring individual events                                      //
    if (doc.recur.type === "lesson") {                                 // 37
      Meteor.call('saveCalEvent', doc);                                // 38
      _.forEach(dates, function (item) {                               // 39
        var newStart = moment(item + " " + startTime);                 // 40
        var newEnd = moment(newStart).add(dur, 'ms');                  // 41
        doc.start = moment(newStart).toISOString();                    // 42
        doc.end = moment(newEnd).toISOString();                        // 43
        Meteor.call('saveCalEvent', doc);                              // 44
      });                                                              //
    }                                                                  //
                                                                       //
    if (doc.recur.type === "course") {                                 // 48
      doc.courseId = courseId;                                         // 49
      Meteor.call('saveCalEvent', doc);                                // 50
      _.forEach(dates, function (item) {                               // 51
        var newStart = moment(item + " " + startTime);                 // 52
        var newEnd = moment(newStart).add(dur, 'ms');                  // 53
        doc.start = moment(newStart).toISOString();                    // 54
        doc.end = moment(newEnd).toISOString();                        // 55
        // console.log(doc);                                           //
        Meteor.call('saveCalEvent', doc);                              // 57
      });                                                              //
    }                                                                  //
  },                                                                   //
                                                                       //
  saveCalEvent: function (doc) {                                       // 62
    //check if user is signed in or if the start date of the event is before now
    if (!this.userId || moment(moment(doc.start).toISOString()).isBefore(moment())) {
      return null;                                                     // 65
    } else {                                                           //
      //save event and dates are saved into ISO format                 //
      return CalEvent.insert({                                         // 68
        createdAt: doc.createdAt,                                      // 69
        title: doc.title,                                              // 70
        start: moment(doc.start).toISOString(),                        // 71
        end: moment(doc.end).toISOString(),                            // 72
        category: doc.category,                                        // 73
        description: doc.description,                                  // 74
        owner: doc.owner,                                              // 75
        allDay: doc.allDay,                                            // 76
        price: doc.price,                                              // 77
        attendeeCount: doc.attendeeCount,                              // 78
        street: doc.street,                                            // 79
        city: doc.city,                                                // 80
        state: doc.state,                                              // 81
        zip: doc.zip,                                                  // 82
        courseId: doc.courseId                                         // 83
      });                                                              //
    }                                                                  //
  },                                                                   //
                                                                       //
  updateCalEvent: function (doc, id) {                                 // 88
    if (CalEvent.findOne({ _id: id }) && moment(doc.$set.start).isAfter(moment())) {
      CalEvent.update({ _id: id }, { $set: {                           // 90
          title: doc.$set.title,                                       // 91
          start: moment(doc.$set.start).toISOString(),                 // 92
          end: moment(doc.$set.end).toISOString(),                     // 93
          category: doc.$set.category,                                 // 94
          description: doc.$set.description,                           // 95
          owner: doc.$set.owner,                                       // 96
          allDay: doc.$set.allDay,                                     // 97
          price: doc.$set.price,                                       // 98
          attendeeCount: doc.$set.attendeeCount,                       // 99
          street: doc.$set.street,                                     // 100
          city: doc.$set.city,                                         // 101
          state: doc.$set.state,                                       // 102
          zip: doc.$set.zip,                                           // 103
          courseId: doc.$set.courseId                                  // 104
        } });                                                          //
    }                                                                  //
  },                                                                   //
                                                                       //
  resizeCalEvent: function (id, delta) {                               // 109
    if (!this.userId) {                                                // 110
      return null;                                                     // 111
    } else {                                                           //
      var event = CalEvent.findOne({ _id: id });                       // 113
      var add = moment(event.end).add({                                // 114
        years: delta._data.years,                                      // 115
        months: delta._data.months,                                    // 116
        days: delta._data.days,                                        // 117
        hours: delta._data.hours,                                      // 118
        minutes: delta._data.minutes                                   // 119
      });                                                              //
      var end = add._d;                                                // 121
      CalEvent.update({ _id: id }, { $set: {                           // 122
          end: moment(end).toISOString()                               // 123
        } });                                                          //
    }                                                                  //
  },                                                                   //
                                                                       //
  moveEvent: function (id, delta) {                                    // 128
    if (!this.userId) {                                                // 129
      return null;                                                     // 130
    } else {                                                           //
      var event = CalEvent.findOne({ _id: id });                       // 132
      var startAdd = moment(event.start).add({                         // 133
        years: delta._data.years,                                      // 134
        months: delta._data.months,                                    // 135
        days: delta._data.days,                                        // 136
        hours: delta._data.hours,                                      // 137
        minutes: delta._data.minutes                                   // 138
      });                                                              //
      var endAdd = moment(event.end).add({                             // 140
        years: delta._data.years,                                      // 141
        months: delta._data.months,                                    // 142
        days: delta._data.days,                                        // 143
        hours: delta._data.hours,                                      // 144
        minutes: delta._data.minutes                                   // 145
      });                                                              //
      var start = startAdd._d;                                         // 147
      var end = endAdd._d;                                             // 148
      if (moment(start).isAfter(moment()) && moment(event.start).isAfter(moment())) {
        CalEvent.update({ _id: id }, { $set: {                         // 150
            start: moment(start).toISOString(),                        // 151
            end: moment(end).toISOString()                             // 152
          } });                                                        //
      }                                                                //
    }                                                                  //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=calevent_methods.js.map
