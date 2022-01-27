import React, { Component } from 'react';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
            <h1>Welcome to the JAVABAUM Casino!</h1> <br></br>
            <h2>Game selection:</h2>

            <div className="row">

                <div className="col-5" />

                <div className="col-2" >
                    <Link to="/slotmachine">
                    <button>Slotmachine</button>
                        </Link>
                </div>
                <div className="col-2" >
                    <Link to="/bingo">
                    <button>Bingo</button>
                    </Link>
                </div>
                <div className="col-5" />

            </div>
      </div>
    );
  }
}
