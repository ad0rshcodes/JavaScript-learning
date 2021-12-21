// We can't use arrow functions to create object methods.
// REASON:
// const User = (firstName, lastName, age) => {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// };

function User(firstName, lastName, age) {
  //"U" is capital in "User" because of the naming conventions similar to java.
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

let user1 = new User("Adarsh", "Sharma", 16); //Here "new User(...)" is actually the constructor similar to it us java.
//One more special feature about "new" keyword is that whenwever we create a constructor with "new", the "this" keyword automatically points to the object and not the global object.
//If we use "new" then its not a regular function call anymore.

console.table(user1);
