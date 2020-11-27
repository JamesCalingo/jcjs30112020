//@ts-check
const triggers = document.querySelectorAll(".navBar > li")
const background = document.querySelector(".dropdownBG")
//@ts-ignore
const nav = document.querySelector(".top")

function handleEnter () {
this.classList.add('trigger-enter')
setTimeout(() => {
  if(this.classList.contains("trigger-enter")){
    this.classList.add('trigger-enter-active')
  }
}, 150)
background.classList.add('open')
const dropdown = this.querySelector(".dropdown")
const ddCoords = dropdown.getBoundingClientRect()
const navCoords = nav.getBoundingClientRect()
const coords = {
  height: ddCoords.height,
  width: ddCoords.width,
  top: ddCoords.top - navCoords.top,
  left: ddCoords.left - navCoords.left 
}
//@ts-expect-error
background.style.setProperty('width', `${coords.width}px`)
//@ts-expect-error
background.style.setProperty('height', `${coords.height}px`)
//@ts-expect-error
background.style.setProperty("transform", `translate(${coords.left}px, ${coords.top}px)`)
}

function handleExit() {
  this.classList.remove('trigger-enter', '.trigger-enter-active')
  background.classList.remove('open')
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleExit))