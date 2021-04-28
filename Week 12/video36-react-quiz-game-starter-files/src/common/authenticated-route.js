// Fix: accidentally imported from wrong module during video 34.
import { Link, Route } from "react-router-dom";

function NotLoggedInContent() {
  return (
    <main>
      <h1>Not Logged In</h1>
      <p>
        You need to log in with your account (or create a new account) in order to access this page.
        Head to the <Link to="/">home page</Link>.
      </p>
    </main>
  );
}

function AuthenticatedRoute({ children, isSignedIn, ...routeProps }) {
  return <Route {...routeProps}>{isSignedIn ? children : <NotLoggedInContent />}</Route>;
}

export default AuthenticatedRoute;
