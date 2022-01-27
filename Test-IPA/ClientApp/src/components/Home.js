import React, { Component } from 'react';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';
import '../custom.css'

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
            <h1>Welcome to the Javabaum Casino!</h1>

            <div className="row">

                <div className="col-5" />

                <div className="col-2" >
                    <Link to="/slotmachine">
                    <button className="button">Slotmachine</button>
                        </Link>
                </div>
                <div className="col-2" >
                    <Link to="/bingo">
                        <button className="button" >Bingo</button>
                    </Link>
                </div>
                <div className="col-5" />

            </div>
      </div>
    );
  }
}
