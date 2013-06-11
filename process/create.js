var hasConfig = {};
if ( typeof dojo !== 'undefined') {
	hasConfig.alias = [['has', 'dojo/has']];
}

define(hasConfig, ['require', 'has'], function(require, has) {

	// TODO: host-browser still will to fail on Worker... :/
	if (has('host-browser') && !has('html5-worker')) {
		has.add('html5-worker', function(g) {
			return typeof g.Worker !== 'undefined';
		});
	}

	var create = function(pdefMid, options) {
		if (has('host-browser') && has('html5-worker')) {
			require(['./Html5Worker'], function(Process) {
				var process = Process();
			});
		}
	}

	return function(pdefMid, options) {
		
		return create(pdefMid, options);

		this.load = function(pdefMid, myRequire, callback) {
			callback(create(pdefMid, {
				require : myRequire
			}));
		}
	}
});
