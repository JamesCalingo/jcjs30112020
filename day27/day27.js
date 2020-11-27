//@ts-check

const itemDiv = document.querySelector(".items")
let mouseDown = false
let startX
let scrollLeft


function click(event) {
    mouseDown = true
    itemDiv.classList.add("active")
    //@ts-expect-error
    startX = event.pageX - itemDiv.offsetLeft
    scrollLeft = itemDiv.scrollLeft
}

function unclick() {
    mouseDown = false
    itemDiv.classList.remove("active")
}

function scroll(event) {
    if(!mouseDown) return
    event.preventDefault()
    //@ts-ignore
    const mouseX = event.pageX - itemDiv.offsetLeft
    const deltaX = mouseX - startX
    itemDiv.scrollLeft = scrollLeft - deltaX
}

itemDiv.addEventListener("mousedown", click)
itemDiv.addEventListener("mouseup", unclick)
itemDiv.addEventListener("mouseleave", unclick)
itemDiv.addEventListener("mousemove", scroll)
