"use strict";
// Define number type of x
const x = 1;
console.log(x);
// Try assigning x to a string
// Type 'string' is not assignable to type 'number'.
// x = "jack";
// How to give types to arguments of a function
function greet(firstName) {
    console.log("Hello " + firstName);
}
greet("jack");
// How to assign a return type to a function
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(2));
// Create a function that takes another function as input, and runs it after 1 second.
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
delayedCall(function () {
    console.log("hi there");
});
