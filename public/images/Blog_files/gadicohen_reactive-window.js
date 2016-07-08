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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var _ = Package.underscore._;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var isolateValue = Package['mrt:isolate-value'].isolateValue;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var rwindow;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/gadicohen_reactive-window/packages/gadicohen_reactive-window.js                            //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
(function () {                                                                                         // 1
                                                                                                       // 2
//////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                              //     // 4
// packages/gadicohen:reactive-window/reactive-window.js                                        //     // 5
//                                                                                              //     // 6
//////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                //     // 8
var validOps = ['lte', 'lt', 'eq', 'gt', 'gte'];                                                // 1   // 9
                                                                                                // 2   // 10
rwindow = {                                                                                     // 3   // 11
	_dict: new ReactiveDict(),                                                                     // 4   // 12
	get: function(key) { return this._dict.get(key); },                                            // 5   // 13
	set: function(key, value) { return this._dict.set(key, value); },                              // 6   // 14
                                                                                                // 7   // 15
	check: function(key, op, value) {                                                              // 8   // 16
		if (!op)                                                                                      // 9   // 17
			return this._dict.get(key);                                                                  // 10  // 18
                                                                                                // 11  // 19
		return isolateValue(function() {                                                              // 12  // 20
			return rwindow._check(key, op, value);                                                       // 13  // 21
		});                                                                                           // 14  // 22
	},                                                                                             // 15  // 23
                                                                                                // 16  // 24
	_check: function(key, op, value) {                                                             // 17  // 25
		if (validOps.indexOf(op) === -1)                                                              // 18  // 26
			throw new Error('[reactive-window] "op" must be one of: '                                    // 19  // 27
				+ 'lte, lt, eq, gt, gte (not "' + op + '")');                                               // 20  // 28
                                                                                                // 21  // 29
		if (key == 'screen') {                                                                        // 22  // 30
			if (screenSizes[value]) {                                                                    // 23  // 31
				// Shortut for equals (and handles stupids <=xsmall and >=large)                            // 24  // 32
				if ((op[2]=='e' || op == 'eq') && this._dict.get(key) == value)                             // 25  // 33
					return true;                                                                               // 26  // 34
				else                                                                                        // 27  // 35
					value = screenSizes[value];                                                                // 28  // 36
				key = 'outerWidth';                                                                         // 29  // 37
			} else                                                                                       // 30  // 38
				throw new Error('[reactive-window] "screen" must be one of: xsmall, small, medium, large'); // 31  // 39
		}                                                                                             // 32  // 40
                                                                                                // 33  // 41
		if (op[0] == 'l')                                                                             // 34  // 42
			return this._dict.get(key) < value;                                                          // 35  // 43
		if (op[0] == 'g')                                                                             // 36  // 44
			return this._dict.get(key) > value;                                                          // 37  // 45
	}                                                                                              // 38  // 46
}                                                                                               // 39  // 47
                                                                                                // 40  // 48
var win = (typeof testWindow === 'undefined') ? window : testWindow;                            // 41  // 49
rwindow.window = win;                                                                           // 42  // 50
                                                                                                // 43  // 51
var rwindowHelpers = {};                                                                        // 44  // 52
Blaze.registerHelper('rwindow', rwindowHelpers);                                                // 45  // 53
                                                                                                // 46  // 54
var shortcuts = [                                                                               // 47  // 55
	'innerWidth', 'outerWidth', '$width', 'innerHeight', 'outerHeight',                            // 48  // 56
	'$height', 'screen'                                                                            // 49  // 57
];                                                                                              // 50  // 58
_.each(shortcuts, function(s) {                                                                 // 51  // 59
	rwindow[s] = rwindowHelpers[s] = function(op, value) {                                         // 52  // 60
		return rwindow.check(s, op, value);                                                           // 53  // 61
	}                                                                                              // 54  // 62
});                                                                                             // 55  // 63
                                                                                                // 56  // 64
// http://getbootstrap.com/css/#grid                                                            // 57  // 65
var screenSizes = {                                                                             // 58  // 66
	xsmall: 768,                                                                                   // 59  // 67
	small: 992,                                                                                    // 60  // 68
	medium: 1200,                                                                                  // 61  // 69
	large: 9999999999                                                                              // 62  // 70
}                                                                                               // 63  // 71
                                                                                                // 64  // 72
var update = function() {                                                                       // 65  // 73
	rwindow.set('innerWidth', win.innerWidth);                                                     // 66  // 74
	rwindow.set('outerWidth', win.outerWidth);                                                     // 67  // 75
	rwindow.set('$width', $(win).width());                                                         // 68  // 76
	rwindow.set('innerHeight', win.innerHeight);                                                   // 69  // 77
	rwindow.set('outerHeight', win.outerHeight);                                                   // 70  // 78
	rwindow.set('$height', $(win).height());                                                       // 71  // 79
                                                                                                // 72  // 80
	if (win.outerWidth < 768)                                                                      // 73  // 81
		rwindow.set('screen', 'xsmall');                                                              // 74  // 82
	else if (win.outerWidth < 992)                                                                 // 75  // 83
		rwindow.set('screen', 'small');                                                               // 76  // 84
	else if (win.outerWidth < 1200)                                                                // 77  // 85
		rwindow.set('screen', 'medium');                                                              // 78  // 86
	else                                                                                           // 79  // 87
		rwindow.set('screen', 'large');                                                               // 80  // 88
}                                                                                               // 81  // 89
                                                                                                // 82  // 90
rwindow.forceUpdate = update;                                                                   // 83  // 91
                                                                                                // 84  // 92
// Set a debounce function for avoiding to fire too many events                                 // 85  // 93
var lazyUpdate = _.debounce(update, 100);                                                       // 86  // 94
                                                                                                // 87  // 95
// Watch for resize events                                                                      // 88  // 96
var origOnResize = win.onresize;                                                                // 89  // 97
rwindow.window.onresize = function() {                                                          // 90  // 98
	if (origOnResize)                                                                              // 91  // 99
		origOnResize.apply(this, arguments);                                                          // 92  // 100
	lazyUpdate();                                                                                  // 93  // 101
};                                                                                              // 94  // 102
                                                                                                // 95  // 103
$(function() {                                                                                  // 96  // 104
	// Watch for mutation events (requires win.document.body)                                      // 97  // 105
	if (typeof MutationObserver === 'function') {                                                  // 98  // 106
		var observer = new MutationObserver(lazyUpdate);                                              // 99  // 107
		observer.observe(win.document.body, {                                                         // 100
			childList: true,                                                                             // 101
			attributes: true,                                                                            // 102
			characterData: true,                                                                         // 103
			subtree: true                                                                                // 104
		});                                                                                           // 105
	} else {                                                                                       // 106
		console.warn('reactive-window: no MutationObserver, won\'t notice scrollbars');               // 107
		// uh, TODO, go back to polling every 100ms                                                   // 108
	}                                                                                              // 109
});                                                                                             // 110
                                                                                                // 111
// This only requires window, not document.body                                                 // 112
update();                                                                                       // 113
                                                                                                // 114
//////////////////////////////////////////////////////////////////////////////////////////////////     // 123
                                                                                                       // 124
}).call(this);                                                                                         // 125
                                                                                                       // 126
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['gadicohen:reactive-window'] = {}, {
  rwindow: rwindow
});

})();
