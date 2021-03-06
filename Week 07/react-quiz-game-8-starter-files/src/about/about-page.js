import animationImage from "../images/beeple-potus-3012.gif";
import "./about-page.css";

function AboutPage() {
  return (
    <main>
      <h1>About Me</h1>

      <h2>Mike Hadley</h2>
      <p>
        We're learning HTML <em>together</em>!
      </p>

      <p>Some things I've been doing lately:</p>
      <ul className="emoji-list">
        <li>Learning to make sauerkraut</li>
        <li>Cooking my way through a cookbook</li>
        <li>Making cold brew</li>
      </ul>
      <p>Some languages I am going to be using:</p>
      <ul className="emoji-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>TS</li>
        <li>React</li>
      </ul>
      <p>Demo list:</p>
      <ul>
        <li>Some</li>
        <li>Other</li>
        <li>Stuff</li>
      </ul>

      <p>
        An app I used daily is{" "}
        <a
          href="https://todoist.com"
          target="_blank"
          rel="noreferrer"
          title="Software recommendation"
        >
          Todoist
        </a>
        .
      </p>

      <img src={animationImage} alt="Some cool art" width="300" />
    </main>
  );
}

export default AboutPage;
