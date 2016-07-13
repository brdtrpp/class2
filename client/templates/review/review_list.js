Template.reviewList.helpers({
    'reviews': function() {
        return Review.find({eventId: this._id});
    },
    'isExist': function() {
        if(Review.find({eventId: this._id}).count() > 0)
            return true;

        return false;
    }
});