import React, { Component } from 'react';
import Joi from 'joi-browser';
import "./register.css";
import logo from "../../assets/images/logo.png";
class Register extends Component {
    state = {
        account: {
            name: '',
            email: '',
            password: ''
        },
        errors: ''
    }

    render() {
        let { account } = this.state;
        return (
            <React.Fragment>
                <div className="text-center">
                    <form className="form-signin">
                        <img className="mb-4" src={logo} alt="" width="72" height="72" />
                        <h2 className="h3 mb-3 font-weight-normal">www.cricket.com</h2><br />
                        <h1 className="h3 mb-3 font-weight-normal">Please Sign up.</h1>


                        <input type="text" value={account.name} name="name" className="form-control" placeholder="Name" required autoFocus />

                        <input type="text" value={account.email} name="email" className="form-control" placeholder="Email address" required />

                        <input type="password" value={account.password} className="form-control" placeholder="Password" required />

                        <button className="btn btn-lg btn-primary btn-block" type="submit">SignUp</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Register;