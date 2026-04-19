// a variable may belong to one of these scopes
// global scope
// module scope
// function scope

// var declared with const and let belong to
// block scope

// block eg

// if (Math.random() >= 0.5) {
//   const y = 5; // block scope
// }

// let y = 6; // global scope

// console.log(y); // ReferenceError: y is not defined

// variables declared using var are not block scoped and are global which would lead to bugs

// if (Math.random() >= 0.1) {
//   var y = 5;
// }

// // const y = 6; // syntax error y already declared

// console.log(y);
