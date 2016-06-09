var F = function() {
	console.log(arguments.length);
	for (var i = 0; i < arguments.length; i++)
	var res = arguments[i];
	console.log(res);
}
F(4,6,7);