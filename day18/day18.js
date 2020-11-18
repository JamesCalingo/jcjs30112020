
const timeForm = document.querySelector("#time-form")
const timeList = document.querySelector("#time-list")
const totalDisplay = document.querySelector("#total")
const times = []

function submitTime(event) {
event.preventDefault()
const hours = timeForm.querySelector("[name=hours]").value || 0
const minutes = timeForm.querySelector("[name=minutes]").value || "00"
const seconds = timeForm.querySelector("[name=seconds]").value || "00"
if(parseFloat(hours) === 0 && parseFloat(minutes) === 0 && parseFloat(seconds)=== 0) {
  Swal.fire({
    title: "NO TIME",
    text: "You seem to have entered no values. Please enter at least one value before continuing.",
    icon: "error"
  })
   return false
}
if(parseFloat(hours) < 0 || parseFloat(minutes) < 0 || parseFloat(seconds) < 0) {
 Swal.fire({
   title: "What is negative time?",
   text: "You seem to have entered a negative value in there. Check your values and then try again.",
   icon: "error"
 })
  return false
}
if(parseFloat(minutes) >= 60 || parseFloat(seconds) >= 60) {
  Swal.fire({
    title: "Overflow Error",
    text: "You have too many minutes or seconds (more than 60) in those fields. Check them and try again.",
    icon: "error"
  })
  return false
}
const minuteStr = minutes.length < 2 ? `0${minutes}`: minutes.length > 2 ? `0${minutes[minutes.length - 1]}` : minutes
  const secondStr = seconds.length < 2 ? `0${seconds}`: seconds.length > 2 ? `0${seconds[seconds.length - 1]}`: seconds
const timeStr = `${hours}:${minuteStr}:${secondStr}`
times.push(timeStr)
displayTimes(times, timeList)
addTimes(times)
this.reset()
}

function displayTimes(arr, div) {
div.innerHTML = arr.map(elem => {
  return `
  <li>${elem}</li>`
}).join("")
}

function addTimes(arr) {
  let totalSecs =  arr
.map(timecode => {
  const [hours, mins, secs] = timecode.split(':').map(parseFloat)
  return (hours * 3600) + (mins * 60) + secs
})
.reduce((total, secs) => total + secs)
calculateDisplay(totalSecs)
}

function calculateDisplay(num) {
  let secondsLeft = num;
  const hours = Math.floor(secondsLeft / 3600)
  secondsLeft = secondsLeft % 3600
  const mins = Math.floor(secondsLeft / 60)
  secondsLeft = secondsLeft % 60
  const displayMins = mins < 10 ? `0${mins}`: mins
  const displaySecs = secondsLeft < 10 ? `0${secondsLeft}`: secondsLeft

totalDisplay.innerHTML = `<h1> Total time: ${hours}:${displayMins}:${displaySecs}`
}

function remove() {
  
}

timeForm.addEventListener("submit", submitTime)
