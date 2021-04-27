import ErrorMessage from "../common/error-message";
import useUser from "../data/hooks/use-user";

function HomePage() {
  const userState = useUser();

  let contents;
  if (userState.isSignedIn) {
    contents = (
      <>
        <p>TODO: put the user's quizzes on this page.</p>
        <button onClick={userState.signOut} disabled={userState.isLoading}>
          {userState.isLoading ? "Signing Out..." : "Sign Out"}
        </button>
      </>
    );
  } else {
    contents = (
      <>
        <p>
          This app lets you create, share, and play quizzes on any topic. Sign in with your Google
          account below to get started.
        </p>
        <button onClick={userState.signIn} disabled={userState.isLoading}>
          {userState.isLoading ? "Signing In..." : "Sign In"}
        </button>
      </>
    );
  }

  return (
    <main>
      <h1>Welcome to Quizzer</h1>
      {userState.error && (
        <ErrorMessage>Something went wrong logging you in. Please try again.</ErrorMessage>
      )}
      {contents}
    </main>
  );
}

export default HomePage;
