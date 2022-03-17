//? Q: What would be the output of following code and why is that?
var num = 25;
function changeName() {
  if (num > 20) {
    var num = 20;
  }

  console.log(num);
}

changeName();

//? Q:Guess the output?
var num2 = 50;
function update() {
  var num2 = 60;
}
update();
console.log(num2);

//! My Answer: It should be 60 as var assigns the variable to global context. therefore even been in a function var2 will be change.

//* Correct Answer:

//? Q: Once a function is executed, the execution stack gets popped off. How can you access the variable of that function?

//? Q: Virtual DOM Vs React DOM?

//? Q: What are SSG(Static site generator), SSR (server side rendering)?

//? Q: What else can we use other than firebase for authentication?

//? Q: What is hello.js in nextjs projects?

//? Q: What are service workers and their use?

//? Q: What are callbacks?

//? Q; What's the difference between yarn and npm?

//? Q: How can we upgrade the dependencies or keep them at the same version?

//? Q: What does yarn.lock contains?

//? Q:
