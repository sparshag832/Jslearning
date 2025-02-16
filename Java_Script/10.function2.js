function cartsum(num1,num2)
{
    console.log(num1+num2)
} 

cartsum(220,445)

// if no. of values is not fixed

function cartsumcalc(...num1) 
{
    return num1
}

const nums=cartsumcalc(200,111,4444,33)   // this will return an array 
console.log(nums)         // by loop sum can calculated

//-----------------------------------------------------------------//

// how to pass object in function

const obj1={
    name:"Shampoo",
    price:233
}

function objectreader(anyobject)
{
    console.log(anyobject.name)
    console.log(anyobject.price)
}

objectreader(obj1)

// how to pass array in function

const marksarray=[23,45,29,67,78]

function returnmarks(arr)
{
    console.log(arr[3])
}

returnmarks(marksarray)

//----------------------------------------------------------------//

// Another way to define function

const addtwo= function(num)
{
    return num+2
}
console.log(addtwo(5))