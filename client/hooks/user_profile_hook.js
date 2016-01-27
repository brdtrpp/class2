AutoForm.hooks({
  updateUserProfile: {
    after: {
      update: function() {
        Bert.alert("Profile Successfully Updated");
      },
    }
  }
});