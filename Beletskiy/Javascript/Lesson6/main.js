var expression, result;
while(true) {
	expression = prompt("Enter an expression");	
	
	try {
		if (expression) {
			result = eval(expression)
			if (isNaN(result)) {
				throw new Error("Expression is not correct.")
			}

			break;

		}
	} catch(error) {
		alert('Not correct input : ' + error.message)
	}
}
alert(result);
console.log(result);