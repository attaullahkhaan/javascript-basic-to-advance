// PRIMITIVE DATA TYPES
// In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties. There are 7 primitive data types:

// 1 - string, 
// 2 - number, 
// 3 - boolean, 
// 4 - null, 
// 5 - undefined, 
// 6 - symbol, 
// 7 - bigint

// STRING
// A collection of characters enclosed in single quotes or double quotes
const fullName = "Ikram Ullah Khan";
console.log(fullName);

// NUMBER
// In JavaScript, Number is a numeric data type in the double-precision 64-bit floating point format. 
const age = 20;
const cgpa = 3.11;
console.log(age, cgpa);

// BOOLEAN
// In computer science, a Boolean is a logical data type that can have only the values true or false, on or off, yes or no.
console.log(10 > 9);  // true
console.log(10 > 20);  // false

// NULL
// A null value represents a reference that points, generally intentionally, to a nonexistent or invalid object or address. In JavaScript, null is marked as one of the primitive values, because its behavior is seemingly primitive.
const email = null;
console.log(email);

// UNDEFINED
// undefined is a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments.
let x; //create a variable but assign it no value
console.log(`x's value is ${x}`); //logs "x's value is undefined"

// For Symbol and Bigint visit the below link;
// SYMBOL
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

// BIGINT
// https://developer.mozilla.org/en-US/docs/Glossary/BigInt