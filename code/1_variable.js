// VARIABLE IN JAVASCRIPT
// A variable is a container for a value, like a number we might use in a sum, or a string that we might use as part of a sentence.

// DECLARATION OF VARIABLE
// To use a variable, you've first got to create it — more accurately, we call this declaring the variable.
// var fullName;
// var age;
// var country;

// INITIALIZATION OF VARIABLE
// Once you've declared a variable, you can initialize it with a value. You do this by typing the variable name, followed by an equals sign (=), followed by the value you want to give it. 
// fullName = "Ikram Ullah Khan";
// age = "20";
// country = "Pakistan";

// PRINT ON CONSOLE
// If you want to print the above data on console you can do it through console.log()
// console.log(fullName, age, country)




// *********************************************************************************
let message = "Hello, World!"; // Declares a variable that can be changed
const PI = 3.14159;           // Declares a constant whose value cannot be changed
//var age = 30;                 // Declares a variable with function scope

let name = "Inam";
let age = 25;
let isStudent = true;
let address = null;
let definition;
console.log(typeof name);         // Outputs "string"
console.log(typeof age);          // Outputs "number"
console.log(typeof isStudent);    // Outputs "boolean"
console.log(typeof address);      // Outputs "object" because `null` is treated as an object
console.log(typeof definition);   // Outputs "undefined"

let score = 85;
if (score >= 90) {
 console.log("Excellent");
} else if (score >= 80) {
 console.log("Good");
} else {
 console.log("Needs Improvement");
}

let user = "Ikram";
let greeting = "Hello, " + user + "! Welcome to JavaScript."; // Using the + operator
console.log(greeting);
console.log(`Hello, ${user}! Welcome to JavaScript.`); // Using template literals