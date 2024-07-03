const convertToCelsius = function(temp) {

  let degreeCelcius = ((temp - 32) * (5/9));
  // if conversion is negative then convert it to absolute
  
    degreeCelcius = Number(degreeCelcius.toFixed(1));
  
  return degreeCelcius;
  
};

const convertToFahrenheit = function(temp) {
  const degreeFarhenite = Number(((temp * (9/5)) + 32).toFixed(1));
  return degreeFarhenite;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
