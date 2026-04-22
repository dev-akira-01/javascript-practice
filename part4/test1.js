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
