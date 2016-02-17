Meteor.methods({
  search: function(doc) {
    var events = [];
    doc.owner = Meteor.userId();
    doc.createdAt = moment()._d;

    var rad = Zipcodes.radius(doc.zip, doc.radius);
      _.forEach(rad, function(zip){
        if (doc.keyword) {
          var event = CalEvent.find({category: doc.category, zip: zip, canceled: false, $text: { $search: doc.keyword }}).fetch();
        } else {
          var event = CalEvent.find({category: doc.category, zip: zip, canceled: false}).fetch();
        }
        _.forEach(event, function(items){
          if (_.findWhere(events, {_id: items._id}) === undefined) {
            events.push(items);
          }
        });
      });
    return _.sortBy(events, 'start');
  },

  'cSearch' : function(doc) {
    console.log(doc);
  },
});