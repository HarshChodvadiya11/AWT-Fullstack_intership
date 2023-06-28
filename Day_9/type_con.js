let myvar
myvar=3
myvar=String(3)
document.write(myvar," ",typeof myvar)

let d=new String(Date())
console.log(d, typeof d)

let arr=String((2345456))
console.log(arr.length,typeof arr)

document.write("<br><br>",Number("2423.342"))
document.write("<br>",Number(" "))
document.write("<br>",Number(""))
document.write("<br>",Number("432F DFSD4"))

let ne=34.43
document.write("<br><br>",ne.toExponential())
document.write("<br>",ne.toExponential(2))
document.write("<br>",ne.toExponential(3))

let namfix=433.65
document.write("<br><br>",namfix.toFixed())
document.write("<br>",namfix.toFixed(2))
document.write("<br>",namfix.toFixed(1))

let nc=23452.35453
document.write("<br><br>",nc.toPrecision())
document.write("<br",nc.toPrecision(1))
document.write("<br>",nc.toPrecision(3))

document.write("<br><br>",Number.MAX_VALUE)
document.write("<br>",Number.MIN_VALUE)
document.write("<br>",Number.POSITIVE_INFINITY)
document.write("<br>",Number.NEGATIVE_INFINITY)

document.write("<br><br>",parseInt("-4332"))
document.write("<br>",parseInt("+849"))
document.write("<br>",parseInt("645.765"))
document.write("<br>",parseInt("322 76 37"))
document.write("<br>",parseInt("YEARS IS:10"))

document.write("<br><br>",parseFloat("-4332"))
document.write("<br>",parseFloat("+849"))
document.write("<br>",parseFloat("645.765"))
document.write("<br>",parseFloat("322 76 37"))
document.write("<br>",parseFloat("YEARS IS:10"))

document.write("<br><br>",new Date())
document.write("<br>",new Date("5375-5-53"))
document.write("<br>",new Date( 45, 46, 32))

let k=new Date()
document.write("<br><br>",k.toString())
document.write("<br>",k.toISOString())
document.write("<br>",k.getTime())
document.write("<br>",k.getDate())
document.write("<br>",k.getFullYear())
document.write("<br>",k.getDay())
document.write("<br>",k.getMinutes())
document.write("<br>",k.getMonth())
document.write("<br>",k.getHours())


