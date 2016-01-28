Template.search.helpers({
  isSearch: function() {
    if (Session.equals("search", true)){
      return true;
    }
  },
});

Template.search.events({
  
});