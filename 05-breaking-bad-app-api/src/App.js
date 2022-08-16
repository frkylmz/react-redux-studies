import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/char/:char_id" component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
