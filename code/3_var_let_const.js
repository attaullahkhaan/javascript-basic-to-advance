// COMPARING VAR, LET, CONST

// VAR KEYWORD
// 1. The var is the oldest keyword to declare a variable in JavaScript. 
// 2. We can access a var variable before initialization, as long as the var variable is eventually initialized anywhere in our code.
console.log(firstName);
// 3. we can decalre and redeclare the same var variable without errors
var firstName = "Ikram";
var firstName = "Inam";
console.log(firstName);



// LET KEYWORD
// 1. The let keyword is an improved version of the var keyword. 

// 2. We cannot access a let variable before we declare it 
// console.log(lastName); // Error
// let lastName = "Inam";

// 3. We can declare an unassigned variable with let 
// let lastName;
// console.log(lastName);

// 4. We can't redeclare a let variable
// let name = "Inam";
// console.log(name);
// name = "Ikram";
// console.log(name);

// 5. But we can re-assign it 
// name = "Ikram";
// console.log(name);


// CONST KEYWORD
// The const keyword has all the properties that are the same as the let keyword, except the user cannot update it.
// 1. The const variable MUST BE initialized 
// const name;

// 2. We can't access the const variable before initialization 
// console.log(name);   // Unexprected token error
// const name = "Inam";

// 3. We can't redeclare a const variable
// name = "Ikram";