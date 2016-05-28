//Task1
var i;
var mark;
for (i=0; i < 5: i++) {
	mark = prompt("Enter mark");

	if (mark >= 60) {
		console.log("Passed");
	} else {
		break;	
	}
}

//Task2
var perform = prompt("Enter what move you want!")
while (perform !== "That's all") {
	console.log("I'm working");
}