// Declare variables using const for your name, age, and height. Assign appropriate values to these variables.
const name = "Mekiliuwa Lucky";
const age = 29;
const height = 6.75;


// Declare variables using let for your bio and address. ReAssign the value for address and log out the response.
let bio = "JESUS IS KING";
let address = "Addis Ababa, Ethiopia";
address = "Lagos, Nigeria";

console.log(bio);
console.log(address);


// Create two string variables, firstName and lastName. Assign your first name and last name to these variables.
let firstName = "Lucky";
let lastName = "Mekiliuwa ";


// Concatenate these two strings with a space in between to form your full name and print it to the console.
let fullName = lastName + firstName;
console.log(fullName);


// Use the .length property to find the length of your full name and print it to the console.
console.log(fullName.length);


// Convert your full name to uppercase and lowercase and print both to the console.
console.log(fullName.toLowerCase());

console.log(fullName.toUpperCase());



// Use template literals to create a message that includes your name, age, and height
let Newer = `My name is ${fullName}, i am ${age} years old, and i am also ${height} in height`;

console.log(Newer);


// Extract and print the first 5 characters of your full name.
console.log(fullName.slice(0,5));


// Declare variables for two numbers and perform addition, subtraction, multiplication, and division with these numbers. Print the results to the console.
let firstNumber = 30;
let secondNumber = 10;
let addition = firstNumber + secondNumber;
let subtraction = firstNumber - secondNumber;
let multiplication = firstNumber * secondNumber;
let division = firstNumber / secondNumber;
console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);


// Math.round(): Round a decimal number to the nearest integer.
let decimalNumber = 3.784;
console.log(Math.round(decimalNumber));



// Math.floor(): Round a decimal number down to the nearest integer.
let decimalNumber2 = 3.784;
console.log(Math.floor(decimalNumber2));



// Math.ceil(): Round a decimal number up to the nearest integer.
let decimalNumber3 = 3.784;
console.log(Math.ceil(decimalNumber3));



// Math.max(): Find the maximum value among a list of numbers.
let numbers = [1, 2, 3, 4, 5];
console.log(Math.max(...numbers));



// Math.min(): Find the minimum value among a list of numbers.
let numbers2 = [1, 2, 3, 4, 5];
console.log(Math.min(...numbers2));

