// var user = "costumer";
var user = "adarsh";

switch (user) {
  case "admin":
    console.log("you have full access");
    break;

  case "costumer":
    console.log("just browse the content");
    break;

  default:
    console.log(`${user} be out from our territory`);
    break;
}
