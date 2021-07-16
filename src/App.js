import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import LoggerPage from "./pages/LoggerPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/auth" component={LoggerPage} exact />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
