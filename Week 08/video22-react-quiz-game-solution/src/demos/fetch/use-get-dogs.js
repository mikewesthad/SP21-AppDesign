import { useEffect, useState } from "react";
import getDogs from "./get-dogs";

function useGetDogs(numDogs) {
  const [dogFetch, setDogFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: null,
  });

  useEffect(() => {
    async function startDogFetch() {
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
    startDogFetch();
  }, [numDogs]);

  const { isLoading, errorMessage, data } = dogFetch;
  return [isLoading, errorMessage, data];
}

export default useGetDogs;
