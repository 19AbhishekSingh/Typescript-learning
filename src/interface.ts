// interfaces 

// Type inference is when typescript automatically figures out the type of a variable based on its initial value.


interface People {
name: string,
age: number,
placed: boolean

} 

const student : People = {
name : 'John',
age: 40,
placed : true
} 

 interface Post {
    title: string,
    body: string,
    tags: string[],
    create_at : Date,
    student: People
 } 

const newPost : Post = {
    title: "string",
    body: "string 10",
    tags: ["rohit","kohli"],
    create_at : new Date(),
    student: student  
}

//   as function argument 

// Define an interface for a function argument

interface Point {
    x: number,
    y: number
}
// Define a function that takes an object adhering to the Point interface
function printPoints(points:Point):number {
return points.x + points.y
}
//Call the function with a valid argument
//The printCoordinates function takes an argument of type Point
printPoints({x:33,y:45})




// function createPost(post:Post)


let  myInferredNumber = 10


//Define an interface named Person with properties name (string) and age (number). Then, declare a variable person that adheres to this interface.

interface PersonIn {
    name: string,
    age: number
} 

const peoplein : PersonIn = {
    name: "john",
    age:23
}



// Create an interface Car with the following properties:

// make (string)
// model (string)
// year (number)
// isElectric (boolean)
// features (array of strings)


interface Car {
    make: string,
    model : string,
    year:number,
    isElectric:boolean,
    features: string[]
}

const cardekho : Car = {
    make: "Toyota",
    model: "Fortuner",
    year: 2023,
    isElectric: false,
    features: ["build quality", "reliability",  "durability"]
}


// using interface in a function call#

// interface InterfaceName {
//   propertyName: propertyType
//   anotherProperty: anotherPropertyType
// }

// function functionName(parameter: InterfaceName): functionReturnType {}


interface PersonFn {
    name: string,
    age: number
}

const displayPerson =  (personfn : PersonFn) : void => {
console.log(`Name: ${personfn.name}, Age: ${personfn.age}}`)
}

displayPerson({name: "Fortuner", age:23}) 




// FUNCTION SIGNATURE AS AN INTERFACE
/*

interface InterfaceName {
  (parameter1: parameterType1, parameter2: parameterType2): returnType
}

const functionName: InterfaceName = () => {}

*/

interface MathFunction{
    (para1:number,para2:number) : number
}

const add: MathFunction = (a,b) => {
    return a + b
}

interface DoubleFunction {
    (para1:number) : number
}

const double: DoubleFunction =  (a) => 2 * a

interface SqaureFunction {
    (parameter:number) : number
}

const squared : DoubleFunction = (num) => num *num
