Template.search.helpers({
  isSearch: function() {
    if (Session.equals("search", true)){
      return true;
    }
  },
});

Template.search.events({
  'click .search': function () {
    Session.set('search', false);
    Session.set('loading', true);
  }
});