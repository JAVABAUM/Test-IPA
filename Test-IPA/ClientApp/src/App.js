import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { PrivateRoute } from '../src/PrivateRoute';

import './custom.css'
import { Slotmachine } from './components/Slotmachine';
import Login from './components/Login';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/slotmachine' component={Slotmachine} />
            <Route exact path='/login' component={Login} />
      </Layout>
    );
  }
}
