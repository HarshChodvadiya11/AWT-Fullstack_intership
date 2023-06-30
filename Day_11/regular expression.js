let Regex=/Dhruv/g
let strh="Dhruv lives in gujrat. " 
document.write("",strh)
document.write("<br>",strh.replace(Regex,"krushi"))

let regexa=/Krushi/i
let o=regexa.exec(strh)
document.write("<br>",o)


var matchcase=regexa.test(strh)
document.write("<br>",matchcase)

let v="how is weather today"
let t=v.match(/[a,e,i,o,u]/g)
document.write("<br>",t)