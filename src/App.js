import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './categories/Home';
import Food from './categories/Food';
import './App.css';


function App() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/food" component={Food} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;