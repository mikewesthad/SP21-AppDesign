import { useState } from "react";
import ErrorMessage from "../../common/error-message";
import LoadingSpinner from "../../common/loading-spinner";
import User from "./user";
import { db } from "../../data/firebase";

function GetOneUser() {
  const [queryState, setQueryState] = useState({
    isLoading: false,
    errorMessage: "",
    docSnapshot: null,
  });
  const [userId, setUserId] = useState("");

  const onClick = async () => {
    try {
      setQueryState({ isLoading: true, errorMessage: "", docSnapshot: null });
      const docSnapshot = await db.collection("users").doc(userId).get();
      setQueryState({ isLoading: false, errorMessage: "", docSnapshot });
      if (!docSnapshot.exists) {
        console.log(`No such user found with id ${userId}`);
      } else {
        console.log("Success, found the user!");
        console.log(docSnapshot.id);
        console.log(docSnapshot.data());
      }
    } catch (err) {
      setQueryState({
        isLoading: false,
        errorMessage: "Could not connect to database! Try again.",
        docSnapshot: null,
      });
      console.error(err);
    }
  };

  const { isLoading, errorMessage, docSnapshot } = queryState;

  let contents;
  if (isLoading) contents = <LoadingSpinner />;
  else if (errorMessage) contents = <ErrorMessage>{errorMessage}</ErrorMessage>;
  else if (docSnapshot === null) contents = <p>Search for a user to see results here.</p>;
  else if (!docSnapshot.exists) contents = <p>No user found!</p>;
  else contents = <User data={docSnapshot.data()} />;

  return (
    <div>
      <h3>Get Specific User</h3>
      <label>
        User ID: <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      </label>
      <button onClick={onClick}>Get User</button>
      {contents}
    </div>
  );
}

export default GetOneUser;

// async function readOneUser(id) {
//   try {
//     const snapshot = await db.collection("users").doc(id).get();

//     if (!snapshot.exists) {
//       console.log(`No such user found with id ${id}`);
//     } else {
//       console.log("Success, found the user!");
//       console.log(snapshot.id);
//       console.log(snapshot.data());
//     }
//   } catch (err) {
//     console.error(err);
//   }
// }

// readOneUser("MYz0CagUoOEi06ELgKs8");
