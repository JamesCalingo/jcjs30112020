const arrow = document.querySelector('.arrow')
const speed = document.querySelector('.speed-value')

navigator.geolocation.watchPosition((data) => {
  console.log(data.coords.speed, data.coords.heading)
  speed.textContent = Math.round(data.coords.speed)
  arrow.getElementsByClassName.transform = `rotate(${data.coords.heading}deg)`
}, (err) => {
  console.error(err)
  alert("This app needs location permissions to work.")
})