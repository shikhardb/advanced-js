/*
 * Class keyword
 */

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}

const john = new Student('John', 'Wayne'); // new instance

john.sayHello();
