// Just for screensharing demo purposes, I put all the markup into my JS file. This isn't a great
// approach for development since you miss out on syntax highlighting.
const html = `
<main>
  <h1>Timer</h1>
  <div class="timer">
    <p id="timer" class="timer__elapsed"></p>
    <div class="timer__buttons">
      <button id="start">Start</button>
      <button id="stop">Stop</button>
      <button id="pause">Pause</button>
    </div>
  </div>
</main>
`;
document.body.insertAdjacentHTML("beforeend", html);

const timerOutput = document.body.querySelector("#timer");
const startButton = document.body.querySelector("#start");
const stopButton = document.body.querySelector("#stop");
const pauseButton = document.body.querySelector("#pause");

let intervalId;
let elapsedTime = 0;
updateTimerText();

function startTimer() {
  // Group 4's solution to the problem of the timer being able to be started multiple times!
  startButton.disabled = true;

  intervalId = setInterval(() => {
    elapsedTime += 0.01;
    updateTimerText();
  }, 10);
}

function stopTimer() {
  pauseTimer();
  elapsedTime = 0;
  updateTimerText();
}

function pauseTimer() {
  startButton.disabled = false;
  clearInterval(intervalId);
}

function updateTimerText() {
  timerOutput.textContent = elapsedTime.toFixed(2);
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
pauseButton.addEventListener("click", pauseTimer);
