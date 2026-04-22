// given an array of numbers. Create a new array where each number is increased by 5.

/* let numbers = [1, 3, 5, 7];

// expected [6,8,10,12]

for (let index = 0; index < numbers.length; index++) {
  numbers[index] += 5;
} */

// console.log(numbers);

// array that only contains even numbers multiplied by 3.

/* let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNumbers = [];
let multipliedNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}
console.log(evenNumbers);

for (let index = 0; index < evenNumbers.length; index++) {
  const multiply = evenNumbers[index] * 3;
  multipliedNumbers.push(multiply);
}

console.log(multipliedNumbers);
// expected [6,12,18,24]
 */

// sum of all even numbers 2 to 10

/* i = 0;
sum = 0;

while (i <= 10) {
  sum += i;
  i += 2;
}
console.log(sum); */

// store all odd numbers in the variable oddNumbers , between 1 to 10

/* const oddNumbers = [];
let i = 1;

while (i <= 10) {
  oddNumbers.push(i);
  i += 2;
}

console.log(oddNumbers);
 */

// Use a do…while loop to keep asking the user: enter a name (type quit to stop) Store all names in an array except the word "quit".

/* let arr = [];
let name;
do {
  name = prompt("enter a name (type quit to stop): ");
  if (name !== "quit") {
    arr.push(name);
  } else {
    break;
  }
} while (name !== "quit");

console.log(arr); */

// Using a do loop, multiply total by i until i reaches 5.
// expected 1 * 2 * 3 * 4 * 5 = 120

/* let total = 1;
let i = 1;

do {
  total *= i; // total = total * i 
  i++;
} while (i <= 5);

console.log(total); */

// a string "987654321" using a for loop.

/* let str = "";

for (let index = 9; index > 0; index--) {
  str += index;
}

console.log(str); */

// Create a new array containing each value multiplied by 4. let arr = [3, 6, 9, 12];

/* let arr = [3, 6, 9, 12];
let multipliedArr = [];

// expected arr = [12,24,36,48]

for (index = 0; index < arr.length; index++) {
  multipliedArr.push(arr[index] * 4);
}

console.log(multipliedArr); */

// Count How Many Are Even, using for loop

/* let arr = [1, 2, 3, 4, 5, 6];
let evenCount = 0;
// expected 3

for (index = 0; index < arr.length; index++) {
  if (arr[index] % 2 === 0) {
    evenCount += 1;
  }
}

console.log(evenCount); */

// sum until totalSum exceeds 50, store the last added number
/* 
Total: 55
Stopped at: 10 */

/* let sum = 0;
let i = 0;
let stoppedAt = 0;
let arr = [];

do {
  sum += i;
  arr.push(i++);
  stoppedAt = arr[arr.length - 1];
} while (sum < 50);

console.log("Total: " + sum);
console.log("Stopped at: " + stoppedAt);
// console.log(arr);
 */

/* let nums = [2, 5, 8, 11, 14];
evenNumsX5 = [];

//Create a new array of numbers that are even and multiplied by 5

// [10,40,70]

for (let index = 0; index < nums.length; index++) {
  multi = nums[index] * 5;
  if (multi % 2 === 0) {
    evenNumsX5.push(multi);
  }
}

console.log("Original Numbers Array: ", nums);
console.log("Even numbers from OG array Multiplied by 5: ", evenNumsX5);
 */

let pattern = "";

for (let index = 1; index < 6; index++) {
  pattern += "*";
  console.log(pattern);
}
