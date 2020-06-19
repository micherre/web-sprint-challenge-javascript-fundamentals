// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// a nested child function can access any code within the parent function as well as global, and any child of that child function would have access to global, parent, and this child's code, while the parent function only has access to its own code and the global scope.. i.e. information in a function's scope can be inherited but a function can only play within it's lexical environment.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. 
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
const summation = function (number){
  let total = 0;
  for(let i = 1; i <= number; i++){
    total = total + i; 
  }
  return total;
}
//take any number that comes in and create all numbers between that number and 0 and then add all of them