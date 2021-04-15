import "./welcome-message.css";

// Components can take inputs in the form of props (or properties).
function WelcomeMessage(props) {
  // console.log(props);

  // const name = props.name;
  // const greeting = props.greeting;
  const { name, greeting } = props;

  // Inside of JSX, {} allows us to insert a JS expression.
  return (
    <p className="welcome-message">
      {greeting}, {name}!
    </p>
  );
}

export default WelcomeMessage;
