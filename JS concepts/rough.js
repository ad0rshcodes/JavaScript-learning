let Adarsh = {
  name: "Adarsh",
  lastName: "Sharma",
  getName: function () {
    return console.log(`${this.name} ${this.lastName}`);
  },
};

console.log(Adarsh.getName());
