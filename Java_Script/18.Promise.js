const f1promise=new Promise((resolve,reject)=>{
setTimeout(()=>{
if(Math.random>0.5)
resolve("I am Ready for trip")
else
reject("I am busy this weekend")
},1000)})

const f2promise=new Promise((resolve,reject)=>{
setTimeout(()=>{
    if(2==2)
    resolve("Me chal raha hu")
    else
    reject("Me Bimar hu ")
},2000)})

const f3promise=new Promise((resolve,reject)=>{
setTimeout(()=>{
    if(3>1)
    resolve("I am Ready")
    else
    reject("Mujhe Padna Haii")
},3000)})

Promise.any([f1promise,f2promise,f3promise]).then((msg)=>{
    console.log(msg)
    console.log("We Are Going")}).catch((msg)=>{
        console.log(msg)
        console.log("Trip is cancelled")})


 // similarly we can  use Promise.all() if we want all promise to be fullfiled       