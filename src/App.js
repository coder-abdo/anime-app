import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/homePage/home";
import { AnimePage } from "./pages/animePage/animePage";
import * as css from "./app.module.css";
function App() {
  return (
    <div className={css.container}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={AnimePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
