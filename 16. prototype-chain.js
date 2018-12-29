/*
 * Prototype chain
 *
 */

var arr = new Array();

console.dir(arr); // An object with __proto__: Array(0) and other functions related to it

arr.__proto__ === Array.prototype; // true

// Every object has a method called hasOwnProperty which returns a parameter and returns true if the object has that property

arr.hasOwnProperty('length'); // true
arr.hasOwnProperty('foo'); // false
