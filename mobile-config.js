// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.brad.joinclass',
  version: "1.0.2",
  buildNumber: "4",
  name: 'Class',
  description: 'a marketplace for classes',
  author: 'Bradley Trapp',
  email: 'support@joinclass.co',
  website: 'http://joinclass.co'
});

// Set up resources such as icons and launch screens.
App.icons({
  'iphone_2x': 'public/images/app/apple-touch-icon-120x120.png',
  'iphone_3x': 'public/images/app/apple-touch-icon-180x180.png',
  // 'ipad': 'public/images/app/apple-touch-icon-',
  'ipad_2x': 'public/images/app/apple-touch-icon-152x152.png',
  // 'ipad_pro': 'public/images/app/apple-touch-icon-',
  // 'ios_settings': 'public/images/app/apple-touch-icon-',
  'ios_settings_2x': 'public/images/app/apple-touch-icon-57x57.png',
  // 'ios_settings_3x': 'public/images/app/apple-touch-icon-',
  // 'ios_spotlight': 'public/images/app/apple-touch-icon-',
  // 'ios_spotlight_2x': 'public/images/app/apple-touch-icon-',
  'android_mdpi': 'public/images/app/apple-touch-icon-57x57.png',
  'android_hdpi': 'public/images/app/apple-touch-icon-72x72.png',
  'android_xhdpi': 'public/images/app/apple-touch-icon-76x76.png',
  'android_xxhdpi': 'public/images/app/apple-touch-icon-144x144.png',
  'android_xxxhdpi': 'public/images/app/apple-touch-icon-180x180.png'
  // 'iphone_2x': 'public/images/app/assets/mobileweb/appicon.png',
  // 'ipad': 'public/images/app/assets/mobileweb/appicon.png' ,
  // 'ipad_2x': 'public/images/app/assets/mobileweb/appicon.png' ,
  // 'android_mdpi': 'public/images/app/assets/mobileweb/appicon.png',
  // 'android_hdpi': 'public/images/app/assets/mobileweb/appicon.png',
  // 'android_xhdpi': 'public/images/app/assets/mobileweb/appicon.png'
});

App.launchScreens({
  // 'iphone': 'public/images/app/assets/iphone/Default-568h@2x.png',
  'iphone_2x': 'public/images/app/assets/iphone/Default-568h@2x.png',
  'iphone5': 'public/images/app/assets/iphone/Default-Portrait-736h@3x.png',
  'iphone6': 'public/images/app/assets/iphone/Default-Portrait-736h@3x.png',
  'iphone6p_portrait': 'public/images/app/assets/iphone/Default-Portrait-736h@3x.png',
  'iphone6p_landscape': 'public/images/app/assets/iphone/Default-Landscape-736h@3x.png',
  'ipad_portrait': 'public/images/app/assets/mobileweb/apple_startup_images/Default-Portrait.png',
  'ipad_portrait_2x': 'public/images/app/assets/mobileweb/apple_startup_images/Default-Portrait.png',
  'ipad_landscape': 'public/images/app/assets/mobileweb/apple_startup_images/Default-Landscape.png',
  'ipad_landscape_2x': 'public/images/app/assets/mobileweb/apple_startup_images/Default-Landscape.png',
  // 'android_ldpi_portrait': 'public/images/app/assets/mobileweb/apple_startup_images/Default-Portrait.png',
  // 'android_ldpi_landscape': 'public/images/app/assets/mobileweb/apple_startup_images/Default-Landscape.png',
  'android_mdpi_portrait': 'public/images/app/assets/mobileweb/apple_startup_images/Default-Portrait.png',
  'android_mdpi_landscape': 'public/images/app/assets/mobileweb/apple_startup_images/Default-Landscape.png',
  'android_hdpi_portrait': 'public/images/app/assets/mobileweb/apple_startup_images/Default-Portrait.png',
  'android_hdpi_landscape': 'public/images/app/assets/mobileweb/apple_startup_images/Default-Landscape.png',
  'android_xhdpi_portrait': 'public/images/app/assets/mobileweb/apple_startup_images/Default-Portrait.png',
  'android_xhdpi_landscape': 'public/images/app/assets/mobileweb/apple_startup_images/Default-Landscape.png',
});

// Set PhoneGap/Cordova preferences
// App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'portrait');
App.setPreference('Orientation', 'portrait', 'ios');

// Pass preferences for a particular PhoneGap/Cordova plugin
// App.configurePlugin('com.phonegap.plugins.facebookconnect', {
//   APP_ID: '1234567890',
//   API_KEY: 'supersecretapikey'
// });