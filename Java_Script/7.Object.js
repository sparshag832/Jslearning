const obj= new Object();  // singleton object

obj.id=12
obj.name="Lala"
obj.email="sp@gmail.com"

console.table(obj)

//------------------------------------------------------------------//

const cust={
    id:133,
    fullname:{
                fname:"Sparsh",
                lname:"Agarwal"  // nested object
 },
     email:"112@gmail.com"
}

console.log(cust.fullname.lname)

//-------------------------------------------------------------------//


objmerge=Object.assign({},obj,cust)  // MERGE TWO OBJECTS
console.table(objmerge)

//--------------------------------------------------------------------//

const user=[
    {
        id:1,
        name:"lala"
    },
    {                     // array of objects
        id:2,
        name:"bala"   
    }
]

console.log(user[0].name)  // access of array objects n components

//---------------------------------------------------------------------//

console.log(Object.keys(cust))  // to print all keys in an object

console.log(Object.values(cust)) // to print all values in an object

console.log(Object.entries(cust)) // to print each entry seperately

console.log(cust.hasOwnProperty("name"))  // to check key present or not
