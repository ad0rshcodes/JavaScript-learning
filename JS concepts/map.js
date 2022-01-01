const users = [
  { name: "Adarsh", age: 16 },
  { name: "John", age: 32 },
  { name: "Sally", age: 45 },
];

let modifiedUser = users.map((user) => user);
console.log(modifiedUser); //This jsut copied the whole array

modifiedUser = users.map((member) => member.name);
console.log(modifiedUser);
