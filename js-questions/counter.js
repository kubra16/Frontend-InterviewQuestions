// Problem Statement 1: Show a button that will show start label on click it should show stop, viceversa show a counter with 0, after clicking start it should increment the counter by 1 every one second, on click of stop it should stop the counter and resume again where it was stopped previously.

// let counter = 0;
// let intervalId = null;

// const btn = document.getElementById("btn-start");
// const counterEle = document.getElementById("counter");

// function startCounter() {
//   intervalId = setInterval(() => {
//     counter++;
//     console.log(counter);
//     counterEle.textContent = counter;
//   }, 1000);
// }

// function stopCounter() {
//   clearInterval(intervalId);
// }

// btn.addEventListener("click", () => {
//   if (intervalId === null) {
//     startCounter();
//     btn.textContent = "stop";
//   } else {
//     stopCounter();
//     intervalId = null;
//     btn.textContent = "start";
//   }
// });

//Problem Statement 2: Create a countdown timer that starts from a specific number of seconds (e.g., 10 seconds) and counts down to zero. You should have a button that starts the countdown and changes its label to "Pause" when clicked. If the timer is running and the button is clicked again, it should pause the countdown. When paused, clicking the button again should resume the countdown from where it left off. When the countdown reaches zero, it should stop automatically.

const btnElement = document.getElementById("btn-start");
const counterElement = document.getElementById("timer");
const display = document.getElementById("display");
let remainingTime = 0;
let timer = null;
let isRunning = false;

btnElement.addEventListener("click", () => {
  if (!isRunning) {
    if (timer === null) {
      remainingTime = parseInt(counterElement.value, 10);
      display.textContent = formatTime(remainingTime);
    }
    btnElement.textContent = "Pause";
    startTimer();
  } else {
    clearInterval(timer);
    btnElement.textContent = "Start";
  }
  isRunning = !isRunning;
});

function startTimer() {
  timer = setInterval(() => {
    remainingTime--;
    display.textContent = formatTime(remainingTime);
    if (remainingTime <= 0) {
      clearInterval(timer);
      timer = null;
      isRunning = false;
      btnElement.textContent = "Start";
      display.textContent = "Time's up!";
    }
  }, 1000);
}

function formatTime(seconds) {
  return String(seconds).padStart(2, "0");
}
