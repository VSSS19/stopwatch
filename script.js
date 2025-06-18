// CLOCK
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString('en-GB', { hour12: false });
  document.getElementById("clock").innerText = time;
}
setInterval(updateClock, 1000);
updateClock(); // initialize

// STOPWATCH
let stopwatchInterval;
let elapsedTime = 0;
let running = false;

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function updateStopwatchDisplay() {
  document.getElementById("stopwatch").innerText = formatTime(elapsedTime);
}

function startStopwatch() {
  if (!running) {
    const startTime = Date.now() - elapsedTime;
    stopwatchInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateStopwatchDisplay();
    }, 1000);
    running = true;
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  running = false;
}

function resetStopwatch() {
  stopStopwatch();
  elapsedTime = 0;
  updateStopwatchDisplay();
}
