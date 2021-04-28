import ErrorMessage from "../common/error-message";
import "./start-screen.css";

function StartScreen({ quizData, onPlayClick }) {
  let { title, tags, description, difficulty, ownerName, questions, lastModifiedAt } = quizData;

  if (!tags) tags = [];
  if (!title) title = "Untitled Quiz";
  if (!description) description = "No description provided by the author.";
  if (!ownerName) ownerName = "Anonymous";
  if (!questions) questions = [];
  if (!difficulty) difficulty = "Unknown";

  const canPlay = questions.length > 0;
  const tagString = tags.length > 0 ? `Tagged as: ${tags.join(", ")}` : "";
  const modifiedString = lastModifiedAt
    ? `Last modified on ${lastModifiedAt.toDate().toLocaleDateString()}`
    : "";

  return (
    <div className="start-screen">
      <h1>{title}</h1>
      <h2>Description</h2>
      <p className="start-screen__description">{description}</p>
      <h2>Details</h2>
      <ul className="start-screen__detail-list">
        <li>Created by {ownerName}</li>
        <li>Difficulty: {difficulty}</li>
        {tagString && <li>{tagString}</li>}
        {modifiedString && <li>{modifiedString}</li>}
        <li>{questions.length} questions</li>
      </ul>
      {!canPlay && <ErrorMessage>Cannot play this quiz - it has no questions yet!</ErrorMessage>}
      <button disabled={!canPlay} onClick={onPlayClick} className="start-screen__play-button">
        Play
      </button>
    </div>
  );
}

export default StartScreen;
