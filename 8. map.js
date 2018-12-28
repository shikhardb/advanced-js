/* 'map'
 * Transform one array into another array.
 * Runs a callback function on each value in array which then
 * returns a new array with the changed values
 */

var arr = [1, 2, 3];

arr.map(function(value, index, array) {
  return value * 2;
});
