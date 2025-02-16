

// Clousure property -- we have count variable inside  c1 , it can not be accessed outside c1() due to scope .
//to use it outside scope we use encapsulation or closour 
// we can use count without directly accessing it.  

function c1()
{
    let count=1;
    return ()=>{
        console.log("Customer Count is" , count++)
    }

}
let counter=c1()

counter()
counter()
counter()

//-----------------------------------------------------------//

function outfunc()
{
let id=12
  function innerfunc()
  {
    console.log(id)
  }
  return innerfunc
}

let func=outfunc()
func()                  // you accessed id without directly using it