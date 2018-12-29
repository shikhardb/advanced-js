/* 'Object Oriented Programming'
 * A programming model based around the idea of objects
 * The objects are constructed from "classes"
 * These objects created from classes are called "instances"
 * Try to make the classes abstract and modular
 */

function House(bedrooms, bathrooms, numSqFt) {
  // this is a constructor function
  this.bedrooms = bedrooms;
  this.bathrooms = bathrooms;
  this.numSqFt = numSqFt;
}

var firstHouse = new House(3, 2, 1000);

firstHouse.bedrooms; // 3
firstHouse.bathrooms; // 2
firstHouse.numSqFt; // 1000

/* So what does the 'new' keyword do?
 * It first creates an empty object
 * It then sets the keyword 'this' to be that empty object
 * It adds the line 'return this' to the end of the function, which follows it
 * It adds a property onto the empty object called "_proto_", which links the prototype property on the constructor function to the empty object
 */
