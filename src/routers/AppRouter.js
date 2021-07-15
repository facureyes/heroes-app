import React, { useContext } from 'react'
import Proptypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import LoginScreen from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  const {user: {logged}} = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={ LoginScreen } />
        <PrivateRoute isAuthenticated={logged} path="/" component={ DashboardRoutes } />
      </Switch>
    </Router>
  )
}

PrivateRoute.propTypes = {
  isAuthenticated: Proptypes.bool.isRequired,
  component: Proptypes.func.isRequired,
}

export default AppRouter
