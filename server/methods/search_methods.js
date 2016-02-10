Meteor.methods({
  search: function(doc) {

    var events = [];
    doc.owner = Meteor.userId();
    doc.createdAt = moment()._d;
    Search.insert(doc);
    var rad = Zipcodes.radius(doc.zip, doc.radius);
      _.forEach(rad, function(item){
        if (doc.keyword) {
          var event = CalEvent.find({category: doc.category, zip: item, canceled: false, $text: { $search: doc.keyword }}).fetch();
        } else {
          var event = CalEvent.find({category: doc.category,zip: item, canceled: false}).fetch();
        }
        _.forEach(event, function(items){
          if (_.findWhere(events, {_id: items._id}) === undefined) {
            events.push(items);
          }
        });
      });
    return _.sortBy(events, 'start');
  }
});