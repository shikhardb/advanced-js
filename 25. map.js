/*
 * Maps in javascript
 * They are similar to objects, but the keys can be any data type
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
