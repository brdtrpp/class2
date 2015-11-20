Template.profile.helpers({
  profile: function() {
    return Meteor.users.findOne({_id: this._id});
  }
})