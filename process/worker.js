
var loaded;
var dojoConfig;

self.onmessage = function(e) {
	
	var data = e.data;
	
	if(data.method == 'init') {
		dojoConfig = data.args.dojoConfig;
		self.loadScripts.apply(self, data.args.requires);
	} else {
		
	}
	
}
