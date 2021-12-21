// this keyword give us the access to the golbal context with differs with situations. In browser it is "windows object" and in node its an emply scope.

console.log(this); //Empty array in nodejs

let user = {
  firstName: "Adarsh",
  lastName: "Sharma",
  courseCount: 4,
  getCourseCount: function () {
    console.log(this); // In this case the "This" keywork gives the details of the object. {reason at the bottom}
    return this.courseCount;
  },
};
// IMPORTANT: For all the regular function calls, this points to window object(Global object).

user.getCourseCount(); //this is not a regular function call.

// regular function call looks like this
function sayHello() {
  console.log("Hii");
}

sayHello();

// Confusing part

let user2 = {
  firstName: "Adarsh",
  lastName: "Sharma",
  courseCount: 4,
  getCourseCount: function () {
    console.log(this); // In this case the "This" keywork gives the details of the object.
    function sayHello() {
      console.log(this); //This will again give the global object because its inside of a regular function call.
    }
    sayHello();
  },
};

user2.getCourseCount();
