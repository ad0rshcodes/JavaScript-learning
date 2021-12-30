let red = document.querySelector(".red");
let cyan = document.querySelector(".cyan");
let violet = document.querySelector(".violet");
let orange = document.querySelector(".orange");
let pink = document.querySelector(".pink");
let center = document.querySelector(".center");

function changeColor(toColor) {
  center.style.backgroundColor = window
    .getComputedStyle(toColor)
    .getPropertyValue("background-color");
}
let transitionColor = () => {
  center.style.backgroundColor = "rgb(66, 66, 66)";
};

// red.addEventListener("mouseover", changeColor(red));
//This method will change the color to red even before firing the event. That is because JS is a interpreted language so we don't call the funtion directly because doing so will lead to its execution. We use callbacks in such cases.
red.addEventListener("mouseover", () => changeColor(red));
cyan.addEventListener("mouseover", () => changeColor(cyan));
violet.addEventListener("mouseover", () => changeColor(violet));
orange.addEventListener("mouseover", () => changeColor(orange));
pink.addEventListener("mouseover", () => changeColor(pink));

red.addEventListener("mouseout", () => transitionColor());
cyan.addEventListener("mouseout", () => transitionColor());
violet.addEventListener("mouseout", () => transitionColor());
orange.addEventListener("mouseout", () => transitionColor());
pink.addEventListener("mouseout", () => transitionColor());
