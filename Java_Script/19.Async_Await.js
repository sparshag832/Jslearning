console.log("hii from the beginning")

async function f1()
{
    console.log("Hiii from function beg")
    let mypromise=new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("Hii in the mid")},3000)

        })
        
let result=await mypromise
console.log(result)
console.log("Hiii from function end")
}
f1()
console.log("Hii from the end")