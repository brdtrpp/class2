Meteor.methods({
  removeCal: function(doc) {
    //refund to antendees
    if (doc.owner === Meteor.userId()){
      if (moment(moment(doc.start).toISOString()).isBefore(moment())) {
        console.log(Meteor.userId() + " tried to delete event after current date");
      } else {
        if (CalEvent.findOne({_id: doc._id}).owner === Meteor.userId()) {
          Meteor.call('refundEvent', doc);
          CalEvent.update({_id: doc._id}, {$set: {canceled: true, selected: false}});
        }
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
    console.log("editing " + doc._id);
  },

  recur:function(doc){
    var startTime = moment(doc.start).format("hh:mm a [GMT] ZZ");
    var recur = moment(doc.start).recur().every(doc.recur.intervalNumber, doc.recur.intervalType);
    var dates = recur.next((doc.recur.intervalStop - 1), "L");
    var dur = moment(doc.end).diff(moment(doc.start));
    var courseId = Random.id();

    //Recurring individual events
    if (doc.recur.type === "lesson") {
      Meteor.call('saveCalEvent', doc);
      _.forEach(dates, function(item){
        var newStart = moment(item + " " + startTime);
        var newEnd = moment(newStart).add(dur, 'ms');
        doc.start = moment(newStart).toISOString();
        doc.end = moment(newEnd).toISOString();
        Meteor.call('saveCalEvent', doc);
      });
    }

    if (doc.recur.type === "course") {
      doc.courseId = courseId;
      Meteor.call('saveCalEvent', doc);
      _.forEach(dates, function(item){
        var newStart = moment(item + " " + startTime);
        var newEnd = moment(newStart).add(dur, 'ms');
        doc.start = moment(newStart).toISOString();
        doc.end = moment(newEnd).toISOString();
        // console.log(doc);
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
        category: doc.category,
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

  updateCalEvent: function(doc, id) {
    if (CalEvent.findOne({_id: id}) && moment(doc.$set.start).isAfter(moment())) {
      CalEvent.update({_id: id}, {$set: {
        title: doc.$set.title,
        start: moment(doc.$set.start).toISOString(),
        end: moment(doc.$set.end).toISOString(),
        category: doc.$set.category,
        description: doc.$set.description,
        owner: doc.$set.owner,
        allDay: doc.$set.allDay,
        price: doc.$set.price,
        attendeeCount: doc.$set.attendeeCount,
        street: doc.$set.street,
        city: doc.$set.city,
        state: doc.$set.state,
        zip: doc.$set.zip,
        courseId: doc.$set.courseId,
      }});
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
    if (!this.userId) {
      return null;
    } else {
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
      if (moment(start).isAfter(moment()) && moment(event.start).isAfter(moment())) {
        CalEvent.update({_id: id}, {$set: {
          start: moment(start).toISOString(),
          end: moment(end).toISOString(),
        }});
      }
    }
  },
});