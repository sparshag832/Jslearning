console.log(3+3)
console.log("3+3")
console.log("3"+"3")

const aId=122
let city="BLY"    //Strings are written with quotes. 
                  //You can use single or double quotes
var phn="45989545"
email="heherh"
console.table([aId,city,phn,email])

let x = BigInt(999999999999999);
let type = typeof x;
console.log(type)

let p = 123e5;    // 12300000  exponential
let q = 123e-5;   // 0.00123

let y = 16 + "Volvo";
console.log(y)

let z = 16 + 4 + "Volvo";
console.log(z)
                 // When adding a number andstring,                    
                 //JavaScript will treat the number as a string
                 //JavaScript evaluates expressions from left to right. Different sequences can produce different results

let zp ="Volvo" + 16 + 4;               //=> Volvo164
console.log(zp)

let a = 5;
let b = 5;
let c = 6;
console.log((a == b))       // Returns true
console.log((b == c))       // returns false

const arr1=[1,5,3,2];
console.log(arr1)
const arr2=["Hii", "Hello", "Volvo"];
console.log(arr2)
console.log(typeof arr1)

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.table(person)    // name-value pairs

let accNum; // undefined
let accNum1=undefined
console.log(accNum)
console.log(typeof accNum)
                               // if value not known or can be changed
console.log(accNum1)
console.log(typeof accNum1)


let val=1
let negVal=-val
console.log(negVal)

console.log(2**3)  // Power
