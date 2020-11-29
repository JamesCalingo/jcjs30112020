const timerDisplay = document.querySelector(".time-left");
const endDisplay = document.querySelector(".end-time");
const buttons = document.querySelectorAll("[data-time]");
const audio = new Audio("Twin-bell-alarm-clock.mp3")
let countdown;

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const target = now + seconds * 1000;
  display(seconds);
  displayEndTime(target);
  countdown = setInterval(() => {
    const remainingTime = Math.round((target - Date.now()) / 1000);
    if (remainingTime < 1) {
      clearInterval(countdown);
        audio.play()
      Swal.fire("TIME");
      document.title = "Timer done!"
    }
    display(remainingTime);
  }, 1000);
}

function display(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  const display = `${minutes}:${secondsLeft < 10 ? 0 : ""}${secondsLeft}`;
  timerDisplay.textContent = display;
  document.title = `${display} Left`;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const mins = end.getMinutes();
  endDisplay.textContent = `End Time: ${hour > 12 ? hour - 12 : hour === 0 ? 12: hour}:${
    mins < 10 ? 0 : ""
  }${mins} ${hour >= 12 ? "PM" : "AM"}`;
}

function useButtonTime() {
  const btnSeconds = parseInt(this.dataset.time);
  timer(btnSeconds);
}

buttons.forEach((button) => button.addEventListener("click", useButtonTime));
document.customTime.addEventListener("submit", function (event) {
  event.preventDefault();
  const mins = this.mins.value;
  if (mins <= 0) {
    Swal.fire({
      icon: "error",
      title: "You can't have negative time!",
    });
    return false;
  }
  timer(mins * 60);
  this.reset();
});