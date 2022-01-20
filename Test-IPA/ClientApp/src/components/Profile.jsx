import React, { Component } from 'react';
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

    render() {
        if(!getAuth().currentUser) return <Redirect to="/login"/>
        return (
            <>
                <button>logout</button>
                </>
        );
    }
}
