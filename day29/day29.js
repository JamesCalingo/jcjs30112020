function timer (seconds) {
  const now = Date.now()
  const target = now + (seconds * 1000)
  setInterval(alert("Time!"), target)
}