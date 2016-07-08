//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Template = Package.templating.Template;
var _ = Package.underscore._;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var __coffeescriptShare, ShareIt;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/liberation_shareit/shareit.coffee.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var script_loader;                                                                                                     // 1
                                                                                                                       //
script_loader = function(url, id, d) {                                                                                 // 1
  var fjs, js;                                                                                                         // 2
  if (d == null) {                                                                                                     //
    d = document;                                                                                                      //
  }                                                                                                                    //
  if (!d.getElementById(id)) {                                                                                         //
    fjs = d.getElementsByTagName('script')[0];                                                                         //
    js = d.createElement('script');                                                                                    //
    js.async = true;                                                                                                   //
    js.id = id;                                                                                                        //
    js.src = url;                                                                                                      //
    return fjs.parentNode.insertBefore(js, fjs);                                                                       //
  }                                                                                                                    //
};                                                                                                                     // 1
                                                                                                                       //
ShareIt = {                                                                                                            // 11
  settings: {                                                                                                          //
    autoInit: true,                                                                                                    //
    buttons: 'responsive',                                                                                             //
    sites: {                                                                                                           //
      facebook: {                                                                                                      //
        'appId': null,                                                                                                 //
        'version': 'v2.3',                                                                                             //
        'description': '',                                                                                             //
        'buttonText': 'Share on Facebook'                                                                              //
      },                                                                                                               //
      twitter: {                                                                                                       //
        'description': '',                                                                                             //
        'buttonText': 'Share on Twitter'                                                                               //
      },                                                                                                               //
      googleplus: {                                                                                                    //
        'description': '',                                                                                             //
        'buttonText': 'Share on Google+'                                                                               //
      },                                                                                                               //
      pinterest: {                                                                                                     //
        'description': '',                                                                                             //
        'buttonText': 'Share on Pinterest'                                                                             //
      },                                                                                                               //
      instagram: {                                                                                                     //
        'description': '',                                                                                             //
        'buttonText': 'Share on Instagram'                                                                             //
      }                                                                                                                //
    },                                                                                                                 //
    siteOrder: [],                                                                                                     //
    classes: 'large btn',                                                                                              //
    iconOnly: false,                                                                                                   //
    faSize: '',                                                                                                        //
    faClass: '',                                                                                                       //
    applyColors: true                                                                                                  //
  },                                                                                                                   //
  configure: function(params) {                                                                                        //
    if (params != null) {                                                                                              //
      return $.extend(true, this.settings, params);                                                                    //
    }                                                                                                                  //
  },                                                                                                                   //
  helpers: {                                                                                                           //
    classes: function() {                                                                                              //
      return ShareIt.settings.classes;                                                                                 //
    },                                                                                                                 //
    showText: function(text) {                                                                                         //
      return !ShareIt.settings.iconOnly && (" " + text);                                                               //
    },                                                                                                                 //
    applyColors: function(cssClasses) {                                                                                //
      return ShareIt.settings.applyColors && (" " + cssClasses);                                                       //
    },                                                                                                                 //
    faSize: function() {                                                                                               //
      return ShareIt.settings.faSize;                                                                                  //
    },                                                                                                                 //
    faClass: function() {                                                                                              //
      return ShareIt.settings.faClass && ("-" + ShareIt.settings.faClass);                                             //
    },                                                                                                                 //
    buttonText: function() {                                                                                           //
      return {                                                                                                         //
        facebook: ShareIt.settings.sites.facebook.buttonText,                                                          //
        twitter: ShareIt.settings.sites.twitter.buttonText,                                                            //
        googleplus: ShareIt.settings.sites.googleplus.buttonText,                                                      //
        pinterest: ShareIt.settings.sites.pinterest.buttonText,                                                        //
        instagram: ShareIt.settings.sites.instagram.buttonText                                                         //
      };                                                                                                               //
    }                                                                                                                  //
  },                                                                                                                   //
  init: function(params) {                                                                                             //
    if (params != null) {                                                                                              //
      this.configure(params);                                                                                          //
    }                                                                                                                  //
    script_loader('//platform.twitter.com/widgets.js', 'twitter-wjs');                                                 //
    if (this.settings.autoInit && (this.settings.sites.facebook != null)) {                                            //
      window.fbAsyncInit = (function(_this) {                                                                          //
        return function() {                                                                                            //
          return FB.init(_this.settings.sites.facebook);                                                               //
        };                                                                                                             //
      })(this);                                                                                                        //
    }                                                                                                                  //
    if ($('#fb-root').get(0) == null) {                                                                                //
      $('<div id="fb-root"></div>').appendTo('body');                                                                  //
    }                                                                                                                  //
    return script_loader('//connect.facebook.net/en_US/sdk.js', 'facebook-jssdk');                                     //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/liberation_shareit/client/views/template.social.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("shareit");                                                                                       // 2
Template["shareit"] = new Template("Template.shareit", (function() {                                                   // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "share-buttons"                                                                                           // 6
  }, "\n	  ", Blaze.Each(function() {                                                                                  // 7
    return Spacebars.call(view.lookup("siteTemplates"));                                                               // 8
  }, function() {                                                                                                      // 9
    return [ "\n	    ", Blaze._TemplateWith(function() {                                                               // 10
      return {                                                                                                         // 11
        template: Spacebars.call(view.lookup(".")),                                                                    // 12
        data: Spacebars.call(view.lookup(".."))                                                                        // 13
      };                                                                                                               // 14
    }, function() {                                                                                                    // 15
      return Spacebars.include(function() {                                                                            // 16
        return Spacebars.call(Template.__dynamic);                                                                     // 17
      });                                                                                                              // 18
    }), "\n	  " ];                                                                                                     // 19
  }), "\n	");                                                                                                          // 20
}));                                                                                                                   // 21
                                                                                                                       // 22
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/liberation_shareit/client/views/social.coffee.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.shareit.helpers({                                                                                             // 1
  siteTemplates: function() {                                                                                          //
    var i, len, ref, results, site;                                                                                    // 3
    ref = ShareIt.settings.siteOrder;                                                                                  // 3
    results = [];                                                                                                      // 3
    for (i = 0, len = ref.length; i < len; i++) {                                                                      //
      site = ref[i];                                                                                                   //
      if (ShareIt.settings.sites[site] != null) {                                                                      //
        results.push("shareit_" + site);                                                                               //
      }                                                                                                                //
    }                                                                                                                  // 3
    return results;                                                                                                    //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/liberation_shareit/client/views/facebook/template.facebook.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("shareit_facebook");                                                                              // 2
Template["shareit_facebook"] = new Template("Template.shareit_facebook", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return HTML.A({                                                                                                      // 5
    href: "#",                                                                                                         // 6
    target: "_blank",                                                                                                  // 7
    "class": function() {                                                                                              // 8
      return [ Spacebars.mustache(view.lookup("classes")), Spacebars.mustache(view.lookup("applyColors"), "shareit-facebook-colors"), " fb-share" ];
    }                                                                                                                  // 10
  }, HTML.I({                                                                                                          // 11
    "class": function() {                                                                                              // 12
      return [ "fa fa-facebook", Spacebars.mustache(view.lookup("faClass")), " ", Spacebars.mustache(view.lookup("faSize")) ];
    }                                                                                                                  // 14
  }), Blaze.View("lookup:showText", function() {                                                                       // 15
    return Spacebars.mustache(view.lookup("showText"), Spacebars.dot(view.lookup("buttonText"), "facebook"));          // 16
  }));                                                                                                                 // 17
}));                                                                                                                   // 18
                                                                                                                       // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/liberation_shareit/client/views/facebook/facebook.coffee.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.shareit_facebook.onRendered(function() {                                                                      // 1
  var attach_share_handler;                                                                                            // 2
  if (!this.data) {                                                                                                    //
    return;                                                                                                            // 2
  }                                                                                                                    //
  attach_share_handler = _.once(function(handler) {                                                                    //
    if (_.isFunction(handler)) {                                                                                       //
      return Template.instance().$('.fb-share').click(handler);                                                        //
    }                                                                                                                  //
  });                                                                                                                  //
  return this.autorun(function() {                                                                                     //
    var author, data, description, href, img, publisher, ref, ref1, ref2, ref3, ref4, title, url;                      // 8
    data = Template.currentData();                                                                                     //
    $('meta[property^="og:"]').remove();                                                                               //
    $('<meta>', {                                                                                                      //
      property: 'og:type',                                                                                             //
      content: 'article'                                                                                               //
    }).appendTo('head');                                                                                               //
    $('<meta>', {                                                                                                      //
      property: 'og:site_name',                                                                                        //
      content: location.hostname                                                                                       //
    }).appendTo('head');                                                                                               //
    url = ((ref = data.facebook) != null ? ref.url : void 0) || data.url;                                              //
    url = _.isString(url) && url.length ? url : location.href;                                                         //
    $('<meta>', {                                                                                                      //
      property: 'og:url',                                                                                              //
      content: url                                                                                                     //
    }).appendTo('head');                                                                                               //
    title = ((ref1 = data.facebook) != null ? ref1.title : void 0) || data.title;                                      //
    if (_.isString(title) && title.length) {                                                                           //
      $('<meta>', {                                                                                                    //
        property: 'og:title',                                                                                          //
        content: title                                                                                                 //
      }).appendTo('head');                                                                                             //
    } else {                                                                                                           //
      title = '';                                                                                                      //
    }                                                                                                                  //
    description = ((ref2 = data.facebook) != null ? ref2.description : void 0) || data.excerpt || data.description || data.summary;
    if (_.isString(description) && description.length) {                                                               //
      $('<meta>', {                                                                                                    //
        property: 'og:description',                                                                                    //
        content: description                                                                                           //
      }).appendTo('head');                                                                                             //
    } else {                                                                                                           //
      description = '';                                                                                                //
    }                                                                                                                  //
    author = ((ref3 = data.facebook) != null ? ref3.author : void 0) || data.author;                                   //
    if (_.isString(author) && author.length) {                                                                         //
      $('<meta>', {                                                                                                    //
        property: 'article:author',                                                                                    //
        content: author                                                                                                //
      }).appendTo('head');                                                                                             //
    } else {                                                                                                           //
      author = '';                                                                                                     //
    }                                                                                                                  //
    publisher = ((ref4 = data.facebook) != null ? ref4.publisher : void 0) || data.publisher;                          //
    if (_.isString(publisher) && publisher.length) {                                                                   //
      $('<meta>', {                                                                                                    //
        property: 'article:publisher',                                                                                 //
        content: publisher                                                                                             //
      }).appendTo('head');                                                                                             //
    } else {                                                                                                           //
      publisher = '';                                                                                                  //
    }                                                                                                                  //
    if (data.thumbnail != null) {                                                                                      //
      img = _.isFunction(data.thumbnail) ? data.thumbnail() : data.thumbnail;                                          //
      if (_.isString(img) && img.length) {                                                                             //
        if (!/^http(s?):\/\/+/.test(img)) {                                                                            //
          img = location.origin + img;                                                                                 //
        }                                                                                                              //
        $('<meta>', {                                                                                                  //
          property: 'og:image',                                                                                        //
          content: img                                                                                                 //
        }).appendTo('head');                                                                                           //
      } else {                                                                                                         //
        img = '';                                                                                                      //
      }                                                                                                                //
    }                                                                                                                  //
    if (ShareIt.settings.sites.facebook.appId != null) {                                                               //
      $('<meta>', {                                                                                                    //
        property: 'fb:app_id',                                                                                         //
        content: ShareIt.settings.sites.facebook.appId                                                                 //
      }).appendTo('head');                                                                                             //
      return attach_share_handler(function(evt) {                                                                      //
        evt.preventDefault();                                                                                          //
        return FB.ui({                                                                                                 //
          method: 'share',                                                                                             //
          display: 'popup',                                                                                            //
          href: url                                                                                                    //
        }, function(res) {                                                                                             //
          return res;                                                                                                  //
        });                                                                                                            //
      });                                                                                                              //
    } else {                                                                                                           //
      href = "https://www.facebook.com/sharer/sharer.php?s=100&p[url]=" + (encodeURIComponent(url)) + "&p[title]=" + (encodeURIComponent(title)) + "&p[summary]=" + (encodeURIComponent(description));
      if (img) {                                                                                                       //
        href += "&p[images][0]=" + (encodeURIComponent(img));                                                          //
      }                                                                                                                //
      return Template.instance().$(".fb-share").attr("href", href);                                                    //
    }                                                                                                                  //
  });                                                                                                                  //
});                                                                                                                    // 1
                                                                                                                       //
