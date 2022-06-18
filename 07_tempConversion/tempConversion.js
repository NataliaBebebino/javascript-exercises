const ftoc = function(temperatureF) {
  let temperatureC = Number(((temperatureF - 32) * (5/9)).toFixed(1));
  return temperatureC;
};

const ctof = function(temperatureC) {
  let temperatureF = Number((temperatureC * (9/5) + 32).toFixed(1));
  return temperatureF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
