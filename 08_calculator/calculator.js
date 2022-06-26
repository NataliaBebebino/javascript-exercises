const add = function() {
  let result = 0;
  for (let index = 0; index < arguments.length; index++) {
    result += arguments[index];
  }
  return result;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	let result = 0;
  array.forEach(element => {
    result += element;
  });
  return result;
};

const multiply = function(array) {
  let result = 1;
  array.forEach(element => {
    result *= element;
  });
  return result;
};

const power = function(base, exponent) {
  let result = 1;

  while (exponent >=1) {
    result *= base;
    exponent--;
  }
  
  return result;
};

const factorial = function(number) {
  let result = 1;

  for (let index = 1; index <= number; index++) {
    result *= index;
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
