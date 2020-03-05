/**
 * scripts-START.js
 */

let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  // note: Date.now() returns millseconds
  const now = Date.now();
  const then = now + seconds * 1000; // convert from ms
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    // check if we should stop it!
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60); // only whole minutes
  const remainderSeconds = Math.round(seconds % 60); // remainder of division
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  timerDisplay.textContent = display;

  document.title = 'Countdown | ' + display;

  console.log({minutes, remainderSeconds});
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  // console.log({hour, minutes});
  endTime.textContent = `Be back at: ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  // console.log(seconds);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
// call the form by its HTML name attribute
document.customForm.addEventListener('submit', function(e) {
  // don't append stuff to URL
  e.preventDefault();

  // use name attribute *again* to get value
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});

/*
Testing
 */
// date and timestamp conversion stuff
function getDate(timestamp) {
  const date = new Date(timestamp);
  return date;
}
function getTimestamp() {
  const timestamp = Date.now();
  return timestamp;
}

// const ts = getTimestamp();
// console.group('Timestamp & Date');
// console.log(ts);
// console.log(getDate(ts));
// console.groupEnd('Timestamp & Date');
