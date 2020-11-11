const player = document.querySelector(".player");
const video = player.querySelector("video");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const playButton = player.querySelector("#playButton");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const showSlider = document.querySelector(".showSlider");

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
video.addEventListener("click", togglePlay);
playButton.addEventListener("click", togglePlay);

function updatePlayButton() {
  const icon = this.paused ? "►" : "❚❚";
  playButton.textContent = icon;
}

video.addEventListener("play", updatePlayButton);
video.addEventListener("pause", updatePlayButton);
// Event listener for spacebar (and maybe l key)

function skip() {
  let value = this.dataset.skip;
  video.currentTime += parseFloat(value);
}
skipButtons.forEach((button) => button.addEventListener("click", skip));

function handleRangeUpdate() {
  console.log(this.value);
  video[this.name] = this.value;
  showSlider.innerHTML = `${this.name}: ${this.value}`;
}
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
// ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate))

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
video.addEventListener("timeupdate", handleProgress);

function scrubVideo(event) {
  const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
let mousedown = false;
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
progress.addEventListener("click", scrubVideo);
progress.addEventListener(
  "mousemove",
  (event) => mousedown && scrubVideo(event)
);
