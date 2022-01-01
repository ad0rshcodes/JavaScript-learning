// console.log(document.getElementsByClassName("counter"));

let counter = () => {
  let current = parseInt(
    document.getElementsByClassName("counter")[0].innerHTML
  );

  console.log(current);
  if (current < 1000) {
    current = current + 1;
  }

  document.getElementsByClassName("counter")[0].innerHTML = current;
};

// setTimeout(counter, 10000); To delay the counter by 10 sec.

setInterval(counter, 25); //runs the function in every 25 milli secs.
