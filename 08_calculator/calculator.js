const add = function(numberOne, numberTwo) {
	return numberOne + numberTwo;
};

const subtract = function(numberOne, numberTwo) {
	return numberOne - numberTwo;
};

const sum = function(array) {
	let result = 0;
	for(i in array){
		result += array[i];
	}

	return result;
};

const multiply = function(array) {
	let result = 1;
	for(i in array){
		result *= array[i];
	}

	return result;
};

const power = function(base, power) {
	let result = 1;
	for(let i = 1; i <= power; i++){
		result *= base;
	}

	return result;
};

const factorial = function(number) {
	let numberArray = [];
	let result = 1;
	for(i = 1; i <= number; i++){
		numberArray.push(i);
	}

	for(i in numberArray){
		result *= numberArray[i];
	}

	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