Template.shareit_facebook.helpers(ShareIt.helpers);                                                                    // 66
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/liberation_shareit/client/views/twitter/template.twitter.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("shareit_twitter");                                                                               // 2
Template["shareit_twitter"] = new Template("Template.shareit_twitter", (function() {                                   // 3
  var view = this;                                                                                                     // 4
  return HTML.A({                                                                                                      // 5
    href: function() {                                                                                                 // 6
      return [ "https://twitter.com/intent/tweet?url=", Spacebars.mustache(view.lookup("url")), "&text=", Spacebars.mustache(view.lookup("text")) ];
    },                                                                                                                 // 8
    "class": function() {                                                                                              // 9
      return [ Spacebars.mustache(view.lookup("classes")), Spacebars.mustache(view.lookup("applyColors"), "shareit-twitter-colors"), " tw-share" ];
    }                                                                                                                  // 11
  }, HTML.I({                                                                                                          // 12
    "class": function() {                                                                                              // 13
      return [ "fa fa-twitter", Spacebars.mustache(view.lookup("faClass")), " ", Spacebars.mustache(view.lookup("faSize")) ];
    }                                                                                                                  // 15
  }), Blaze.View("lookup:showText", function() {                                                                       // 16
    return Spacebars.mustache(view.lookup("showText"), Spacebars.dot(view.lookup("buttonText"), "twitter"));           // 17
  }));                                                                                                                 // 18
}));                                                                                                                   // 19
                                                                                                                       // 20
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/liberation_shareit/client/views/twitter/twitter.coffee.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.shareit_twitter.onRendered(function() {                                                                       // 1
  if (!this.data) {                                                                                                    //
    return;                                                                                                            // 2
  }                                                                                                                    //
  return this.autorun(function() {                                                                                     //
    var author, data, description, hashtags, href, img, ref, ref1, ref2, ref3, ref4, title, url;                       // 5
    data = Template.currentData();                                                                                     //
    $('meta[property^="twitter:"]').remove();                                                                          //
    $('<meta>', {                                                                                                      //
      property: 'twitter:card',                                                                                        //
      content: 'summary'                                                                                               //
    }).appendTo('head');                                                                                               //
    url = ((ref = data.twitter) != null ? ref.url : void 0) || data.url;                                               //
    url = _.isString(url) && url.length ? url : location.origin + location.pathname;                                   //
    $('<meta>', {                                                                                                      //
      property: 'twitter:url',                                                                                         //
      content: url                                                                                                     //
    }).appendTo('head');                                                                                               //
    author = ((ref1 = data.twitter) != null ? ref1.author : void 0) || data.author;                                    //
    if (_.isString(author) && author.length) {                                                                         //
      $('<meta>', {                                                                                                    //
        property: 'twitter:creator',                                                                                   //
        content: author                                                                                                //
      }).appendTo('head');                                                                                             //
    } else {                                                                                                           //
      author = '';                                                                                                     //
    }                                                                                                                  //
    title = ((ref2 = data.twitter) != null ? ref2.title : void 0) || data.title;                                       //
    if (_.isString(title) && title.length) {                                                                           //
      $('<meta>', {                                                                                                    //
        property: 'twitter:title',                                                                                     //
        content: title                                                                                                 //
      }).appendTo('head');                                                                                             //
    } else {                                                                                                           //
      title = '';                                                                                                      //
    }                                                                                                                  //
    description = ((ref3 = data.twitter) != null ? ref3.description : void 0) || data.excerpt || data.description || data.summary;
    if (_.isString(description) && description.length) {                                                               //
      $('<meta>', {                                                                                                    //
        property: 'twitter:description',                                                                               //
        content: description                                                                                           //
      }).appendTo('head');                                                                                             //
    } else {                                                                                                           //
      description = '';                                                                                                //
    }                                                                                                                  //
    if (data.thumbnail != null) {                                                                                      //
      img = _.isFunction(data.thumbnail) ? data.thumbnail() : data.thumbnail;                                          //
      if (_.isString(img) && img.length) {                                                                             //
        if (!/^http(s?):\/\/+/.test(img)) {                                                                            //
          img = location.origin + img;                                                                                 //
        }                                                                                                              //
        $('<meta>', {                                                                                                  //
          property: 'twitter:image',                                                                                   //
          content: img                                                                                                 //
        }).appendTo('head');                                                                                           //
      } else {                                                                                                         //
        img = '';                                                                                                      //
      }                                                                                                                //
    }                                                                                                                  //
    href = "https://twitter.com/intent/tweet?url=" + (encodeURIComponent(url)) + "&text=" + (encodeURIComponent(title));
    hashtags = ((ref4 = data.twitter) != null ? ref4.hashtags : void 0) || data.hashtags;                              //
    if (_.isString(hashtags) && hashtags.length) {                                                                     //
      href += "&hashtags=" + (encodeURIComponent(hashtags));                                                           //
    }                                                                                                                  //
    if (author) {                                                                                                      //
      href += "&via=" + (encodeURIComponent(author));                                                                  //
    }                                                                                                                  //
    return Template.instance().$(".tw-share").attr("href", href);                                                      //
  });                                                                                                                  //
});                                                                                                                    // 1
                                                                                                                       //
