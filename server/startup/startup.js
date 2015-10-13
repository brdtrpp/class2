Meteor.startup(function() {
  Meteor.methods({
    'saveCalEvent':function(ce){
        CalEvent.insert(ce);
      },
    'moveEvent':function(reqEvent){
      return CalEvent.update({id:reqEvent._id},{
        $set:{
          start:reqEvent.start,
          end:reqEvent.end
        }
      });
    },
  });
});

