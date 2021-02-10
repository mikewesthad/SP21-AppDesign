// Challenge 2
const name = "Mike";
const score = 25;
console.log(`${name}'s score is ${score}!`);

// Challenge 3
function multiplyNumbers(num1, num2) {
  return num1 * num2;
}
console.log(multiplyNumbers(20, 10));
console.log(multiplyNumbers(-1, 3.5));
// alert(multiplyNumbers(-1, 3.5));

// Challenge 4
function logMessage(message, userName, dateString) {
  console.log(`Message from ${userName} (${dateString}): ${message}`);
}
logMessage("Hey everyone", "Mike", "02/02/2021");
logMessage("Yo yo yo", "Roxie", "02/02/2021");

// Challenge 5
const message1 = { message: "Hey everyone", userName: "Mike", dateString: "02/02/2021" };
const message2 = { message: "Yo yo yo", userName: "Roxie", dateString: "02/02/2021" };
function printMessageToPage(messageObject) {
  const formattedMessage = `Message from ${messageObject.userName} (${messageObject.dateString}): ${messageObject.message}`;
  document.body.insertAdjacentHTML("beforeend", `<p>${formattedMessage}</p>`);
}
printMessageToPage(message1);
printMessageToPage(message2);

// This should put some HTML on the page that displays each message, e.g.:
// <p>Message from Mike (02/02/2021): Hey everyone</p>
// <p>Message from Roxie (02/02/2021): Yo yo yo</p>