Template.shareit_twitter.helpers(ShareIt.helpers);                                                                     // 56
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/liberation_shareit/client/views/googleplus/template.googleplus.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("shareit_googleplus");                                                                            // 2
Template["shareit_googleplus"] = new Template("Template.shareit_googleplus", (function() {                             // 3
  var view = this;                                                                                                     // 4
  return HTML.A({                                                                                                      // 5
    "class": function() {                                                                                              // 6
      return [ Spacebars.mustache(view.lookup("classes")), Spacebars.mustache(view.lookup("applyColors"), "shareit-google-colors"), " googleplus-share" ];
    },                                                                                                                 // 8
    href: "https://plus.google.com/share?url=#{url}",                                                                  // 9
    onclick: "javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
  }, HTML.I({                                                                                                          // 11
    "class": function() {                                                                                              // 12
      return [ "fa fa-google-plus", Spacebars.mustache(view.lookup("faClass")), " ", Spacebars.mustache(view.lookup("faSize")) ];
    }                                                                                                                  // 14
  }), Blaze.View("lookup:showText", function() {                                                                       // 15
    return Spacebars.mustache(view.lookup("showText"), Spacebars.dot(view.lookup("buttonText"), "googleplus"));        // 16
  }));                                                                                                                 // 17
}));                                                                                                                   // 18
                                                                                                                       // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/liberation_shareit/client/views/googleplus/googleplus.coffee.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.shareit_googleplus.onRendered(function() {                                                                    // 1
  if (!this.data) {                                                                                                    //
    return;                                                                                                            // 2
  }                                                                                                                    //
  return this.autorun(function() {                                                                                     //
    var data, description, href, img, itemtype, ref, ref1, template, title, url;                                       // 5
    template = Template.instance();                                                                                    //
    data = Template.currentData();                                                                                     //
    $('meta[itemscope]').remove();                                                                                     //
    description = ((ref = data.googleplus) != null ? ref.description : void 0) || data.excerpt || data.description || data.summary;
    url = data.url || location.origin + location.pathname;                                                             //
    title = data.title;                                                                                                //
    itemtype = ((ref1 = data.googleplus) != null ? ref1.itemtype : void 0) || 'Article';                               //
    $('html').attr('itemscope', '').attr('itemtype', "http://schema.org/" + itemtype);                                 //
    $('<meta>', {                                                                                                      //
      itemprop: 'name',                                                                                                //
      content: location.hostname                                                                                       //
    }).appendTo('head');                                                                                               //
    $('<meta>', {                                                                                                      //
      itemprop: 'url',                                                                                                 //
      content: url                                                                                                     //
    }).appendTo('head');                                                                                               //
    $('<meta>', {                                                                                                      //
      itemprop: 'description',                                                                                         //
      content: description                                                                                             //
    }).appendTo('head');                                                                                               //
    if (data.thumbnail) {                                                                                              //
      if (typeof data.thumbnail === "function") {                                                                      //
        img = data.thumbnail();                                                                                        //
      } else {                                                                                                         //
        img = data.thumbnail;                                                                                          //
      }                                                                                                                //
    }                                                                                                                  //
    if (img) {                                                                                                         //
      if (!/^http(s?):\/\/+/.test(img)) {                                                                              //
        img = location.origin + img;                                                                                   //
      }                                                                                                                //
    }                                                                                                                  //
    $('<meta>', {                                                                                                      //
      itemprop: 'image',                                                                                               //
      content: img                                                                                                     //
    }).appendTo('head');                                                                                               //
    href = "https://plus.google.com/share?url=" + url;                                                                 //
    return template.$(".googleplus-share").attr("href", href);                                                         //
  });                                                                                                                  //
});                                                                                                                    // 1
                                                                                                                       //
