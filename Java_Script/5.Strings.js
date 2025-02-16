let fName="Sparsh"
let lName="Ag"
console.log(`hii  my first name is ${fName}  and last name is ${lName}`) 
//Backticks for string interpolation(Placehold) 
 

/*------------------------------------------------------------------*/

let name=new String("Dipendar")  // String as an object
console.log(typeof name)
console.log(name[2])  // as key value pair
console.log(name.length) // 8
console.log(name.toUpperCase())  //original value not changed
console.log(name.charAt(3))   //e
console.log(name.indexOf('r')) // 7

const n1=name.substring(1,4)  // upper bound not included
console.log(n1)

 // trim() to trim white spaces

 // replace(tbr,nv)

 // includes('string')  returns boolean value

 // split('-') divide string over - and return array odf substrings
