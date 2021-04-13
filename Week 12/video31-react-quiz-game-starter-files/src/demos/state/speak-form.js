import { useState } from "react";

function SpeakForm() {
  const [message, setMessage] = useState("");
  const [rate, setRate] = useState(1);

  // Change event handler. It gets a event for the triggered change.
  // const onMessageChange = (event) => {
  //   console.log("change!");
  //   console.log(event.target);
  //   console.log(event.target.value);
  //   const newMessage = event.target.value;
  //   setMessage(newMessage);
  // };
  const onMessageChange = (e) => setMessage(e.target.value);

  const onRateChange = (event) => {
    // console.log(event.target.value);
    const newRate = parseFloat(event.target.value);
    setRate(newRate);
  };

  const speak = () => {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.pitch = 1;
    utterance.rate = rate;
    speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <div>
        <label htmlFor="message">Message:</label>
        <input id="message" type="text" value={message} onChange={onMessageChange} />
      </div>
      <div>
        <label htmlFor="rate">Rate:</label>
        <input
          id="rate"
          type="range"
          min="0.1"
          max="10"
          step="0.1"
          value={rate}
          onChange={onRateChange}
        />
      </div>
      <button onClick={speak}>Speak 🔉</button>
    </div>
  );
}

export default SpeakForm;
