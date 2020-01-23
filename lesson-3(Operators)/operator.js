var title = document.createElement('h3');
title.innerText = "An operator is a mathematical symbol which produces a result based on two values (or variables). In the following table you can see some of the simplest operators, along with some examples to try out in the JavaScript console.";
title.style.color = "White";
title.style.backgroundColor = "Black";
document.body.style.backgroundColor = "black"; 
document.body.append(title);


// Addition operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

const firstNumber = 10;
const secNumber = 20;
const addition = firstNumber + secNumber;

const name = "Mangesh" + "Datar";

const number = +"300"; // Add operator is also used to convert string into number
console.log(number);
 
// Subtraction, Multiplication, Division

firstNumber - secNumber;

secNumber * firstNumber;
firstNumber % 2 == 0;

// Assignment
var result = addition;

// Equality

10 == 10; // Check is value is eqauls to another
10 == '10';
console.log(10 == '10', "10=='10'    Checking values with different data types");

10 === '10' // Checks with same data types

console.log(10==='10', " 10==='10'  Check with same data type values")


// Not, Does-not-equal	


