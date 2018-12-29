/* 'filter'
 * Filter an array on a given condition
 * Runs a callback function on each value in array which then
 * returns a new array with the values whose result is true
 */

var arr = [1, 2, 3];

arr.filter(function(value, index, array) {
  return value > 2; // No need to write an if statement 😉
});
