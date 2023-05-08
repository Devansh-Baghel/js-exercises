const convertToCelsius = function(fahrenheitTemp) {
  // c = (f-32) * 5/9
  return Math.round((fahrenheitTemp - 32) * 50/9) /10;
};

const convertToFahrenheit = function(celsiusTemp) {
  // f = (c * 9/5) + 32
  return Math.round(((celsiusTemp * 9/5) + 32) * 10) /10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
