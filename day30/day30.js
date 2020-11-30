const holes = document.querySelectorAll(".hole")
const moles = document.querySelectorAll(".mole")
const scoreSpan = document.querySelector(".score")
const hsSpan = document.querySelector(".highScore")
const button = document.querySelector("button")
let lastHole;
let gameOver = false
let score = 0
let highScore = localStorage.getItem("highScore") || 0
hsSpan.textContent = highScore

function randomTime(min, max) {
    return Math.random() * (max - min) + min
}

function randomHole(holes) {
    const index = Math.floor(Math.random() * holes.length)
    const hole = holes[index]
    if(hole === lastHole){
      return  randomHole(holes)
    }
    lastHole = hole
    return hole
}

function generateMole() {
    const time = randomTime(200, 1000)
    const hole = randomHole(holes)
    hole.classList.add("up")
    setTimeout(() => {
        hole.classList.remove("up")
        if(!gameOver) generateMole()
    }, time)
    
}

function scorePoint (event) {
    if(!event.isTrusted) return
    score++
    this.classList.remove("up")
    scoreSpan.textContent = score
}

function startGame() {
    score = 0
    gameOver = false
    generateMole()
    setTimeout(endGame, 10000)
}

function endGame() {
    gameOver = true
    if(score > highScore) {
        highScore = score
        alert(`Game over!\nYour score is ${score}.\nYou got a new high score!`)
        hsSpan.textContent = highScore
        localStorage.setItem("highScore", highScore)
    }else{
    alert(`Game over!\nYour score is ${score}.\nThe high score is ${highScore}.`)
        scoreSpan.textContent = ''
}
}

button.addEventListener("click", startGame)
moles.forEach(mole => mole.addEventListener("click", scorePoint))