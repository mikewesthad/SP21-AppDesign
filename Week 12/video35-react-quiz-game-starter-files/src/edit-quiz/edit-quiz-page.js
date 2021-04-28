import { useState } from "react";
import { useParams } from "react-router";
import { getNewQuizId } from "../data/firebase";
import useQuizOnce from "../data/hooks/use-quiz-once";
import useUser from "../data/hooks/use-user";

function EditQuizPage() {
  const { id } = useParams();
  const isNew = id === "new";
  const [quizId] = useState(() => (isNew ? getNewQuizId() : id));
  const userState = useUser();
  const quiz = useQuizOnce(quizId);

  return (
    <main>
      <h1>Edit Quiz</h1>
      <p>User's ID: {userState.userId}</p>
      <p>User's name: {userState.user.displayName}</p>
      <p>Param ID: {id}</p>
      <p>Is this a new quiz? {isNew ? "Yes" : "No"}</p>
      <p>Quiz status: {quiz.status}</p>
      <p>Quiz exists: {quiz.exists ? "Yes" : "No"}</p>
      {/* {quiz.data ? <pre>{JSON.stringify(quiz.data, null, 2)}</pre> : <p>No quiz data...</p>} */}
      <button onClick={quiz.delete}>Delete</button>
      <button onClick={() => quiz.set({ title: "Testing update!" })}>Update</button>
    </main>
  );
}

export default EditQuizPage;
