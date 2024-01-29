type Person_Ex01 = {
    name: string;
    age: number;
  };
  
  // Define type for an array of objects of type 'Person'
  type PeopleArray = Person_Ex01[];
  
  // Declare an array using the defined type
  const people_ex01: PeopleArray = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 22 }
  ];
  
  // Accessing elements in the array
  console.log(people_ex01[0].name); // Output: John
  console.log(people_ex01[1].age);  // Output: 30
  

//   challenge#
// Define a type named QuizQuestion that represents an object with properties:

// question (string)
// options (array of strings)
// correctOption (number)

type QuizQuestion = {
    question: string,
    options: string[],
    correctOption: number
}

type quizQuestions = QuizQuestion[] 

const quizquestions : quizQuestions = [
    {
        question: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
    correctOption: 0
    },
    {
        question: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
    correctOption: 0
    },
    {
        question: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
    correctOption: 0
    }
] 

type quizChecker = {
    QuizQuestion: quizQuestions,
    userAnswer: number
}


type CarDetails = {
name: string,
model: string,
year: number
} 

type CarsArr = CarDetails[] 

const carsArray: CarsArr = [
   { name: "Toyota Camry", model: "XLE", year: 2021 },
    { name: "Honda Accord", model: "Touring", year: 2022 },
    { name: "Ford Mustang", model: "GT", year: 2020 },
    { name: "Chevrolet Malibu", model: "Premier", year: 2019 },
    { name: "Tesla Model S", model: "Long Range", year: 2023 }
]

