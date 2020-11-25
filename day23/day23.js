const msg = new SpeechSynthesisUtterance()
let voices = []
const voiceSelection = document.querySelector('[name="voice"]')
const options = document.querySelectorAll('[type="range"], [name="text"]')
const speakBtn = document.querySelector("#speak")
const stopBtn = document.querySelector("#stop")
msg.text = "You left the text box empty...so let me tell you something: I want to be the very best Like no one ever was To catch them is my real test To train them is my cause I will travel across the land Searching far and wide Each Pokemon to understand The power that's inside Pokemon Gotta catch em all It's you and me I know it's my destiny Pokemon Oh, you're my best friend In a world we must defend Pokemon Gotta catch em' all A heart so true Our courage will pull us through You teach me and I'll teach you Pokemon Gotta catch em' all Gotta catch em' all Pokemon"

function populateVoices() {
  voices = this.getVoices()
  const dropdown = voices
  // .filter(voice => voice.lang.includes("en"))
  .map(voice => 
    `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
  ).join('')
  voiceSelection.innerHTML = dropdown
  // NOTE: I left out the .filter because I think it's more fun to have all the options, but that's just me
}

function setVoice() {
msg.voice = voices.find(voice => voice.name === this.value)
}

function toggle(restart = true) {
  speechSynthesis.cancel();
  if(restart){speechSynthesis.speak(msg)}
}

function setOption() {
  msg[this.name] = this.value
  if(msg.text === ""){
    msg.text = "You left the text box empty...so let me tell you something: I want to be the very best Like no one ever was To catch them is my real test To train them is my cause I will travel across the land Searching far and wide Each Pokemon to understand The power that's inside Pokemon Gotta catch em all It's you and me I know it's my destiny Pokemon Oh, you're my best friend In a world we must defend Pokemon Gotta catch em' all A heart so true Our courage will pull us through You teach me and I'll teach you Pokemon Gotta catch em' all Gotta catch em' all Pokemon"
    }
  console.log(`${this.name}: ${this.value}`)
  toggle()
}

speechSynthesis.addEventListener("voiceschanged", populateVoices)
voiceSelection.addEventListener("change", setVoice)
speakBtn.addEventListener("click", toggle)
stopBtn.addEventListener("click", toggle.bind(null, false))
options.forEach(option => option.addEventListener("change", setOption))