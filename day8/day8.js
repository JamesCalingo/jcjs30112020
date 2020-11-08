
const canvas = document.querySelector("#draw")
const context = canvas.getContext("2d")

context.lineJoin = 'round'
context.lineCap = 'round'
context.lineWidth = 1

let isDrawing = false
let lastX = 0
let lastY = 0
let hue = 0
let direction = true

function draw(event) {
if(!isDrawing) return
context.strokeStyle = `hsl(${hue}, 100%, 50%)`
hue++
context.beginPath()
context.moveTo(lastX, lastY)
context.lineTo(event.offsetX, event.offsetY)
context.stroke()
lastX = event.offsetX
lastY = event.offsetY

if(context.lineWidth >=20 || context.lineWidth <= 1){
  direction = !direction
}

if(direction){
  context.lineWidth++ 
}else{
  context.lineWidth--
}
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown',() => {
  isDrawing = true
  lastX = event.offsetX
lastY = event.offsetY
})
canvas.addEventListener('mouseup',() => isDrawing = false)
canvas.addEventListener('mouseout',() => isDrawing = false)