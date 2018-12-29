/*
 * Class methods
 * They are placed directly on the constructor function
 */

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }
  static isStudent(obj) {
    return obj.constructor === Student;
  }
}

const john = new Student('John', 'Doe');
