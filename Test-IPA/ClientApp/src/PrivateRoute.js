import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import firebase from './Auth';

export function PrivateRoute({ component: Component, ...rest }) {
    const user = firebase.currentUser;

    return (
        <Route
            {...rest}
            render={(props) => {
                return user ? <Component {...props} /> : <Redirect to="/login" />
            }}
        ></Route>
    )
}