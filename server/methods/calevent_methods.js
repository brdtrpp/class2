Meteor.methods({
  removeCal: function(doc) {
    //refund to antendees
    console.log(doc);
    if (moment(moment(doc.start).toISOString()).isBefore(moment())) {
      console.log(Meteor.userId() + " tried to delete event after current date");
    } else {
      if (CalEvent.findOne({_id: doc._id}).owner === Meteor.userId()) {
        Meteor.call('refundEvent', doc);
        CalEvent.remove({_id: doc._id});
      }
    }
  },
  
  removeCourse: function(doc) {
    var course = CalEvent.find({courseId: doc.courseId}).fetch();
    _.forEach(course, function(item) {
      var doc = item;
      Meteor.call("removeCal", doc);
    });
  },
  
  edit: function(doc) {
    
  },
  
  recur:function(doc){
    var startTime = moment(doc.start).format("hh:mm a [GMT] ZZ");
    var recur = moment(doc.start).recur().every(doc.recur.intervalNumber, doc.recur.intervalType);
    var dates = recur.next(doc.recur.intervalStop, "L");
    var dur = moment(doc.end).diff(moment(doc.start));
    var courseId = Random.id();
    // console.log(recur);
    // console.log(dur);
    Meteor.call('saveCalEvent', doc);

    //Recurring individual events
    if (doc.recur.type === "lesson") {
      _.forEach(dates, function(item){
        var newStart = moment(item + " " + startTime);
        var newEnd = newStart.add(dur, 'ms');
        doc.start = moment(newStart).toISOString();
        doc.end = moment(newEnd).toISOString();
        // console.log(doc.start);
        // console.log(doc.end);
        Meteor.call('saveCalEvent', doc);
      });
    }

    if (doc.recur.type === "course") {
      _.forEach(dates, function(item){
        doc.courseId = courseId;
        var newStart = moment(item + " " + startTime);
        var newEnd = newStart.add(dur, 'ms');
        doc.start = moment(newStart).toISOString();
        doc.end = moment(newEnd).toISOString();
        // console.log(doc.start);
        // console.log(doc.end);
        Meteor.call('saveCalEvent', doc);
      });
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
        street: doc.street,
        city: doc.city,
        state: doc.state,
        zip: doc.zip,
        courseId: doc.courseId,
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