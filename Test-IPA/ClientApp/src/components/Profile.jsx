﻿import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './NavMenu.css';
import firebase from '../Auth'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default class Profile extends Component {
    static displayName = Profile.name;

    constructor(props) {
        super(props);
        this.state = {
            auth: getAuth()
        }
    }


    componentDidMount() {
        onAuthStateChanged(getAuth(), (_user) => {
            this.setState({ user: _user })
        });
    }

    signout() {
        const auth = getAuth();
        auth.signOut().then(function () {
            console.log("logged out");
        });
    }

    componentWillUnmount() { };

    render() {
        if(!getAuth().currentUser) return <Redirect to="/login"/>
        return (
            <>
                <h3>Welcome, {getAuth().currentUser.email}</h3> <br></br>
                <h4>Your statistics:</h4>
                <h5>Coins: </h5>
                <h5>Games won: </h5>
                <h5>Games lost: </h5>
                <button onClick={this.signout}>logout</button>
                </>
        );
    }
}
