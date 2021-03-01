const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const bodyRef = document.querySelector("body");
const btnStartRef = document.querySelector("[data-action='start']");
const btnStopRef = document.querySelector("[data-action='stop']");

let timerChangeColor = null;
let intervalActive = false;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

btnStartRef.addEventListener("click", () => {
  if (intervalActive) {
    return;
  }
  timerChangeColor = setInterval(() => {
    intervalActive = true;

    bodyRef.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
});

btnStopRef.addEventListener("click", () => {
  clearInterval(timerChangeColor);
  intervalActive = false;
});