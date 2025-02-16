const num=500
console.log(num)


const bal=new Number(400)  // number as object
console.log(bal)
console.log(typeof bal)

let s=num.toString()
console.log(typeof s)   // convert number to string 

console.log(bal.toFixed(1))  // put .0 after number

let db=4.2455
console.log(db.toPrecision(2)) // roundof till 2 decimal places

let amt=1000000
console.log(amt.toLocaleString) // put commas in amount (US standard)
console.log(amt.toLocaleString('en-IN'))
