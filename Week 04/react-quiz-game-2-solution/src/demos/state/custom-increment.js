import { useState } from "react";
import "./custom-increment.css";

function CustomIncrement() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const onAddClick = () => setCount(count + increment);
  const onResetClick = () => {
    setCount(0);
    setIncrement(1);
  };
  const onIncrementChange = (event) => setIncrement(parseInt(event.target.value, 10));

  const buttonText = `${increment >= 0 ? "Add" : "Subtract"} ${Math.abs(increment)}`;

  return (
    <div className="custom-increment">
      <div>The current value is: {count}.</div>
      <div>The current increment is: {increment}.</div>
      <div className="custom-increment__buttons">
        <button onClick={onAddClick}>{buttonText}</button>
        <button onClick={onResetClick}>Reset</button>
      </div>
      <div>
        <label htmlFor="increment">Increment:</label>
        <input
          id="increment"
          type="range"
          min="-100"
          max="100"
          step="1"
          value={increment}
          onChange={onIncrementChange}
        />
      </div>
    </div>
  );
}

export default CustomIncrement;
