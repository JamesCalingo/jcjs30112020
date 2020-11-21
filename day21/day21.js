const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");
const latlon = document.querySelector(".latlon");

navigator.geolocation.watchPosition(
  function (data) {
    console.log(`DATA AT ${data.timestamp}
  speed: ${data.coords.speed},
  direction: ${data.coords.heading},
  lat: ${data.coords.latitude},
  lon: ${data.coords.longitude}`);
    speed.textContent = Math.round(data.coords.speed);
    latlon.innerHTML = `Latitude: ${data.coords.latitude}<br>
  Longitude: ${data.coords.longitude}`;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  (err) => {
    console.error(err);
    alert("This app needs location permissions to work.");
  }
);
