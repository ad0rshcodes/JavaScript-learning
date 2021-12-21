const user = {
  name: "Adarsh",
  class: 11,
  state: "Rajasthan",
};

let states = new Array("Rajasthan", "Gujarat", "Jammu", "Karnataka");

// for loop
for (let i = 0; i < states.length; i++) {
  console.log(states[i]);
}

// while loop
let i = states.length - 1;
while (i >= 0) {
  console.log(states[i]);
  i--;
}

// for each loop
states.forEach((s) => console.log(s));
