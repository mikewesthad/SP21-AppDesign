import { useState } from "react";
import Confetti from "react-confetti";

function ConfettiDemo() {
  const [isRunning, setIsRunning] = useState(false);
  const [numParticles, setNumParticles] = useState(200);
  const [gravity, setGravity] = useState(0.2);
  const [wind, setWind] = useState(0.05);

  const toggleConfetti = () => setIsRunning(!isRunning);
  const onParticlesChange = (event) => {
    const newNumParticles = parseInt(event.target.value, 10);
    setNumParticles(newNumParticles);
  };
  const onGravityChange = (event) => setGravity(parseFloat(event.target.value));
  const onWindChange = (event) => setWind(parseFloat(event.target.value));

  const buttonText = isRunning ? "Turn Confetti Off" : "Turn Confetti On";
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <div>
      <div>
        <label htmlFor="num-particles">Num Particles:</label>
        <input
          type="range"
          id="num-particles"
          min="1"
          max="3000"
          step="1"
          value={numParticles}
          onChange={onParticlesChange}
        />
      </div>
      <div>
        <label htmlFor="gravity">Gravity:</label>
        <input
          type="range"
          id="gravity"
          min="0"
          max="1"
          step="0.05"
          value={gravity}
          onChange={onGravityChange}
        />
      </div>
      <div>
        <label htmlFor="wind">Wind:</label>
        <input
          type="range"
          id="wind"
          min="-1"
          max="1"
          step="0.05"
          value={wind}
          onChange={onWindChange}
        />
      </div>
      <div>
        <button onClick={toggleConfetti}>{buttonText}</button>
      </div>
      <Confetti
        colors={["#d400ff", "#5e00ff", "#ea00ff"]}
        confettiSource={{ x: width / 2, y: height / 2, w: 0, h: 0 }}
        numberOfPieces={numParticles}
        gravity={gravity}
        wind={wind}
        run={isRunning}
      />
    </div>
  );
}

export default ConfettiDemo;
