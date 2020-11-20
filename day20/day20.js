console.log("What are you doing here in the console? Seems kinda *SUS* if you ask me...")

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.interimResults = true

let p = document.createElement("p")
const text = document.querySelector(".text")
text.appendChild(p)

recognition.addEventListener("result", event => {
  const transcript = Array.from(event.results)
  .map(result => result[0])
  .map(result => result.transcript)
  .join("")

  const censored = transcript.replace(/sus/gi, "I AM NOT SUS I SWEAR")
  p.textContent = censored


  if(event.results[0].isFinal){
    p = document.createElement('p')
    text.appendChild(p)
  }
  
})


recognition.addEventListener("end", recognition.start)

recognition.start()