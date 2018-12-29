/*
 * Object enhancement and destructuring
 */

// Object shorthand notation
var firstName = 'John';
var lastName = 'Doe';

// ES 2015
var person = {
  firstName,
  lastName,
};
/* this is equal to
 * var person = {
 *  firstName: firstName,
 *  lastName: lastName
 * }
 */

// Object Methods
var greet = {
  sayHello() {
    return 'Hello!';
  },
};

// Computed Property Names
var firstName = 'John';
var instructor = {
  [firstName]: "That's me!",
};

instructor.John; // That's me!

// Object Destructuring -> exracting values from data stored in objects and arrays
var instructor = {
  firstName: 'John',
  lastName: 'Doe',
};

var { firstName, lastName } = instructor;

firstName;
lastName;

// Array destruturing
var arr = [1, 2, 3];

var [a, b, c] = arr;

a; // 1
b; // 2
c; // 3
