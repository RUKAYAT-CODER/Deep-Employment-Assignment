//Question 1 What are the primitive data types in JavaScript?
//Primitive data types ae data types that are built into a programming language and provide a building blocks for creating complex data structures.
String
 //Numbers (Int 2,4 Floats 1.6, 0.33)
// Boolean
//  Big Int (84674674111100474667245746564562547654624)
// undefined
// null
// Symbol


//Question 2. Give an example of a String data type.
"hello world!"

//3. How do you differentiate between an integer and a float in JavaScript? Provide an example of each.
//Intergers are whole numbers while float has decimal places
let Intergers = 2
let float = 2.23

//4. Explain the Boolean data type and give an example.
//Boolean data types has two states: true or false
const isOpen = true;
const notAvailable = false;

//5. What is a BigInt and when would you use it? Provide an example.
// Big int values represent numeric values that are too large to be represented by the number primitive
const BigInt = 29876554557890000000000000666;
// 6. What is the difference between undefined and null in JavaScript?
//Undefined means variable has been declared but has not been assigned a value
let user; //will result to undefined
//NULL is an assignment value,it has been declared and assigned a value of NULL
let person = null; // will result in null

// 7. List and briefly describe the non-primitive data types in JavaScript.
// Non primitive data types are user defined or reference data types(ARRAY, CLASSES, LIST, STACKS)

//Javascript Arithmetic Operators
// 1. List all the arithmetic operators in JavaScript and their symbols.
//Parenthesis  ()
// Exponential   **
// Multiplication  *
// Division  /
// Addition  +
// Subtraction  -

// 2. What is the order of operations (precedence) for arithmetic operators in
// JavaScript?
// BODMAS
// Brackets
// OF
// Division
// Multiplication
// Addition
// Subraction

// 3. Explain the use of parentheses in arithmetic expressions.
// In arithmetic operations, values inside the parenthesis is evaluated first
let result = (5 * 4 + 5) + (3 * 5) + 5;
console.log(result) // 45;

// Javascript Comparison Operators

// 1. Explain the difference between == and === in JavaScript.
// == means equal to while === means strictly equal to
let value = '100'
let ans = 100
console.log(value == ans ? "Both are the same" : "They are different");// it will result in both are the same.
console.log(value === ans ? "Both are the same" : "They are different");// it will result in They are different.

// 2. What is the purpose of the != and !== operators?
// != means not equall to  and is a comparism operator for checking values that are not equal while,
// !== means strictly not equal to used to compare values that are not equall strictly
console.log(1 != 1) // output false
console.log(10 !== '10') // output true

// 3. How do you use the ternary operator in JavaScript? Provide an example.
//Tenary operator is a short cut to the if and else statement
const age = 25;
console.log(age >= 25 ? 'Yes can drive' : 'Cannot drive')

//Control Flows
// 1. Write a simple if/else statement to check if a number is positive.

if (num > 0) {
  console.log('Number is positve')
} else if (num < 0){
  console.log('Number is negative')
}
else {
  console.log('Number is zero')
}

// 2. Explain the use of switch statements with an example.
let answer;
switch (day) {
  case Monday:
    answer ="Today is monday"
    break;
  case Tuesday:
    answer ="Today is Tuesday"
    break;
  case Wednesday:
    answer ="Today is Wednesday"
    break;
  case Thursday:
    answer ="Today is Thursday"
    break;
  default:
    answer= "No day associated with this day"
    break;
}
// 3. Convert the following if/else statement to use a ternary operator:
if (x > y) {
result = 'x is greater';
} else {
result = 'y is greater or equal';
}
console.log(x > y ? 'x is greater' : 'y is greater or equal')

// Logical Operators
let isShopOpen = true
let lateness =false
// 1. Explain the difference between && and || in JavaScript.
// || short circuit operator for OR it checks if one condition is met it will result in truth
if (isShopOpen || lateness) {
  console.log(' Products are available')  // result in products are available
}
else {
  console.log('No products, shop closed')
}
//&& is and AND operation that both condition must be met before a truth is acheived
if (isShopOpen && lateness) {
  console.log(' Products are available')
}
else {
  console.log('No products, shop closed') // Result in No products, shop closed 
}

// 2. What will be the result of the following expression: true || false && false?
false

// Assignment Operators

// 1. List all the assignment operators in JavaScript and explain their functions.
// assign =          assign a value to avariable
// add and assign += assign a value to a variable and add the number to it   
// subtract and assign -=assign a value to a variable and subtract the number from it
// multiply and assign *=assign a value to a variable and multiply the number from it
// divide and assign  /=assign a value to a variable and divide the number from it
// remainder and assign %=assign a value to a variable and get the modulus of  the number from it
// exponent and assign **= assign a value to a variable and raise the number to the power of the number

// 2. What will be the value of a after the following operations:
let a = 10;
a += 5; // here a is 15
a *= 2
 let res =30  //a is 30

//Function
//1. functions are code that are reusable, function are define with the keyword function followed by the function name , a bracked and parentesis
function myfunction() {
  console.log('I am learning Javascript')
  return "I am a student."
}
 
//2. Difference between function expression and function declaration
// The main difference between  them is the function name, which can be ommited in function expression to create anonymous function. A function expression can be used as an immediately invoked funcion which runs as soon as it is defined. Function declaration creaes functions that are hoisted.

//3. Explain the concept of function invocation with an example
function mySum(val1, val2) {
  let result = a + b;
  return result
}
console.log(mySum(30, 10)) //function invocation when called with the ()

//4. What are parameters and arguments in the context of functions?
//Parameters is a variable in the function definition while an aargument is the actual value that is passed to the function when it is called

function division(val1, val2) {
  let result = a + b;
  return result
}
console.log(division(30, 10))  //val1 and val 2 are parameter
//30 and 10 are argument

// 5. Explain what higher-order functions are and provide an example.
// Higher-Order Functions these are functions that take other functions as arguments and returns a function as a result or both.

function higherFunction(division) {
   mySum(3,5)
  return mySum(3, 5);
}

//Array Methods
// 1. What does the map method do in JavaScript? Provide an example
// A map loops through each element in your array and evaluates based on the function you passed as an argument
const numbers = [20, 55, 50, 60, 11]
const newNumbers = numbers.map(numbers * 2)



                                




