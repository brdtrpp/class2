Template.fullReviewList.onRendered(function(){
    Session.set('owner', this.data._id);
});
Template.fullReviewList.helpers({
    owner: function() {
        return Session.get('owner');
    },
    reviews: function() {
        return Review.find({eventOwner: Session.get('owner')});
    },
    getUserEmail: function(id) {
        return Meteor.users.findOne({_id: id}).emails[0].address;
    }
});