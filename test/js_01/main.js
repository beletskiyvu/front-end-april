function cloneArray(array) {
    // if (!isArray(array)) {
    // 	return throw new Error("Enter an array!")
    // }
    // var clone = [],
    //     i = 0,
    //     len = array.length;

    // for (; i < len; i++) {
    //     if (array[i].length && array[i].constructor === Array) {
    //         clone[i] = cloneArray(array[i])
    //     } else {
    //         clone[i] = array[i];
    //     }
    // }

    // var clone = array.concat([]);
    // return clone;
    return array.slice();
}


var a = [1, 2, 3, [4, 5]];
var b = cloneArray(a);
console.log(" a : ", a);
console.log(" b : ", b);
b[3].push(6);
b.push(8);
console.log("===== after push =====");
console.log(" a : ", a);
console.log(" b : ", b);


var obj = {
	name : "Vlad",
	height : 190,
	walk : function() { return "I can walk"},
	makeCode : function() {return "I make code"}
}

