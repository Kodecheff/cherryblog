import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './categories/Home';
import Food from './categories/Food';
import './App.css';


function App() {
  return(
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/food" component={Food} />
      </Switch>
    </HashRouter>
  )
}

export default App;