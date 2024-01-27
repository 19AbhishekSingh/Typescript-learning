/*

function functionName(parameter: parameterType): functionReturnType {}


*/
function addTwo(a:number, b:number):  number  {
    return a + b
} 

// const subTwo = (a:number,b:number): number => {
//     A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value. 
// } 

const subTwo = (a:number,b:number): number => {
    return a + b
}

addTwo(2,3) 

subTwo(3,4)


function addAll (items: number[]): number {
const total = items.reduce((a,c)=>{
    return a + c
}) 
return total
}

// return type inference

// function addAll (items: number[]){
//     const total = items.reduce((a,c)=>{
//         return a + c
//     }) 
//     return total
//     }


const greet = (name:string): string => `Hello ${name}`

greet("Ajay") 

const addThree = (length:number,width:number,height:number)  => {
    return length * width * height
}


// function with union types

// Create a function named printInfo that takes a parameter info which can be either a string or a number. The function should console log the provided info.


type Info = string | number 

const printInfo = (info:Info) : void => {

}

printInfo(23)
printInfo("Ajay") 


type Circle = {
    kind:"circle",
    radius:number
}

type Rectangle = {
    kind: "rectangle",
    length:number,
    width:number

} 
type Shape = Circle | Rectangle
const getArea = (shape : Shape) =>{
 if(shape.kind==="circle"){
return Math.PI * shape.radius ** 2
} else {
return shape.length * shape.width
}
}

getArea({ kind: "circle", radius: 5 }) 




type PersonObj = {
    name:string,
    age:number
} 

type StudentObj =  PersonObj &  {
    studentId : string
}


const convertPersonToStudent = (person:PersonObj) : StudentObj => {
return {...person, studentId:"123" }
}

