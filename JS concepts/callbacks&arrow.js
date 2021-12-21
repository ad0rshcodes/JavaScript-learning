// method-1

// function isOdd(num) {
//   if (num % 2 === 0) {
//     return true;
//   }
//   return false;
// }

// method ~2

// var isOdd = function (num) {
//   if (num % 2 === 0) {
//     return true;
//   }
//   return false;
// };

// method ~3: Arrow functions

// var isOdd = (num) => {
//   num = num + 1;
//   return num;
// };

// num2 = isOdd(5);
// console.log(num2);

// CALLBACKS: A callback is a function passed as an argument to another function.
// When you pass a function as an argument, remember not to use parenthesis.
// Right: myCalculator(5, 5, myDisplayer);
// Wrong: myCalculator(5, 5, myDisplayer());

var result = [2, 4, 6, 8].every((e) => e % 2 === 0); //How call backs are written. We don't use return with callbacks.
console.log(result);

// var isOdd = (num) => num + 1;

// num2 = isOdd(5);
// console.log(num2);
