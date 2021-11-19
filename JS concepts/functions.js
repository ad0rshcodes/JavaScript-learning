function greetings(params) {
  console.log(`Hii, my name is: ${params}`);
}

greetings("adarsh");

function namaste(props) {
  return `Namaste, ${props}`; //return doesn't mean same as console.log
}

var indianGreeting = namaste("daksh");

console.log(indianGreeting);
