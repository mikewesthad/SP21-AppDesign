import he from "he";

// This will eventually come from a server!
let triviaData = [
  {
    category: "Entertainment: Board Games",
    type: "multiple",
    difficulty: "hard",
    question: "What is the world&#039;s oldest board game?",
    correct_answer: "Senet",
    incorrect_answers: ["Chess", "Checkers", "Go"],
  },
  {
    category: "Entertainment: Board Games",
    type: "multiple",
    difficulty: "medium",
    question: "In Chess, the Queen has the combined movement of which two pieces?",
    correct_answer: "Bishop and Rook",
    incorrect_answers: ["Rook and King", "Knight and Bishop", "King and Knight"],
  },
  {
    category: "Entertainment: Board Games",
    type: "multiple",
    difficulty: "easy",
    question: "How many dice are used in the game of Yahtzee?",
    correct_answer: "Five",
    incorrect_answers: ["Four", "Six", "Eight"],
  },
  {
    category: "Entertainment: Board Games",
    type: "multiple",
    difficulty: "easy",
    question: "How many dots are on a single die?",
    correct_answer: "21",
    incorrect_answers: ["24", "15", "18"],
  },
  {
    category: "Entertainment: Board Games",
    type: "multiple",
    difficulty: "medium",
    question: "In Yu-Gi-Oh, how does a player perform an Xyz Summon?",
    correct_answer: "Overlay at least 2 Monsters of the Same Level",
    incorrect_answers: [
      "Activate a Spell and Send Monsters to the Graveyard",
      "Add the Monsters&#039; Levels Together to Match the Xyz Monster",
      "Banish A Number of Monsters From Your Hand And Deck",
    ],
  },
  {
    category: "Entertainment: Board Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the most challenging monster in the Dungeons &amp; Dragons 5th Edition Monster Manual?",
    correct_answer: "Tarrasque",
    incorrect_answers: ["Beholder", "Displacer Beast", "Lich"],
  },
  {
    category: "Entertainment: Board Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In Magic: The Gathering, what was a tribute card to Jamie Wakefield&#039;s late wife Marilyn, who loved horses?",
    correct_answer: "Timbermare",
    incorrect_answers: ["Loyal Pegasus", "Vryn Wingmare", "Sungrace Pegasus"],
  },
  {
    category: "Entertainment: Board Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "When Magic: The Gathering was first solicited, which of the following was it originally titled?",
    correct_answer: "Mana Clash",
    incorrect_answers: ["Magic", "Magic Clash", "Mana Duels"],
  },
  {
    category: "Entertainment: Board Games",
    type: "multiple",
    difficulty: "medium",
    question: "In what year was the card game Magic: the Gathering first introduced?",
    correct_answer: "1993",
    incorrect_answers: ["1987", "1998", "2003"],
  },
  {
    category: "Entertainment: Board Games",
    type: "multiple",
    difficulty: "hard",
    question: "What is the sum of all the tiles in a standard box of Scrabble?",
    correct_answer: "187",
    incorrect_answers: ["207", "197", "177"],
  },
];

// This operation should be done when we retrieve our trivia data from the server.
triviaData = triviaData.map((item) => {
  return {
    ...item,
    question: he.decode(item.question),
    correct_answer: he.decode(item.correct_answer),
    incorrect_answers: item.incorrect_answers.map((incorrect) => he.decode(incorrect)),
  };
});

// Just for testing purposes:
// triviaData = triviaData.slice(0, 3);

export default triviaData;
