// CONDITIONAL STATEMENTS
// Conditional statements are used to perform different actions based on different conditions.

// 1 - if statement
// Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

// 2 - else statement
// Use the else statement to specify a block of code to be executed if the condition is false.

// 3 - else if statement
// Use the else if statement to specify a new condition if the first condition is false.

// Example If else statement
let number = -10;
if (number > 0) {
  console.log("positive");
} 
else {
    console.log("NOT positive");
}


// Example else if statement
let time = 50;
if (time < 10) {
    greeting = "Good morning";
}
else if (time < 20) {
  greeting = "Good day";
}
else {
  greeting = "Good evening";
}
console.log(greeting);


// Example Traffic Light 
let light= "green";
if(light == "green") {
    console.log("Drive")
} 
else if (light == "orange") {
    console.log("Get ready")
} 
else if (light == "red") {
    console.log("Dont' drive")
} 
else {
    console.log("The car is not green, orange, or red");
}
