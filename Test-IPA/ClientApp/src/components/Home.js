import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import '../custom.css'

export class Home extends Component {
  static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state={
            user: getAuth().currentUser
        };

        onAuthStateChanged(getAuth(), (_user) => {
            this.setState({ user: _user })
        });
    }

    render() {
        const Stuff = () => {
            if (this.state.user!=null) {
                return (
                    <>
                        <div className="row">

                            <div className="col-3" />

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
                            <div className="col-2" >
                                <Link to="/pennypusher">
                                    <button className="button" >Penny Pusher</button>
                                </Link>
                            </div>
                            <div className="col-3" />
                        </div>
                    </>
                );
            } else {
                return (
                    <>
                        <div className="row">

                            <div className="col-5" />

                            <div className="col-2" >
                                <Link to="/login">
                                    <button className="button">Login</button>
                                </Link>
                            </div>
                            <p> or </p>
                            <div className="col-2" >
                                <Link to="/signup">
                                    <button className="button" >Create account</button>
                                </Link>
                            </div>
                            <div className="col-5" />

                        </div>
                    </>);
            }
        }

    return (
      <div>
            <h1>Welcome to the JAVABAUM Casino!</h1> <br></br>
            <h2>Game selection:</h2>

            <Stuff/>

      </div>
    );
  }
}
