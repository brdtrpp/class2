Meteor.methods({
    addReview: function(review) {
        var event = CalEvent.findOne({_id: review.eventId});
        if(this.userId && !Review.findOne({eventId: review.eventId, owner: this.userId}))
            if ((new Date(event.end)).getTime() <= (new Date().getTime()))
                if (Attendee.findOne({eventId: review.eventId, owner: this.userId}))
                    if (event) {
                        Review.insert({
                            title: review.title,
                            rating: review.rating,
                            review: review.review,
                            eventId: review.eventId
                        });
                    }
    }
});