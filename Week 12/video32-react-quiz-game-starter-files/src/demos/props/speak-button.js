import "./speak-button.css";

// We can destructure the props directly in the parameter and provide default values.
function SpeakButton({ message, pitch = 1, rate = 1 }) {
  // const { message, pitch, rate } = props;

  const speak = () => {
    // alert(message);
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.pitch = pitch;
    utterance.rate = rate;
    speechSynthesis.speak(utterance);
  };

  return (
    <button className="speak-button" onClick={speak}>
      Speak "{message}" 🔉
    </button>
  );
}

export default SpeakButton;
