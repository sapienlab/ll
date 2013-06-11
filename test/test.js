define(['hpc/Process', 'dojox/rpc/Service', 'll!../../math'], function(Process, Service) {
	
	
	// [p1], [p2]
	// --(sum 34 54)-> [p1]:$1 -(algorithm123 $1)-> [p2]:$1 -+--(sum $1 $1)------> [p1]:$1 --+--(algorithm234 $r1 $r2 $3)-> [p2]:result --> :D
	//                                                       +--(algorithm34 $1)-> [p2]:$2 --+
	//                                                       +--(ia $1)----------> [p1]:$3---+

	all(ll('asd/dsf/fsdf'), ll('asddsf/sdf/sdf'), function(p1, p2) {
		
		p1.sum(34, 53).then(function(result) {
			
			return p2.algorithm123(result);
			
		}).then(function(result) {
			
			all(p1.sum(result, result), p2.algorithm34(result), p1.ia(result), function(result1, result2, result3) {
				
				return p2.algorithm234(result1, result2, result3);
				
			}).then(function(result) {
				console.log('result :D', result);
			});
			
		});
	});

	ll.stack(p.sum(34, 5), [
	function(result) {
		return p.factorial(result);
	},
	function(result) {
		return p.sum(result, 5);
	},
	function(result) {
		console.log(result);
	}], function(progress) {
		// statusbar, example
	}, function(error) {
		p.kill();
		// p.kill('SIGERN');
	});

	p.sum(34, 5).then(function(result) {
		return p.factorial(result);
	}).then(function(result) {
		console.log(result);
	});

	// Local Procedure Call
	lpc.createAsync('sdfsdf').then(function(process) {

	});

	var w = new Process({
		mid : './processes/process1'
	});

	w.sum(34, 5).then(function(data) {
		return w.factorial(data.result);
	}).then(function(data) {
		console.log('Factorial of 34 + 5', data.result);
	});

	var s = new Service({
		smd : 'sdfsdf'
	});

	s.sum(34, 5).then(function(data) {
		return s.factorial(data.result);
	}).then(function(data) {
		console.log('Factorial of 34 + 5', data.result);
	});

});
