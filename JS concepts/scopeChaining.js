//CONCEPT => condsider there generations {grand father, father & chidren}. The model is that all of them have their ice creams but sometimes someone doesn't have. In that case a lower gen can ask for help from above gen but not vice versa.

//Example:

let myName = "adarsh";

console.log(`line 7 ${myName}`);

function scope1() {
  console.log(`line 10 ${myName}`);
  myName = "Daksh";
  console.log(`line 12 ${myName}`);
  function scope2() {
    //If myName is not declared in this function then it can ask for myName from the function above but not vice versa
    console.log(`line 14 ${myName}`);
    myName = "Nobita";
    console.log(`line 16 ${myName}`);
  }
  scope2();
}

scope1();
console.log(myName);
