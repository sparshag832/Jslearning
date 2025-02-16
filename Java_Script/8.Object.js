const cust={
    custid: 12,
    custname:"Lla",
    custadd:"45703 fgfg gfgfg"

}
console.log(cust.custadd);

const {custadd}=cust   // destructuring of object

console.log(custadd);  // now no need to use dot operator

const {custadd:ca}=cust   // creat a short form

console.log(ca);  