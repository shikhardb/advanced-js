/*
 * Inheritance in ES6
 */

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}

class Student extends Person {
  // anything
}

Student.prototype.sayHello(); // It exists
Student.prototype.constructor === Student; // true
