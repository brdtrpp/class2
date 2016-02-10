Template.home.helpers({
  ip: function() {
    var city = geoplugin_city();
    console.log(city);
    return city;
  },

  isCordova: function() {
    return Meteor.isCordova;
  }
});

Template.home.onRendered( function() {
  if (Meteor.user()) {
      if (!Meteor.user().profile.affiliateId) {
        if (Session.get('affiliateId')) {
          Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.affiliateId': Session.get('affiliateId')}});
        } else if (Session.get('rAffiliate')) {
          Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.affiliateId': Session.get('rAffiliate')}});
        } else {
          Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.affiliateId': 'nonafid'}});
        }
      }
    }
});

