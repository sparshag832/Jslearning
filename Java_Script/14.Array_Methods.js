// foreach function - to get each element of array without loop

let player =["virat" , "Rohit" , "Dhoni" , "Ashwin"]

player.forEach((eachplayer)=>console.log(eachplayer)) 

//arrow funciton defined inside a forEach method
// it is ab higher order function bcz it is having another function as          argument


// map - to create new transformed array

arr=[1,2,3,4,5,6]
cube_arr=arr.map((num)=>num**3)
console.log(cube_arr)

// filter - to filter out few elements

mix_arr=[2,4,1,6,9,4,7]
even_arr=mix_arr.filter((num)=>num%2==0)
console.log(even_arr)

// reduce - to reduce into a particular function

natural_arr=[1,2,3,4,5,6,7,8,9,10]
let sum= natural_arr.reduce((curret,next)=>curret+next)
console.log(sum)