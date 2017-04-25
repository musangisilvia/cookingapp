var litres = function(number1, number2) {
  return number1 / number2;
};
var gallons = function(number1, number2) {
  return number1 * number2;
};

var number1 = parseInt(prompt("Enter the amount:"));
const number2 = 3.78541;

var result = litres(number1, number2);
alert(result);
