import useQuizOnce from "../data/hooks/use-quiz-once";

function DemosPage() {
  const quiz = useQuizOnce("6fOWwsNkRBHGYef28SJW");

  return (
    <main>
      <h1>My First React App</h1>
      <button onClick={() => quiz.set({ title: "Dummy title" })}>Test Update</button>
      <button onClick={() => quiz.delete()}>Test Delete</button>
    </main>
  );
}

export default DemosPage;
