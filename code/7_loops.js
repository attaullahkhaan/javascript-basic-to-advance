// WHAT IS LOOP AND TYPES OF LOOP?
// 1 - In our everyday life, there are times when we have to repeat some activity again and again.
// 2 - Repetitive tasks are effective life, and sometimes we also need to do these in our JavaScript code.
// 3 - In JavaScript, developers use loops to continually execute repeated blocks of code until a certain condition is satisfied. Loops are similar to conditionals and that a condition must be satisfied in order for the code to execute.
// 4 - There are many types of loops, such as the for loop, the while loop, and the nested loop.


// FOR LOOP
// A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the C++, C#, Java and C for loop.
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
console.log("Go");


// WHILE LOOP
// Code that repeats as long as a specified condition is true.
// The while loop is quite similar to the for loop but they’re not exactly the same. The major difference is the counter value, condition and incrementation.
var counter = 3;
while (counter > 0) {
  console.log(counter);
  counter = counter - 1;
}
console.log("Go");


// DO WHILE LOOP
let result = "";
let i = 0;
do {
  i = i + 1;
  result = result + i;
  //   break;
} while (i < 5);
console.log(result); // Expected output: "12345"


// NESTED LOOP
for (let i = 0; i <= 2; i++) { // outer loop
  console.log("- FIRST LEVEL LOOP");
  for (let j = 0; j <= 3; j++) { // inner loop
    console.log("-- Second level loop");
  }
}


// WEEK and DAYS
// for (week = 0; week < 2; i++) {
//   for (day = 1; day <= 7; day++) {
//     console.log("Week " + week + " day " + day);
//   }
// }


// TABLE of 2
// for (var firstNum = 2; firstNum < 3; firstNum++) {
//   for (var secondNum = 1; secondNum <= 10; secondNum++) {
//     console.log(firstNum + " x " + secondNum + " = " + firstNum * secondNum);
//   }
// }