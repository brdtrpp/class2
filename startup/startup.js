Meteor.startup(function() {

Security.permit(['insert', 'update', 'remove']).collections([
  Meteor.users
  ]).apply();
Security.permit(['insert', 'update', 'remove']).collections([CalEvent]).apply();
Security.permit(['insert', 'update', 'remove']).collections([Attendee]).apply();

  Meteor.methods({
    'saveCalEvent':function(ce){
        CalEvent.insert(ce);
      },
    'moveEvent':function(event){
      return CalEvent.update({_id:event._id},{
        $set:{
          start:event.start.format(),
          end:event.end.format(),
          owner:Meteor.userId(),
        }
      });
    },
  });
  
});

