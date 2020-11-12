// NOTE: Due to how small this JS code is, I originally had it in the HTML file. However, once I realized that it made "cheating" on this fairly simple, I decided to move it here.
const pressed = []
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]
window.addEventListener("keyup", (event) => {
  
    pressed.push(event.keyCode)
  pressed.splice(-code.length - 1, pressed.length - code.length)
  console.log(pressed)
 if(JSON.stringify(pressed) === JSON.stringify(code)){
  swal.fire({
    title: "You Got the Code!",
    icon: "success",
    text: "Your reward is...this message! Also, highlight the text on the page for more!",
    confirmButtonText: "...sure, whatever."
  });
 }
})
// I also realize that using keyCode obscures the code quite a bit since it just looks like some random numbers...