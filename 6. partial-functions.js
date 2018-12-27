/* The keyword 'bind' is a little confusing
 * It can be used when the number of parameters are unknown.
 * So that we can just make an alias of the function and then
 * later call it with any number of arguments.
 * It is also called partial function.
 */

function addNumbers(a, b, c, d) {
  return this.firstName + ' calculated ' + (a + b + c + d);
}

var ellie = {
  firstName: 'Ellie',
};

// Now let's bind the 'this' keyword with the function
var ellieCalc = addNumbers.bind(ellie, 1, 2); // See here, we sent only 2 parameters - 1 and 2 (ellie is 'this' here)
ellieCalc(3, 4); // Now we sent the rest 2 parameters - 3 and 4 to complete the function parameters.

// So, this type of behaviour is called partial function
