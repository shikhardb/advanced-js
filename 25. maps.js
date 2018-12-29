/*
 * Maps
 * They are similar to objects, but the keys can be any data type
 *
 * Why use Maps?
 * Finding the size is easy - no more loops or Object.keys()
 * The keys can be of any data type
 * You can accidentally overwrite keys on the Object.prototype in an object you make - maps don't have that issue
 * Iterating over keys and values is quiet easy
 *
 * When to use a Map?
 * If you need to look up keays dynamically
 * If you need keys that are not strings
 * If you are frequently adding and removing key/value pairs
 *
 */

var firstMap = new Map();

// To 'set' or add values to the Map

firstMap.set(1, 'John');
firstMap.set(false, 'a boolean');
firstMap.set('nice', 'a string');
firstMap.delete('nice');
firstMap.size;

var arrayKey = [];
firstMap.set(arrayKey, [1, 2, 3, 4, 5]);

var objectKey = {};
firstMap.set(objectKey, { a: 1 });

// To 'get' the values of the Map

firstMap.get(1); // 'John'
firstMap.get(false); // 'a boolean'
firstMap.get(arrayKey); // [1,2,3,4,5]
firstMap.get(objectKey); // {a:1}

// To iterate over the Map, we can use forEach

firstMap.forEach(v => console.log(v));

firstMap.values(); // MapIterator of values
firstMap.keys(); // MapIterator of keys

/*
 * WeakMap
 * Similar to a Map, but all keys MUST be objects
 * Values in a WeakMap can be cleared from memory if there is no reference to them
 * More performant than maps, but cannot be iterated over
 */