Template.shareit_googleplus.helpers(ShareIt.helpers);                                                                  // 38
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/liberation_shareit/client/views/pinterest/template.pinterest.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("shareit_pinterest");                                                                             // 2
Template["shareit_pinterest"] = new Template("Template.shareit_pinterest", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return HTML.A({                                                                                                      // 5
    "class": function() {                                                                                              // 6
      return [ Spacebars.mustache(view.lookup("classes")), Spacebars.mustache(view.lookup("applyColors"), "shareit-pinterest-colors"), " pinterest-share" ];
    },                                                                                                                 // 8
    href: function() {                                                                                                 // 9
      return [ "https://www.pinterest.com/pin/create/button/?url=", Spacebars.mustache(view.lookup("url")), "&media=", Spacebars.mustache(view.lookup("media")), "&description=", Spacebars.mustache(view.lookup("description")) ];
    }                                                                                                                  // 11
  }, HTML.I({                                                                                                          // 12
    "class": function() {                                                                                              // 13
      return [ "fa fa-pinterest", Spacebars.mustache(view.lookup("faClass")), " ", Spacebars.mustache(view.lookup("faSize")) ];
    }                                                                                                                  // 15
  }), Blaze.View("lookup:showText", function() {                                                                       // 16
    return Spacebars.mustache(view.lookup("showText"), Spacebars.dot(view.lookup("buttonText"), "pinterest"));         // 17
  }));                                                                                                                 // 18
}));                                                                                                                   // 19
                                                                                                                       // 20
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/liberation_shareit/client/views/pinterest/pinterest.coffee.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.shareit_pinterest.onRendered(function() {                                                                     // 1
  if (!this.data) {                                                                                                    //
    return;                                                                                                            // 2
  }                                                                                                                    //
  return this.autorun(function() {                                                                                     //
    var data, description, href, preferred_url, ref, template, url;                                                    // 5
    template = Template.instance();                                                                                    //
    data = Template.currentData();                                                                                     //
    preferred_url = data.url || location.origin + location.pathname;                                                   //
    url = encodeURIComponent(preferred_url);                                                                           //
    description = encodeURIComponent(((ref = data.pinterest) != null ? ref.description : void 0) || data.description);
    href = "http://www.pinterest.com/pin/create/button/?url=" + url + "&media=" + data.media + "&description=" + description;
    return template.$('.pinterest-share').attr('href', href);                                                          //
  });                                                                                                                  //
});                                                                                                                    // 1
                                                                                                                       //
Template.shareit_pinterest.events({                                                                                    // 16
  'click a': function(event, template) {                                                                               //
    event.preventDefault();                                                                                            //
    return window.open($(template.find('.pinterest-share')).attr('href'), 'pinterest_window', 'width=750, height=650');
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Template.shareit_pinterest.helpers(ShareIt.helpers);                                                                   // 21
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['liberation:shareit'] = {}, {
  ShareIt: ShareIt
});

})();
