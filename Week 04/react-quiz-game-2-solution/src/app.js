import ChatMessage from "./demos/props/chat-message";
import SpeakButton from "./demos/props/speak-button";
import WelcomeMessage from "./demos/props/welcome-message";
import CustomIncrement from "./demos/state/custom-increment";
import ClickButton from "./demos/state/click-button";
import SpeakForm from "./demos/state/speak-form";

// Components should be named as PascalCase.
// A (functional) component is just a JS function that returns JSX.
function App() {
  return (
    <main>
      <h1>My First React App</h1>

      <h2>Custom Increment</h2>
      <CustomIncrement />

      <h2>Speak Form</h2>
      <SpeakForm />

      <h2>Stateful Buttons</h2>
      <ClickButton />

      <h2>Welcome</h2>
      {/* name and greeting become properties on an object passed in to WelcomeMessage */}
      <WelcomeMessage name="Mike" greeting="Hello" />
      <WelcomeMessage name="Callie" greeting="Howdy" />
      <WelcomeMessage name="Class" greeting="Welcome" />

      <h2>Buttons</h2>
      {/* Values for properties can be any JS expression. */}
      <SpeakButton message="Hello there!" />
      <SpeakButton message="Speedy speed speed!" rate={3} pitch={2} />

      <h2>Chat</h2>
      <ChatMessage message="Yo, how's React?" userName="PokeMike" date="02/01/21" />
      <ChatMessage message="I think its going well..." userName="CallieCats2000" date="02/02/21" />
      <ChatMessage message="Props to you." userName="PokeMike" date="02/03/21" />
      <ChatMessage message="Ha. ha. You are not funny." userName="CallieCats2000" date="02/04/21" />
    </main>
  );
}

export default App;
