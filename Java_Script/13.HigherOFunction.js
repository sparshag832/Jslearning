// function that return another function
// function that takes another function as argument  

// a callback function is a function which is passed as a parimeter inside another function

function f(anotherfunc,a,b)
{                                     // anotherfunc is a callback function
return anotherfunc(a,b)
}

function sum(n1,n2)
{
return n1+n2
}

result=f(sum,5,8)
console.log(result)

//==============================================================//

function f1()
{
    return function(){                      // anonymous function
        console.log("Helllo")
    }
    }

    let anyfunc=f1()

    anyfunc()