import { useEffect, useState } from "react";
import he from "he";

// Utility function.
function decodeTriviaData(results) {
  // Decode the trivia data HTML entities.
  const decodedResults = results.map((item) => {
    return {
      ...item,
      question: he.decode(item.question),
      correct_answer: he.decode(item.correct_answer),
      incorrect_answers: item.incorrect_answers.map((incorrect) => he.decode(incorrect)),
    };
  });
  return decodedResults;
}

// Another utility function, but this time an async one.
async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Something went wrong, server responded with ${response.status}.`);
  }
  const json = await response.json();
  return json;
}

// Our 1st hook!
function useGetTriviaData(amount = 10, difficulty = "") {
  const [quizFetch, setQuizFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: null,
  });

  useEffect(() => {
    async function getQuiz() {
      try {
        // Docs: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
        const params = new URLSearchParams({ amount, type: "multiple" });
        if (difficulty !== "") params.append("difficulty", difficulty);
        const url = `https://opentdb.com/api.php?${params.toString()}`;

        const json = await fetchJson(url);
        const { response_code, results } = json;

        if (response_code === 1) {
          throw new Error("Bad API request - no results!");
        } else if (response_code === 2) {
          throw new Error("Bad API request - invalid parameter!");
        }

        // Successfully passed all the errors checks!
        setQuizFetch({
          isLoading: false,
          errorMessage: "",
          data: decodeTriviaData(results),
        });
      } catch (err) {
        // Display a generic error message.
        setQuizFetch({
          isLoading: false,
          errorMessage: "Something went wrong loading the quiz. Please try again later.",
          data: null,
        });
        // Display specific error for debugging in the console.
        console.error(err);
      }
    }
    getQuiz();

    // TODO: in the future, we should cleanup if the user leaves the page before fetch
    // finishes running.
  }, [amount, difficulty]);

  // Hooks can return anything they want, but it is common to return an
  // array, so that the consumer can destructure multiple pieces of data
  // into local variables.
  const { isLoading, errorMessage, data } = quizFetch;
  return [isLoading, errorMessage, data];
}

export default useGetTriviaData;
