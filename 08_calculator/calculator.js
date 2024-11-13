const add = function(num1, num2) {
  
  return num1 + num2;

};

const subtract = function(num1 , num2) {
	return num1 - num2;
};

const sum = function(arrOfNumbers) {
	let sum = 0;
  arrOfNumbers.forEach(element => sum += element);
  return sum;
};

const multiply = function(numbers) {
  let product = 1;
  numbers.forEach(element => product *= element);
  return product;
};

const power = function(num, pow) {
  return num ** pow;
};

const factorial = function(factor) {
  let total = 1;
  for (let i = 1; i <= factor; i++) {
    total *= i;
  }
  return total;
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
