const convertToCelsius = function(fahrenheitTemp) {
  // c = (f-32) * 9/5
  return (fahrenheitTemp - 32) * 9/5
};

const convertToFahrenheit = function(celsiusTemp) {
  // f = (c * 9/5) + 32
  return (celsiusTemp * 9/5) + 32
}; 

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
