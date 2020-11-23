import React, { Component } from "react";
import { HashRouter, Link, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SearchPage from './Pages/Search.js'
import "./App.css";
import Navigation from './Components/Nav/'
import Container from 'react-bootstrap/Container'
import SearchBar from './Components/SearchBar'
import SavedPage from './Pages/Saved.js'


class App extends Component {
  render() {
    return (
      <div>
       <HashRouter basename='/'>

<Navigation />
<SearchBar />


<div className="mb-5">

  <Switch>
  
  <Route exact path="/" component={SearchPage} />
  <Route exact path="/Saved" component={SavedPage} />
 
  </Switch>

</div>
</HashRouter>
        
      </div>
    );
  }
}

export default App;
