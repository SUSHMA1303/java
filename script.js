
// Task 1 - Employee Name
// Ask the employee for their name using prompt().
// Print the employee name in the console.
// Display "Welcome <Employee Name>" on the webpage using document.writeln().


let a = prompt("Please enter your name:");
console.log(a);
document.writeln("Welcome " + a);


// Task 2 - Company Entry Confirmation
// Show a confirm box:
// "Are you ready to join today's JavaScript training?"
// Print the user's answer (true/false) in the console.


let b = confirm("Are you ready to join today's JavaScript training?");
console.log(b);

// Task 3 - Customer Greeting
// Show an alert saying:
// "Welcome to Stackly Solutions!"
// Then print "Customer entered the website." in the console.
alert("Welcome to Stackly Solutions!");
console.log("Customer entered the website.");

// Task 4 - Student Details
// Ask the student for:
// 1. Name
// 2. Age
// Print both values in the console.

let c = prompt("Please enter your name:");
let d = prompt("Please enter your age:");
console.log("Student Name: " + c);
console.log("Student Age: " + d);

// Task 5 - Product Price
// Create a variable using let to store a product price.
// Update the price with a new value.
// Print the updated price using console.log().

let e = 100;
e = 150;
console.log("Updated Product Price: " + e);

// Task 6 - Login Validation
// Ask the user to enter their username.
// If the username is empty,
// show a warning using console.warn().
// Otherwise print:
// "Login Successful: <username>"

let username = prompt("Please enter your username:");
if (username === "") {
    console.warn("Username cannot be empty.");
} else {
    console.log("Login Successful: " + username);
}


// Task 7 - Website Maintenance
// Display an alert:
// "Website is under maintenance."
// After that print an error message in the console using console.error().
alert("Website is under maintenance.");
console.error("Website is currently unavailable for maintenance.");


// Task 8 - Feedback Collection
// Ask the user:
// "How was today's JavaScript session?"
// Print the feedback in the console.
// Display:
// "Thank you for your feedback!"
// on the webpage.
let feedback = prompt("How was today's JavaScript session?");
console.log("Feedback: " + feedback);
document.writeln("Thank you for your feedback!");

// Task 9 - Profile Information
// Ask the user for:
// Name
// City
// Favorite Programming Language
// Print all three values in the console
let f = prompt("Please enter your name:");
let g = prompt("Please enter your city:");
let h = prompt("Please enter your favorite programming language:");
console.log("Name: " + f);
console.log("City: " + g);
console.log("Favorite Programming Language: " + h);

// Task 10 - Mini Registration Form
// Ask the user for:
// Full Name
// Email
// Mobile Number
//
// Print all details in the console like:
//
// ===== Registration Details =====
// Name   :
// Email  :
// Mobile :
//
// Finally show:
// alert("Registration Successful!");
let fullName = prompt("Please enter your full name:");
let email = prompt("Please enter your email:");
let mobileNumber = prompt("Please enter your mobile number:");

console.log("===== Registration Details =====");
console.log("Name   : " + fullName);
console.log("Email  : " + email);
console.log("Mobile : " + mobileNumber);

alert("Registration Successful!");