import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./home/home-page";
import QuizPage from "./quiz/quiz-page";
import DemosPage from "./demos/demos-page";
import AboutPage from "./about/about-page";
import PageHeader from "./common/page-header";
import PageFooter from "./common/page-footer";
import VizPage from "./viz/viz-page";
import useUser from "./data/hooks/use-user";
import LoadingSpinner from "./common/loading-spinner";

/**
 * The App component is responsible for setting up routing.
 */
function App() {
  const userState = useUser();

  return (
    <BrowserRouter>
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
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/demos">
            <DemosPage />
          </Route>
          <Route path="/viz">
            <VizPage />
          </Route>
        </Switch>
      )}

      <PageFooter />
    </BrowserRouter>
  );
}

export default App;
