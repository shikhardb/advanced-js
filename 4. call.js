var person = {
  firstName: 'Colt',
  sayHi: function() {
    return 'Hi ' + this.firstName;
  },
  determineContext: function() {
    return this === person;
  },
  dog: {
    sayHello: function() {
      return 'Hello ' + this.firstName;
    },
    determineContext: function() {
      return this === person;
    },
  },
};

// Now to access the value of 'firstName' in 'dog' using 'this' keyword, you need to use 'call' the function like below

person.dog.sayHello.call(person); // Here we sent the object as the parameter, which will be referred to 'this'.
person.dog.determineContext.call(person);
