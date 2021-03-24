import ConfettiDemo from "./dependencies/confetti-demo";
import MusicalButton from "./dependencies/musical-button";
import SpeakForm from "./state/speak-form";
import ClickButton from "./state/click-button";
import WelcomeMessage from "./props/welcome-message";
import SpeakButton from "./props/speak-button";
import ChatMessage from "./props/chat-message";
import Todos from "./arrays/todos";
import FramerMotionDemos from "./animation/framer-motion-demos";
import RandomDogs from "./fetch/random-dogs";

function DemosPage() {
  return (
    <main>
      <h1>My First React App</h1>

      <RandomDogs />

      <h2>Animation Demos</h2>
      <FramerMotionDemos />

      <h2>Rendering Arrays</h2>
      <Todos />

      <h2>Confetti Demo</h2>
      <ConfettiDemo />

      <h2>Tone.js Music</h2>
      <MusicalButton>Play Some Beats 🎧</MusicalButton>

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

export default DemosPage;
