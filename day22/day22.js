const links = document.querySelectorAll('a')
const highlight = document.createElement('span')
highlight.classList.add("highlight")
document.body.append(highlight)

console.error("If you came here looking for a clue to how many <a> tags there are, it's not here. Check the day 22 blog for a hint.")

function highlightLink () {
const coordinates = this.getBoundingClientRect()
console.log(coordinates)
const scrollCoordinates = {
  width: coordinates.width,
  height: coordinates.height,
  top: coordinates.top + window.scrollY,
  left: coordinates.left + window.scrollX
}
highlight.style.width = `${coordinates.width}px`
highlight.style.height = `${coordinates.height}px`
highlight.style.transform = `translate(${scrollCoordinates.left}px, ${scrollCoordinates.top}px)`
}

links.forEach(a => a.addEventListener("mouseenter", highlightLink))