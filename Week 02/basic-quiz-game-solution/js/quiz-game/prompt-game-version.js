import shuffle from "./shuffle.js";

// === Basic Arrays & Loops ===

// const playerScores = [12, 13, 11, 9, 13];

// console.log(`First score: ${playerScores[0]}`);
// console.log(`Second score: ${playerScores[1]}`);

// // i = index, arrays are zero-based
// for (let i = 0; i < playerScores.length; i++) {
//   console.log(`Score ${i} is ${playerScores[i]}`);
// }

// for (const score of playerScores) {
//   console.log(score);
//   // Don't have access to the index by default.
// }

// function printScore(score, index, array) {
//   console.log(`Score ${index} is ${score}`);
//   // Can't exit the forEach early with a "break" statement
// }
// playerScores.forEach(printScore);

// === Questions Array ===

// const questions = [
//   { text: "Can an octopus can fit through any hole larger than its beak?", answer: "Yes" },
//   { text: "Is the National Animal of Scotland the Unicorn?", answer: "Yes" },
//   { text: "Bleach never expires.", answer: "No" },
// ];

// questions.forEach((question, index) => {
//   // console.log(index);
//   // console.log(question.text);
//   // console.log(question.answer);
//   // const text = question.text;
//   // const answer = question.answer;

//   // Object destructuring:
//   const { text, answer } = question;
//   const playerAnswer = prompt(text);

//   // === to compare with strict equality.
//   if (playerAnswer === answer) {
//     alert("Correct!");
//   } else {
//     alert("Wrong!");
//   }
// });

// === Trivia Game in Prompts ===

const triviaItems = [
  {
    category: "Entertainment: Board Games",
    type: "multiple",
    difficulty: "easy",
    question: "In a standard game of Monopoly, what colour are the two cheapest properties?",
    correct_answer: "Brown",
    incorrect_answers: ["Green", "Yellow", "Blue"],
  },
  {
    category: "Entertainment: Board Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "The Dice Tower network of board game podcasts and videos is run by which individual?",
    correct_answer: "Tom Vasel",
    incorrect_answers: ["Jason LeVine", "Borth Sampson", "Uncle Pennybags"],
  },
  {
    category: "Entertainment: Board Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In &quot;Magic: The Gathering&quot;, during the design for Planar Chaos, what color did the developers think of adding in as the sixth color?",
    correct_answer: "Purple",
    incorrect_answers: ["Brown", "Pink", "Orange"],
  },
];

let score = 0;

triviaItems.forEach((triviaItem, index) => {
  const { question, category, difficulty, correct_answer, incorrect_answers } = triviaItem;
  const allAnswers = shuffle([correct_answer, ...incorrect_answers]);
  console.log(question);
  console.log(correct_answer);
  console.log(allAnswers);

  // // Challenge 1
  // let questionText = `================
  // Category: ${category}
  // Difficulty: ${difficulty}
  // Question number: ${index}
  // Score: ${score}
  // ================
  // ${question}
  // ${allAnswers.join(" | ")}
  // `;

  // // Challenge 3
  // const startTime = performance.now();
  // const playerAnswer = prompt(questionText);
  // const elapsedSeconds = (performance.now() - startTime) / 1000;

  // if (playerAnswer === correct_answer) {
  //   alert(`Correct! And it took you ${elapsedSeconds.toFixed(2)}s.`);
  //   score += 1;
  // } else {
  //   alert(`Wrong! And it took you ${elapsedSeconds.toFixed(2)}s.`);
  // }

  // Challenge 4
  const labeledAnswers = allAnswers.map((val, i) => `${i + 1}) ${val}`);
  const correctIndex = allAnswers.indexOf(correct_answer);

  let questionText = `================
  Category: ${category}
  Difficulty: ${difficulty}
  Question number: ${index}
  Score: ${score}
  ================
  ${question}
  ${labeledAnswers.join("\n")}
  `;

  const startTime = performance.now();
  const playerAnswer = prompt(questionText);
  const playerGuessIndex = parseInt(playerAnswer, 10) - 1;
  const elapsedSeconds = (performance.now() - startTime) / 1000;

  if (playerGuessIndex === correctIndex) {
    alert(`Correct! And it took you ${elapsedSeconds.toFixed(2)}s.`);
    score += 1;
  } else {
    alert(`Wrong! And it took you ${elapsedSeconds.toFixed(2)}s.`);
  }
});

// Challenge 2
alert(`================
Final Stats
Score: ${score} out of ${triviaItems.length}
================
`);
