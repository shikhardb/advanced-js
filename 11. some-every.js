/* 'some'
 * Runs a callback function on each value in array which then
 * returns a boolean true if any of the result is true or false if all are false
 */

var arr = [1, 2, 3];

arr.some(function(value, index, array) {
  return value < 2;
});

/* 'every'
 * Runs a callback function on each value in array which then
 * returns a boolean false if any of the result is false or true if all are true
 */

var arr = [1, 2, 3];

arr.every(function(value, index, array) {
  return value < 4;
});
