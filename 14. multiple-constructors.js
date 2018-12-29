/*
 * 'Multiple constructors'
 */

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  // we can also set properties on the keyword 'this' that are preset values
  this.numWheels = 4;
}

function Motorcycle(make, model, year) {
  // using call to prevent duplication of code
  Car.call(this, make, model, year);
  this.numWheels = 2;
}

// or we can also use apply for the same

function Motorcycle(make, model, year) {
  // using apply
  Car.apply(this, arguments);
  this.numWheels = 2;
}
