const arrow = document.querySelector('.arrow')
const speed = document.querySelector('.speed-value')

navigator.geolocation.watchPosition((data) => {
  console.log(`SPEED: ${data.coords.speed},
  DIRECTION: ${data.coords.heading},
  LATITUDE: ${data.coords.latitude},
  LONGITUDE: ${data.coords.longitude}`,)
  speed.textContent = data.coords.speed
  arrow.getElementsByClassName.transform = `rotate(${data.coords.heading}deg)`
}, (err) => {
  console.error(err)
  alert("This app needs location permissions to work.")
})