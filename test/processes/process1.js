define(['grid/Process'], function(Process) {

	return new Process({

		sum : function(a, b) {
			return a + b;
		},

		factorial : function(n) {
			if (n == 0)
				return 1;
			return n * this.factorial(n -1);
		}
	});

});
