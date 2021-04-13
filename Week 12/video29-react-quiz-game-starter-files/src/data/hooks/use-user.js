import { useState } from "react";
import { auth, provider } from "../firebase";

function useUser() {
  const [userState, setUserState] = useState({
    user: null,
    isLoading: false,
    error: null,
  });
  const { user, isLoading, error } = userState;
  const isSignedIn = user !== null;
  const userId = isSignedIn ? user.uid : undefined;

  const signIn = async () => {
    setUserState({ user: null, isLoading: true, error: null });
    try {
      const credentials = await auth.signInWithPopup(provider);
      console.log("Signed in!");
      console.log(credentials);
      const { displayName, uid } = credentials.user;
      console.log(`Welcome back ${displayName} (${uid})!`);
      setUserState({ user: credentials.user, isLoading: false, error: null });
    } catch (error) {
      console.error(error);
      setUserState({ user: null, isLoading: false, error });
    }
  };

  const signOut = async () => {
    setUserState({ user: userState.user, isLoading: true, error: null });
    try {
      await auth.signOut();
      console.log("Signed out!");
      setUserState({ user: null, isLoading: false, error: null });
    } catch (error) {
      console.error(error);
      setUserState({ user: userState.user, isLoading: false, error });
    }
  };

  // Because we have a lot of data here, return an object from the hook instead of an
  // array. Remember - it's up to you define the API of your custom hooks!
  return {
    user,
    userId,
    isLoading,
    isSignedIn,
    error,
    signIn,
    signOut,
  };
}

export default useUser;
