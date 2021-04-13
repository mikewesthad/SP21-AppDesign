import { useEffect, useState } from "react";
import ErrorMessage from "../../common/error-message";
import LoadingSpinner from "../../common/loading-spinner";
import getDogs from "./get-dogs";
import "./random-dogs.css";

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
  const [dogFetch, setDogFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: null,
  });

  useEffect(() => {
    async function getBook() {
      // Initialize the state!
      setDogFetch({
        isLoading: true,
        errorMessage: "",
        data: null,
      });

      try {
        const images = await getDogs(numDogs);
        setDogFetch({
          isLoading: false,
          errorMessage: "",
          data: images,
        });
      } catch (err) {
        setDogFetch({
          isLoading: false,
          errorMessage: "Something went wrong loading the doggos. Please try again later.",
          data: null,
        });
      }
    }
    getBook();
  }, [numDogs]);

  const { isLoading, errorMessage, data } = dogFetch;

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
