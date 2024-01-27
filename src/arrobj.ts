let names : string[] =['ram','shyam','rahul']
let ages: number[] = [25,35,45] 
let confirmations: boolean[] = [true, false, false] 
let emptyArray: null[] = []
//names.push(6) number is not possible
names.push('abhi')
//ages.push('abhi') string is not possible
ages.push(6) 


// type inference 
let fruits = ['apples','bananas','pears'] 

fruits.push('peaches') 

const f = fruits[0] 


// object literals 

// let objectName: {
//     propertyName1: propertyType1
//     propertyName2: propertyType2
//   } = { propertyName1: propertyValue, propertyName2: propertyValue }
  
  // propertyType could be anything from variableType

let user :{name:string,age:number,id:number} = {
    name: 'user',
    age: 25,
    id: 45
} 

// user.weight = 23 Property 'weight' does not exist on type '{ name: string; age: number; id: number; }'


// user.name = 23 Type 'number' is not assignable to type 'string'

user.name = 'jimmy' 

// type inference

let person = {
    name: 'John',
    score: 23
}
// let person: {
//     name: string;
//     score: number;
// }  