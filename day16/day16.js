
const hero = document.querySelector(".hero")
const text = hero.querySelector("h1")
const delta = 100


function moveShadow(event) {
  const { offsetWidth: width, offsetHeight: height } = hero
  let { offsetX: x, offsetY: y} = event


  if(this !== event.target) {
    x = x + event.target.offsetLeft;
    y = y + event.target.offsetTop;
  }

  const xDelta = (x / width * delta) - (delta / 2)
  const yDelta = (y / height * delta) - (delta / 2)
 
  text.style.textShadow = `${xDelta}px ${yDelta}px 0 red,
 ${xDelta * -1}px ${yDelta}px 0 blue,
 ${xDelta}px ${yDelta * -1}px 0 green,
  ${xDelta * -1}px ${yDelta * -1}px 0 orange`
}

hero.addEventListener("mousemove", moveShadow)