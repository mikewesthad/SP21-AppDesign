import he from "he";
import { useEffect, useState } from "react";

function decodeTriviaData(data) {
  const decodedData = data.map((item) => {
    return {
      ...item,
      question: he.decode(item.question),
      correct_answer: he.decode(item.correct_answer),
      incorrect_answers: item.incorrect_answers.map((incorrect) => he.decode(incorrect)),
    };
  });
  return decodedData;
}

function useQuizData() {
  const [quizFetch, setQuizFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: null,
  });

  useEffect(() => {
    async function main() {
      const url = "https://opentdb.com/api.php?amount=5&type=multiple";
      try {
        const response = await fetch(url);

        // Stops the chain of thens and kicks things over to the catch.
        if (!response.ok) {
          throw Error(`Something went wrong, server responded with a ${response.status} status.`);
        }

        const json = await response.json();
        const { response_code, results } = json;

        // Stops the chain of thens and kicks things over to the catch.
        if (response_code === 1) {
          throw Error("Bad API request - no results.");
        } else if (response_code === 2) {
          throw Error("Bad API request - invalid parameter.");
        }

        setQuizFetch({
          isLoading: false,
          errorMessage: "",
          data: decodeTriviaData(results),
        });
      } catch (error) {
        setQuizFetch({
          isLoading: false,
          errorMessage: "Something went wrong loading the quiz data please try again.",
          data: null,
        });
        console.error(error);
      }
    }

    main();
  }, []);

  return quizFetch;
}

export default useQuizData;
