import { useState } from "react";
import { db } from "../../data/firebase";

function UpdateUser() {
  const [userId, setUserId] = useState("");
  const [isOnline, setIsOnline] = useState(false);

  const onClick = async () => {
    try {
      await db.collection("users").doc(userId).update({ isOnline });
      console.log(`Successfully updated user ${userId}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Update User</h3>
      <label>
        User ID: <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      </label>
      <label>
        Is online?{" "}
        <input type="checkbox" checked={isOnline} onChange={(e) => setIsOnline(e.target.checked)} />
      </label>
      <button onClick={onClick}>Update User</button>
    </div>
  );
}

export default UpdateUser;

// async function updateUser(userId) {
//   try {
//     await db.collection("users").doc(userId).update({
//       isOnline: false,
//     });
//     console.log(`Successfully updated user ${userId}`);
//   } catch (err) {
//     console.error(err);
//   }
// }

// updateUser("HXgjnzVWTIjzYVUIPCPj");
