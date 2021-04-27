import { useState } from "react";
import { db } from "../../data/firebase";

function CreateNewUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onClick = async () => {
    try {
      const docRef = await db.collection("users").add({
        firstName,
        lastName,
        isOnline: true,
        highScore: 0,
        topics: [],
      });
      console.log(`Successfully added new user at ${docRef.id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Create User</h3>
      <div>
        <label>
          First name:{" "}
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
          Last name:{" "}
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
      </div>
      <div>
        <button onClick={onClick}>Create User</button>
      </div>
    </div>
  );
}

export default CreateNewUser;

// async function createUser(user) {
//   try {
//     const docRef = await db.collection("users").add(user);
//     console.log(`Successfully added new user at ${docRef.id}`);
//   } catch (err) {
//     console.error(err);
//   }
// }

// createUser({
//   firstName: "Test",
//   lastName: "McTesterson",
//   isOnline: false,
//   highScore: 0,
//   topics: ["Movies", "Books"],
// });
