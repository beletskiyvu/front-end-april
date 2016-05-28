// Task1
var numberOfChildren = "2";
var partnersName = "Inna";
var geographicLocation = "NewYork";
var jobTitle = "engineer";
console.log("You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnersName + " with " + numberOfChildren + " kids.");

//Task2
var currentYear = 2016;
var child1BirthYear = 2014;
var child2BirthYear = 2013;
var possibleDateBirth1;
var possibleDateBirth2;
possibleDateBirth1 = currentYear - child1BirthYear;
possibleDateBirth2 = currentYear - child2BirthYear;
console.log("They are either " + possibleDateBirth1 + " or " + possibleDateBirth2);

//Task3
var currentAge = 23;
var maximumAge = 80;
var foodAmountPerDay = 2;
var yearsTotal = maximumAge - currentAge; 
var foodAmountPerLife = foodAmountPerDay * 365 * yearsTotal;
console.log("You will need " + foodAmountPerLife + " to last you until the ripe old age of " + maximumAge + " . ");

//Task4
var radius = 5;
var diameter = radius * 2;
var pi = 3.14159;
var circumference = pi * diameter;
console.log("The circumference is " + circumference);
var area = pi * Math.pow(radius, 2);
console.log("The area is " + area);

//Task5
var celsiusTemp = 25;
var celsiumToFarhenheit = celsiusTemp * 1.8 + 32;
console.log("NN C " + celsiusTemp + " is " + celsiumToFarhenheit + " NN F ");
var farhenheit = celsiumToFarhenheit;
var farhenheitToCelsius = (farhenheit - 32)/1.8;
console.log("NN F " + farhenheit + " is " + farhenheitToCelsius + " NN C ");