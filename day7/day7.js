//@ts-check
const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const isAdult = people.some(function (person) {
  const currentYear = new Date().getFullYear();
  if (currentYear - person.year >= 19) {
    return true;
  }
});
console.log(
  `Is there at least one adult in the people array? (array.some) \n ${isAdult}`
);
console.log("");

const allAdults = people.every(function (person) {
  const currentYear = new Date().getFullYear();
  if (currentYear - person.year >= 19) {
    return true;
  }
});

console.log(
  `Are all of the people in the people array over 19? (array.every)\n ${allAdults}`
);
console.log("");

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

const findComment = comments.find((comment) => {
  return comment.id === 823423;
});
console.log("Finding the comment with id 823423 (array.find):");
console.log(findComment);
console.log("");

const findCommentIndex = comments.findIndex((comment) => {
  return comment.id === 823423;
});
console.log(`The index of the aforementioned comment(array.findIndex): ${findCommentIndex}`);
console.log("");

console.log(`...it's over!`);
