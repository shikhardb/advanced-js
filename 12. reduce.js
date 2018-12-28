/* 'reduce'
 * Runs a callback function on each value in array
 * The firs parameter of the callback is wither the first value in the array or the optional second parameter
 * The first parameter is called "accumulator"
 * The returned value from the callback becomes the new value of accumulator
 */

var arr = [1, 2, 3, 4, 5];

arr.reduce(function(accumulator, nextValue) {
  return accumulator + nextValue;
}, 10);
