Meteor.methods({
  recur:function(doc){
    var date = moment(doc.start).format("MM-DD-YYYY");
    var end = moment(doc.end).format("MM-DD-YYYY");
    var startTime = moment(doc.start).format("hh:mm a [GMT] ZZ");
    var endTime = moment(doc.end).format("hh:mm a [GMT] ZZ");
    var recur = moment(date).recur(end).every(doc.recur.intervalNumber, doc.recur.intervalType);
    CalEvent.insert({
      createdAt: doc.createdAt,
      title: doc.title,
      start: moment(doc.start).format("ddd MMM DD YYYY hh:mm a [GMT] ZZ"),
      end: moment(doc.start).format("ddd MMM DD YYYY hh:mm a [GMT] ZZ"),
      description: doc.description,
      owner: doc.owner,
      allDay: doc.allDay,
      price: doc.price,
      attendeeCount: doc.attendeeCount
    });

    //Recurring individual events
    if (doc.recur.type === "lesson") {
      for (
        i = 0;
        i < 365;
        i++, date = JSON.stringify(moment(moment(date).add(1, "days")._d).format("MM-DD-YYYY"))
        ) {
            if (recur.matches(date) == true) {
              CalEvent.insert({
                createdAt: doc.createdAt,
                title: doc.title,
                start: moment(date+startTime).format("ddd MMM DD YYYY hh:mm a [GMT] ZZ"),
                end: moment(date+endTime).format("ddd MMM DD YYYY hh:mm a [GMT] ZZ"),
                description: doc.description,
                owner: doc.owner,
                allDay: doc.allDay,
                price: doc.price,
                attendeeCount: doc.attendeeCount
              });
            }
          }
    }

    if (doc.recur.type === "course") {
      for (
        i = 0;
        i < 365;
        i++, date = JSON.stringify(moment(moment(date).add(1, "days")._d).format("MM-DD-YYYY"))
        ) {
            if (recur.matches(date) == true) {
              console.log(doc);
            }
          }
    }
  },

  saveCalEvent:function(ce){
    if (!this.userId) {
      return null;
    } else {
      return  CalEvent.insert(ce);
    }
  },

  resizeCalEvent:function(id, delta) {
    if (!this.userId) {
      return null;
    } else {
      var event = CalEvent.findOne({_id: id});
      var add = moment(event.end).add({
        years: delta._data.years,
        months: delta._data.months,
        days: delta._data.days,
        hours: delta._data.hours,
        minutes: delta._data.minutes,
      });
      var end = add._d;
      CalEvent.update({_id: id}, {$set: {
        end: moment(end).toISOString(),
      }});
    }
  },

  moveEvent:function(id, delta){
    var event = CalEvent.findOne({_id: id});
    var startAdd = moment(event.start).add({
      years: delta._data.years,
      months: delta._data.months,
      days: delta._data.days,
      hours: delta._data.hours,
      minutes: delta._data.minutes,
    });
    var endAdd = moment(event.end).add({
      years: delta._data.years,
      months: delta._data.months,
      days: delta._data.days,
      hours: delta._data.hours,
      minutes: delta._data.minutes,
    });
    var start = startAdd._d;
    var end = endAdd._d;
    CalEvent.update({_id: id}, {$set: {
      start: moment(start).toISOString(),
      end: moment(end).toISOString(),
    }});
  },
});