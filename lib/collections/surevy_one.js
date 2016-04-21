SurveyOne = new Mongo.Collection('survey');

QuestionsOneSchema = new SimpleSchema({
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

  userType: {
    type: String,
    label: "What kind of user are you?",
    allowedValues: [
      'business',
      'learner',
      'both'
    ],
    autoform: {
      type: "select",
      options: {
        business: "Small Business",
        learner: 'Live Long Student',
        both: 'Both'
      }
    }
  },

  country: {
    type: String,
    label: "What country do you live in?",
    autoform: {
      type: 'bootstrap-countries-field'
    }
  },

  moneySpent: {
    type: String,
    label: "How much money do you earn/spend a month on in-person classes on average (in USD)?",
  },

  category: {
    type: String,
    label: "What king of classes do you instruct or take the most?",
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
  },
});

SurveyOne.attachSchema([
  QuestionsOneSchema
]);