let numId="33"
console.log(typeof(numId))
let num1=Number(numId)
console.log(typeof(num1))
console.log((num1))

// A number(only) in string can be converted can be converted into a number 
// and vice versa

let num="33aa"
let num2=Number(num)
console.log(typeof(num2))
console.log((num2))

// A number in string can be converted into number but value will be NaN 

let score= null
let num3=Number(score)
console.log(typeof(score))
console.log(typeof(num3))
console.log(num3)

// Null Object can be converted into number gives 0 as value

let score1= undefined
let n=Number(score1)
console.log(typeof(score1))
console.log(typeof(n))
console.log(n)

// Undefined can be converted into number gives NaN as value

let score2= true
let n1=Number(score2)
console.log(typeof(score2))
console.log(typeof(n1))
console.log(n1)

// Boolean can be converted into number gives 0/1  & vice versa

let s1=""
let s2="jfhjd"
let s3=null
console.log(Boolean(s1))
console.log(Boolean(s2))
console.log(Boolean(s3))

//Empty String gives false  , String gives true , null gives false