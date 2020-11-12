const blogPressed = [];
const blogCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
window.addEventListener("keyup", (event) => {
  blogPressed.push(event.keyCode);
  blogPressed.splice(-blogCode.length - 1, blogPressed.length - blogCode.length);
  if (JSON.stringify(blogPressed) === JSON.stringify(blogCode)) {
    console.warn(
      "Wait...why did you try entering the code HERE?\nDid you expect something goofy to happen to the page?\nI wouldn't do that!"
    );
    window.location.href = "https://www.youtube.com/watch?v=fC7oUOUEEi4";
  }
});
