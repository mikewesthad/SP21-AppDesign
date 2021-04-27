import { firebase } from "../../firebase";

const videoGamesQuiz = {
  id: "6fOWwsNkRBHGYef28SJW",
  data: {
    title: "Musical Quiz",
    description:
      'Think you know music? Check out these "easy" questions from the Open Trivia API. These have not been modified and are licensed under CC BY-SA.',
    difficulty: "easy",
    tags: ["music", "entertainment"],
    createdAt: firebase.firestore.Timestamp.fromDate(new Date("Jan 10, 2021")),
    lastModifiedAt: firebase.firestore.Timestamp.fromDate(new Date("Jan 12, 2021")),
    ownerId: "0SVRbHab7fSDLMA7IbFYAYtJhzA2",
    ownerName: "User1234",
    questions: [
      {
        question: "Which of the following is not a studio album by the band Pink Floyd?",
        correctAnswer: "Moving Picture",
        incorrectAnswers: ["The Dark Side of the Moon", "Wish You Were Here", "Animals"],
      },
      {
        question: "Ringo Starr of The Beatles mainly played what instrument?",
        correctAnswer: "Drums",
        incorrectAnswers: ["Bass", "Guitar", "Piano"],
      },
      {
        question: "Which member of the Foo Fighters was previously the drummer for Nirvana?",
        correctAnswer: "Dave Grohl",
        incorrectAnswers: ["Taylor Hawkins", "Nate Mendel", "Chris Shiflett"],
      },
      {
        question: 'The "K" in "K-Pop" stands for which word?',
        correctAnswer: "Korean",
        incorrectAnswers: ["Kenyan", "Kazakhstan", "Kuwaiti"],
      },
      {
        question: "Kanye West at 2009 VMA's interrupted which celebrity?",
        correctAnswer: "Taylor Swift",
        incorrectAnswers: ["MF DOOM", "Beyonce", "Beck"],
      },
    ],
  },
};

export default videoGamesQuiz;
