// any type 

let age: any = 30;
age = 'abhi'
age = true;

// any type in array 

let ageArray: any = [2,3,4,5] 
ageArray.push('abhishek') 
ageArray.push(true) 


// functions and any 

function kuchBhi(value: any, valueTwo: any): any {
return value + valueTwo
}

kuchBhi('abhishek','singh')
kuchBhi('abhishek',35)
kuchBhi(true,65) 

// use any while migrating projects from js to ts

