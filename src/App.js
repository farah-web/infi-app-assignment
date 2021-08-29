
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Addition from "./components/Addition";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>
        <Route path='/add' component={Addition}></Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
