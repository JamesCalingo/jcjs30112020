
const nav = document.querySelector("#main")
const navTop = nav.offsetTop

function fixNav() {
if(window.scrollY >= navTop) {
  document.body.style.paddingTop = nav.offsetHeight + 'px'
  document.body.classList.add("nav-fixed")
}else{
  document.body.style.paddingTop = 0
  document.body.classList.remove("nav-fixed")
}
}

window.addEventListener("scroll", fixNav)