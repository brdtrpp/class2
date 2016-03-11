SurveyTwo = new Mongo.Collection('survey2');
QuestionsTwoSchema = new SimpleSchema({
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
    denyUpdate: true,
    autoform: {
      omit: true
    },
  },
  businessName: {
    type: String,
    label: "What the name of your company?"
  },

  website: {
    type: String,
    label: "Your website",
    regEx: SimpleSchema.RegEx.Url
  },

  businessType: {
    type: String,
    label: "Type of Business",
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
        performance: "Performaning Arts",
        sports: "Sports & Athletics",
        fitness: "Fitness",
        arts: "Creative Arts",
        religious: "Religious",
        homeschool: "Homeschool",
        other: "Other"
      }
    },
  },

  customerBase: {
    type: Number,
    label: "What the total number of students or attendees do you have?"
  },

  classSize: {
    type: Number,
    label: 'How many attendees per class?'
  },
  
  classType: {
    type: String,
    label: "Tell use how your classes are structured, what kind of schedule do you have, what kind of payments, those sorts of things.",
    autoform: {
      rows: 7
    }
  },
});

SurveyTwo.attachSchema([
  QuestionsTwoSchema
]);