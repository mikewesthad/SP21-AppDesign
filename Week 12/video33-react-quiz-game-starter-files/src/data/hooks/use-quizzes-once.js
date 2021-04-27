import { useEffect, useState } from "react";
import { db } from "../firebase";

function useQuizzesOnce() {
  const [quizzes, setQuizzes] = useState({
    status: "loading",
    snapshot: null,
    error: null,
  });

  useEffect(() => {
    async function getCollection() {
      setQuizzes({ status: "loading", snapshot: null, error: null });
      try {
        const snapshot = await db.collection("quizzes").get();
        setQuizzes({ status: "success", snapshot, error: null });
      } catch (error) {
        console.error(error);
        setQuizzes({ status: "error", snapshot: null, error });
      }
    }
    getCollection();
  }, []);

  const { status, snapshot, error } = quizzes;

  let results = [];
  if (snapshot) {
    results = snapshot.docs.map((docSnapshot) => {
      return {
        id: docSnapshot.id,
        data: docSnapshot.data(),
      };
    });
  }

  return {
    status,
    error,
    results,
    isEmpty: results.length === 0,
  };
}

export default useQuizzesOnce;
