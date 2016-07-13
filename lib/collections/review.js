Review = new Mongo.Collection('review');

Review.attachSchema(new SimpleSchema({
    rating: {
        type: Number,
        label: "Rating",
        min: 0,
        max: 5
    },
    review: {
        type: String,
        label: 'Review'
    },
    title: {
        type: String,
        label: 'Title'
    },
    owner: {
        type: String,
        autoValue: function() {
            if(this.isInsert) {
                return Meteor.userId();
            } else {
                this.unset();
            }
        }
    },
    eventId: {
        type: String
    },
    eventOwner: {
        type: String,
        autoValue: function() {
            return CalEvent.findOne({_id: this.field('eventId').value}).owner;
        }
    },
    createdAt: {
        type: Date,
        autoValue: function() {
            return new Date();
        }
    }
}));