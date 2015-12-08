Meteor.methods({
  removeCal: function(doc) {
    //refund to antendees
    if (moment(moment(doc.start).toISOString()).isBefore(moment())) {
      console.log(Meteor.userId() + " tried to delete event after current date");
    } else {
      if (CalEvent.findOne({_id: doc._id}).owner === Meteor.userId()) {
        Meteor.call('refundEvent', doc);
        CalEvent.remove({_id: doc._id});
      }
    }
  },
  
  edit: function(doc) {
    
  },
  
  recur:function(doc){
    var date = moment(doc.start).format("MM-DD-YYYY");
    var end = moment(doc.end).format("MM-DD-YYYY");
    var startTime = moment(doc.start).format("hh:mm a [GMT] ZZ");
    var endTime = moment(doc.end).format("hh:mm a [GMT] ZZ");
    var recur = moment(date).recur(end).every(doc.recur.intervalNumber, doc.recur.intervalType);
    CalEvent.insert({
      createdAt: doc.createdAt,
      title: doc.title,
      start: moment(doc.start).toISOString(),
      end: moment(doc.start).toISOString(),
      description: doc.description,
      owner: doc.owner,
      allDay: doc.allDay,
      price: doc.price,
      attendeeCount: doc.attendeeCount,
      // zip: doc.zip
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
                start: moment(date+startTime).toISOString(),
                end: moment(date+endTime).toISOString(),
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
        i++, date = moment(moment(date).add(1, "days")._d).toISOString()
        ) {
            if (recur.matches(date) == true) {
              console.log(doc);
            }
          }
    }
  },

  saveCalEvent:function(doc){
    //check if user is signed in or if the start date of the event is before now
    if (!this.userId || moment(moment(doc.start).toISOString()).isBefore(moment())) {
      return null;
    } else {
      //save event and dates are saved into ISO format
      return CalEvent.insert({
        createdAt: doc.createdAt,
        title: doc.title,
        start: moment(doc.start).toISOString(),
        end: moment(doc.end).toISOString(),
        description: doc.description,
        owner: doc.owner,
        allDay: doc.allDay,
        price: doc.price,
        attendeeCount: doc.attendeeCount,
        // zip: doc.zip
      });
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