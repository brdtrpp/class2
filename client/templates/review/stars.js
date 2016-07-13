Template.stars.onRendered(function() {
    var ratings = [];
    var average = 0;
    var getAverage = function(ratings) {
        if (!ratings.length) {
            return 0;
        }
        var average = _(ratings).reduce(function (m, x) {
            return m + x;
        }, 0);
        average = Math.round(average / ratings.length);
        return average;
    };
    if(this.data.summary) {
        ratings = Review.find({eventOwner: this.data.eventOwner}, {fields: {'rating': 1}}).fetch().map(function (obj) {
            return obj.rating;
        });
        average = getAverage(ratings);
        $('[data-event-owner="' + this.data.eventOwner + '"] .star' + average).attr('checked', true);
        return average;
    } else {
        ratings = Review.find({eventId: this.data._id}, {fields: {'rating': 1}}).fetch().map(function (obj) {
            return obj.rating;
        });
        average = getAverage(ratings);
        $('[data-event="' + this.data._id + '"] .star' + average).attr('checked', true);
        return average;
    }
});

Template.stars.events({
    'click .rating>label': function(e) {
        e.preventDefault();
        if(!this.summary) {
           // $('.star' + e.currentTarget.dataset.rating).attr('checked', true);
            $('#createReviewModal').attr({ //data for the modal
                'data-rating': e.currentTarget.dataset.rating,
                'data-title': this.title,
                'data-event': this._id
            }).modal('show');
        }
    },
    'show.bs.modal #createReviewModal': function(e) {
        $(e.target).find('#modalStars').text(e.target.dataset.rating);
        $(e.target).find('#modalTitle').text(e.target.dataset.title);
    },
    'click #send-review': function(e) {
        var review = {
            eventId: $('#createReviewModal').data('event'),
            title: $('#createReviewModal').find('#modalTitle').text(),
            rating: $('#createReviewModal').find('#modalStars').text(),
            review: $('#createReviewModal').find('#modalReview').val()
        };
        Meteor.call('addReview', review, function(error, result) {
                $('#createReviewModal').modal('hide');
        });
    },
    'click #createReviewModal': function(e) {
        e.preventDefault();
    }
});