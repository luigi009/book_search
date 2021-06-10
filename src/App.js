import "./App.css";
import BookTypesContainer from "./components/BookTypes/BookContainer";
import Books from './components/Books/BookContainer'
import {
  HashRouter as Router,
  Route,
  BrowserRouter,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Router>
            <>
              <Route exact path="/" component={BookTypesContainer} />
              <Route exact path="/booktypes/:id" component={Books} />
            </>
          </Router>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
