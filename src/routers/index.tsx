import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';

// import SignIn from '../pages/Signin';
import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';

import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

import DashboardUser from '../pages/DashboardUser';
import DashboardAppointment from '../pages/DashboardAppointment';
import CreateAppointment from '../pages/CreateAppointment';

// <Route path="/" exact component={Home} />
const Routes: React.FC = () => (
  <Switch>
    {/* <Route path="/" exact component={SignIn} /> */}
    <Route path="/" exact component={Home} />

    <Route path="/signin" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />

    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />

    <Route path="/dashboard-user" component={DashboardUser} isPrivate />
    <Route
      path="/dashboard-appointments"
      component={DashboardAppointment}
      isPrivate
    />
    <Route path="/create-appointment" component={CreateAppointment} isPrivate />
  </Switch>
);

export default Routes;
