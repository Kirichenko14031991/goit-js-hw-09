const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let intervalId;

startButton.addEventListener('click', startColorSwitch);
stopButton.addEventListener('click', stopColorSwitch);

function startColorSwitch() {
  if (intervalId) {
    return;
  }

  stopButton.disabled = false;
  startButton.disabled = true;

  intervalId = setInterval(changeBackgroundColor, 1000);
}

function stopColorSwitch() {
  clearInterval(intervalId);
  intervalId = null;

  startButton.disabled = false;
  stopButton.disabled = true;
}

function changeBackgroundColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
}

function getRandomHexColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, '0')}`;
}
