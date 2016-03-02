(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/methods/calevent_methods.js                                  //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Meteor.methods({                                                       // 1
  submitCalEvent: function (doc) {                                     // 2
    var event = {                                                      // 3
      title: doc.details.title,                                        // 4
      category: doc.details.category,                                  // 5
      description: doc.details.description,                            // 6
      price: doc.details.price,                                        // 7
      attendeeCount: doc.details.attendeeCount,                        // 8
      start: doc.start,                                                // 9
      end: doc.end,                                                    // 10
      recur: {                                                         // 11
        type: doc.recur.type,                                          // 12
        intervalNumber: doc.recur.intervalNumber,                      // 13
        intervalType: doc.recur.intervalType,                          // 14
        intervalStop: doc.recur.intervalStop                           // 15
      },                                                               //
      street: doc.location.street,                                     // 17
      city: doc.location.city,                                         // 18
      state: doc.location.state,                                       // 19
      zip: doc.location.zip                                            // 20
    };                                                                 //
                                                                       //
    var doc = event;                                                   // 23
                                                                       //
    if (doc.recur.type == "classes") {                                 // 25
      Meteor.call('saveCalEvent', doc);                                // 26
      return 'success';                                                // 27
    } else {                                                           //
      Meteor.call('recur', doc);                                       // 29
      return "success";                                                // 30
    }                                                                  //
  },                                                                   //
                                                                       //
  removeCal: function (doc) {                                          // 34
    //refund to antendees                                              //
    if (doc.owner === Meteor.userId()) {                               // 36
      if (moment(moment(doc.start).toISOString()).isBefore(moment())) {} else {
        Meteor.call('refundEvent', doc);                               // 40
        CalEvent.update({ _id: doc._id }, { $set: { canceled: true } });
      }                                                                //
    }                                                                  //
  },                                                                   //
                                                                       //
  removeCourse: function (doc) {                                       // 46
    if (doc.owner === Meteor.userId()) {                               // 47
      var course = CalEvent.find({ courseId: doc.courseId }).fetch();  // 48
      _.forEach(course, function (item) {                              // 49
        var doc = item;                                                // 50
        Meteor.call("removeCal", doc);                                 // 51
      });                                                              //
    }                                                                  //
  },                                                                   //
                                                                       //
  edit: function (doc) {                                               // 56
    console.log("editing " + doc._id);                                 // 57
  },                                                                   //
                                                                       //
  recur: function (doc) {                                              // 60
    var startTime = moment(doc.start).format("hh:mm a [GMT] ZZ");      // 61
    var recur = moment(doc.start).recur().every(doc.recur.intervalNumber, doc.recur.intervalType);
    var dates = recur.next(doc.recur.intervalStop - 1, "L");           // 63
    var dur = moment(doc.end).diff(moment(doc.start));                 // 64
    var courseId = Random.id();                                        // 65
                                                                       //
    //Recurring individual events                                      //
    if (doc.recur.type === "lesson") {                                 // 68
      Meteor.call('saveCalEvent', doc);                                // 69
      _.forEach(dates, function (item) {                               // 70
        var newStart = moment(item + " " + startTime);                 // 71
        var newEnd = moment(newStart).add(dur, 'ms');                  // 72
        doc.start = moment(newStart).toISOString();                    // 73
        doc.end = moment(newEnd).toISOString();                        // 74
        Meteor.call('saveCalEvent', doc);                              // 75
      });                                                              //
    }                                                                  //
                                                                       //
    if (doc.recur.type === "course") {                                 // 79
      doc.courseId = courseId;                                         // 80
      Meteor.call('saveCalEvent', doc);                                // 81
      _.forEach(dates, function (item) {                               // 82
        var newStart = moment(item + " " + startTime);                 // 83
        var newEnd = moment(newStart).add(dur, 'ms');                  // 84
        doc.start = moment(newStart).toISOString();                    // 85
        doc.end = moment(newEnd).toISOString();                        // 86
                                                                       //
        Meteor.call('saveCalEvent', doc);                              // 88
      });                                                              //
    }                                                                  //
  },                                                                   //
                                                                       //
  saveCalEvent: function (doc) {                                       // 93
    console.log(doc);                                                  // 94
    //check if user is signed in or if the start date of the event is before now
    if (!this.userId || moment(moment(doc.start).toISOString()).isBefore(moment())) {
      return null;                                                     // 97
    } else if (Meteor.user({ _id: this.userId }).profile.accountId) {  //
      //save event and dates are saved into ISO format                 //
      return CalEvent.insert({                                         // 100
        createdAt: doc.createdAt,                                      // 101
        title: doc.title,                                              // 102
        start: moment(doc.start).toISOString(),                        // 103
        end: moment(doc.end).toISOString(),                            // 104
        category: doc.category,                                        // 105
        description: doc.description,                                  // 106
        owner: doc.owner,                                              // 107
        businessName: doc.businessName,                                // 108
        allDay: doc.allDay,                                            // 109
        price: doc.price,                                              // 110
        attendeeCount: doc.attendeeCount,                              // 111
        street: doc.street,                                            // 112
        city: doc.city,                                                // 113
        state: doc.state,                                              // 114
        zip: doc.zip,                                                  // 115
        courseId: doc.courseId,                                        // 116
        selected: false                                                // 117
      });                                                              //
    } else {                                                           //
                                                                       //
      return CalEvent.insert({                                         // 121
        createdAt: doc.createdAt,                                      // 122
        title: doc.title,                                              // 123
        start: moment(doc.start).toISOString(),                        // 124
        end: moment(doc.end).toISOString(),                            // 125
        category: doc.category,                                        // 126
        description: doc.description,                                  // 127
        owner: doc.owner,                                              // 128
        businessName: doc.businessName,                                // 129
        allDay: doc.allDay,                                            // 130
        price: null,                                                   // 131
        attendeeCount: doc.attendeeCount,                              // 132
        street: doc.street,                                            // 133
        city: doc.city,                                                // 134
        state: doc.state,                                              // 135
        zip: doc.zip,                                                  // 136
        courseId: doc.courseId                                         // 137
      });                                                              //
    }                                                                  //
  },                                                                   //
                                                                       //
  updateCalEvent: function (doc, id) {                                 // 142
    if (CalEvent.findOne({ _id: id }) && moment(doc.$set.start).isAfter(moment())) {
      CalEvent.update({ _id: id }, { $set: {                           // 144
          title: doc.$set.title,                                       // 145
          start: moment(doc.$set.start).toISOString(),                 // 146
          end: moment(doc.$set.end).toISOString(),                     // 147
          category: doc.$set.category,                                 // 148
          description: doc.$set.description,                           // 149
          owner: doc.$set.owner,                                       // 150
          allDay: doc.$set.allDay,                                     // 151
          price: doc.$set.price,                                       // 152
          attendeeCount: doc.$set.attendeeCount,                       // 153
          street: doc.$set.street,                                     // 154
          city: doc.$set.city,                                         // 155
          state: doc.$set.state,                                       // 156
          zip: doc.$set.zip,                                           // 157
          courseId: doc.$set.courseId                                  // 158
        } });                                                          //
    }                                                                  //
  },                                                                   //
                                                                       //
  resizeCalEvent: function (id, delta) {                               // 163
    if (!this.userId) {                                                // 164
      return null;                                                     // 165
    } else {                                                           //
      var event = CalEvent.findOne({ _id: id });                       // 167
      var add = moment(event.end).add({                                // 168
        years: delta._data.years,                                      // 169
        months: delta._data.months,                                    // 170
        days: delta._data.days,                                        // 171
        hours: delta._data.hours,                                      // 172
        minutes: delta._data.minutes                                   // 173
      });                                                              //
      var end = add._d;                                                // 175
      CalEvent.update({ _id: id }, { $set: {                           // 176
          end: moment(end).toISOString()                               // 177
        } });                                                          //
    }                                                                  //
  },                                                                   //
                                                                       //
  moveEvent: function (id, delta) {                                    // 182
    if (!this.userId) {                                                // 183
      return null;                                                     // 184
    } else {                                                           //
      var event = CalEvent.findOne({ _id: id });                       // 186
      var startAdd = moment(event.start).add({                         // 187
        years: delta._data.years,                                      // 188
        months: delta._data.months,                                    // 189
        days: delta._data.days,                                        // 190
        hours: delta._data.hours,                                      // 191
        minutes: delta._data.minutes                                   // 192
      });                                                              //
      var endAdd = moment(event.end).add({                             // 194
        years: delta._data.years,                                      // 195
        months: delta._data.months,                                    // 196
        days: delta._data.days,                                        // 197
        hours: delta._data.hours,                                      // 198
        minutes: delta._data.minutes                                   // 199
      });                                                              //
      var start = startAdd._d;                                         // 201
      var end = endAdd._d;                                             // 202
      if (moment(start).isAfter(moment()) && moment(event.start).isAfter(moment())) {
        CalEvent.update({ _id: id }, { $set: {                         // 204
            start: moment(start).toISOString(),                        // 205
            end: moment(end).toISOString()                             // 206
          } });                                                        //
      }                                                                //
    }                                                                  //
  },                                                                   //
                                                                       //
  unselect: function (id) {                                            // 212
    var events = CalEvent.find({ owner: id, selected: true }).fetch();
    _.forEach(events, function (event) {                               // 214
      CalEvent.update({ _id: event._id }, { $set: { selected: false } });
    });                                                                //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=calevent_methods.js.map
