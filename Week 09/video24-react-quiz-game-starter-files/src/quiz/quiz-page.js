import Game from "./game";
import LoadingSpinner from "../common/loading-spinner";
import ErrorMessage from "../common/error-message";
import useGetTriviaData from "./hooks/use-get-trivia-data";

function QuizPage() {
  // Array destructuring to create local variables with our own names.
  const [isLoading, error, triviaData] = useGetTriviaData(5, "easy");

  let contents;
  if (isLoading) contents = <LoadingSpinner />;
  else if (error !== "") contents = <ErrorMessage>{error}</ErrorMessage>;
  else contents = <Game triviaData={triviaData} />;

  return <main>{contents}</main>;
}

export default QuizPage;
