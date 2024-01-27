// interfaces 

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