import React, { Component } from 'react';
import "./login.css";
import logo from "../../assets/images/logo.png";
class Login extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="text-center">
                    <form className="form-signin">
                        <img className="mb-4" src={logo} alt="" width="72" height="72" />
                        <h2 className="h3 mb-3 font-weight-normal">www.cricket.com</h2><br />
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        <div className="checkbox mb-3">

                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;