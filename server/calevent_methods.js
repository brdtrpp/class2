Meteor.methods({
  recur:function(doc){
    var date = moment(doc.start).format("MM-DD-YYYY");
    var end = moment(doc.end).format("MM-DD-YYYY");
    var startTime = moment(doc.start).format("HH:mm");
    var endTime = moment(doc.end).format("HH:mm");
    var recur = moment(date).recur(end).every(doc.recur.intervalNumber, doc.recur.intervalType);

    //Recurring individual events
    if (doc.recur.type === "lesson") {
      for (
        i = 0;
        i < 365;
        i++, date = JSON.stringify(moment(moment(date).add(1, "days")._d).format("MM-DD-YYYY"))
        ) {
            if (recur.matches(date) == true) {
              CalEvent.insert({
                title: doc.title,
                start: moment(date+startime).format("YYYY-MM-DDTHH:mm:ss")
                // end: moment()
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
    return  CalEvent.insert(ce);
  },

  moveEvent:function(event){
    return CalEvent.update({_id:event._id},{
      $set:{
        start: moment(event.start).format(),
        end: moment(event.end).format(),
        owner: Meteor.userId(),
      }
    });
  },
});