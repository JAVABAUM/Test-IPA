import { getAuth,  createUserWithEmailAndPassword } from 'firebase/auth';
import '../Auth';
import React, { Component } from 'react';
import { getFirestore, collection, addDoc, setDoc, doc } from "firebase/firestore";

import '../custom.css'

function Signup() {
    return (
        <div className="col-6">
            <h2>SIGNUP</h2>
            <form id="signupForm" onSubmit={(e) => signup(e)}>
                <div className="mb-3">
                    <label htmlFor="signup-mail" className="form-label">
                        Email
                </label>
                    <input
                        type="email"
                        className="form-control"
                        id="signup-mail"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="signup-password" className="form-label">
                        Password
                </label>
                    <input
                        type="password"
                        className="form-control"
                        id="signup-password"
                    />
                </div>
                <button type="submit" className="button">
                    Submit
              </button>

            </form>
            <label id="errorSignUp">
            </label>
        </div>
    );
}

export default Signup;

function signup(e) {
    e.preventDefault();
    const auth = getAuth();
    var mail = document.getElementById("signup-mail").value;
    var password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, mail, password).then((cred) => {
        const db = getFirestore();        

        setDoc(doc(db, "users", cred.user.uid), {
            coins: 50,
            coinsLost: 0,
            coinsWon: 0,
            gamesLost: 0,
            gamesWon: 0,
            mail: mail
        });

        window.location.replace("/");
    }).catch((err) => {
        console.log(err);
        document.getElementById('errorSignUp').innerHTML = 'Please fill in all the fields';
    })
}