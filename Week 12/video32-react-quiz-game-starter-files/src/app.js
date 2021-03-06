import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./home/home-page";
import QuizPage from "./quiz/quiz-page";
import DemosPage from "./demos/demos-page";
import PageHeader from "./common/page-header";
import PageFooter from "./common/page-footer";
import useUser, { UserProvider } from "./data/hooks/use-user";
import LoadingSpinner from "./common/loading-spinner";
import NotFoundPage from "./not-found/not-found-page";

function ProviderWrappedApp() {
  return (
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  );
}

/**
 * The App component is responsible for setting up routing.
 */
function App() {
  const userState = useUser();

  return (
    <>
      <PageHeader />

      {userState.isLoading ? (
        <LoadingSpinner />
      ) : (
        <Switch>
          {/* Route allows you to conditionally render children based on router's path. */}
          <Route path="/" exact>
            {/* Put whatever you want to render for this Route here. */}
            <HomePage />
          </Route>
          <Route path="/quiz">
            <QuizPage />
          </Route>
          <Route path="/demos">
            <DemosPage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      )}

      <PageFooter />
    </>
  );
}

export default ProviderWrappedApp;
