function getUserRole(name, role) {
  switch (role) {
    case "admin":
      return `you have full access ${name}`;
      break; //break is muted becoz there is no need as once a function returns something there is no logic in break

    case "costumer":
      return `just browse the content ${name}`;

    case "subadmin":
      return `help admin to manage things${name}`;

    default:
      console.log(`${name} be out from our territory`);
  }
}

var roleDescription = getUserRole("adarsh", "anaconda");
console.log(roleDescription);

//Another way of writing functions

var anotherWay = function (name, role) {
  switch (role) {
    case "admin":
      return `you have full access ${name}`;
      break; //break is muted becoz there is no need as once a function returns something there is no logic in break

    case "costumer":
      return `just browse the content ${name}`;
      break;

    case "subadmin":
      return `help admin to manage things${name}`;
      break;

    default:
      console.log(`${user} be out from our territory`);
      break;
  }
};

console.log(anotherWay("adarsh", "admin"));
