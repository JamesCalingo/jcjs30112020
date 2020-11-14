let myVar = "boomshakalaka"
let my2ndVar = myVar
console.log(`initial values: myVar = ${myVar}, my2ndVar = ${my2ndVar}`)
myVar = undefined
console.log(`new values: myVar = ${myVar}, my2ndVar = ${my2ndVar}`)

let myArr = [1, [2, 3], 4, [5, 6, 7]]
let my2ndArr = [...myArr]
console.log(`myArr: ${myArr}`)
console.log(`my2ndArr: ${my2ndArr}`)

my2ndArr[1][0] = 69
console.log("changing a value here")
console.log(`myArr: ${myArr}`)
console.log(`my2ndArr: ${my2ndArr}`)