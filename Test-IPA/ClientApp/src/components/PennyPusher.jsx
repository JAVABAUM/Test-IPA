import React, { Component } from 'react';
import { addCoinsToAccount, getCoins, getStats, updateStats } from '../Coins.js'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import '../custom.css'

export class PennyPusher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stats: {},
            board: [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            ],
            coinsToWin: 0,
        }
    }
    setupBoard() {
        var tempBoard = this.state.board.map((x) => x);
        for (var x = 0; x < 13; x++) {
            for (var y = 0; y < 6; y++) {
                tempBoard[y][x] = Math.floor(Math.random() * 6)
                this.setState({
                    board: tempBoard
                });
            }
        }
    }
    updateBoard() {
        document.getElementById("table-ankor").innerHTML = "";
        for (var y = 0; y < 6; y++) {
            document.getElementById("table-ankor").innerHTML += (`<tr>
                            <td>${this.state.board[y][0]}</td>
                            <td>${this.state.board[y][1]}</td>
                            <td>${this.state.board[y][2]}</td>
                            <td>${this.state.board[y][3]}</td>
                            <td>${this.state.board[y][4]}</td>
                            <td>${this.state.board[y][5]}</td>
                            <td>${this.state.board[y][6]}</td>
                            <td>${this.state.board[y][7]}</td>
                            <td>${this.state.board[y][8]}</td>
                            <td>${this.state.board[y][9]}</td>
                            <td>${this.state.board[y][10]}</td>
                            <td>${this.state.board[y][11]}</td>
                            <td>${this.state.board[y][12]}</td>
                        </tr>`);
        }
    }




    push() {
        var tempBoard = this.state.board.map((x) => x);
        var coinsToWin = 0;
        for (var x = 0; x < 13; x++) {
            // coinsToWin += tempBoard[5][x] >= 0 && tempBoard[5][x] <= 13 ? tempBoard[5][x] : 0;
        }

        for (var y = 5; y >= 0; y--) {
            tempBoard[y] = tempBoard[y - 1];
        }
        tempBoard[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        this.setState({ board: tempBoard, coinsToWin: this.state.coinsToWin += coinsToWin });
    }

    componentDidMount() {
        this.setupBoard();
        this.updateBoard();
        var stats = getStats(getAuth().currentUser.uid).then((value) => {
            this.setState({ stats: value })
        })

    }

    render() {
        return (
            <div>
                <br></br>
                <h4>Penny Pusher lol</h4>
                <h5>Kontostand: {this.state.stats.coins}  |  Coins won: {this.state.coinsToWin}</h5><br /><br />
                <div className="row coinrow">
                    <div className="col-4">
                        <button onClick={this.push.bind(this)}>insert coin</button>
                    </div>
                    <div className="col-4">
                        <button onClick={this.push.bind(this)}>insert coin</button>
                    </div>
                    <div className="col-4">
                        <button onClick={this.push.bind(this)}>insert coin</button>
                    </div>
                </div>
                <br /><br />
                <table className="table">
                    <tbody id="table-ankor">
                    </tbody>
                </table>
            </div>
        );
    }
}