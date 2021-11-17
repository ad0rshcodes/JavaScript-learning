// Interestingly 🤔 JavaScript behaves bit differently. For ex:

//Try:1 =>
sayHello();

function sayHello() {
  console.log("hii");
}
// This works bcoz the global context hoist all the functions at the beginning of the file.

// Try:2 =>
console.log(sayHello("how are you doing?", "Adarsh"));

const sayHello = function (message, sender) {
  return `Hii my name is ${sender} and ${message}`;
};
// This trial doesn't work because global context doesn't hoist varibales in the beginning of file & here the function is in the form of variable.

//Global Context
var myName = "adarsh";

if (myName === myName) {
  //this works fine ✔ in both browser and vs code
  console.log("Bazinga!!");
}

if (myName === window.myName) {
  //this works fine ✔ in browser but not in vs code as we are execcuting it in node. The "window" keyword refers to the global context and is differnt for node.
  console.log("Bazinga!!");
}
