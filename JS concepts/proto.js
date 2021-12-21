function User(firstName, lastName, age, courseCount) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    return this.courseCount;
  };
}

let Adarsh = new User("Adarsh", "Sharma", 16, 2);
console.log(Adarsh);

let Daksh = new User("Daksh", "Sharma", 14, 12);
console.log(Daksh);

// Now we need a function to get the first name of the users created similar to the getCourseCount function. It could be simply by
// Adarsh.firstName but we want to add a function inside the object without changing object function. As the prototype is common in all the objects we can add the common function to the prototype.

User.prototype.getFirstName = function () {
  return this.firstName;
};

console.log(Adarsh.getFirstName()); //says "Adarsh".
