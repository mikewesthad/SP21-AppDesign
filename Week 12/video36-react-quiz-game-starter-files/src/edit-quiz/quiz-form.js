import { useState } from "react";
import { Form, SelectInput, TextInput } from "./form-components";
import "./quiz-form.css";

const difficultyOptions = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

function QuizForm({ initialData = {}, onSave, onDelete, isSaving }) {
  const [formValues, setFormValues] = useState({
    title: initialData.title ?? "",
    description: initialData.description ?? "",
    difficulty: initialData.difficulty ?? "easy",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    onSave(formValues);
  };

  const onTitleChange = (e) => {
    setFormValues((prev) => {
      return { ...prev, title: e.target.value };
    });
  };
  const onDescriptionChange = (e) =>
    setFormValues((prev) => ({ ...prev, description: e.target.value }));
  const onDifficultyChange = (e) =>
    setFormValues((prev) => ({ ...prev, difficulty: e.target.value }));

  return (
    <Form onSubmit={onSubmit} disabled={isSaving}>
      <h2>Quiz Info</h2>
      <TextInput label="Title" name="title" value={formValues.title} onChange={onTitleChange} />
      <TextInput
        label="Description"
        name="description"
        value={formValues.description}
        onChange={onDescriptionChange}
      />
      <SelectInput
        label="Difficulty"
        name="difficulty"
        options={difficultyOptions}
        value={formValues.difficulty}
        onChange={onDifficultyChange}
      />
      <h2>Questions</h2>
      <p>TODO!</p>
      <div className="quiz-form__buttons">
        <button type="submit">Save Quiz</button>
        <button type="button" onClick={onDelete}>
          Delete Quiz
        </button>
      </div>
    </Form>
  );
}

export default QuizForm;
