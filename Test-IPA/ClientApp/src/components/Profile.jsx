import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './NavMenu.css';
import '../custom.css'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addCoinsToAccount, getCoins, getStats } from '../Coins';

export default class Profile extends Component {
    static displayName = Profile.name;

    constructor(props) {
        super(props);
        this.state = {
            auth: getAuth(),
            coins: 0
        }

        this.addcoins = this.addcoins.bind(this);
    }


    componentDidMount() {
        var coinsFromDB = getCoins(getAuth().currentUser.uid);
        coinsFromDB.then((number) => {
            this.setState({ coins: number });
        });

        var stats = getStats(getAuth().currentUser.uid).then((value) => {
            console.log(value);
        })

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


    addcoins() {
        this.setState({ coins: this.state.coins + 10 });
        addCoinsToAccount(10, getAuth().currentUser.uid);
}

    componentWillUnmount() { };

    render() {
        if(!getAuth().currentUser) return <Redirect to="/login"/>
        return (
            <>
                <h3>Welcome, {getAuth().currentUser.email}</h3>
                <br />
                <p>coins: {(this.state.coins)}</p>
                <br/>
                <div className="row">
                <button onClick={this.signout} className="button-red">logout</button>
                    <button onClick={this.addcoins} className="button-confirm">Add 10 coins to your account</button>
                    </div>
            </>
        );
    }
}
