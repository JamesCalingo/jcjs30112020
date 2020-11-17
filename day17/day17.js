function removeArticle (str) {
  return str.replace(/^(a |an |the )/i, " ").trim()
}

function sortWithoutArticles (arr) {
  return arr.sort((a, b) => removeArticle(a) > removeArticle(b) ? 1 : -1)
}

let movies = [
  "Citizen Kane",
  "The Godfather",
  "Casablanca",
  "Raging Bull",
  "Singin' in the Rain",
  "Gone with the Wind",
  "Lawrence of Arabia",
  "Schindler's List",
  "Vertigo",
  "The Wizard of Oz",
  "City Lights",
  "The Searchers",
  "Star Wars",
  "Psycho",
  "2001: A Space Odyssey",
  "Sunset Boulevard",
  "The Graduate",
  "The General",
  "On the Waterfront",
  "It's a Wonderful Life",
  "Chinatown",
  "Some Like It Hot",
  "The Grapes of Wrath",
  "E.T. the Extra-Terrestrial",
  "To Kill a Mockingbird",
  "Mr. Smith Goes to Washington",
  "High Noon",
  "All About Eve",
  "Double Indemnity",
  "Apocalypse Now",
  "The Maltese Falcon",
  "The Godfather Part II",
  "One Flew Over the Cuckoo's Nest",
  "Snow White and the Seven Dwarfs",
  "Annie Hall",
  "The Bridge on the River Kwai",
  "The Best Years of Our Lives",
  "The Treasure of the Sierra Madre",
  "Dr. Strangelove",
  "The Sound of Music",
  "King Kong",
  "Bonnie and Clyde",
  "Midnight Cowboy",
  "The Philadelphia Story",
  "Shane",
  "It Happened One Night",
  "A Streetcar Named Desire",
  "Rear Window",
  "Intolerance",
  "The Lord of the Rings: The Fellowship of the Ring",
  "West Side Story",
  "Taxi Driver",
  "The Deer Hunter",
  "MASH",
  "North by Northwest",
  "Jaws",
  "Rocky",
  "The Gold Rush",
  "Nashville",
  "Duck Soup",
  "Sullivan's Travels",
  "American Graffiti",
  "Cabaret",
  "Network",
  "The African Queen",
  "Raiders of the Lost Ark",
  "Who's Afraid of Virginia Woolf?",
  "Unforgiven",
  "Tootsie",
  "A Clockwork Orange",
  "Saving Private Ryan",
  "The Shawshank Redemption",
  "Butch Cassidy and the Sundance Kid",
  "The Silence of the Lambs",
  "In the Heat of the Night",
  "Forrest Gump",
  "All the President's Men",
  "Modern Times",
  "The Wild Bunch",
  "The Apartment",
  "Spartacus",
  "Sunrise: A Song of Two Humans",
  "Titanic",
  "Easy Rider",
  "A Night at the Opera",
  "Platoon",
  "12 Angry Men",
  "Bringing Up Baby",
  "The Sixth Sense",
  "Swing Time",
  "Sophie's Choice",
  "Goodfellas",
  "The French Connection",
  "Pulp Fiction",
  "The Last Picture Show",
  "Do the Right Thing",
  "Blade Runner",
  "Yankee Doodle Dandy",
  "Toy Story",
  "Ben-Hur",
  "Doctor Zhivago",
  "The Birth of a Nation",
  "From Here to Eternity",
  "Amadeus",
  "All Quiet on the Western Front",
  "The Third Man",
  "Fantasia",
  "Rebel Without a Cause",
  "Stagecoach",
  "Close Encounters of the Third Kind",
  "The Manchurian Candidate",
  "An American in Paris",
  "Wuthering Heights",
  "Dances with Wolves",
  "Giant",
  "Fargo",
  "Mutiny on the Bounty",
  "Frankenstein",
  "Patton",
  "The Jazz Singer",
  "My Fair Lady",
  "A Place in the Sun",
  "Guess Who's Coming to Dinner"
  ]
  console.table(movies)
let sortedMovies = sortWithoutArticles(movies)


const list = document.querySelector(".list")

list.innerHTML = sortedMovies.map(element => {
  return `
  <li>${element}</li>
  `
}).join('')


