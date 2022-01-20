import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import '../Auth';
import { BrowserRouter as Redirect } from "react-router-dom";
import React, { Component } from 'react';


function Login() {
    return (
        <>
            <div className="login-container">
                <div className="login-row row">
                    <div className="col-6">
                        <h2>LOGIN</h2>
                        <form className="loginForm" onSubmit={(e) => login(e)}>
                            <div className="mb-3">
                                <label htmlFor="login-mail" className="form-label">
                                    Email
                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="login-mail"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="login-password" className="form-label">
                                    Password
                </label>
                                <input type="password" className="form-control" id="login-password" />
                            </div>
                            <button type="submit" className="login-button" >
                                Submit
              </button>
                        </form>
                        <label id="errorLogIn">

                        </label>
                    </div>                   
                </div>
            </div>

        </>
    );
}

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
                <div className="mb-3">
                    <label htmlFor="signup-name" className="form-label">
                        Name
                </label>
                    <input type="text" className="form-control" id="signup-name" />
                </div>
                <button type="submit" className="login-button">
                    Submit
              </button>

            </form>
            <label id="errorSignUp">
            </label>
        </div>
    );
}

export default Login;

function login(e) {
    e.preventDefault();
    const auth = getAuth();
    var mail = document.getElementById("login-mail").value;
    var password = document.getElementById("login-password").value;
    var error = document.getElementsByClassName("error").value;

    signInWithEmailAndPassword(auth, mail, password).then((cred) => {
        // window.location.replace("/");
        console.log(auth.currentUser);
    }).catch((err) => {
        console.log(err);
        document.getElementById('error').innerHTML = 'Your Email or Password is incorrect';
    })
}

function signup(e) {
    e.preventDefault();
    const auth = getAuth();
    var mail = document.getElementById("signup-mail").value;
    var password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, mail, password).then((cred) => {
        window.location.replace("shop");
    }).catch((err) => {
        console.log(err);
        document.getElementById('errorSignUp').innerHTML = 'Please fill in all the fields';
    })
}