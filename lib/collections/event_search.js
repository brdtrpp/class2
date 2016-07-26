Search = new Mongo.Collection('search');

Search.attachSchema( new SimpleSchema ({
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    },
    autoform: {
      omit: true
    }
  },
  // keyword: {
  //   type: String,
  //   optional: true
  // },

  category: {
    type: String,
    allowedValues: [
      'tutor',
      'dance',
      'beauty',
      'computer',
      'hobbies',
      'culinary',
      'health',
      'language',
      'music',
      'performance',
      'sports',
      'fitness',
      'arts',
      'religious',
      'homeschool',
      'other'
    ],
    autoform: {
      type: "select",
      options: {
        tutor: "Tutor",
        beauty: "Beauty & Style",
        dance: "Dance",
        computer: "Computers & Technology",
        hobbies: "Craft & Hobbies",
        culinary: "Culinary",
        health: "Health & Wellness",
        language: "Language",
        music: "Music",
        performance: "Performing Arts",
        sports: "Sports & Athletics",
        fitness: "Fitness",
        arts: "Creative Arts",
        religious: "Religious",
        homeschool: "Homeschool",
        other: "Other"
      }
    },
    optional: true,
  },

  zip: {
    type: String,
    regEx: /^[0-9]{5}$/,
  },
  radius: {
    type: Number,
    optional: true,
    defaultValue: 25,
  },

  owner: {
    type: String,
    autoform: {
      omit: true
    },
    optional: true,
  },
}));
