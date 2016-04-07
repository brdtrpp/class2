Schemas = {};

Schemas.SendEmail = new SimpleSchema({
  // to: {
  //   type: String,
  //   label: "Send To",
  //   autoValue: function() {
  //     return "TOASTER";
  //   }
  // },


  // from: {
  //   type: String,
  //   autoform:{
  //     afFieldInput: {
  //       readonly: true,
  //     }
  //   },
  //   defaultValue: function() {
  //     return "support@joinclass.co";
  //   }
  // },

  subject: {
    type: String,
    label: "Subject"
  },

  html: {
    type: String,
    label: "Description",
    autoform: {
      type: 'summernote',
      class: 'editor', // optional
      rows: 10,
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