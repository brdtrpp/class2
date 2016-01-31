// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.example.matt.uber',
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
  // ... more screen sizes and platforms ...
});

// App.launchScreens({
//   'iphone': 'splash/Default~iphone.png',
//   'iphone_2x': 'splash/Default@2x~iphone.png',
//   // ... more screen sizes and platforms ...
// });

// Set PhoneGap/Cordova preferences
// App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'portrait');
App.setPreference('Orientation', 'all', 'ios');

// Pass preferences for a particular PhoneGap/Cordova plugin
// App.configurePlugin('com.phonegap.plugins.facebookconnect', {
//   APP_ID: '1234567890',
//   API_KEY: 'supersecretapikey'
// });