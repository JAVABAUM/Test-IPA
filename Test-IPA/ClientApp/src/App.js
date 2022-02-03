import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { PennyPusher } from './components/PennyPusher';
import { PrivateRoute } from '../src/PrivateRoute';

import './custom.css'
import { Slotmachine } from './components/Slotmachine';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/slotmachine' component={Slotmachine} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/pennypusher' component={PennyPusher} />
      </Layout>
    );
  }
}
