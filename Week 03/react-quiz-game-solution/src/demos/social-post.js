import { useState } from "react";
import "./social-post.css";

// === Without Extra Credit Challenge ===

// function SocialPost({ content, userName, numLikes = 0, numThumbsUp = 0, numSparkles = 0 }) {
//   return (
//     <div className="social-post">
//       <div>{content}</div>
//       <div>—{userName}</div>
//       <div>
//         <button>{numLikes} 💙</button>
//         <button>{numThumbsUp} 👍🏽</button>
//         <button>{numSparkles} ✨</button>
//       </div>
//     </div>
//   );
// }

// === With Extra Credit Challenge ===

function SocialPost({ content, userName, numLikes = 0, numThumbsUp = 0, numSparkles = 0 }) {
  const [currentLikes, setCurrentLikes] = useState(numLikes);
  const [currentThumbs, setCurrentThumbs] = useState(numThumbsUp);
  const [currentSparkles, setCurrentSparkles] = useState(numSparkles);

  return (
    <div className="social-post">
      <div>{content}</div>
      <div>—{userName}</div>
      <div>
        <button onClick={() => setCurrentLikes(currentLikes + 1)}>{currentLikes} 💙</button>
        <button onClick={() => setCurrentThumbs(currentThumbs + 1)}>{currentThumbs} 👍🏽</button>
        <button onClick={() => setCurrentSparkles(currentSparkles + 1)}>
          {currentSparkles} ✨
        </button>
      </div>
    </div>
  );
}

export default SocialPost;
