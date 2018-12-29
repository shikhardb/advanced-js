let user = {
  firstName: 'John',
};

function func() {
  alert(this.firstName);
}

let funcUser = func.bind(user); // Here we are implicitly binding 'this' with the object
funcUser(); // It will print John
