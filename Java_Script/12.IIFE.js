// Immediately Invoked Function Expressions (IIFE): the secret sauce for encapsulating code and maintaining a clean global scope. In this video, you'll uncover the power of IIFEs and how they can enhance code organization, protect variables, and prevent naming collisions. Whether you're a seasoned developer or just starting out, understanding and utilizing IIFEs will level up your JavaScript skills.

(function DBcheck2() {
    console.log("DB2 Connected")     // IIFE function
}) 
()  ;  // calling statement

((name)=>{
    console.log(`hi my name is ${name}`)
})("Ram");


function DBcheck() {
    console.log("DB Connected")     // normal function
}
DBcheck()

// IIFE must be written on the top of the program
// IIFE function must ended with semicolon to terminate its execution
 

