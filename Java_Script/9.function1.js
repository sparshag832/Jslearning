function twosum(num1,num2)   // no need to give type of data
{
    return num1+num2
}

let a=twosum(3,5)   // funciton call with return
console.log(a)



function threesum()
{
    let n1=3
    let n2=4
    let n3=5
    console.log("Result Is",n1+n2+n3)
}

threesum()    // function call statement


function userlogin(username)
{
console.log(`Login By ${username}`)
}

userlogin("Lala")
userlogin()    // it will return undefined

//  to check whether perfect the parameter passed is correct or not
// 1. use if  else condition
// 2. use default value in parameter

function login(username)
{
    if(!username)      // or   if(username===undefined)
    {
        console.log("Enter Valid Username")
    }
    else
    console.log(`${username} Just Logged In`)
}

login()
login("Sparsh")

