

// In TypeScript, a tuple is a specific type that allows you to express an array where the type of each element is known, but doesn't have to be the same for all elements. Tuples are fixed-size and ordered, meaning that the number and types of elements in a tuple are predefined.


//let people: [string , number , boolean ] 
//people =["John", 23, 23] 

//Type 'number' is not assignable to type 'boolean'

let people: [string , number , boolean ] 
people =["John", 23, true] 

let hsla : [number,string,string,number]
hsla = [12,"10%" , "100%",2]  


// named tuples 

let userInfo : [name:string, email:string] 
userInfo = ['john','john@gmail.com'] 
console.log(userInfo[0])