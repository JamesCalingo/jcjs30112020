const itemForm = document.querySelector("#add-items")
const itemList = document.querySelector("#items")
const clearBtn = document.querySelector("#clear")
const items = JSON.parse(localStorage.getItem("items")) || []

function addItem(event){
  event.preventDefault()
  const text = (this.querySelector('[name=item]')).value
  const item = {
    text,
    done: false
  }
  items.push(item)
  console.log(items)
  populateList(items, itemList)
  localStorage.setItem("items", JSON.stringify(items))
  this.reset()
}

function populateList(items = [], htmlList) {
  htmlList.innerHTML = items.map((item, i) => {
    return `
    <li>
    <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? "checked" : ""} />
    <label for="item${i}">${item.text}</label>
    </li>
    `
  }).join("")
}

function toggleDone(event) {
if(!event.target.matches("input")) return
let element = event.target
let index = element.dataset.index
items[index].done = !items[index].done
populateList(items, itemList)
  localStorage.setItem("items", JSON.stringify(items))
}

function clearList() {
  localStorage.removeItem("items")
 location.reload()
}

itemForm.addEventListener("submit", addItem)
itemList.addEventListener("click", toggleDone)
clearBtn.addEventListener("click", clearList)
populateList(items, itemList)