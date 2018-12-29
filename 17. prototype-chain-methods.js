/*
 * Adding methods to the prototype chain
 */

function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}

Vehicle.prototype.turnOn = function() {
  this.isRunning = true;
};

Vehicle.prototype.turnOff = function() {
  this.isRunning = false;
};

Vehicle.prototype.honk = function() {
  if (this.isRunning === true) {
    console.log('Beep');
  }
};

var car = new Vehicle('Honda', 'Civic', '2013');

car.turnOn();
car.honk();
