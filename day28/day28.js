const speed = document.querySelector(".speed")
const speedBar = document.querySelector(".speed-bar")
const video = document.querySelector("video")



speed.addEventListener("mousemove", function(event) {
    const barFill = (event.pageY - this.offsetTop) / this.offsetHeight
    const minSpeed = 0.25
    const maxSpeed = 3
    const height = Math.round(barFill * 100) + "%"
    speedBar.style.height = height
//    Here's where most of my curiousity lies: Clean Code says that 
    const playbackRate = barFill * (maxSpeed - minSpeed) + minSpeed
    speedBar.textContent = playbackRate.toFixed(2) + "x"
    video.playbackRate = playbackRate
})