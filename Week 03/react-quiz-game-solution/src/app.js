import AlertButton from "./demos/alert-button";
import ChatMessage from "./demos/chat-message";
import SocialPost from "./demos/social-post";
import SpeakButton from "./demos/speak-button";
import WelcomeMessage from "./demos/welcome-message";

// Components should be named as PascalCase.
// A (functional) component is just a JS function that returns JSX.
function App() {
  return (
    <main>
      <h1>My First React App</h1>

      <h2>Welcome</h2>
      {/* name and greeting become properties on an object passed in to WelcomeMessage */}
      <WelcomeMessage name="Mike" greeting="Hello" />
      <WelcomeMessage name="Callie" greeting="Howdy" />
      <WelcomeMessage name="Class" greeting="Welcome" />

      <h2>Buttons</h2>
      {/* Values for properties can be any JS expression. */}
      <SpeakButton message="Hello there!" />
      <SpeakButton message="Speedy speed speed!" rate={3} pitch={2} />
      <AlertButton buttonText="Spooky" alertMessage="👻 Boo!" />
      <AlertButton alertMessage="Hey! This button has default text." />

      <h2>Chat</h2>
      <ChatMessage message="Yo, how's React?" userName="PokeMike" date="02/01/21" />
      <ChatMessage message="I think its going well..." userName="CallieCats2000" date="02/02/21" />
      <ChatMessage message="Props to you." userName="PokeMike" date="02/03/21" />
      <ChatMessage message="Ha. ha. You are not funny." userName="CallieCats2000" date="02/04/21" />

      <h2>Social</h2>
      <SocialPost content="Hello. Is anyone out there?" numLikes={10} userName="JSNewbie" />
      <SocialPost
        content="I'm a social media master and everything I post is gold."
        numLikes={1}
        numThumbsUp={2}
        numSparkles={11}
        userName="ReactStar21"
      />
    </main>
  );
}

export default App;
