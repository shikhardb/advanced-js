/*
 * Prototypes
 * Every constructor function has a property on it called "prototype" which is an object
 * The prototype object has a proprty on it called "constructor", which points back to the constructor function
 * Anytime an object is created using the 'new' keyword, a property called "__proto__" gets created, linking the object and the prototype property of the constructor function
 */

function Person(name) {
  this.name = name;
}

var sunny = new Person('Sunny');
var john = new Person('John');

sunny.__proto__ === Person.prototype; // true

Person.prototype.constructor === Person; // true
