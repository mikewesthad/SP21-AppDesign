import { firebase } from "../../firebase";

const beginnerJavascriptQuiz = {
  id: "1fUUtNZopmr91RiOherq",
  data: {
    title: "Beginner JavaScript",
    description:
      "Sharpen your JavaScript knowledge with this beginner-friendly quiz. It features some basic topics.",
    difficulty: "easy",
    tags: ["programming", "education"],
    createdAt: firebase.firestore.Timestamp.fromDate(new Date("Jan 01, 2021")),
    lastModifiedAt: firebase.firestore.Timestamp.fromDate(new Date("Jan 02, 2021")),
    ownerId: "0SVRbHab7fSDLMA7IbFYAYtJhzA2",
    ownerName: "User1234",
    questions: [
      {
        question: "What is the file extension for a JavaScript file?",
        correctAnswer: ".js",
        incorrectAnswers: [".j", ".script", ".java"],
      },
      {
        question: "Which of the following is a data type in JavaScript?",
        correctAnswer: "string",
        incorrectAnswers: ["pointer", "if statement", "coffee beans"],
      },
      {
        question: "JavaScript is a programming language",
        correctAnswer: "true",
        incorrectAnswers: ["false"],
      },
      {
        question:
          "Which of the following operators would you use if you want to compare it two variables are equal?",
        correctAnswer: "===",
        incorrectAnswers: [">=", "+", "-="],
      },
    ],
  },
};

export default beginnerJavascriptQuiz;
