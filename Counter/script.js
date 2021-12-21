// console.log(document.getElementsByClassName("counter"));

counter = () => {
  let current = parseInt(
    document.getElementsByClassName("counter")[0].innerHTML
  );

  console.log(current);
  if (current < 1000) {
    current = current + 1;
  }

  document.getElementsByClassName("counter")[0].innerHTML = current;
};

setInterval(counter, 25);
