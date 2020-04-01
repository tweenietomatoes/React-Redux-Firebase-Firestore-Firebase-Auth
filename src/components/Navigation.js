import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Main from "./Main";
import Posts from "./Posts";

function Navigation() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navigation;
