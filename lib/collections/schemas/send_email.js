Schemas = {};

Schemas.SendEmail = new SimpleSchema({
  subject: {
    type: String,
    label: "Subject"
  },

  html: {
    type: String,
    label: "Description",
    autoform: {
      type: 'summernote',
      class: 'editor',
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
  },
});