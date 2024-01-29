// intersections

//example 1
/*

type TypeA = { propA: number }
type TypeB = { propB: string }
type CombinedType = TypeA & TypeB

// example 2

type TypeA = { propA: number; propB: string }

type TypeB = TypeA & {
  propC: string
}

type TypeC = TypeA & {
  propD: string
}

*/

 //define a type Person which has properties name (string) and age (number).


 type Person = {
    name: string,
    age: number
 }


// define a type Student which extends Person and adds a property studentId (string).


type Student = Person & {
        studentId: string
    }

// define a type Teacher which extends Person and adds a property subject (string).

type Teacher = Person & Student & {
    subject: string
}


// UNIONS

// let variableName: type1 | type2

// type could be anything from variableType 

let id : string | number


// Union for arrays#

// let arrayName: (type1 | type2 | type3 | ...etc )[];

let numberOrStringArray : (number|string)[] =["John",23]

let mixesArr : (number| string | boolean)[] = ['John', 23,true ,34,false,false,"John",] 