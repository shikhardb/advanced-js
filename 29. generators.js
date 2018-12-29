/*
 * Generators
 * They allow us to pause execution of function and use it at a later time
 * Created using a *
 * When invoked, a generator object is returned to us with the keys of value and done
 * Value is what is returned from the paused function using the yield keyword
 * Done is a boolean which returns true when the function has completed
 * We need to call .next() every time for it to step on to next point
 */

function* pauseAndReturnValues(num) {
  for (let i = 0; i < num; i++) {
    yield i;
  }
}

var gen = pauseAndReturnValues(10);

// We can use generators to pause asynchronous code.
