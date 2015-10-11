Template.eventItemList.events({
  // "click .mdi-content-clear": function() {
  //   CalEvent.remove(this._id);
  // },
  // "click .mdi-content-create": function() {
  //   $('#calevent-update').modal('show');
  // }
});

Template.eventItemList.helpers({
  isOwner: function () {
    return this.owner === Meteor.userId();
  },
  
  // username: function () {
  //   return this.owner.username();
  // },
  
  startDate: function () {
    var time = this.start;
    return moment(time).format('MM/DD/YYYY, HH:MM');
  },
  
  endDate: function() {
    return CalEvent(this._id).moment.calendar();
  }
});