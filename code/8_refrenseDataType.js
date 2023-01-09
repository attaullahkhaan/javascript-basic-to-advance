// REFERENCE TYPES
// Reference data types, unlike primitive data types, are dynamic in nature. That is, they do not have a fixed size.

// Most of them are considered as objects, and therefore have methods. Examples of such data types include arrays, functions, collections, and all other types of objects.

// 1 - object, 
// 2 - array, 
// 3 - function

// OBJECT
// 1 - In real life, a car is an object.
// 2 - A car has properties like weight and color, and methods like start and stop:
// 3 - Objects are variables too. But objects can contain many values.

// Method 01 - Creating an Object
const myCar = new Object();
myCar.name = "Acqua";
myCar.model = "Toyota";
myCar.year = 2022;
console.log(myCar);

// Method 02 - Creating an Object
// const myCar = {
//     make: "Acqua",
//     model: "Toyota",
//     year: 2022,
//   };
//   console.log(myCar);
//   console.log(myCar.color);   // undefined


//   Object literals, DOT Notation
var house1 = {};
house1.rooms = 4;
house1.color = "pink";
house1.priceUSD = 12345;
console.log(house1); // {rooms: 4, color: 'pink', priceUSD: 12345}


//   Object literals, BRACKET Notation
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}



// ARRAY
// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

// Creating in Array
// 'fruits' array created using array literal notation.
const fruits = ['Apple', 'Banana'];
console.log(fruits.length);

// 'fruits2' array created using the Array() constructor.
const fruits2 = new Array('Apple', 'Banana', 'Mango');
console.log(fruits2.length);

// 'fruits3' array created using String.prototype.split().
const fruits3 = 'Apple, Banana'.split(', ');
console.log(fruits3.length);


// Access an array item by its Index
const fruits4 = ['Apple', 'Banana'];

// The index of an array's first element is always 0.
console.log(fruits4[0]); // Apple

// The index of an array's second element is always 1.
console.log(fruits4[1]); // Banana

// The index of an array's last element is always one
// less than the length of the array.
console.log(fruits4[fruits4.length - 1]); // Banana


// FUNCTIONS
// One of the basic principles of programming can be summed with the acronym DRY in other words don't repeat yourself. And it's thanks to functions that you can avoid repetition. With functions you can take several lines of code that performs a set of related actions and then group them together under a single label.

// Adding two number without function
var num1 = 10;
var num2 = 20;
var result = num1 + num2;
console.log(result)

// function addTwoNums() {
//     var a = 10;
//     var b = 20;
//     var c = a + b;
//     console.log(c);
// }
// addTwoNums();


// function addTwoNums(a, b) { // a, b are argument/parameters 
//     var c = a + b;
//     console.log(c);
// }
// addTwoNums(2,2);



// Building and calling functions
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

// function listArrayItems(colors) {
//     for (var i = 0; i < colors.length; i++) {
//         console.log(colors[i])
//     }
// }
// listArrayItems(colors);
