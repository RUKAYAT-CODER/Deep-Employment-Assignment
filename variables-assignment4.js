// Question 1 To declare a variable
/*Variabes are used to store data values. Keywords like var, let and const are used while the equal sign (=) is used to assign the value to the variable.
Variables are declared by using the keywords such as let, var and const followed by a variable name and then an equal sign used to assign the value to the variable */
let sales = 1000
const discount = 0.01
var cost = 500

/* Question 2 The differnce between Block scope and Global scope in javascript Global scobe are accessible anywhere in a java program and are declared outside any block or function While Block scope are defined to a specific code block and are only accessible within the block let is a block scobe while var is global*/
//Global scope
var name = 'business' // var name is global and can be called from anywhere

//Block scope 
{let designation = 'teacher' } //let designation is a block scope and can only be used here in this scope

// Question 3 List arithmetic operators in javascript
//+ , _, *, /, %
let cost = 30, expense = 70, salesAmount = 200, price = 100, quantity = 10;
let result = cost + expense;
let profit = salesAmount - cost;
let answer = profit - price;
const product = price / quantity;
const total = profit % price;

// Question 4 Assignment Operator = is used to assign a value to a variable
let car = 'toyota' // the = is the assignment operator the variable car is assigned to the value Toyota

//Question 5 
let a = 10; // Assign the value 10 to a
let b = 20; // Assign the value 20 to b
let c = 30 // Assign the value 30 to c
let sum = a + b + c // Assign the sum of a, b, c to sum

// Question 6 Types of comment in javascript
// There are two types of comment in javascript: The single line comment and multi line comment

//SINGLE LINE COMMENT
/*MULTI LINE
COMMENT */

// Question 7 Javascript is case sensitive
const firstName = "Yahaya"  /* Both examples are firstname, but they are  two different variables because javascript is case sensitive*/
const Firstname = "Chioma"

// Question 8 Block scope and redeclaration
let school = "community school" //here let school = community school
{ let school = "high school" } /* here let school = high school is block so school can not be redeclared again else it will throw an error*/

// Question 9 Issues associated with var
var state = "Kaduna" /*Redeclaring a variable can cause problem  using var in a block, because it will also also allow for a redeclaration outside of the block*/
{ var state = "Kano" }
var state = "Lagos" // It allows for redeclaration over and over again without error

// Question 10 Compare var, let and const
/*let and const have block scope {}, cannot be redeclared, it  must be declared before it can be used, let and const are not hoisted*/

{
  let e = 10
  const f = 20
}
//var is global scope, dont have to be declared and var is hoisted
var n;
