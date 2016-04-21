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
  keyword: {
    type: String,
    optional: true
  },

  category: {
    type: String,
    allowedValues: [
      'academic',
      'beauty_style',
      'computer',
      'crafts_hobbies',
      'culinary',
      'health_wellness',
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
        academic: "Academics",
        beauty_style: "Beauty & Style",
        computer: "Computers & Technology",
        crafts_hobbies: "Craft & Hobbies",
        culinary: "Culinary",
        health_wellness: "Health & Wellness",
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
    // optional: true,
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