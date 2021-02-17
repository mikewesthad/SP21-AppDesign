// A function is a re-usable block of code.

// Declaring a function:
function sayHello() {
  console.log("Our 1st function saying hello!");
}

// Invoking a function:
sayHello();

// Functions can take parameters:
function greetUser(userName) {
  console.log(`Hello, ${userName}.`);
}

// Supply arguments:
greetUser("Mike");
greetUser("Becca");
greetUser();

// Arrow syntax
const sayGoodbye = (userName) => {
  console.log("Goodbye!");
  console.log(`See you soon, ${userName}.`);
};
sayGoodbye("Mike");
sayGoodbye("Becca");
sayGoodbye();

const addNumbers = (num1, num2, num3) => {
  const sum = num1 + num2 + num3;
  return sum;
};

const sum1 = addNumbers(10, 20, 12);
console.log(`The sum is ${sum1}`);

const sum2 = addNumbers(1.5, 2.5, 1.25);
console.log(`The sum is ${sum2}`);
