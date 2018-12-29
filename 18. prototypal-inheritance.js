/*
 * 'Prototypal Inheritance'
 * The passing of methods and properties from one class to another
 * "Object.create" creates a brand new function and accepts as its first parameter, what the prototype object shoulf be for the newly created object
 */

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.sayHi = function() {
  return 'Hello ' + this.firstName + ' ' + this.lastName;
};

function Student(firstName, lastName) {
  return Person.apply(this, arguments);
}

Student.prototype = Object.create(Person.prototype);
