import { useState } from "react";
import { useParams } from "react-router";
import { getNewQuizId, getServerTimestamp } from "../data/firebase";
import useQuizOnce from "../data/hooks/use-quiz-once";
import useUser from "../data/hooks/use-user";
import QuizForm from "./quiz-form";
import LoadingSpinner from "../common/loading-spinner";

function EditQuizPage() {
  const { id } = useParams();
  const isNew = id === "new";
  const [quizId] = useState(() => (isNew ? getNewQuizId() : id));
  const userState = useUser();
  const quiz = useQuizOnce(quizId);

  const saveQuiz = (newQuizData) => {
    const ownerId = userState.userId;
    const ownerName = userState.user.displayName;
    const lastModifiedAt = getServerTimestamp();
    const data = { ...newQuizData, ownerId, ownerName, lastModifiedAt };
    if (!quiz.exists) data.createdAt = lastModifiedAt;
    quiz.set(data);
  };

  const deleteQuiz = () => {
    quiz.delete();
  };

  // Return early during initial loading, or when the user doesn't
  // have permission to edit this quiz.
  if (quiz.status === "loading") {
    return <LoadingSpinner />;
  }
  if (quiz.status === "success" && quiz.exists && quiz.data.ownerId !== userState.userId) {
    return (
      <main>
        <h1>Edit Quiz</h1>
        <p>You don't have permission to edit "{quiz.data.title}!"</p>
      </main>
    );
  }

  let message;
  if (quiz.status === "deleting") message = <p>Deleting...</p>;
  else if (quiz.status === "deleted") message = <p>Deleted!</p>;
  else if (quiz.status === "error") message = <p>Something went wrong. Please try again.</p>;

  return (
    <main>
      <h1>Edit Quiz</h1>
      {message}
      <QuizForm
        initialData={quiz.data}
        onSave={saveQuiz}
        onDelete={deleteQuiz}
        isSaving={quiz.status === "updating"}
      />
    </main>
  );
}

export default EditQuizPage;
