Blog = new Mongo.Collection('blog');

Blog.attachSchema(new SimpleSchema({
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
    },
  },

  author: {
    type: String,
    autoValue: function() {
      return "Bradley Trapp"
    },
    autoform: {
      omit: true
    },
  },

  title: {
    type: String,
  },

  body: {
    type: String,
    autoform: {
      type: 'summernote',
      class: 'summernote', // optional
      settings: {
        height: 150,
        toolbar: [
          ['style', ['style', 'bold', 'italic', 'underline', 'clear']],
          // ['font', ['strikethrough', 'superscript', 'subscript']],
          ['fontsize', ['fontsize', 'fontname']],
          // ['color', ['color']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['height', ['height']]
        ],
      }
    },
    autoValue: function(){
      if( Meteor.isServer ){
        return sanitizeHtml( this.value, {
          allowedTags: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div', 'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre' ],
        } );
      }else{
        return this.value;
      }
    },
  }
}));
