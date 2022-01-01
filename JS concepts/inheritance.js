//!This happens with Arrays and Objects

const users1 = ["Adarsh", "john", "rock"];

const currentUsers = users1;

currentUsers.push("Daksh", "Rajesh");

console.log(users1); // Output => [ 'Adarsh', 'john', 'rock', 'Daksh', 'Rajesh' ]
console.log(currentUsers); // Output => [ 'Adarsh', 'john', 'rock', 'Daksh', 'Rajesh' ]

// ?why do we get same array while we pushed new entries in currentUsers array?

//*Logic: When we say currentUsers = users1 then we are not copying the array instead we are pointing towards the array "users1". Therefore, any changes made in currentUsers are reflected in user1.

//!To Avoid this problem we need to copy the values of the array. The inteheritance only applies to arrays and objects. The Integers and strings are not inherited.

// A way to copy only the values:
const users2 = new Array("Harry", "akshat");
const currentUsers2 = [...users2]; //This is known as spread operator.
currentUsers2.push("random", "testing");
console.log(users2);
console.log(currentUsers2);

// *Also if want to create a new array with the existing one being part of it:
var parts = ["shoulders", "knees"];
var lyrics = ["head", ...parts, "and", "toes"];
console.log(parts);
console.log(lyrics);

//!Another way to copy the array.
let oldArray = [1, 2, 3, 4, 5];
let newArray = oldArray.slice();
console.log(newArray);
