// Create a variable called myName and assign it a string value, such as your name. What data type should this variable have?

let myName: string = "John";

//Declare a boolean variable named isStudent and set it to true or false. What data type is appropriate for this variable?

let isStudent:boolean = false;

//Define a variable called myData and assign it a value of null. What type should you assign to this variable?

let myData: null = null; 



// object types 

//Create an object named person with properties name (string) and age (number).

let personDet : {
    name: string,
    age: number
}  = {
    name: "John",
    age: 23
}

// Define an object car with properties make (string) and year (number).

let car: {
    make: string,
    year: number
} = {
    make: "TATA",
    year: 2005
}

let srudentDetails: {
    name: string,
    age: number,
    isEnrolled: boolean
} = {
    name: "John",
    age: 33,
    isEnrolled : false
}



// Define an object named personDetails with properties

// name (string)
// age (number)
// hobbies (array of strings)
// address (object) with properties:
// street (string)
// city (string)
// isStudent (boolean)
// scores (array of numbers)
// extraInfo (null)

let personDetails : {
    name:string,
    age:number,
    hobbies: string[],
    address: {
        street: string,
        city: string,
        isStudent:boolean,
        scores: number[],
        extraInfo: null
    }
} ={
    name:"string",
    age:23,
    hobbies: ["John", "John", "John", "John"],
    address: {
        street: "string",
        city: "string",
        isStudent:true,
        scores: [1, 2, 3, 4, 5, 6, 7, 8],
        extraInfo: null
}
}



