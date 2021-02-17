import triviaItems from "./trivia-items.js";
import shuffle from "./shuffle.js";
import fade from "./fade.js";

const scoreElement = document.querySelector("#score");
const questionNumberElement = document.querySelector("#question-number");
const triviaContainer = document.querySelector("#trivia-container");
const triviaItemTemplate = document.querySelector("#trivia-item-template");
let score = 0;
let triviaItemIndex = 0;

// Keep our score variable in sync with the UI.
function updateScore(newScore) {
  const shouldAnimate = score !== newScore;
  score = newScore;
  scoreElement.textContent = score;

  // === Bonus Demo ===
  // Animate the score changing to draw the eye to the score.
  if (shouldAnimate) {
    const scoreContainerElement = scoreElement.parentElement;
    const keyframes = [
      { transform: "scale(1)" },
      { transform: "scale(1.2) rotate(5deg)" },
      { transform: "scale(1)" },
    ];
    const options = {
      duration: 500,
      iterations: 2,
      easing: "ease-in-out",
    };
    scoreContainerElement.animate(keyframes, options);
  }
}

// Keep our index in sync with the UI.
function updateQuestionNumber() {
  const questionNum = triviaItemIndex + 1;
  const totalNumQuestions = triviaItems.length;
  questionNumberElement.textContent = `${questionNum}/${totalNumQuestions}`;
}

// Clone our template and fill it in with a trivia item.
function displayTriviaItem() {
  const triviaItem = triviaItems[triviaItemIndex];

  // Object destructuring with renaming properties:
  const {
    question,
    correct_answer: correctAnswer,
    incorrect_answers: incorrectAnswers,
  } = triviaItem;

  // Create shuffled answers:
  const allAnswers = shuffle([correctAnswer, ...incorrectAnswers]);

  const triviaItemElement = triviaItemTemplate.content.cloneNode(true);

  const questionElement = triviaItemElement.querySelector(".trivia-item__question");
  questionElement.innerHTML = question;

  const buttonElements = triviaItemElement.querySelectorAll(".trivia-item__button");
  buttonElements.forEach((button, index) => {
    button.innerHTML = allAnswers[index];
    button.addEventListener("click", onAnswerClicked);
  });

  triviaContainer.appendChild(triviaItemElement);

  const triviaDiv = triviaContainer.querySelector(".trivia-item");
  fade(triviaDiv, "in");
}

// Check if the answer picked was correct or incorrect.
function onAnswerClicked(event) {
  const target = event.target;
  const selectedAnswer = target.innerHTML;
  const triviaItem = triviaItems[triviaItemIndex];
  const correctAnswer = triviaItem.correct_answer;

  const buttonElements = triviaContainer.querySelectorAll(".trivia-item__button");
  buttonElements.forEach((button) => {
    button.disabled = true;
    button.classList.add("trivia-item__button--disabled");
  });

  if (selectedAnswer === correctAnswer) {
    console.log("Correct!");
    updateScore(score + 1);
    target.classList.add("trivia-item__button--correct");
  } else {
    console.log("Incorrect!");
    target.classList.add("trivia-item__button--incorrect");
  }

  const triviaDiv = triviaContainer.querySelector(".trivia-item");
  const animation = fade(triviaDiv, "out", { delay: 500 });

  animation.addEventListener("finish", () => {
    clearTrivia();
    triviaItemIndex += 1;

    if (triviaItemIndex === triviaItems.length) {
      // alert(`Game over. Your final score is ${score}.`);

      // === Challenge 1 ===
      const html = `
        <p class="game-over-message">Game over. Your final score is ${score}.</p>
      `;
      triviaContainer.insertAdjacentHTML("beforeend", html);

      // === Challenge 2 ===
      const gameOverMessage = triviaContainer.querySelector(".game-over-message");
      fade(gameOverMessage, "in");
    } else {
      displayTriviaItem();
      updateQuestionNumber();
    }
  });
}

// Clearing trivia items from the page.
function clearTrivia() {
  for (const child of triviaContainer.children) {
    triviaContainer.removeChild(child);
  }
}

updateScore(0);
updateQuestionNumber();
displayTriviaItem();

// === Testing ===

// console.log(scoreElement, questionNumberElement, triviaContainer, triviaItemTemplate);
// scoreElement.textContent = 10;
// questionNumberElement.textContent = "2 / 15";
// triviaContainer.insertAdjacentHTML("beforeend", "<p>Testing!</p>");

// const testTriviaItem = triviaItemTemplate.content.cloneNode(true);
// const questionElement = testTriviaItem.querySelector(".trivia-item__question");
// questionElement.innerHTML =
//   "In &quot;Magic: The Gathering&quot;, during the design for Planar Chaos, what color did the developers think of adding in as the sixth color?";
// const buttonElements = testTriviaItem.querySelectorAll(".trivia-item__button");
// buttonElements[0].innerHTML = "Purple";
// buttonElements[1].innerHTML = "Brown";
// buttonElements[2].innerHTML = "Pink";
// buttonElements[3].innerHTML = "Orange";
// triviaContainer.appendChild(testTriviaItem);
