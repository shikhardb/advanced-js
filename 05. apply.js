/* 'apply' binding to a function
 * 'apply' is mostly used where the function does not accept
 * an array as a parameter, but we need to pass an array as
 * parameter to the function
 */

function addNumbers(a, b, c, d) {
  return this.firstName + ' added ' + (a + b + c + d);
}

var colt = {
  firstName: 'Colt',
};

var ellie = {
  firstName: 'Ellie',
};

addNumbers.apply(ellie, [1, 2, 3, 4]);
