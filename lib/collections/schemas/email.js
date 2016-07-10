EmailSchema = new SimpleSchema({
  email: {
    type: String,
  },
  roles: {
    type: String,
    label: "What Role?",
    allowedValues: ['blogAdmin', 'blogAuthor'],
    autoform: {
      options: {
        blogAdmin: "Admin",
        blogAuthor: "Author",
      }
    }
  }
});
