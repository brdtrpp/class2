Meteor.startup(function() {

  // Stripe.setPublishableKey('pk_test_Hp3cH2DH048bEnH56mzrJu4F');

  // var stripeKey = Meteor.settings.public.stripe.testPublishableKey;
  // Stripe.setPublishableKey( stripeKey );

  // STRIPE = {
  //   getToken: function( domElement, card, callback) {
  //     if ( response.error ) {
  //       Bert.alert( response.error.message, "danger");
  //     } else {
  //       STRIPE.setToken( response.id, domElement, callback);
  //     }
  //   },
  //   setToken: function( token, domElement, callback) {
  //     $( domElement ).append( $( "<input type='hidden' name='stripeToken' />" ).val( token ) );
  //     callback();
  //   },
  // };
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

