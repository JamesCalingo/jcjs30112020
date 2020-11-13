//@ts-check
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments
    var later = function() {
      timeout = null
      if(!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
timeout = setTimeout(later, wait)
if(callNow) func.apply(context, args)
  }
}

const images = document.querySelectorAll("img")

function slideIn (event) {
images.forEach(image => {
  const imageHalf = (window.scrollY + window.innerHeight) - image.height / 2
  const imageBottom = image.offsetTop + image.height
  const halfShown = imageHalf > image.offsetTop
  const imageNotPassed = window.scrollY < imageBottom
  if(halfShown && imageNotPassed) {
   image.classList.add("active")
  }else{
    image.classList.remove("active")
  }
})
}

window.addEventListener("scroll", debounce(slideIn))