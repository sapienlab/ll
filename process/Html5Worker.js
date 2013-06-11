define(['require', 'dojo/_base/declare'], function(require, declare) {

	return declare(null, {

		constructor : function(props) {

			var me = this;

			for (var key in props) {
				me[key] = props[key];
			}

			!me.require || (me.require = require);
			!me.srcUrl || (me.srcUrl = me.require.toUrl(me.src));
			
			me.worker = new Worker();

		}
	});

});
