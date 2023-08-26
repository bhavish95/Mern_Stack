// Incorrect code in sum_of_even_and_odd.js
var arr = [12, 23, 4, 1, 2, 6];
var resultEven = []; // Initialize the array to store even numbers
var resultOdd = [];  // Initialize the array to store odd numbers

var res = arr.reduce((acc, currValue) => {
  if (currValue % 2 === 0) {
    resultEven.push(currValue); // Push even numbers into the resultEven array
  } else {
    resultOdd.push(currValue);  // Push odd numbers into the resultOdd array
  }
  return acc + currValue; // Update the accumulator
}, 0);

console.log("Sum of all numbers:", res);
console.log("Even numbers:", resultEven);
console.log("Odd numbers:", resultOdd);
