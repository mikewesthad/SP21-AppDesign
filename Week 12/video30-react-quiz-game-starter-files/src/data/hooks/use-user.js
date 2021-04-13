import { useEffect, useState } from "react";
import { auth, provider } from "../firebase";

function useUser() {
  const [userState, setUserState] = useState({
    user: auth.currentUser,
    isLoading: auth.currentUser === null ? true : false,
    error: null,
  });
  const { user, isLoading, error } = userState;
  const isSignedIn = user !== null;
  const userId = isSignedIn ? user.uid : undefined;

  useEffect(() => {
    // onChange is called when firebase loads up the user from persistent storage or
    // when the auth changes.
    const onChange = (currentUser) => {
      setUserState({ user: currentUser, isLoading: false, error: null });
    };
    // onError is called ONLY when onAuthStateChanged encounters an error - not when
    // signIn or signOut error.
    const onError = (error) => {
      console.error(error);
      setUserState({ user: null, isLoading: false, error });
    };
    const unsubscribe = auth.onAuthStateChanged(onChange, onError);
    // Return a function from your effect to register some function to run
    // when the effect is cleaned up.
    return unsubscribe;
  }, []);

  const signIn = async () => {
    setUserState({ user: null, isLoading: true, error: null });
    try {
      const credentials = await auth.signInWithPopup(provider);
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
