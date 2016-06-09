// function sum(a) {
// 	return function(b) {
// 		return a + b;
// 	}
// }

// console.log(sum(1));

// var Closure = (function() {
// 	var text = "Hello";

// 	function getName(name) {
// 		return text + ' ' + name;
// 	}

// 	return getName;
// })

// var greeting = Closure();
// console.log(greeting("Vlad"));





// Задача – реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:

// Создание объекта: var buffer = makeBuffer();.
// Вызов makeBuffer должен возвращать такую функцию buffer, которая при вызове buffer(value) добавляет значение в некоторое внутреннее хранилище, а при вызове без аргументов buffer() – возвращает его.
var makeBuffer = function() {
	var text = "";

	return function(name) {
		if (name) {
			text += ' ' + name;
		} 
		else {
		return text;
		}
	}
}


var buffer = makeBuffer();
buffer("Vlad");
buffer("Tolya");
console.log(buffer());