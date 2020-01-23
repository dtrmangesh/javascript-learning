let myVariable; // Declarations
myVariable = "Mangesh"; // Assigning
console.log(myVariable); // Usage 


// String variables 
let name = "Mangesh"; // Can declar and assign with let/var keywords
name = "Nachiket"; // Redeclared it

// Number type variables
let phoneNumber = 2222222;

// Boolean type variable
let isVisible = true;
const value = 6 > 3;
// Array type variable 
let books = ['Hybird Focus', 1000, true]; // Array can be anything

if (1000 in books)
    console.log('Found Hybird Focus');

// Object type variable 
let person = {
    personName: 'Mangesh',
    personPhoneNumber: 22222,
    gender: 'Male',
    isHandicapped: false,
};

var button = document.querySelector('button');
button.onclick = () => showAlert();

function showAlert() {
    var name = prompt('What is your name ?');
    alert(`Hello ${name} Nice to meet with you !!`);
}


// The difference between var and let

// 1. Hoisting 
myName = "Mangesh"; // You can actually declare a variable with var after you initialize it
console.log(myName);
var myName;

// myLastName = " Datar";
// console.log(myLastName);
// let myLastName;

// 2. Declare same variable multiple times
var myName = 'Chris';
var myName = 'Bob';

// But you can't do this with let


let firstName = "Mangesh";
firstName = "Nachi"; // Will throught an error

// Naming Conventions for variables
/*
age;
myAge;
init;
initialColor;
finalOutputValue;
audio1;
*/

// Dynamic typing
