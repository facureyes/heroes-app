import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DcScreen from '../components/dc/DcScreen';
import LoginScreen from '../components/login/LoginScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import { Navbar } from '../components/ui/NavBar';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={ LoginScreen } />
        <Route exact path="/marvel" component={ MarvelScreen } />
        <Route exact path="/dc" component={ DcScreen } />
        <Route exact path="/" component={ DcScreen } />
      </Switch>
    </Router>
  )
}

export default AppRouter
