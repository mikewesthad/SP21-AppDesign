const jsOutputDiv = document.querySelector("#js-output");
console.log(jsOutputDiv);
// This returns "null" if no element is found.

jsOutputDiv.insertAdjacentHTML(
  "beforeend",
  `
    <p>Howdy, I'm coming from the JS.</p>
    <p>I am inside of the main element. Hooray!</p>
  `
);

const clickButton = document.querySelector("#click-button");
let numClicks = 0;
function onButtonClick() {
  numClicks += 1;
  console.log(`You clicked ${numClicks}x times.`);
  clickButton.textContent = `You clicked ${numClicks}x times.`;
  const hue = Math.random() * 360;
  console.log(hue);
  clickButton.style.backgroundColor = `hsl(${hue}, 100%, 25%)`;
  clickButton.style.color = "white";
}
clickButton.addEventListener("click", onButtonClick);

const speakButton = document.querySelector("#speak-button");
const speakInput = document.querySelector("#speak-input");
speakButton.addEventListener("click", () => {
  const text = speakInput.value;
  if (text !== "") {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 10;
    utterance.rate = 5;
    speechSynthesis.speak(utterance);
  }
});
