/*
 * Rest and Spread operators
 *
 */

// Rest operator
function printRest(a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

printRest(1, 2, 3, 4, 5);

// 1
// 2
// [3,4,5]    -> Rest operator always returns an array

// Spread Operator
// Used on arrays to spread each value out as comma separated value
// Useful when you have an array, but you are working expecting comma separated values

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];

var combined = [...arr1, ...arr2, ...arr3]; // [1,2,3,4,5,6,7,8,9]
