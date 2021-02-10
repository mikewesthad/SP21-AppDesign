// === Variables ===
// Variables are like boxes for data. There are a couple data types in JS:
// - undefined, Boolean, Number, String, BigInt, Symbol
// - Object (e.g. Array, Map, Set, WeakMap, WeakSet, Date)
// - Function
// - null
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

// A few examples of common variables:

// Numbers
const userScore = 10;
const currentTemperature = -10.25;

// Strings
const welcomeMessage = "Welcome to the site.";
const announcement = "Sale! Today only!";
const scoreMessage = `The user's score is ${userScore}.`; // A.k.a template string
console.log(scoreMessage);

// Booleans
const isReady = true;
const isSnowing = false;

// Arrays
const topScores = [10, 20, 22];
const data = [10, true, "Hi"];

// Naming conventions:
// - camelCase for variables, functions, instances (ex: characterName, myTopScore)
// - PascalCase for classes, components (ex: Player, TriviaQuestion)

// const userName = prompt("What is your name?");
// document.body.insertAdjacentHTML("beforeend", `<h1>Welcome, ${userName}</h1>`);

// const item1 = prompt("What is the cost of item 1?");
// const item2 = prompt("What is the cost of item 2?");
// const item3 = prompt("What is the cost of item 3?");
// const subtotal = Number.parseFloat(item1) + Number.parseFloat(item2) + Number.parseFloat(item3);
// console.log(`The subtotal for your purchase is $${subtotal}`);

// Declaring a variable:
// - const = identifier is not allowed to be re-assigned.
// - let = identifers that ARE allowed to be re-assigned.
// - var = don't use.

const numItems = 4;
// Error:
// numItems = 3;

let numLives = 5;
console.log(`You have ${numLives} lives remaining...`);
numLives += 1;
// numLives++;
// ++numLives;
console.log(`You have ${numLives} lives remaining...`);
numLives -= 2;
console.log(`You have ${numLives} lives remaining...`);

let currentOpponent = null;
// ... some time later
currentOpponent = "Goblin";
