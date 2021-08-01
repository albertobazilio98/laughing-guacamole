const initialTime = 2;
let intervalId;

function setup() {
  const startButton = document.getElementById('startButton');
  const stopButton = document.getElementById('stopButton');
  const timerElement = document.getElementById('timer');
  
  timerElement.innerHTML = initialTime;
  startButton.onclick = startTimer;
  stopButton.onclick = stopTimer;
}

function startTimer() {
  const timerElement = document.getElementById('timer');
  const sound = document.getElementById('sound');

  let time = initialTime;
  intervalId = setInterval(() => {
    timerElement.innerHTML = time;
    time--;
    if (time == -1) {
      sound.play();
      time = initialTime;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}