import { useState } from "react";
import ErrorMessage from "../../common/error-message";
import LoadingSpinner from "../../common/loading-spinner";
import "./random-dogs.css";
import useGetDogs from "./use-get-dogs";

function DogListing({ dogImages }) {
  return (
    <div className="dog-images">
      {dogImages.map((imgSrc) => (
        <img key={imgSrc} className="dog-images__image" src={imgSrc} width={300} alt="" />
      ))}
    </div>
  );
}

function RandomDogs() {
  const [numDogs, setNumDogs] = useState(5);
  const [isLoading, errorMessage, data] = useGetDogs(numDogs);

  let contents;
  if (isLoading) {
    contents = <LoadingSpinner />;
  } else if (errorMessage !== "") {
    contents = <ErrorMessage>{errorMessage}</ErrorMessage>;
  } else {
    contents = <DogListing dogImages={data} />;
  }

  const onChange = (e) => setNumDogs(parseInt(e.target.value));

  return (
    <main>
      <h2>Load Some Random Doggos!</h2>
      <div className="dog-form">
        <label htmlFor="dog">How many do you want? ({numDogs} dogs)</label>
        <input
          id="dog"
          type="range"
          min="1"
          max="10"
          step="1"
          onChange={onChange}
          value={numDogs}
        />
      </div>
      {contents}
    </main>
  );
}

export default RandomDogs;
