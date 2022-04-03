// "let" and "const" keywords are introduced in ES6 update in 2015. Before them "var" was used.
// * "var" keyword: variables declared with "Var" are globally scoped, which means that they can be accessed anywhere in the program. + var is also scoped inside the functions. Therefore either thay are globally or functionally scoped.

for (var i = 0; i < 100; i++) {
  var firstName = "Adarsh"; //can we accessed globally
}

console.log(firstName);

for (var j = 0; j < 100; j++) {
  let lastName = "Sharma"; // !can't we accessed globally
}

console.log(lastName); //gives a non-defined error

function sayHello(params) {
  var name = "Adarsh";
  let name2 = "Daksh";
}
sayHello();

console.log(name); // !Gives an error of not defined because "var" is scoped inside a function.
console.log(name2); // !Gives an error of not defined.

// * "let" keyword is scoped inside all the blocks that are possible(for loop block, function block, etc). [A block means an area enclosed inside '{}']

//* Being scoped under 'x' means that particular variables are restricted under 'x'.
//* Ex: 'let' is block scoped means that everything is restricted to {}.
//* Ex: 'var' is globally and functionally scoped means that var is restricted to functions.
//! var variables can be accessed from outside while declared in for, if statements.
