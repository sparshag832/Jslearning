// There are two ways to make an object
// 1. By Constructor - Singleton    

// Syntax-    Object.create


//2. By Literal 

const obj1={
    name:"Lala",
    age:23,
    email:"sp@google.com"
}

console.table(obj1)
console.log(obj1.name)
console.log(obj1["age"]) // different ways to access object data

//  Object.freeze(obj1)  //   to restrict changes in object value


//--------------------------------------------------------------//

obj1.greeting=function()
{
    console.log("Hii Guyss")
}

console.log(obj1.greeting())  // function get executed
console.log(obj1.greeting)        // reference of function returned

obj1.greeting2=function()
{
    console.log(`hello JS User, ${this.name}`)  // use of this keyword
}
console.log(obj1.greeting2())