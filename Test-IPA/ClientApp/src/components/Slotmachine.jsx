import React, { Component } from 'react';
import { addCoinsToAccount, getCoins, getStats, updateStats } from '../Coins.js'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import '../custom.css'

export default class Slotmachine extends Component {

    constructor() {
        super();
        this.state = {
            slots: [0, 0, 0],
            stats: {},
            won: 0,
        };


    };

    refreshStatistics() {
        if (getAuth().currentUser) {
            var stats = getStats(getAuth().currentUser.uid).then((value) => {
                this.setState({ stats: value })
            })
        }

    }

    componentDidMount() {
        this.refreshStatistics();
    }

    turnSlots() {
        let slots = [0, 0, 0];
        for (var i = 0; i < 3; i++) {
            var random = Math.floor(Math.random() * 10);
            slots[i] = random;
        }

        this.setState({ slots: slots });
        this.checkPrize();
    }

    checkPrize() {
        var equal = this.state.slots[0] == this.state.slots[1] && this.state.slots[2] == this.state.slots[0] && this.state.slots[1] == this.state.slots[2] ? 3 : 0;
        equal = this.state.slots[0] == this.state.slots[1] || this.state.slots[1] == this.state.slots[2] || this.state.slots[0] == this.state.slots[2] ? 2 : 0;

        if (equal >= 3) {
            addCoinsToAccount(50, getAuth().currentUser.uid);
            this.setState({ won: this.state.won + 50 });
        } else if (equal == 2) {
            addCoinsToAccount(20, getAuth().currentUser.uid);
            this.setState({ won: this.state.won + 20 });
        }
        this.refreshStatistics();
    }


    render() {
        return (
            <main>
                <h3>Slotmachine</h3>

                <h5>Kontostand: {this.state.stats.coins}  |  Coins won: {this.state.won}</h5><br /><br />
                <div className="hstack gap-3">
                    <p>{this.state.slots[0]}</p>
                    <p>{this.state.slots[1]}</p>
                    <p>{this.state.slots[2]}</p>
                </div>

                <button onClick={this.turnSlots.bind(this)}>turn</button>

            </main>
        );
    }
}