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

  return {
    id,
    exists,
    data,
    status,
    error,
  };
}

export default useQuizOnce;
