Template.reviewItem.helpers({
    'getUserEmail': function(id) {
        return Meteor.users.findOne({_id: id}).emails[0].address;
    },
    'getStars': function(rating) {
        if(rating == 1) {
            return '1 star';
        } else {
            return rating + ' stars';
        }
    }
});