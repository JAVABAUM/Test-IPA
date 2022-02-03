import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './NavMenu.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addCoinsToAccount, getCoins, getStats } from '../Coins';

export default class Profile extends Component {
    static displayName = Profile.name;

    constructor(props) {
        super(props);
        this.state = {
            auth: getAuth(),
            coins: 0,
            stats: {}
        }

        this.addcoins = this.addcoins.bind(this);
    }


    componentDidMount() {
        var coinsFromDB = getCoins(getAuth().currentUser.uid);
        coinsFromDB.then((number) => {
            this.setState({ coins: number });
        });

        var stats = getStats(getAuth().currentUser.uid).then((value) => {
            console.log(value.coinsWon);
            this.setState({stats: value});
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
        if (!getAuth().currentUser) return <Redirect to="/login" />
        return (
            <>
                <h3>Welcome, {getAuth().currentUser.email}</h3>
                <br />
                <h4>Your statistics:</h4>
                <h5>coins: {(this.state.coins)}</h5>
                {this.state.stats.coinsWon != null ?
                    <h5>coins won: {(this.state.stats.coinsWon)}</h5>
                    : <h5>can't fetch coinsWon</h5>
                }
                {this.state.stats.coinsLost != null ?
                    <h5>coins lost: {(this.state.stats.coinsLost)}</h5>
                    : <h5>can't fetch coinsLost</h5>
                }
                {this.state.stats.gamesWon != null ?
                    <h5>games won: {(this.state.stats.gamesWon)}</h5>
                    : <h5>can't fetch gamesWon</h5>
                }
                {this.state.stats.gamesLost != null ?
                    <h5>games lost: {(this.state.stats.gamesLost)}</h5>
                    : <h5>can't fetch gamesLost</h5>
                }

                <br />
                <button onClick={this.signout}>logout</button>
                <br />
                <button onClick={this.addcoins}>Add 10 coins to your account</button>
            </>
        );
    }
}
