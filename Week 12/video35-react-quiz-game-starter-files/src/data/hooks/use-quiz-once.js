import { useEffect, useState } from "react";
import { db } from "../firebase";

function useQuizOnce(quizId) {
  const [quizState, setQuizState] = useState({
    status: "loading",
    snapshot: null,
    error: null,
  });

  useEffect(() => {
    async function getDoc() {
      setQuizState({ status: "loading", snapshot: null, error: null });
      try {
        const snapshot = await db.collection("quizzes").doc(quizId).get();
        setQuizState({ status: "success", snapshot, error: null });
      } catch (error) {
        console.error(error);
        setQuizState({ status: "error", snapshot: null, error });
      }
    }
    getDoc();
  }, [quizId]);

  const { status, snapshot, error } = quizState;

  let id;
  let exists;
  let data;
  if (snapshot) {
    id = snapshot.id;
    exists = snapshot.exists;
    data = snapshot.data();
  }

  const setQuiz = async (newQuizData) => {
    setQuizState((prev) => ({ ...prev, status: "updating", error: null }));
    try {
      await db.collection("quizzes").doc(quizId).set(newQuizData, { merge: true });
      setQuizState((prev) => ({ ...prev, status: "success", error: null }));
    } catch (error) {
      console.error(error);
      setQuizState((prev) => ({ ...prev, status: "error", error }));
    }
  };

  const deleteQuiz = async () => {
    setQuizState((prev) => ({ ...prev, status: "deleting", error: null }));
    try {
      await db.collection("quizzes").doc(quizId).delete();
      setQuizState({ status: "deleted", error: null, snapshot: null });
    } catch (error) {
      console.error(error);
      setQuizState((prev) => ({ ...prev, status: "error", error }));
    }
  };

  return {
    id,
    exists,
    data,
    status,
    error,
    set: setQuiz,
    delete: deleteQuiz,
  };
}

export default useQuizOnce;
