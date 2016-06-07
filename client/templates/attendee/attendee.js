Template.attendeesItem.helpers({
  user: function () {
    return this.owner;
  },
  isAttendee: function() {
    return this.owner === Meteor.userId();
  },

  isEventOwner: function () {
    var owner = CalEvent.findOne({_id: this.eventId}).owner;
    return owner === Meteor.userId();
  },

  dateFormat: function() {
    return moment(this.createdAt).format("L");
  },

  timeRes: function () {
    var start = moment(CalEvent.findOne({_id: this.eventId}).start).subtract(1, "days");
    return moment().isBefore(start);
  },

  present: function() {
    var att = Attendee.findOne({_id: this._id});
    return att.attendance.present;
  },

  status: function() {
    var att = Attendee.findOne({_id: this._id});
    if(att.reEventId) {
      return "Refunded";
    }
  },
  
  templateGestures: {
    'swipeleft .swipe': function (event, templateInstance) {
      $(this).data('lastClick', event.timeStamp);

      var itemList = $(event.target).parents('.swipe');
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      var doc = CalEvent.findOne({_id: this._id});

      if ($(itemList).find('.refundAtt').length != 0) {
        $(itemList).addClass('animated slideOutLeft').one(animationEnd, function() {
          $(itemList).removeClass('animated slideOutLeft');
        });

        $('#modal-confirm-refund').modal({});
      }
      
      $('#btn-refund').click(function() {
        $(itemList).find('.refundAtt').click();
      
        $('#modal-confirm-refund').modal('hide');
      });
    },
    'swiperight .swipe': function (event, templateInstance) {
      var itemList = $(event.target).parents('.swipe');
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      
      if ($(itemList).find('.pull-right').length != 0) {
        $(itemList).addClass('animated slideOutRight').one(animationEnd, function() {
          $(itemList).removeClass('animated slideOutRight');
        });

        $(itemList).find('[href="#afModal"]').click();
      }
    }
  },
});

Template.attendeesItem.events({
  'click .att' : function() {
    Session.set("emailAtt", this.owner);
    Session.set("eventIdEmail", this.eventId);
  },

  'click .swipe' : function(event) {
    if($(event.target).parent()[0].tagName != "A")
      return false;
  },

  'click .refundAtt' : function () {
    var att = Attendee.findOne({_id: this._id});
    Meteor.call('refundAttendee', att);
  },

  'click .present' : function() {
    Attendee.update({_id: this._id}, {$set: {"attendance.present": true}});
    Bert.alert(this.attendeeFirstName + " " + this.attendeeLastName + " is present.");
  },

  'click .unpresent' : function() {
    Attendee.update({_id: this._id}, {$set: {"attendance.present": false}});
    Bert.alert(this.attendeeFirstName + " " + this.attendeeLastName + " is NOT present.", 'warning');
  },


});