import { firebase } from "../../firebase";

const videoGamesQuiz = {
  id: "c1v5oLsWvZncnpJBp9Qa",
  data: {
    title: "Video Game Knowledge",
    description:
      'Think you know your video game history? Check out these "medium" questions from the Open Trivia API. These have not been modified and are licensed under CC BY-SA.',
    difficulty: "medium",
    tags: ["games", "entertainment"],
    createdAt: firebase.firestore.Timestamp.fromDate(new Date("Jan 04, 2021")),
    lastModifiedAt: firebase.firestore.Timestamp.fromDate(new Date("Jan 04, 2021")),
    ownerId: "0SVRbHab7fSDLMA7IbFYAYtJhzA2",
    ownerName: "User1234",
    questions: [
      {
        question: "Tony Hawk's Pro Skater was released in 1999",
        correctAnswer: "true",
        incorrectAnswers: ["false"],
      },
      {
        question: 'What is the main character\'s name in "Braid"?',
        correctAnswer: "Tim",
        incorrectAnswers: ["Boregard", "James", "Jackson"],
      },
      {
        question:
          'Which of these is the only fighter in the game "Super Smash Bros. Melee" capable of dealing damage with their taunt animation?',
        correctAnswer: "Luigi",
        incorrectAnswers: ["Mr. Game & Watch", "Jigglypuff", "Pichu"],
      },
    ],
  },
};

export default videoGamesQuiz;
