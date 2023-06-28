function cal(num1, num2) { return num1 * num2 }
document.write("<br>", cal(23, 45))


const a = ["massarati", "nissan", "aston martin"]
const a2 = a.map(function (a) {
    return a.length
})
document.write("<br>noraml way", a2)
const a3 = a.map((h) => h.length)
document.write("<br>using arrow function: ", a)


console.log(square(5))
document.write("<br>", square(5))
function square(n) { return n * n }

