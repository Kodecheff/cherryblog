import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './categories/home/Home';
import Food from './categories/food/Food';
import Fitness from './categories/fitness/Fitness';
import General_health from './categories/general health/General_health'
import Lifestyle from './categories/lifestyle/Lifestyle'
import './App.css';


function App() {
  return(
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/general_health" component={General_health} />
        <Route exact path="/food" component={Food} />
        <Route exact path="/fitness" component={Fitness} />
        <Route exact path="/lifestyle" component={Lifestyle } />
      </Switch>
    </HashRouter>
  )
}

export default App;