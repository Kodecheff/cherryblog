import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './categories/home/Home';
import Food from './categories/food/Food';
import Fitness from './categories/fitness/Fitness';
import General_health from './categories/general health/General_health'
import Lifestyle from './categories/lifestyle/Lifestyle'
import Admin from './categories/admin/Sign in/Admin'
import Dashboard  from './categories/admin/Dashboard/Dashboard'
import Allnews from './categories/admin/Dashboard/Allnews'
import FitnessNews from './categories/admin/Dashboard/FitnessNews'
import LifestyleNews from './categories/admin/Dashboard/LifestyleNews';
import FoodNews from './categories/admin/Dashboard/FoodNews'
import GeneralhealthNews from './categories/admin/Dashboard/GeneralhealthNews'
import './App.css'


function App() {
  return(
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/general_health" component={General_health} />
        <Route exact path="/food" component={Food} />
        <Route exact path="/fitness" component={Fitness} />
        <Route exact path="/lifestyle" component={Lifestyle } />
        <Route exact path="/admin/signin" component={Admin} />
        <Route exact path="/admin/dashboard" component={Dashboard} />
        <Route exact path="/admin/dashboard/news" component={Allnews} />
        <Route exact path="/admin/dashboard/fitness" component={FitnessNews} />
        <Route exact path="/admin/dashboard/lifestyle" component={LifestyleNews} />
        <Route exact path="/admin/dashboard/food" component={FoodNews} />
        <Route exact path="/admin/dashboard/general health" component={GeneralhealthNews} />
      </Switch>
    </HashRouter>
  )
}

export default App;