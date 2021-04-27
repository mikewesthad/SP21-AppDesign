import { Link } from "react-router-dom";
import "./quiz-preview.css";

function QuizPreview({ id, data }) {
  let { title, tags, description, ownerName } = data;

  if (!tags) tags = [];
  if (!title) title = "Untitled Quiz";
  if (!description) description = "No description provided.";
  if (!ownerName) ownerName = "Anonymous";

  return (
    <article className="quiz-preview">
      <h3 className="quiz-preview__title">{title}</h3>
      <ul className="quiz-preview__tags">
        {tags.map((tag) => (
          <li className="quiz-preview__tag" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
      <div className="quiz-preview__author">By: {ownerName}</div>
      <p className="quiz-preview__description">{description}</p>
      <Link to={`play-quiz/${id}`} className="quiz-preview__play">
        <button>Play</button>
      </Link>
    </article>
  );
}

export default QuizPreview;
