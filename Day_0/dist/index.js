"use strict";
const greet = (name) => {
    return `Hello, ${name}`;
};
console.log(greet('Basanta'));
// type annotation!
let userName = 'Basanta';
let age = 17;
let isAdult = false;
console.log(typeof userName, typeof age, typeof isAdult);
// userName = 1; // error
