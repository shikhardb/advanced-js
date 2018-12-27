/* 4 rules for how the 'this' keyword gets bound
 *
 * 1. New Binding
 * 2. Explicit Binding - call, apply, bind
 * 3. Implicit Binding - 'this' will point to the object from which it is called
 * 4. Default binding - in strict mode : undefined, in non-strict mode : global
 *
 * It all depends on the call site.
 *
 * A keyword 'this' is defined when a function is run!
 */

function foo() {
  console.log(this.bar);
}

var bar = 'bar1';
var o2 = { bar: 'bar2', foo: foo }; // here we have 2 references -  o2.foo and global foo()
var o3 = { bar: 'bar3', foo: foo };

foo(); // Default binding
o2.foo();
o3.foo();

// if IIFE, it's gonna use the Default Rule
