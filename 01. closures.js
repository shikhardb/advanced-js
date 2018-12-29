/*
Closures mean that an inner function accesses the return of the outer function

Only the variables used in the inner function are remembered inside the inner function.
*/

// Let's see an example
function outer(a) {
  return function inner(b) {
    return a + b;
  };
}

outer(5)(10); // One way to call

var storeOuter = outer(5);
storeOuter(10); // other way to call

// Why do I need closures?

// 1. Private variable

function counter() {
  var count = 0;
  return function inner() {
    count++;
    return count;
  };
}

var counter1 = counter();

counter1(); // will print 1
counter1(); // will print 2

var counter2 = counter();

counter2(); // will print 1

// This shows that counter1 and counter2 are private variables and are different from one another, so count is isolated in both cases.
