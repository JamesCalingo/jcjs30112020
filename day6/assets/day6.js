//@ts-check
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

const searchInput = document.querySelector("#search");
const suggestions = document.querySelector("#suggestions");

searchInput.addEventListener("keyup", displayMatches);

fetch(endpoint)
  .then((rawData) => rawData.json())
  .then((citiesData) => cities.push(...citiesData));

function findMatches(word, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(word, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function addCommas (num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function displayMatches() {
  const matches = findMatches(this.value, cities);
  const html = matches
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="highlight">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="highlight">${this.value}</span>`
      );
      return `
   <li>
   <span class="name">${cityName}, ${stateName}</span>
   <span class="population">Rank: ${place.rank} | Population: ${addCommas(place.population)}</span>
   </li>
   `;
    })
    .join("");
  suggestions.innerHTML = html;
}
