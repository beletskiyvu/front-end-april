var number = +prompt("Insert a number from 0 to 100");
var assessment
if (number >= 95 && number <= 100) {
	alert("A");
	assessment = "A";
} else if (number >= 85 && number <= 94 ) {
	assessment = "B";
	alert("B");
} else if (number >= 84 && number <= 75) {
	assessment = "C";
	alert("C");
} else if (number >= 65 && number <= 74) {
	assessment = "D";
	alert("D");
} else if (number >= 60 && number <= 64) {
	assessment = "E";
	alert("E");
} else if (number >= 0 && number <= 59) {
	assessment = "FX";
	alert("FX");
}	
else {
	assessment = "There's no such a number"
}
