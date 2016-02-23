// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.production.brad.class',
  name: 'Class',
  description: 'a marketplace for classes',
  author: 'Bradley Trapp',
  email: 'support@joinclass.co',
  website: 'http://joinclass.co'
});

// Set up resources such as icons and launch screens.
App.icons({
  'iphone': 'public/images/apple-touch-icon-180x180.png',
  'iphone_2x': 'public/images/apple-touch-icon-180x180.png',
  'android_ldpi': 'public/images/apple-touch-icon-180x180.png',
  'android_mdpi': 'public/images/apple-touch-icon-180x180.png',
  'android_hdpi': 'public/images/apple-touch-icon-180x180.png',
  'android_xhdpi': 'public/images/apple-touch-icon-180x180.png'
});

// App.launchScreens({
//   'iphone': 'splash/Default~iphone.png',
//   'iphone_2x': 'splash/Default@2x~iphone.png',
//   // ... more screen sizes and platforms ...
// });

// Set PhoneGap/Cordova preferences
// App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', false);
App.setPreference('Orientation', 'portrait');
App.setPreference('Orientation', 'portrait', 'ios');

// Pass preferences for a particular PhoneGap/Cordova plugin
// App.configurePlugin('com.phonegap.plugins.facebookconnect', {
//   APP_ID: '1234567890',
//   API_KEY: 'supersecretapikey'
// });