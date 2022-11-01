const add = function(one, two) {
	return one + two;
};

const subtract = function(one, two) {
	return one - two;
};

const sum = function(arr) {
	let result = 0;
  for(idx = 0; idx < arr.length; idx++) result += parseInt(arr[idx]);
  return result;
};

const multiply = function(arr) {
  let result = 0;
  for(idx = 0; idx < arr.length; idx++) result > 0 ?  result *= parseInt(arr[idx])
                                                   :  result += parseInt(arr[idx]);
  return result;
};

const power = function(base, exp) {
	let result = base;
  for(idx = 1; idx < exp; idx++) result *= base;
  return result;
};

const factorial = function(fact) {
	let result = 1;
  for(idx = 1; idx <= fact; idx++) result *= idx;
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
