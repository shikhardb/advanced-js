/*
 * Object.assign
 * Create copies of objects without the same reference
 */

var o = { name: 'John' };
var o2 = Object.assign({}, o);

o2.name = 'Tim';
o.name; // "John"  -> see, the value of o.name has not changed

// NOTE: It does not create a deep clone

/*
 * Array.from
 * Convert array-like data types into arrays
 */

var divs = document.getElementByTagName('div'); // return an array-like-object

divs.reduce; // undefined, as it is not an actual array;

// So.... to convert this object into array, we can do
var converted = Array.from(divs);
