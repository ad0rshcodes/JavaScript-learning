var google = true;
var faceBook = false;
var gitHub = false;
var authentication;
const user = "adarsh";
google || faceBook || gitHub
  ? (authentication = true)
  : (authentication = false);

authentication
  ? console.log(`sign out ${user}`)
  : console.log("sign in" + user);
