const obj1={
    username:"Lala",
    id:222233,
    age:21,
    print:function()
    {
        console.log(this.username)
    }
}
obj1.print()

console.log(this.username)  // this can only used inside scope of object
console.log(this)  // return empty scope

//----------------------------------------------------------------------//

function namefunc()
{
    console.log(this)
 }
 namefunc()

 //---------------------------------------------------------------------//

 // Arrow function

 const func1=(num1,num2) =>
 {
 return num1+num2 // if there is single statement then no  need   of 
                  // curly brace
 }

 const addtwo=(num1,num2)=>(num1+num2)   // Implicit Return
  // more syntax for single statemenr function definition using arrows
  // no  need to write return if u use parenthesis