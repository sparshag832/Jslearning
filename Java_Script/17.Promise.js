const mypromise= new Promise((resolve,reject)=>{

parentDecision=false

if(parentDecision)
{
    resolve("Papa Maan Gaayee")
}
else
reject("Chala Jaa B...")
})

mypromise.then((msg)=>{
    console.log(msg)             // for positive response
    console.log("Happy")}).catch((msg)=>{
    console.log(msg)             // for negative response
    console.log("Sad")}).finally(()=>{console.log("Chalo aage bade ")})
                 // finally must be executed in every condition 

 // if there are multiple promises then there are two ways to handle this.
 
// promises.all()  -- all must be true then perform action
// promises.any() -- if any one is true then perform action
