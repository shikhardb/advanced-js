/*
 * Sets
 * All values in a set are unique
 * Any type of value can exist in a set
 * Created using a 'new' keyword
 */

var s = new Set();

//  can also be created from an array
var s2 = new Set([3, 1, 4, 1, 2, 1, 5]); // Set {3, 1, 4, 2, 5}

// add values to the set
s.add(10); //{10}
s.add(20); //{10, 20}
s.add(10); //{10, 20}

s.size; // 2

// check if a set contains a value
s.has(10); // true

// to remove the value from a set
s.delete(20); // true

s.add(30);

s.size; // 2

// to loop inside a set, we can use a for...of loop
for (let st of s) {
  console.log(st);
}

/*
 * WeakSet
 * Similar to a set, but all values have to be objects
 * We cannot iterate over a WeakSet, but more performant than set
 * Valuse in  WeakSet can be cleared from the memory if there is no reference to them
 */
