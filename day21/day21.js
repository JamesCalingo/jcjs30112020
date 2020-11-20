const arrow = document.querySelector('.arrow')
const speed = document.querySelector('.speed-value')

navigator.geolocation.watchPosition(function(data) {
  console.log(`DATA AT ${data.timestamp}
  speed: ${data.coords.speed},
  direction: ${data.coords.heading},
  lat: ${data.coords.latitude},
  lon: ${data.coords.longitude}`,)
  speed.textContent = data.coords.speed
  arrow.getElementsByClassName.transform = `rotate(${data.coords.heading}deg)`
}, (err) => {
  console.error(err)
  alert("This app needs location permissions to work.")
})