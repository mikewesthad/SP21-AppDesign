import { useEffect, useState } from "react";
import ErrorMessage from "../common/error-message";
import LoadingSpinner from "../common/loading-spinner";
import Game from "./game";
import useQuizData from "./hooks/use-quiz-data";
import { decodeTriviaData } from "./trivia-data";

function QuizPage() {
  const { isLoading, errorMessage, data } = useQuizData();
  console.log("QuizPage");

  // const [quizFetch, setQuizFetch] = useState({
  //   isLoading: true,
  //   errorMessage: "",
  //   data: null,
  // });

  // // Network to slow down
  // useEffect(() => {
  //   async function main() {
  //     const url = "https://opentdb.com/api.php?amount=5&type=multiple";
  //     try {
  //       const response = await fetch(url);

  //       // Stops the chain of thens and kicks things over to the catch.
  //       if (!response.ok) {
  //         throw Error(`Something went wrong, server responded with a ${response.status} status.`);
  //       }

  //       const json = await response.json();
  //       const { response_code, results } = json;

  //       // Stops the chain of thens and kicks things over to the catch.
  //       if (response_code === 1) {
  //         throw Error("Bad API request - no results.");
  //       } else if (response_code === 2) {
  //         throw Error("Bad API request - invalid parameter.");
  //       }

  //       setQuizFetch({
  //         isLoading: false,
  //         errorMessage: "",
  //         data: decodeTriviaData(results),
  //       });
  //     } catch (error) {
  //       setQuizFetch({
  //         isLoading: false,
  //         errorMessage: "Something went wrong loading the quiz data please try again.",
  //         data: null,
  //       });
  //       console.error(error);
  //     }
  //   }

  //   main();
  // }, []);

  // const { isLoading, errorMessage, data } = quizFetch;
  let contents;
  if (isLoading) contents = <LoadingSpinner />;
  else if (errorMessage !== "") contents = <ErrorMessage>{errorMessage}</ErrorMessage>;
  else contents = <Game triviaData={data} />;

  return (
    <>
      <LoadingSpinner />
      <ErrorMessage>Something went wrong. Try again.</ErrorMessage>
      <main>{contents}</main>
    </>
  );
}

export default QuizPage;
