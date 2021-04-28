import Game from "./game";
import LoadingSpinner from "../common/loading-spinner";
import ErrorMessage from "../common/error-message";
import { useParams } from "react-router";
import useQuizOnce from "../data/hooks/use-quiz-once";

function PlayQuizPage() {
  const { id } = useParams();

  const quiz = useQuizOnce(id);

  let contents;
  if (quiz.status === "loading") {
    contents = <LoadingSpinner />;
  } else if (quiz.status === "error") {
    contents = <ErrorMessage>Something went wrong. Please try again!</ErrorMessage>;
  } else if (!quiz.exists) {
    contents = <ErrorMessage>No quiz found!</ErrorMessage>;
  } else {
    contents = <Game quizData={quiz.data} />;
  }

  return <main>{contents}</main>;
}

export default PlayQuizPage;
