import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SearchPage from './Pages/Search.js'
import "./App.css";
import Navigation from './Components/Nav/'

import SavedPage from './Pages/Saved.js'


class App extends Component {
  render() {
    return (
      <div>
        <Router basename='/'>

          <Navigation />



          <div className="mb-5">

            <Switch>

              <Route exact path="/" component={SearchPage} />
              <Route exact path="/Saved" component={SavedPage} />

            </Switch>

          </div>
        </Router>

      </div>
    );
  }
}

export default App;
