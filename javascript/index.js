// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...



// ITERATIONS 2 & 3 USES A DIFFERENT FUNCTION FROM IT.1
// Use obTainInstruction(food, step) => pass food as a 'string'


// Iteration 2 - using promises
// Remember to use a vertical syntax 
// To chain .then() we need to return something (in general a promise)
// Don't use ';' after the .then()
// Put just one .catch() at the end

// Iteration 3 using async/await
// Remember to add the 'async' before the function statement
// Remember to invoke that function
// You can add a Try...catch block (is not needed in that lab)

// SUPER BONUS: Try to DRY your code in this Iteration 
// => After going over it, you can see a lot of repetition
//  how can we write that function in about 5-7 lines?

// Bonus 2 - Promise all
// ...