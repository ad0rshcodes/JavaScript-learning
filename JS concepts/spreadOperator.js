// ? How to copy an array by values?

//*solution 1:

let name1 = ["Adarsh", "Daksh", "John"];
let name2 = name1;
name2.push("Selvie");
console.log(name1); //[ 'Adarsh', 'Daksh', 'John', 'Selvie' ]
console.log(name2); //[ 'Adarsh', 'Daksh', 'John', 'Selvie' ]

//! Why are both the arrays changing??
//* That's because when we say "let name2 = name1", the values don't get copied instead the address of the 1st array gets copied. Therefore the "name2" is referring to "name1".

//*solution 2:
let name3 = ["Adarsh", "Daksh", "John"];
let name4 = [...name3];
name4.push("selvie");
let name5 = [...name3, "random"]; //[ 'Adarsh', 'Daksh', 'John', 'random' ]
console.log(name3); //[ 'Adarsh', 'Daksh', 'John' ]
console.log(name4); //[ 'Adarsh', 'Daksh', 'John', 'Selvie' ]
console.log(name5); //[ 'Adarsh', 'Daksh', 'John', 'random' ]
